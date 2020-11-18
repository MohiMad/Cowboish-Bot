//_______________Modules_____________
const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 25
});

const schedule = require('node-schedule');
const { rewards } = require("./functions.js");

const config = require("./config.json");
const Cooldown = require("./models/cooldown.js");
const mongoose = require("mongoose");

mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

bot.setMaxListeners(15);

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
    await bot.commands.get('giveaway').execute(bot);

});

bot.login(config.token);

