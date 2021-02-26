const Guild = require("../../models/guild.js");
const { MessageEmbed } = require('discord.js');
const { findRole, checkForGuildDataExistance, findChannel } = require("../../src/functions.js");

module.exports = {
    name: ["setup", "set"],
    description: "Set up some stuff for the Server...\nYou can set a:\n\n**Greeting Channel**\n- Where Cowboish will refer to and send the Greet-Message in\n\n**Custom Greet Message**\n- Customize a message for Cowboish to send whenever a new member joins the server\n\n**Leave Channel**\n- Set a Channel for Cowboish to refer to and send the Leave-message in whenever a member leaves the Server\n\n**Custom Leave Message**\n- Set a customized message for Cowboish to send whenver a Member leaves the Server\n\n**Auto Roles to be given for new members**\n- Assign roles for Cowboish to automatically give new members these roles",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Moderation",
    execute: async (message, args, prefix) => {
        await checkForGuildDataExistance(message);
        const guild = await Guild.findOne({ guildID: message.guild.id });

        const errEmbed = new MessageEmbed()
            .setTitle("❌ Ooops an error has occurred! ❌")
            .setColor("0xf72020");


        const sucEmbed = new MessageEmbed()
            .setTitle("Changes committed succesfully!")
            .setColor("0x20f72b")
            .setTimestamp();


        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`This command requires the **Manage Guild** permission and you don't have it, ${message.author}`);

        function replaceMe(whatToReplace) {
            if (whatToReplace === null || !whatToReplace) return;
            let idk = whatToReplace
                .replace("memberCount", message.guild.memberCount)
                .replace("botCount", message.guild.members.cache.filter(x => x.user.bot).size)
                .replace("serverName", message.guild.name)
                .replace("userName", message.author.username)
                .replace("userMention", message.author.toString())
                .replace("userTag", message.author.tag);

            return idk;
        }

        if (!args[1]) {

            let checkFor = [
                {
                    toCheck: guild.welcome.channel,
                    toSayIfNull: "👏 __**Welcome Channel is not set!**__\nDo `" + prefix + "setup welcomechannel <#channelhere>`",
                    toSayIfTrue: "👏 **Welcome Channel is set to** <#" + guild.welcome.channel + ">\nDo `" + prefix + "setup welcomechannel disable` to disable this function..."
                },
                {
                    toCheck: guild.welcome.message,
                    toSayIfNull: "👏 __**Welcome Message is not set!**__\nDo `" + prefix + "setup welcomemessage <message to be sent goes here>`",
                    toSayIfTrue: "👏 **Welcome Message is set to** \n(" + replaceMe(guild.welcome.message) + ")\nDisabling the `welcomeChannel` automatically disables `welcomeMessage` too..."
                },
                {
                    toCheck: guild.leave.channel,
                    toSayIfNull: "😢 __**Leave Channel is not set!**__\nDo `" + prefix + "setup leavechannel <#channelTagHere>`",
                    toSayIfTrue: "😢 **Leave Channel is set to** <#" + guild.leave.channel + ">\nDo `" + prefix + "setup leavechannel disable` to disable this function..."
                },
                {
                    toCheck: guild.leave.message,
                    toSayIfNull: "😢 __**Leave Message is not set!**__\nDo `" + prefix + "setup leavemessage <message to be sent goes here>`",
                    toSayIfTrue: "😢 **Leave Message is set to** (" + replaceMe(guild.leave.message) + ")\nDisabling the `leaveChannel` automatically disables `leaveMessage` too..."
                }
            ],
                description = "\n";

            for (const toCheckForThingie of checkFor) {
                if (toCheckForThingie.toCheck === null) description = description + toCheckForThingie.toSayIfNull + "\n\n";
                else description = description + toCheckForThingie.toSayIfTrue + "\n\n";
            }

            if (guild.autoroles.length !== 0) {
                rolesTagged = "\n";

                for (const role of guild.autoroles) {
                    let findTheRole = await findRole(message, role);
                    if (!findTheRole) return;

                    if (rolesTagged === "\n") rolesTagged = `${rolesTagged} ${findTheRole}`
                    else rolesTagged = `${rolesTagged}, ${findTheRole}`
                }
                if (rolesTagged === "\n") rolesTagged = "Found Removed/Deleted Roles only...";

                description = description + `⚪ **Auto Roles**${rolesTagged}\nWanna remove it? Adding an already existing autorole removes it...`;
            } else {
                description = description + `⚪ **__Auto Roles__**\nNo autorole to be given to new members is set...\nTo add one, do ` + "`" + prefix + "setup autorole <@tagTheRoleHere>`"
            }

            const doneEmbed = new MessageEmbed()
                .setTitle(`${message.guild.name} setup information!`)
                .setDescription(description)
                .setThumbnail(message.guild.iconURL())
                .setColor("0x00BDFF");

            return message.channel.send(doneEmbed);
        }

        const channel = await findChannel(message, args[2]);

        if (["welcomechannel", "greetchannel"].includes(args[1].toLowerCase())) {

            if (["disable", "off"].includes(args[2].toLowerCase())) {

                guild.welcome.enabled = false;
                guild.save().catch(console.error);

                sucEmbed.setDescription("✅ Succesfully set greetings to flase...\nI now I will stop sending welcome messages to new members...");
                message.channel.send(sucEmbed);
            }
            else if (!channel) {
                errEmbed.setDescription("Please provide the channel name after the command\n**Example:** `>setup welcomechannel <#welcomechannel>`");
                message.channel.send(errEmbed);
            }
            else {
                if (!message.guild.channels.cache.get(channel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

                guild.welcome.enabled = true;
                guild.welcome.channel = channel.id;
                guild.save().catch(console.error);

                if (guild.welcome.message != null) sucEmbed.setDescription(`✅ Succesfully set the welcome channel to <#${channel.id}>\n\nGreetings are fully set now :D`);
                else sucEmbed.setDescription(`✅ Succesfully set the welcome channel to <#${channel.id}>\n\nAlmost there! you need to set the welcome message you want me to send by doing ` + "`>setup welcomemessage <welcomemessage here!>`");

                return message.channel.send(sucEmbed);
            }
        }
        if (["welcomemessage", "welcomemsg", "greetmessage", "greetmsg"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                if (guild.welcome.message === null) return message.channel.send(errEmbed.setDescription("Please set a welcome message you want me to send whenever a new member joins\n**Example:** `" + prefix + "setup welcomemessage <welcomemessage here>`\nYou can use the strings below and the bot will replace it with it's value:\n\n**memberCount**: gets how many members there are in the server\n**botCount**: gets how many bots there is in the server\n**serverName**: gets the name of the server\n**userName**: gets the name of the member\n**userMention**: mentions the new member\n**userTag**: gets the new member's tag"));
                else return message.channel.send(sucEmbed.setTitle("Welcome Message").setDescription(`This server's welcome Message/Greet message is set to:\n${replaceMe(guild.welcome.message)}`));
            }
            else {
                guild.welcome.message = args.slice(2).join(" ");
                guild.welcome.enabled = true;
                await guild.save().catch(console.error);

                if (guild.welcome.channel === null || guild.welcome.enabled === null) sucEmbed.setDescription(`✅ Welcome message is now set to:\n${replaceMe(guild.welcome.message)}\n\nOne more step to activate greetings... You gotta provide me a channel for me to send the message in... To do that do:\n` + "`" + prefix + "setup welcomeChannel <#TagChannelHere>`")
                else sucEmbed.setDescription(`✅ Welcome message is now set to:\n${replaceMe(guild.welcome.message)}\nYou're all set for the greetings! Cowboish bot will now greet new members ;D`);
                return message.channel.send(sucEmbed);
            }

        }
        if (["leavechannel", "leave-channel"].includes(args[1].toLowerCase())) {


            if (["disable", "off"].includes(args[2].toLowerCase())) {
                guild.leave.enabled = false;
                guild.save().catch(console.error);

                sucEmbed.setDescription(`✅ Leave channel is disabled now!\nI will no longer say bai to members...`);
                return message.channel.send(sucEmbed);

            }

            if (!channel) return message.channel.send(errEmbed.setDescription("Please provide the channel name after the command\n**Example:** `>setup leavechannel <#channelname>`"));

            if (!message.guild.channels.cache.get(channel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

            if (guild.leave.message === null) sucEmbed.setDescription(`✅ Leave channel is now set to <#${channel.id}>!\nOne more step! you need to set the leave message by doing\n` + "`>setup leavemessage <leave message here..>`");
            else sucEmbed.setDescription(`✅ Leave channel is now set to <#${channel.id}>!\n\nYou're ready to go :D\nImma say bai to people who leave the guild`);


            guild.leave.enabled = true;
            guild.leave.channel = channel.id;
            guild.save().catch(console.error);
            return message.channel.send(sucEmbed);

        }

        if (["leavemessage", "leavemsg", "leave-message"].includes(args[1].toLowerCase())) {
            if (!args[2]) return message.channel.send(errEmbed.setDescription("Please set a leave message you want me to send whenever a new member joins\n**Example**: `>setup leavemessage <leavemessage here, can be long>`\nRemember that the placeholders are always active!\n::-------------------::\n**memberCount**: gets how many members there are in the server\n**botCount**: gets how many bots there is in the server\n**serverName**: gets the name of the server\n**userName**: gets the name of the member\n**userMention**: mentions the new member\n**userTag**: gets the new member's tag"));

            guild.leave.enabled = true;
            guild.leave.message = args.slice(2).join(" ");
            await guild.save().catch(console.error);

            if (guild.leave.channel === null) sucEmbed.setDescription(`✅ Leave message is now set to:\n${replaceMe(guild.leave.message)}\n\nOne more step! You need to set the leaveChannel by doing ` + "`" + prefix + "setup leavechannel <#TagChannelHere>`");
            else sucEmbed.setDescription(`✅ Leave message is now set to:\n${replaceMe(guild.leave.message)}\n\nYou're all set! Cowboish bot will now say goodbye to the badboiz`);

            return message.channel.send(sucEmbed);

        }
        if (["autorole", "autoroles", "automaticrole", "roles", "role"].includes(args[1].toLowerCase())) {
            const searchForARole = await findRole(message, args.slice(2).join(" "));

            if (!searchForARole) return message.channel.send(errEmbed.setDescription("Couldn't find any roles in your message above!\n\nPlease make sure to ping that role or provide it's name/id after the command...\n**Example: **`" + prefix + "setup autorole <pingRoleHere>`"));

            if (guild.autoroles.includes(searchForARole.id)) {
                let spliced = guild.autoroles;
                spliced.splice(guild.autoroles.indexOf(searchForARole.id));

                guild.autoroles = spliced;

                guild.save().catch(e => console.log(e));
                return message.reply(`Successfully removed the role **${searchForARole.name}**!`);
            }

            guild.welcome.enabled = true;
            guild.autoroles = [...guild.autoroles, searchForARole.id];
            guild.save().catch(e => console.log(e));

            return message.channel.send(sucEmbed.setDescription(`Successfully added the role **${searchForARole.name}**\nThis role will now be given to new members :D`));
        }


    }
}