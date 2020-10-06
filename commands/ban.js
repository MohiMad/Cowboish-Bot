const { MessageEmbed } = require('discord.js');
const { findMember, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'ban',
    description: "bans a player",
    execute: async (message, args, bot, prefix) => {

        const member = await findMember(message, args[1]);

        const reason = args.slice(2).join(" ") || "No Reason";

        if (!message.member.hasPermission("BAN_MEMBERS", { checkAdmin: true, checkOwner: true })) return ErrorMsg(bot, message, "You don't have the required permissions to use this command");

        if (!args[1]) return ErrorMsg(bot, message, "Please mention a member or provide their ID\nUsage: `" + prefix + "ban <@Tagmember> <Optional reason>`");

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return ErrorMsg(bot, message, "I don't have the required permissions to execute this command!\nRequired permission: **BAN_MEMBERS**")

        if (!member) return ErrorMsg(bot, message, "Couldn't find that member!");

        if (!member.bannable) return ErrorMsg(bot, message, "I'm sorry i can't ban that member, how op :O");


        message.guild.members.ban(member, { Reason: reason ? reason : "No Reason" }).catch((e) => console.log(e));

        const banEmbed = new MessageEmbed()
            .setColor("#000000")
            .setAuthor(`Ban case`, member.user.displayAvatarURL())
            .setDescription(`**Banned By:** ${message.author.tag}\n**Banned User:** ${member.user.tag}\n **Reason:** ${reason ? reason : "No reason provided!"}`);

        message.channel.send(banEmbed);
    }
}