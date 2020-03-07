const Guild = require("../models/guild.js");


module.exports = async (bot, message) => {

    const MohiMoo = bot.users.get("478527909250990090");

    if (message.channel.type === 'dm') return;

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

    if (!message.guild) return;



    const guild_0 = await Guild.findOne({ guildID: message.guild.id });


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

    let args = message.content.substring(prefix.length).split(" ");

    if (message.author.id === bot.user.id) return;

    if (message.author.bot) return;

    if (message.content.startsWith("setcowboishprefix")) {
        bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    if (message.content.startsWith(bot.user)) return message.channel.send(`Heeey **${message.author}**!\nMy prefix in this server is set to **${prefix}**\nFor more information do **${prefix}help**`)

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

        case "essence": case "ess": case "e":
            bot.commands.get('essence').execute(message, args, bot);
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
            bot.commands.get('open').execute(message, args, bot);
            break;

        case "lp": case "logicpath": case "inv": case "inventroy":
            bot.commands.get('logicpath').execute(message, args, bot, MohiMoo);
            break;

        case "ld": case "leaderboard":
            bot.commands.get('leaderboard').execute(message, args, bot);
            break;

        case "id": case "setid":
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
            bot.commands.get('shop').execute(message, args, bot);
            break;

        case "buy":
            bot.commands.get('buy').execute(message, args, bot);
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
            bot.commands.get('suggest').execute(message, args, bot, MohiMoo);
            break;

        case "setup": case "set":
            bot.commands.get('setup').execute(message, args, MohiMoo, bot);
            break;

        case "setcowboishprefix": case "setcowboishbotprefix":
            bot.commands.get('setcowboishprefix').execute(message, args, MohiMoo, bot);
            break;

        case "create":
            if (message.author.id !== MohiMoo.id) return;

            bot.emit("guildCreate", message.guild);
            break;

        case "leave":
            if (message.author.id !== MohiMoo.id) return;
            bot.emit("guildDelete", message.guild);
            break;


    }
    //End of config commands




};