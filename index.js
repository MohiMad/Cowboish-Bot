//_______________Modules_____________
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")
const fs = require('fs');
const got = require("got");

const Guild = require("./models/guild");


const snekfetch = require('snekfetch');


const { stripIndents } = require("common-tags");


//_______________MONGOOSE STUFF____________________
const mongoose = require("mongoose");

mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//_________________Discord bot list (2)__________

const { post } = require('snekfetch')
const updateBotList = async () => {

    const { body: reply } = await post(`https://discordbotlist.com/api/bots/632291800585076761/stats`)
        .set("Authorization", `Bot ${config.dblToken_2}`)
        .send({
            guilds: bot.guilds.size,
            users: bot.users.size,
        })

    return (reply)
}
//__________Divine discord bot list ____________________
const { ddblAPI } = require('ddblapi.js');
const ddbl = new ddblAPI('632291800585076761', config.ddblToken);

//________________Command handler HERE___________
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
    var time = new Date();
    var timestamp = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ']';
}

//__________-*End of command handler____________

bot.on("guildCreate", guild => {

    const create = bot.channels.get('651476936379596830');

    if (!create) return;
    else create.send(`👏 Just joined a new server named 👉 (**${guild.name}**)\nCowboish Bot is now in **${bot.guilds.size}** servers <3`);
    //Sends a message to my server if bot joins a new server (NOT WORKING)

    //Channel loop so bot sends a message to the server it joined
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
    const Mohi = bot.users.get("478527909250990090");

    let maprefix = "`setcowboishprefix`";

    const welcomeEmbed = new Discord.RichEmbed()
        .addField('🤗💗 Thank you for inviting me to the party 💗🤗',
            stripIndents`
        Cowboish bot is the first working Identity V discord bot and is **MohiMoo**'s first project :D

        🎉 | My cowboish birthday 🎊 **14/10/2019**

        👍 | Do *>help* and i will be there for help :)

        ❓ | Wanna change my prefix? use the command ${maprefix}, yes this command has no prefix

        🔧 | My prefix is **>** remember using it before any command of my commands

        🙂 | Now im in **${bot.guilds.size}**, servers and growing <3

        ❔  | **Errors** or **suggestions**? do *>suggest*/*>issue*
        
        💠 | For more info contact: **${Mohi.tag}**
        `)
        .addBlankField()
        .addField("💗 | Support me",
            stripIndents`
        [Cowboish website](https://rkanjo2.wixsite.com/cowboishbot) | [Invite me to servers around](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | [Cowboish Server](https://discordapp.com/invite/YWcSukS)`);

    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(welcomeEmbed);
    //sends the embed when joined

    bot.on("guildDelete", guild => {

        const logs = bot.channels.get('651476936379596830');

        if (!logs) return;

        else logs.send(`I have been removed from: (**${guild.name}**) :'C`);

    });


});

bot.on('ready', async () => {
    console.log(`${timestamp} Logged in as ${bot.user.tag}!`);
    console.log(`___________________________________________`);
    console.log(`Now let's lasso sum peeps >:D`);
    console.log(`___________________________________________`);



    const activities_list = [
        `🥳 celebrating ${bot.guilds.size} servers 🎉`,
        `@Cowboish bot for help :3`,
        `Identity V in ${bot.guilds.size} servers 💕`,
        "Welcome to Identit | >help",
        `milestone ${bot.guilds.size}/250 💕`,
        `${bot.guilds.size} guilds | ${bot.users.size} users 💕`
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 100000);//sets the activity each 120 s


    const DBL = require("dblapi.js");

    const dbl = new DBL(config.dbl_token, bot);

    setInterval(() => {
        dbl.postStats(bot.guilds.size);
    }, 1800000);

    const responseFromAPI = await updateBotList()

    ddbl.postStats(bot.guilds.size)
        .catch(err => console.log(err));

    got.post("https://arcane-botcenter.xyz/api/632291800585076761/stats", {
        headers: {
            Authorization: config.arcane_token
        },
        body: {
            server_count: bot.guilds.size,
            member_count: bot.users.size
        },
        json: true
    }).catch(err => console.error(err.statusCode))

    const BOATS = require('boats.js');

    const Boats = new BOATS(config.boatsToken);

    Boats.postStats(bot.guilds.size, "632291800585076761")
        .catch((err) => {
            console.error(err);
        });

    snekfetch.post(`https://bladebotlist.xyz/api/public/bot/stats`)
        .set('Authorization', config.bblToken)
        .send({
            server_count: bot.guilds.size,
        }).catch((e) => console.error(e));

})


