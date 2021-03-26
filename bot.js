const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const schedule = require('node-schedule');
const { rewards, giveaway, resetMatches } = require("./src/minor-commands.js");

const Cooldown = require("./models/cooldown.js");
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

bot.setMaxListeners(25);

["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));

schedule.scheduleJob("1 12 * * 1", async function () {
    const checkForWeeklyExecution = await Cooldown.findOne({ userID: bot.user.id, command: "weeklyrewards" });

    if (checkForWeeklyExecution) return;
    const weeklySpamStopper = new Cooldown({
        command: "weeklyrewards",
        userID: bot.user.id,
        timeRemaining: Date.now() + 300000,
        dateNow: Date.now()
    });

    await weeklySpamStopper.save().catch(err => console.log(err));
    rewards(bot);
});

schedule.scheduleJob("0 9 * * *", async function () {
    const checkForExecution = await Cooldown.findOne({ userID: bot.user.id, command: "giveaway" });

    if (checkForExecution) return;
    await giveaway(bot);
    await resetMatches();

});

bot.login(process.env.token);

