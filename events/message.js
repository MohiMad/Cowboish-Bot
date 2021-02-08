const Guild = require("../models/guild.js");
const { permsCheck } = require('../assets/functions.js');
const SpamSet = new Set();

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

    const MohiMoo = await bot.users.cache.get("478527909250990090");
    const permissionsInGuild = await message.channel.permissionsFor(message.guild.me).toArray();
    const permissionsInChannel = await message.guild.me.permissionsIn(message.channel).toArray();

    const highestRole = message.guild.me.roles.highest;

    if (message.content.startsWith("setcowboishprefix")) {
        bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    /*if (["happybirthdayseer", "happybdseer", "hbdseer", "happybirthdayseer", "happybdseer"].includes(message.content.split(" ").join("").toLowerCase())) {
        bot.commands.get("birthday").execute(message, args, bot, prefix);
    }*/

    if (!message.content.startsWith(prefix)) return;
    if (message.content.length === prefix.length) return;
    //if(message.author.id !== MohiMoo.id) return;

    const objects = {
        message: message,
        args: args,
        bot: bot,
        prefix: prefix,
        MohiMoo: MohiMoo,
        SpamSet: SpamSet,
        permissionsInChannel: permissionsInChannel,
        permissionsInGuild: permissionsInGuild,
        highestRole: highestRole
    }

    /**
     * [getArgsRequested function]
     * 
     * This function grabs the arguments in a function and converts them into an array.
     * @param {Function} func 
     * @returns {Array}
     */
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
            let admins = command.admins ? command.admins : [message.author.id];
            let banned = command.banned ? command.banned : [];

            if (!admins.includes(message.author.id)) return;
            if (command.isDisabled) return;
            if (banned.includes(message.author.id)) return;

            if (permsCheck(message, bot, highestRole, command.permissions, permissionsInGuild, permissionsInChannel) === true) return;

            const execParms = getArgsRequested(command.execute);
            return command.execute(objects[execParms[0]], objects[execParms[1]], objects[execParms[2]], objects[execParms[3]], objects[execParms[4]]);
        }

    }

};