bot.on('message', async message => {

    const MohiMoo = bot.users.get("478527909250990090");

    const guild_0 = await Guild.findOne({ guildID: message.guild.id });

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;


    let prefix;

    if (!guild_0) {
        prefix = ">"
    }
    else if (guild_0.prefix === null) {
        prefix = ">"
    }
    else if (guild_0.prefix.length < 1) {
        prefix = ">"

    }
    else {
        prefix = guild_0.prefix
    }

    if (message.content.startsWith("setcowboishprefix")) {
        bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    if (message.isMentioned(bot.user)) return message.channel.send(`Heeey ${message.author}!\nMy prefix in this server is set to **${prefix}**\nFor more information do **${prefix}help**`)

    let args = message.content.substring(prefix.length).split(" ");

    if (!message.content.startsWith(prefix)) return;

    if (!message.guild) return;

    if (message.author.id === bot.user.id) return;

    if (message.author.bot) return;


    //ulitiy stuff

    switch (args[0]) {

        //Identity V commands Starts Here!
        case "roll20": case "r20":
            bot.commands.get('roll20').execute(message, args, MohiMoo);
            break;

        case "identify": case "whois": case "stereotype":
            bot.commands.get('identify').execute(message, args, MohiMoo);
            break;

        case "winrate": case "wr":
            bot.commands.get('winrate').execute(message, args, MohiMoo);
            break;

        case "essence": case "ess": case "e":
            bot.commands.get('essence').execute(message, args, MohiMoo);
            break;

        case "randomize": case "random": case "pick":
            bot.commands.get('random').execute(message, args, MohiMoo);
            break;

        //End Of identity V commands

        //Fun Commands Starts Here!

        case "joke": case "lemmelaugh":
            bot.commands.get('joke').execute(message, args, MohiMoo);
            break;

        case "yee":
            bot.commands.get('yee').execute(message, args, MohiMoo);
            break;

        case 'meme': case "memes":
            bot.commands.get('meme').execute(message, args, MohiMoo);
            break;

        case 'idv': case "identityv":
            bot.commands.get('idv').execute(message, args, MohiMoo);
            break;

        case 'say': case "repeat":
            bot.commands.get('say').execute(message, args, MohiMoo);
            break;

        //End Of Fun commands

        //____Image manipulation____

        case "slap":
            bot.commands.get('slap').execute(message, args, bot);
            break;

        case "text": case "chat": case "ingamechat":
            bot.commands.get('chat').execute(message, args, bot);
            break;

        case "chair":
            bot.commands.get('chair').execute(message, args, bot);
            break;

        case "chosendeath": case "deth": case "death":
            bot.commands.get('death').execute(message, args, bot);
            break;

        //IDENTITY V LOGICPATH COMMANDS
        case "roll": case "r": case "dice":
            bot.commands.get('roll').execute(message, args, MohiMoo);
            break;

        case "open":
            bot.commands.get('open').execute(message, args, MohiMoo);
            break;

        case "LP": case "logicpath": case "inv": case "inventroy":
            bot.commands.get('logicpath').execute(message, args, bot, MohiMoo);
            break;

        case "LD": case "leaderboard":
            bot.commands.get('leaderboard').execute(message, args, bot);
            break;

        case "ID": case "setID":
            bot.commands.get('id').execute(message, args, bot, MohiMoo);
            break;

        case "quick": case "play":
            bot.commands.get('quick').execute(message, args, bot);
            break;

        case "hunter": case "hunt":
            bot.commands.get('hunt').execute(message, args, bot);
            break;

        case "dailyreward": case "daily":
            bot.commands.get('daily').execute(message, args, MohiMoo);
            break;

        case "shop":
            bot.commands.get('shop').execute(message, args, MohiMoo);
            break;

        case "buy":
            bot.commands.get('buy').execute(message, args, MohiMoo);
            break;



        //END OF LOGICPATH


        //Identity V Actions 

        case "blink":
            bot.commands.get('blink').execute(message, args, bot);
            break;

        case "stun":
            bot.commands.get('stun').execute(message, args, bot);
            break;

        case "crash":
            bot.commands.get('crash').execute(message, args, bot);
            break;

        case "terrorshock": case "tc":
            bot.commands.get('terrorshock').execute(message, args);
            break;

        case "lasso": case "yoink":
            bot.commands.get('lasso').execute(message, args, bot);
            break;

        case "shoot": case "flaregun":
            bot.commands.get('shoot').execute(message, args, bot);
            break;

        case "bully":
            bot.commands.get('bully').execute(message, args, bot);
            break;

        case "hug":
            bot.commands.get('hug').execute(message, args, bot);
            break;
        //End of Identity V Actions



        //Moderation Commands starts here

        case "clear": case "purge": case "delete":
            bot.commands.get('clear').execute(message, args, bot);
            break;

        case "kick":
            bot.commands.get('kick').execute(message, args, MohiMoo);
            break;

        case "ban":
            bot.commands.get('ban').execute(message, args, bot);
            break;

        case "mute": case "shutup":
            bot.commands.get('mute').execute(message, args, bot);
            break;

        //End of moderation commands


        //Config commands starts here

        case "info": case "botinfo":
            bot.commands.get('info').execute(message, args, bot, MohiMoo);
            break;

        case "userinfo": case "usrinfo":
            bot.commands.get('userinfo').execute(message, args, MohiMoo);
            break;

        case "serverinfo": case "srvrinfo":
            bot.commands.get('serverinfo').execute(message, args, MohiMoo);
            break;

        case 'ping':
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
            break;

        case "help": case "commands": case "helpme":
            bot.commands.get('help').execute(message, args, MohiMoo);
            break;

        case 'guilds': case "servers":
            message.channel.send(`Cowboish stats => **${bot.users.size}** users, in **${bot.channels.size}** channels of **${bot.guilds.size}** servers :D`)
            break;

        case 'suggest': case "reportbug": case "issue":
            bot.commands.get('suggest').execute(message, args, bot);
            break;

        case "setup": case "set":
            bot.commands.get('setup').execute(message, args, MohiMoo, bot);
            break;

        case "setcowboishprefix": case "setcowboishbotprefix":
            bot.commands.get('setcowboishprefix').execute(message, args, MohiMoo, bot);
        break;


    }
    //End of config commands



});//___________end of message event_________

bot.on('guildMemberAdd', async member => {

    const guild = await Guild.findOne({ guildID: member.guild.id });

    if (!guild) return;

    else if (guild.welcome.enabled === false) return;

    else if (!guild.welcome.message || guild.welcome.message.length < 1) return;

    else if (guild.welcome.channel === null) return;


    const welcomeMessage = guild.welcome.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);


    const welcomeChannel = member.guild.channels.get(guild.welcome.channel);

    if (!welcomeChannel) return;

    else {

        welcomeChannel.send(welcomeMessage)
            .catch(() => void null);

    }

});//:::::::::end of Guild member add::::::::::

bot.on('guildMemberLeave', async member => {


    const guild2 = await Guild.findOne({ guildID: member.guild.id });

    if (!guild2) return;

    else if ((guild2.leave.enabled) === false) return;

    else if (!guild2.leave.message || guild2.leave.message.length < 1) return;

    else if ((!guild2.leave.message) === null) return;

    else if ((guild2.leave.channel) === null) return;

    const leaveMessage = guild2.leave.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);

    const leaveChannel = member.guild.channels.get(guild2.leave.channel);

    if (leaveChannel === null) return;

    leaveChannel.send(leaveMessage);

});//__________________end of Guild member leave event_____________-







bot.login(config.token);

