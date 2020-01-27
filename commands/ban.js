
const { RichEmbed } = require('discord.js');
const { findMember } = require("../functions.js");

module.exports = {
    name: 'ban', 
    description: "bans a player",
    execute : async (message, args, MohiMoo, errWhere) => {



        const member = await findMember(message, args[1]);

        const reason = args.slice(2).join(" ") || "No Reason";

        
        const errEmbed = new RichEmbed()
            .setAuthor("Oops, an error has occured!", message.author.AvatarURL)
            .setColor("RED")
            .setTimestamp();

        try{
        
        if(!message.member.hasPermission("BAN_MEMBERS", false, true, true)){
            errEmbed.setDescription("You don't have the needed permissions to use this command");
            message.channel.send(errEmbed);
        }

        if(!args[1]){
            errEmbed.setDescription("Please mention a member or provide their ID\nUsage: `>ban <@Tagmember>`");
            message.channel.send(errEmbed);
        }
        
        else if(!member){
            errEmbed.setDescription("Couldn't find that member!");
            message.channel.send(errEmbed);
        
        }
        
        else if(!member.bannable){
            errEmbed.setDescription("I'm sorry i can't ban that member, how op :O");
            message.channel.send(errEmbed);
        }
        else {
                
        member.ban(reason ? reason : "No Reason").catch(() => message.reply("Oh no an error occured, please contact the owner!"));
        
        const banEmbed = new RichEmbed()
			.setColor("#000000")
			.setAuthor(`Ban case`, member.user.displayAvatarURL)
            .setDescription(`**Banned By:** ${message.author.tag}\n**Banned User:** ${member.user.tag}\n **Reason:** ${reason ? reason : "No reason provided!"}`);
            
        message.channel.send(banEmbed);
        }
    }catch(err){
        MohiMoo.send(errWhere + "\n```" + err + "```");
        console.log(err);
        message.channel.send("❌ **An error has occured!** sorry :C");
    }

        }
    }