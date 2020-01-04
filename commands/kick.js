const { RichEmbed } = require('discord.js');
const { findMember } = require("../functions.js");

module.exports = {
    name: 'kick', 
    description: "kick them trolls",
    execute : async (message, args) => {
        const member = await findMember(message, args[1]);
        
        const reason = args.slice(2).join(" ") || "No Reason";

        const errEmbed = new RichEmbed()
            .setAuthor("Oops an error has occured!", message.author.AvatarURL)
            .setColor("0xe80202")
            .setTimestamp();

        if(!message.member.hasPermission("KICK_MEMBERS", false, true, true)){

            errEmbed.setDescription("You don't have the required permission to use this command!");
            message.channel.send(errEmbed);
        }

        else if(!args[1]){
            errEmbed.setDescription("Please mention the member you want to kick!\nUsage: `>kick <@tagMember> <reason here>`");
            message.channel.send(errEmbed);
        }
        
        else if(!member){
            errEmbed.setDescription("Couldn't find that member!");

        }
        
		else if(!member.kickable){
            errEmbed.setDescription("This member is not kickable! please nerf");
            message.channel.send(errEmbed);
        }
        else{
        member.kick(reason ? reason : "No Reason").catch(() => message.reply("Oh no an error occured, please contact the owner!"));
        
		const kickEmbed = new RichEmbed()
			.setColor("0xe80202")
            .setAuthor(`Kick Case`, member.user.displayAvatarURL)
            .setDescription(`**Kicked By:** ${message.author.tag}\n**Kicked User:** ${member.user.tag}\n **Reason:** ${reason ? reason : "No reason provided!"}`);
        
        message.channel.send(kickEmbed);
        }
    }

}