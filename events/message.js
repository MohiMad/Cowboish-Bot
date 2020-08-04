const Guild = require("../models/guild.js");

const { RichEmbed } = require("discord.js");
const logicpath = require('../models/logicpath');

module.exports = async (bot, message) => {

    const MohiMoo = bot.users.get("478527909250990090");

    if (message.channel.type === 'dm') return;

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

    if (!message.guild) return;

    const guild_0 = await Guild.findOne({ guildID: message.guild.id });

    let prefix;

    if (!guild_0) {
        prefix = ">";
    }
    else if (guild_0.prefix === null) {
        prefix = ">";
    }
    else if (guild_0.prefix.length < 1) {
        prefix = ">";

    }
    else {
        prefix = guild_0.prefix;
    }

    let args = message.content.substring(prefix.length).split(" ");

    if (message.author.id === bot.user.id) return;

    if (message.author.bot) return;

    if (message.content.startsWith("setcowboishprefix")) {
        bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    if (!message.content.startsWith(prefix)) return;



    switch (args[0].toLowerCase()) {

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

        case "randomize": case "random": case "pick":
            bot.commands.get('random').execute(message, args, bot, prefix);
            break;

        case "idvwiki": case "identityvwiki": case "identityvwikipedia": case "idvwikipedia":
            bot.commands.get('idvwiki').execute(message, args, bot, prefix);
            break;

        case "spawn": case "spawns": case "mapspawns":
            bot.commands.get('spawns').execute(message, args, bot, prefix);
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
            bot.commands.get('chat').execute(message, args, bot, prefix);
            break;

        case "chair":
            bot.commands.get('chair').execute(message, args, bot);
            break;

        case "chosendeath": case "deth": case "death":
            bot.commands.get('death').execute(message, args, bot, prefix);
            break;

        case "siptea": case "sip": case "sippingtea":
            bot.commands.get('siptea').execute(message, args, bot);
            break;


        //IDENTITY V LOGICPATH COMMANDS
        case "roll": case "r": case "dice":
            bot.commands.get('roll').execute(message, args, bot, prefix);
            break;

        case "open": case "essence": case "ess": case "e":
            bot.commands.get('open').execute(message, args, bot, MohiMoo, prefix);

            break;

        case "lp": case "logicpath": case "inv": case "inventroy":
            bot.commands.get('logicpath').execute(message, args, bot, prefix);

            break;

        case "ld": case "leaderboard":
            bot.commands.get('leaderboard').execute(message, args, bot, prefix);

            break;

        case "quick": case "play":

            bot.commands.get('quick').execute(message, args, bot, prefix);
            break;

        case "hunter": case "hunt":
            bot.commands.get('hunt').execute(message, args, bot, prefix);

            break;

        case "set":
            bot.commands.get('set').execute(message, args, bot, prefix);
            break;

        case "dailyreward": case "daily":
            bot.commands.get('daily').execute(message);

            break;

        case "shop":
            bot.commands.get('shop').execute(message, args, bot, prefix);

            break;

        case "buy":
            bot.commands.get('buy').execute(message, args, bot, prefix);

            break;

        case "equip":
            bot.commands.get('equip').execute(message, args, bot, prefix);

            break;

        case "gift":
            bot.commands.get('gift').execute(message, args, bot, prefix);

            break;



        //END OF LOGICPATH


        //Identity V Actions 

        case "blink":
            bot.commands.get('blink').execute(message, args, bot, prefix);
            break;

        case "struggle":
            bot.commands.get('struggle').execute(message, args, bot);
            break;

        case "stun":
            bot.commands.get('stun').execute(message, args, bot, prefix);
            break;

        case "crash":
            bot.commands.get('crash').execute(message, args, bot);
            break;

        case "terrorshock": case "ts":
            bot.commands.get('terrorshock').execute(message, args, bot, prefix);
            break;

        case "lasso": case "yoink":
            bot.commands.get('lasso').execute(message, args, bot);
            break;

        case "shoot": case "flaregun":
            bot.commands.get('shoot').execute(message, args, bot, prefix);
            break;

        case "bully":
            bot.commands.get('bully').execute(message, args, bot, prefix);
            break;

        case "hug":
            bot.commands.get('hug').execute(message, args, bot, prefix);
            break;
        //End of Identity V Actions



        //Moderation Commands starts here

        case "clear": case "purge": case "delete":
            bot.commands.get('clear').execute(message, args, bot);
            break;

        case "kick":
            bot.commands.get('kick').execute(message, args, prefix);
            break;

        case "ban":
            bot.commands.get('ban').execute(message, args, bot, prefix);
            break;

        case "mute": case "shutup":
            bot.commands.get('mute').execute(message, args, bot, prefix);
            break;

        //End of moderation commands


        //Config commands starts here

        case "info": case "botinfo":
            bot.commands.get('info').execute(message, args, bot, MohiMoo, prefix);
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
            bot.commands.get('help').execute(message, args, prefix);
            break;

        case 'guilds': case "servers":
            message.channel.send(`Cowboish stats => **${bot.users.size}** users, in **${bot.channels.size}** channels of **${bot.guilds.size}** servers :D`)
            break;

        case 'suggest': case "reportbug": case "issue":
            bot.commands.get('suggest').execute(message, bot, MohiMoo);
            break;

        case "setup":
            bot.commands.get('setup').execute(message, args, MohiMoo, bot);
            break;

        case "invite": case "cowboishinvite":
            bot.commands.get('invite').execute(message, args, bot);
            break;

        case "setcowboishprefix": case "setcowboishbotprefix":
            bot.commands.get('setcowboishprefix').execute(message, args, MohiMoo, bot);
            break;

    }
    //End of config commands


};