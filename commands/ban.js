
const { RichEmbed } = require('discord.js');
const { findMember, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'ban',
    description: "bans a player",
    execute: async (message, args, bot) => {

        const member = await findMember(message, args[1]);

        const reason = args.slice(2).join(" ") || "No Reason";



        if (!message.member.hasPermission("BAN_MEMBERS", false, true, true)) {
            ErrorMsg(bot, message, "You don't have the needed permissions to use this command");
        }
        if (!args[1]) {
            ErrorMsg(bot, message, "Please mention a member or provide their ID\nUsage: `>ban <@Tagmember>`");
        }
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return ErrorMsg(bot, message, "I don't have the required permissions to execute this command!\nRequired permission: **BAN_MEMBERS**")

        }
            
    
        else if (!member) {
            ErrorMsg(bot, message, "Couldn't find that member!");


        }

        else if (!member.bannable) {
            ErrorMsg(bot, message, "I'm sorry i can't ban that member, how op :O");
        }
        else {

            member.ban(reason ? reason : "No Reason").catch(() => message.reply("Oh no an error occured, please contact the owner!"));

            const banEmbed = new RichEmbed()
                .setColor("#000000")
                .setAuthor(`Ban case`, member.user.displayAvatarURL)
                .setDescription(`**Banned By:** ${message.author.tag}\n**Banned User:** ${member.user.tag}\n **Reason:** ${reason ? reason : "No reason provided!"}`);

            message.channel.send(banEmbed);
        }


    }
}