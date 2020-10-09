//_______________Modules_____________
const Discord = require('discord.js');
const bot = new Discord.Client({
    disableMentions: 'everyone',
    messageCacheMaxSize: 1,
    fetchAllMembers: false
});
const got = require("got");
const snekfetch = require('snekfetch');
const DBL = require("dblapi.js");
const BOATS = require('boats.js');
//const GBL = require('gblapi.js');
const schedule = require('node-schedule');
const { rewards } = require("./functions.js");

const config = require("./config.json");

const mongoose = require("mongoose");

mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbl = new DBL(config.dbl_token, bot);

dbl.postStats(botGuildCount).catch(e => console.log(e));


const Boats = new BOATS(config.boatsToken);

Boats.postStats(botGuildCount, "632291800585076761")
    .catch((err) => {
        console.log(err);
    });

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

bot.setMaxListeners(0);

["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));


bot.login(config.token);

