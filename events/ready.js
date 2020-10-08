const got = require("got");
const config = require("../config.json");
const snekfetch = require('snekfetch');
const DBL = require("dblapi.js");
const BOATS = require('boats.js');
const schedule = require('node-schedule');
const { rewards } = require("../functions.js");
//const GBL = require('gblapi.js');

const Mutes = require("../models/mutes");
const Cooldown = require("../models/cooldown.js");

module.exports = async (bot) => {

    const botGuildCount = bot.guilds.cache.size;

    console.log(`Logged in as ${bot.user.tag}!\n___________________________________________\n🤠\n___________________________________________`);

    const activities_list = [
        `and yoinking around >:v`,
        //`Under maintenance... please stand by ;)`
        `>invite | >help`,
        `Identity V in ${botGuildCount} servers 💕`,
        "Welcome to Identit | >invite",
        `milestone ${botGuildCount}/2000`,
        `${botGuildCount} guilds | ${bot.users.cache.size} users`,
        `Never forget Bonbon's (铁皮人) skin`,
        `R.I.P Cowboy's One Tap Lassos 😔`,
        `Yeehaw! >:D`
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 300000);

    schedule.scheduleJob("1 12 * * 1", async function () {
        const checkForWeeklyExecution = await Cooldown.findOne({ userID: bot.user.id, command: "weeklyrewards" });

        if (checkForWeeklyExecution) return;
        const weeklySpamStopper = new Cooldown({
            command: "weeklyrewards",
            userID: bot.user.id,
            timeRemaining: Date.now() + 300000,
            dateNow: Date.now()
        });

        const dbl = new DBL(config.dbl_token, bot);

        dbl.postStats(botGuildCount).catch(e => console.log(e));


        const Boats = new BOATS(config.boatsToken);

        Boats.postStats(botGuildCount, "632291800585076761")
            .catch((err) => {
                console.log(err);
            });

        await weeklySpamStopper.save().catch(err => console.log(err));
        rewards(bot);
    });

    schedule.scheduleJob("0 9 * * *", async function () {
        const checkForExecution = await Cooldown.findOne({ userID: bot.user.id, command: "giveaway" });

        if (checkForExecution) return;
        await bot.commands.get('giveaway').execute(bot);

    });

    setInterval(async () => {

        let cooldownCheck = await Cooldown.find({});

        for (const cooldown of cooldownCheck) {

            const timeLeft = new Date(cooldown.timeRemaining);

            let check = timeLeft - Date.now() >= timeLeft || timeLeft - Date.now() <= 0;

            if (check) {
                if (!cooldownCheck) return;

                await cooldown.delete({}, err => {
                    if (err) console.log(err);
                });
            }

        }

        const mutes = await Mutes.find({});

        for (const mute of mutes) {
            if (mute.created + mute.muteTime <= Date.now()) {
                const guild = bot.guilds.cache.get(mute.guildID);
                if (!guild) return;
                const member = guild.members.cache.get(mute.userID);
                if (!member) return;
                let muteRole = guild.roles.cache.find((x) => x.name === "muted");
                if (!muteRole) muteRole = guild.roles.create({ name: "muted", color: "#27272b", permissions: [], reason: "Couldn't find a muted role!" });
                if (!member.roles.has(muteRole.id)) return;
                member.roles.remove(muteRole);
                const logChannel = guild.channels.cache.get(mute.channelID);
                if (!logChannel) return;
                logChannel.send(`Unmuted ${member.user}!`);
                await Mutes.deleteOne({ userID: member.user.id, guildID: guild.id }, err => {
                    if (err) console.log(err);
                });
            }
        }
    }, 3000);

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

};