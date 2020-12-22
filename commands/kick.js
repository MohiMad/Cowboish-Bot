const { MessageEmbed } = require('discord.js');
const { findMember, ErrorMsg } = require("../functions.js");

module.exports = {
    name: ["kick", "kickmember"],
    description: "Kicks the mentioned user out of the server\n\n**Usage:** `$prefixkick <user> [reason]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "KICK_MEMBERS"],
    category: "Moderation",
    execute: async (message, args, bot, prefix) => {
        const member = await findMember(message, args[1]);

        const reason = args.slice(2).join(" ") || "No Reason";

        const errEmbed = new MessageEmbed()
            .setAuthor("Oops an error has occured!", message.author.displayAvatarURL())
            .setColor("0xe80202")
            .setTimestamp();

        if (!message.member.hasPermission("KICK_MEMBERS", { checkAdmin: true, checkOwner: true })) return message.channel.send(errEmbed.setDescription("You don't have the required permission to use this command!"));
        if (!args[1]) return message.channel.send(errEmbed.setDescription("Please mention the member you want to kick!\nUsage: `" + prefix + "kick <@tagMember> <reason here>`"));

        if (!member) return message.channel.send(errEmbed.setDescription("Couldn't find that member!"));
        if (member.user.id === message.author.id) return message.reply("Oh really? .-.\nYou're tryna kick yourself? -v-");
        if (!member.kickable) return message.channel.send(errEmbed.setDescription("This member is not kickable! please nerf"));
        if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply("You can't kick someone with the same/or higher role than you -v-");

        member.kick(reason ? reason : "No Reason").catch(() => message.reply("Oh no an error occured, please contact the owner!"));

        const kickEmbed = new MessageEmbed()
            .setColor("0xe80202")
            .setAuthor(`Kick Case`, member.user.displayAvatarURL())
            .setDescription(`**Kicked By:** ${message.author.tag}\n**Kicked User:** ${member.user.tag}\n **Reason:** ${reason ? reason : "No reason provided!"}`);

        message.channel.send(kickEmbed);

    }

}