const got = require("got");
const config = require("../config.json");
const snekfetch = require('snekfetch');
const { post } = require('snekfetch');
const DBL = require("dblapi.js");
// const { ddblAPI } = require('ddblapi.js');
const BOATS = require('boats.js');
const schedule = require('node-schedule');
const { rewards } = require("../functions.js");
const GBL = require('gblapi.js');

const Mutes = require("../models/mutes");


module.exports = async (bot) => {

    // const ddbl = new ddblAPI('632291800585076761', config.ddblToken);


    var time = new Date();
    var timestamp = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ']';

    console.log(`${timestamp} Logged in as ${bot.user.tag}!`);
    console.log(`___________________________________________`);
    console.log(`Now let's yeet sum peeps >:D`);
    console.log(`___________________________________________`);

    const activities_list = [

        `and yoinking around >:v`,
        /*
        `>invite | >help`,
        `Identity V in ${bot.guilds.size} servers 💕`,
        "Welcome to Identit | >invite",
        `milestone ${bot.guilds.size}/1000`,
        `${bot.guilds.size} guilds | ${bot.users.size} users`
        */
        "#BLM 🖤",
        "#Black_Lives_Matter 🖤"

    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 100000);//sets the activity each 100 s

    const dbl = new DBL(config.dbl_token, bot);

    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);


    /*
    ddbl.postStats(bot.guilds.size)
        .catch(err => console.log(err));
        */

    schedule.scheduleJob("1 12 * * 1", async function () {
        let set = new Set();

        if (set.has(bot.user.id)) return;

        else {

            rewards(bot);

            set.add(bot.user.id);

        }
    });

    schedule.scheduleJob("0 0 * * *", async function () {

        bot.commands.get('giveaway').execute(bot);

    });

    /*
    const Glenn = new GBL(bot.user.id, config.glenToken, false);

    setInterval(() => {
        Glenn.updateStats(bot.guilds.size);
    }, 15 * 60000) // Sends stats every 15 minutes
    */

    const Boats = new BOATS(config.boatsToken);

    Boats.postStats(bot.guilds.size, "632291800585076761")
        .catch((err) => {
            console.log(err);
        });



    /*const updateBotList = async () => {

        const { body: reply } = await post(`https://discordbotlist.com/api/bots/632291800585076761/stats`)
            .set("Authorization", `Bot ${config.dblToken_2}`)
            .send({
                guilds: bot.guilds.size,
                users: bot.users.size,
            })

        return (reply)
    }
    

    let botUPDATE = await updateBotList();

    */

    setInterval(async () => {

        const mutes = await Mutes.find({});

        for (const mute of mutes) {
            if (mute.created + mute.muteTime <= Date.now()) {

                const guild = bot.guilds.get(mute.guildID);

                if (!guild) return;

                const member = guild.members.get(mute.userID);

                if (!member) return;

                let muteRole = guild.roles.find((x) => x.name === "muted");



                if (!muteRole) muteRole = guild.createRole({ name: "muted", color: "#27272b", permissions: [] });

                if (!member.roles.has(muteRole.id)) return;

                member.removeRole(muteRole);

                const logChannel = guild.channels.get(mute.channelID);

                if (!logChannel) return;

                logChannel.send(`Unmuted ${member.user}!`);

                Mutes.deleteOne({ userID: member.user.id, guildID: guild.id }, err => {
                    if (err) console.log(err);
                });
            }
        }
    }, 10000);


};