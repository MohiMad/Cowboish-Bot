const Guild = require("../models/guild.js");
const logicPath = require("../models/logicpath.js");
const { permsCheck } = require('../functions.js');
const spamStopper = new Set();

module.exports = async (bot, message) => {

    if (message.channel.type === 'dm') return;

    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

    if (!message.guild) return;

    const guild_0 = await Guild.findOne({ guildID: message.guild.id });

    let prefix = ">";

    if (!guild_0) prefix = ">";
    else if (guild_0.prefix === null) prefix = ">";
    else if (guild_0.prefix.length < 1) prefix = ">";
    else prefix = guild_0.prefix;

    let args = message.content.substring(prefix.length).split(" ");

    if (message.author.id === bot.user.id) return;

    if (message.author.bot) return;

    const MohiMoo = bot.users.cache.get("478527909250990090");
    const permissionsInGuild = message.channel.permissionsFor(message.guild.me).toArray();
    const permissionsInChannel = message.guild.me.permissionsIn(message.channel).toArray();

    const highestRole = message.guild.me.roles.highest;

    if (message.content.startsWith("setcowboishprefix")) {
        bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    /*if (["happybirthdayseer", "happybdseer", "hbdseer", "happybirthdayseer", "happybdseer"].includes(message.content.split(" ").join("").toLowerCase())) {
        bot.commands.get("birthday").execute(message, args, bot, prefix);
    }*/

    if (!message.content.startsWith(prefix)) return;

    if(message.author.id !== MohiMoo.id) return;

    const objects = {
        message: message,
        args: args,
        bot: bot,
        prefix: prefix,
        MohiMoo: MohiMoo,
        spamStopper: spamStopper,
        permissionsInChannel: permissionsInChannel,
        permissionsInGuild: permissionsInGuild,
        rolePermissions: rolePermissions
    }

    function getArgsRequested(func) {
        var comments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
        var argsName = /([^\s,]+)/g;

        var fnStr = func.toString().replace(comments, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(argsName);
        if (result === null)
            result = [];

        return result;
    }

    for (const command of bot.commands.array()) {

        let name = command.name[0];
        if (name.length === 1) name = command.name;

        if (command.name.includes(args[0].toLowerCase())) {
            let admins = command.admins;
            if (!admins) admins = [message.author.id];

            if (!admins.includes(message.author.id)) return;
            if (command.isDisabled === true) return;

            if (permsCheck(message, bot, highestRole, command.permissions, permissionsInGuild, permissionsInChannel) === true) return;

            const execParms = await getArgsRequested(command.execute);
            command.execute(objects[execParms[0]], objects[execParms[1]], objects[execParms[2]], objects[execParms[3]]);
        }

    }

};