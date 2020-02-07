const Guild = require("../models/guild.js");
const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'setup',
    description: "set some stuff for the guild",
    execute(message, args, MohiMoo) {

        const errEmbed = new RichEmbed()
            .setTitle("❌ Ooops an error has occurred! ❌")
            .setColor("0xf72020");

        const doneEmbed = new RichEmbed()
            .setTitle(`${message.guild.name} setup information!`)
            .setDescription("If there is no info given, then the setup is null!")
            .setColor("RANDOM");

        const sucEmbed = new RichEmbed()
            .setTitle("Changes committed succesfully!")
            .setColor("0x20f72b")
            .setAuthor(message.author.username, message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1")
            .setTimestamp();




        Guild.findOne({

            guildID: message.guild.id

        }, (err, guild) => {

            if (err) console.log(err);

            if (!guild) {

                const newGuild = new Guild({

                    guildID: message.guild.id,

                    leave: {
                        enabled: false,

                        channel: null,

                        message: null,
                    },
                    welcome: {

                        enabled: false,

                        channel: null,

                        message: null,
                    },

                    prefix: ">",

                    autoroles: [],

                })
                newGuild.save().catch(err => console.log(err))
                    .then(message.reply("It seems like your guild didn't have any data saved, but now it does ;D\nPlease try to run the command again!"));
            }

            else if (!message.member.hasPermission("MANAGE_GUILD")) {
                errEmbed.setDescription("You don't have the required permissions to run this command!");
                errEmbed.setFooter("MANAGE_GUILD permission is required");
                return message.channel.send(errEmbed);
            }

            else if (!args[1]) {

                if ((guild.welcome.channel) === null) {
                    doneEmbed.addField("<:nae:671454247505625110> Welcome Channel is not set!", "Do `>setup welcomechannel <#channelhere>`");
                } else {
                    doneEmbed.addField("👋 Welcome channel", `<#${guild.welcome.channel}>`);
                }

                if ((guild.welcome.message) === null) {
                    doneEmbed.addField("<:nae:671454247505625110> Welcome message is not set!", "Do `>setup welcomemessage <message here, can be long>`");
                }
                else {
                    doneEmbed.addField("👋 Welcome message", `${guild.welcome.message}`);
                }
                if ((guild.leave.channel) === null) {
                    doneEmbed.addField("<:nae:671454247505625110> Leave channel is not set!", "Do `>setup leavechannel <#channelTagHere>`");
                }
                else {
                    doneEmbed.addField("😢 Leave channel", `<#${guild.leave.channel}>`);
                }
                if ((guild.leave.message) === null) {
                    doneEmbed.addField("<:nae:671454247505625110> Leave message is not set!", "Do `>setup leavemessage <messsage goes here!>`");
                }
                else {
                    doneEmbed.addField("😢 Leave message", `${guild.leave.message}`);
                }



                message.channel.send(doneEmbed);
            }//::::::::To setup embed::::::::::::::::::

            if ((args[1]) === "welcomechannel") {
                const channel = (message.mentions.channels.first());
                if (args[2] === "disable") {
                    sucEmbed.setDescription("✅ Succesfully set greetings to flase");
                    message.channel.send(sucEmbed);

                    guild.welcome.enabled = false;
                    return guild.save().catch(console.error);
                }
                else if (!channel) {
                    errEmbed.setDescription("Please provide the channel name after the command\nExample: `>setup welcomechannel <welcome channel>`");
                    message.channel.send(errEmbed);
                }
                else {
                    sucEmbed.setDescription(`✅ Succesfully set the welcome channel to <#${channel.id}>\n\nAlmost there! you need to set the welcome message you want me to send by doing ` + "`>setup welcomemessage <welcomemessage here!>`");
                    message.channel.send(sucEmbed);

                    guild.welcome.enabled = true;
                    guild.welcome.channel = channel.id;
                    guild.save().catch(console.error);
                }
            }//_____________end of welcomechannel setup______________

            if ((args[1]) === "welcomemessage") {
                if (!args[2]) {
                    errEmbed.setDescription("Please set a welcome message you want me to send whenever a new member joins\nExample: `>setup welcomemessage <welcomemessage here, can be long af!>`\nRemember that the placeholders are always active\n**memberCount**: gets how many members there are in the server\n**botCount**: gets how many bots there is in the server\n**serverName**: gets the name of the server\n**userName**: gets the name of the member\n**userMention**: mentions the new member\n**userTag**: gets the new member's tag");
                    message.channel.send(errEmbed);
                }
                else {
                    sucEmbed.setDescription(`✅ Welcome message is now set to\n*${args.slice(2).join(" ")}*\nYou're all set for the greetings! Cowboish bot will now greet new members ;D`);
                    message.channel.send(sucEmbed);

                    guild.welcome.message = args.slice(2).join(" ");
                    guild.save().catch(console.error);

                }

            }
            if ((args[1]) === "leavechannel") {
                const channel = (message.mentions.channels.first());

                if (args[2] === "disable") {
                    sucEmbed.setDescription(`✅ Leave channel is disabled now!\nI will no longer say bai to members...`);
                    message.channel.send(sucEmbed);

                    guild.leave.enabled = false;
                    return guild.save().catch(console.error);
                }

                else if (!channel) {
                    errEmbed.setDescription("Please provide the channel name after the command\nExample: `>setup leavechannel <#channelname>`");
                    message.channel.send(errEmbed);
                }
                else {

                    sucEmbed.setDescription(`✅ Leave channel is now set to <#${channel}>!\nOne more step! you need to set the leave message by doing\n` + "`>setup leavemessage <leave message here..>`");
                    message.channel.send(sucEmbed);

                    guild.leave.enabled = true;
                    guild.leave.channel = channel.id;
                    guild.save().catch(console.error);
                }
            }//_____________SETUP FOR THE LEAVE CHANNEL_____________

            if ((args[1]) === "leavemessage") {

                if (!args[2]) {
                    errEmbed.setDescription("Please set a welcome message you want me to send whenever a new member joins\nExample: `>setup leavemessage <leavemessage here, can be long>`\nRemember that the placeholders are always active!\n::------------------------------------::\n**memberCount**: gets how many members there are in the server\n**botCount**: gets how many bots there is in the server\n**serverName**: gets the name of the server\n**userName**: gets the name of the member\n**userMention**: mentions the new member\n**userTag**: gets the new member's tag");
                    message.channel.send(errEmbed);
                }
                else {
                    sucEmbed.setDescription(`✅ Leave message is now set to\n*${args.slice(2).join(" ")}*\nYou're all set! Cowboish bot will now say goodbye to the badboiz`);
                    message.channel.send(sucEmbed);

                    guild.leave.message = args.slice(2).join(" ");
                    guild.save().catch(console.error);

                }

            }//------------Leave message here::::::::::::



        })//________________Guild. finde one_________________



    }
}