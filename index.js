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


const DBL = require("dblapi.js");
const BOATS = require('boats.js');
//const GBL = require('gblapi.js');

const botGuildCount = bot.guilds.cache.size;


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

const dbl = new DBL(config.dbl_token, bot);

dbl.postStats(botGuildCount).catch(e => console.log(e));


const Boats = new BOATS(config.boatsToken);

Boats.postStats(botGuildCount, "632291800585076761")
    .catch((err) => console.log(err));

/*const Glenn = new GBL(bot.user.id, config.glenToken, false, false);

Glenn.updateStats(botGuildCount).catch(e => console.log(e));

const updateBotList = async () => {

const { body: reply } = await snekfetch.post(`https://discordbotlist.com/api/bots/632291800585076761/stats`)
.set("Authorization", `Bot ${config.dblToken_2}`)
.send({
    guilds: botGuildCount,
    users: bot.users.size,
})

return (reply);
}

let botUPDATE = await updateBotList();
*/

bot.login(config.token);

