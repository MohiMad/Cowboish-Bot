const Guild = require("../models/guild.js");
const { permsCheck } = require('../src/functions.js');
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

    let args = message.content.substring(prefix.length).split(/\s+/);

    if (message.author.id === bot.user.id) return;

    if (message.author.bot) return;

    const MohiMoo = await bot.shard.broadcastEval("this.users.cache.get('478527909250990090')");
    const permissionsInGuild = await message.channel.permissionsFor(message.guild.me).toArray();
    const permissionsInChannel = await message.guild.me.permissionsIn(message.channel).toArray();

    const highestRole = message.guild.me.roles.highest;

    /*if (["happybirthdayseer", "happybdseer", "hbdseer", "happybirthdayseer", "happybdseer"].includes(message.content.split(" ").join("").toLowerCase())) {
        bot.commands.get("birthday").execute(message, args, bot, prefix);
    }*/

    if (message.content.startsWith("setcowboishprefix")) {
        return bot.commands.get('setcowboishprefix').execute(message, args, bot);
    }

    if (message.mentions.has(bot.user) && message.content.length < (bot.user.toString().length + 2)) {
        return message.channel.send(`Hello ${message.author.toString()}!\nMy prefix is \`${prefix}\`\nWrite \`${prefix}help\` to see my commands.`);
    }

    if (!message.content.startsWith(prefix)) return;
    if (message.content.length === prefix.length) return;
    if(message.author.id !== MohiMoo.id) return;

    const objects = {
        message,
        args,
        bot,
        prefix,
        MohiMoo,
        SpamSet,
        permissionsInChannel,
        permissionsInGuild,
        highestRole
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


    const command = bot.commands.get(args[0].toLowerCase()) || bot.commands.find(c => c.name.includes(args[0].toLowerCase()));


    if (command) {
        try {
            let admins = command.admins ? command.admins : [message.author.id];
            let banned = command.banned ? command.banned : [];

            if (!admins.includes(message.author.id)) return;
            if (command.isDisabled) return;
            if (banned.includes(message.author.id)) return;

            if (permsCheck(message, bot, highestRole, command.permissions ? command.permissions : ["SEND_MESSAGES"], permissionsInGuild, permissionsInChannel) === true) return;

            const execParms = getArgsRequested(command.execute);
            return command.execute(objects[execParms[0]], objects[execParms[1]], objects[execParms[2]], objects[execParms[3]], objects[execParms[4]]);
        } catch (err) {
            console.log(err);
        }
    }

};