
const Mutes = require("../models/mutes");
const Cooldown = require("../models/cooldown.js");

const DBL = require("dblapi.js");
const BOATS = require('boats.js');
//const GBL = require('gblapi.js');
const { getUsersCount, getServerCount } = require("../src/functions.js");
const schedule = require('node-schedule');
const { rewards, giveaway, resetMatches } = require("../src/minor-commands.js");

module.exports = async (bot) => {

    const botGuildCount = await getServerCount(bot);
    const userCount = await getUsersCount(bot);

    console.log(`Logged in as ${bot.user.tag}!\n___________________________________________\n🤠\n___________________________________________`);

    const activities_list = [
        `and yoinking around >:v`,
        `>invite | >help`,
        `Identity V in ${botGuildCount} servers 💕`,
        `With ${userCount} damsels ;)`,
        "Welcome to Identit.",
        `Milestone ${botGuildCount}/2500`,
        `Never forget Bonbon's "铁皮人" skin`,
        `Someone pay NetEase an English translator`,
        `I'm not forgiving NE for naming my Black-and-White Portrait "Cowgirl"`,
        `R.I.P Cowboy's One Tap Lassos 😔`,
        `Yeehaw! >:D`
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 300000);


    setInterval(async () => {

        const cooldownCheck = await Cooldown.find({});

        for (const cooldown of cooldownCheck) {

            const timeLeft = new Date(cooldown.timeRemaining);

            let check = timeLeft - Date.now() >= timeLeft || timeLeft - Date.now() <= 0;

            if (check) {
                if (!cooldownCheck) return;

                await cooldown.delete({}).catch(e => console.log(e));
            }

        }

        const mutes = await Mutes.find({});

        if (!mutes) return;
        for (const mute of mutes) {
            async function deleteDoc() {
                await Mutes.deleteOne(mute).catch(e => console.log(e));
            }

            if (mute.created + mute.muteTime <= Date.now() || mute.muteTime < 1000) {
                const guild = await bot.shard.broadcastEval(`this.guilds.cache.get("${mute.guildID}")`);
                if (!guild) return deleteDoc();

                const member = await guild.members.cache.get(mute.userID);

                if (!member) return deleteDoc();

                let muteRole = await guild.roles.cache.find((x) => x.name === "muted");

                if (!muteRole) muteRole = await guild.roles.create({ name: "muted", color: "#27272b", permissions: [] });

                if (!member.roles.cache.has(muteRole.id)) return deleteDoc();

                await member.roles.remove(muteRole);

                const logChannel = await guild.channels.cache.get(mute.channelID);

                if (!logChannel) return deleteDoc();

                logChannel.send(`${member.user} has been unmuted!`);
                deleteDoc();

            }
        }
    }, 2000);


    const dbl = new DBL(process.env.dbl_token, bot);

    dbl.postStats(botGuildCount).catch(e => console.log(e));


    const Boats = new BOATS(process.env.boatsToken);

    Boats.postStats(botGuildCount, "632291800585076761")
        .catch((err) => console.log(err));


    /*const Glenn = new GBL(bot.user.id, process.env.glenToken, false, false);
    
    Glenn.updateStats(botGuildCount).catch(e => console.log(e));
    
    const updateBotList = async () => {
    
    const { body: reply } = await snekfetch.post(`https://discordbotlist.com/api/bots/632291800585076761/stats`)
    .set("Authorization", `Bot ${process.env.dblToken_2}`)
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
        await giveaway(bot);
        await resetMatches();

    });

};
