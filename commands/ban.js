
const { RichEmbed } = require('discord.js');
const { findMember, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'ban',
    description: "bans a player",
    execute: async (message, args, MohiMoo) => {



        const member = await findMember(message, args[1]);

        const reason = args.slice(2).join(" ") || "No Reason";


        const errEmbed = new RichEmbed()
            .setAuthor("Oops, an error has occured!", message.author.AvatarURL)
            .setColor("RED")
            .setTimestamp();


        if (!message.member.hasPermission("BAN_MEMBERS", false, true, true)) {
            ErrorMsg(this.bot, message, "You don't have the needed permissions to use this command");
        }
        if (!args[1]) {
            ErrorMsg(this.bot, message, "Please mention a member or provide their ID\nUsage: `>ban <@Tagmember>`");
        }

        else if (!member) {
            ErrorMsg(this.bot, message, "Couldn't find that member!");


        }

        else if (!member.bannable) {
            ErrorMsg(this.bot, message, "I'm sorry i can't ban that member, how op :O");
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