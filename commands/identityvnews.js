const Guild = require("../models/guild.js");
const { MessageEmbed } = require('discord.js');
const { findRole, checkForGuildDataExistance, findChannel } = require("../functions.js");

module.exports = {
    name: ["identityvnews", "idvnews", "identityvupdates", "identityvupdatesandnews", "identityvnewsandupdates", "idvupdates"],
    description: "Cowboish Bot has the ability to power your server up with the lastest **Identity V News And Updates**\nAll you gotta do is providing the bot a channel to send news in it using this command.\nYou even have the ability to set a **to-ping** role or mention once the bot send a news annoncement!\n\nYou can even set a channel for cowboish to send a full version of the **Patch Notes** whenever they're out\n\n**Usage:** `$prefixIdentityVNews <whatToSet> <channel/role>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
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

        const NewsChannel = await findChannel(message, args[2]);

        if (args[1]) {
            if (["channel", "newschannel", "setchannel", "setc", "c"].includes(args[1].toLowerCase())) {
                if (args[2]) {
                    if (["turn-off", "off", "disable"].includes(args[2].toLowerCase())) {
                        if (guild.News.Channel === null) return message.reply("The Identity V News function is already disabled >:/");

                        const newsChannel = guild.News.Channel;

                        guild.News.Channel = null;
                        guild.save().catch(e => console.log(e));

                        return message.reply(`Successfully disabled the **IdentityVNews Announcement** function ^-^\nI will no longer send Identity V Game Updates in <#${newsChannel}>`);
                    }
                    if (!NewsChannel) return message.channel.send(errEmbed.setDescription("Please provide a channel to set as the Identity V News channel\n\n**Example:** `" + prefix + "identityvnews Channel <#channelMention>`"));
                    if (!message.guild.channels.cache.get(NewsChannel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

                    guild.News.Channel = NewsChannel.id;
                    guild.save().catch(e => console.log(e));

                    return message.channel.send(sucEmbed.setDescription(`Sucessfully set the **Identity V News** channel to <#${NewsChannel.id}>\n - From now on, hot Idv news will be announced there...\n\nWant me to ping everyone/here/or a role when a News message is sent? Do:\n` + "`" + prefix + "IdentityVNews role <@roleGoesHere>`"));
                }
            }
            if (["role", "topingrole", "to-ping-role"].includes(args[1].toLowerCase())) {
                if (args[2]) {
                    if (["everyone", "here"].includes(args[2].toLowerCase().replace("@", ""))) {
                        if (["everyone", "here"].includes(guild.News.toPingRole)) {
                            guild.News.toPingRole = null;

                            return message.channel.send(sucEmbed.setDescription("Successfully removed the **To Ping Role** for the Identity V News And Updates function :)"));
                        } else {
                            guild.News.toPingRole = args[2].toLowerCase().replace("@", "");
                            guild.save().catch(e => console.log(e));

                            return message.channel.send(sucEmbed.setDescription(`**Done!** :D\nFrom now on, i will ping @${args[2].toLowerCase().replace("@", "")} whenever I announce an Identity V Update or News ;)\n\nOh no, you didn't wanna do that? It's alright friend, if you want to disable the **to Ping** function, do\n` + "`" + prefix + "IdentityVNews role <mentionHereAgain>`\nYou get it? Adding an already existing **to-ping** role/mention disables it ;)"));
                        }
                    }

                    const searchForARole = await findRole(message, args.slice(2).join(" "));

                    if (!searchForARole) return message.channel.send(errEmbed.setDescription("Couldn't find any roles in your message above!\n\nPlease make sure to ping that role or provide it's name/id after the command...\n**Example: **`" + prefix + "IdentityVNews role <RoleHere>`"));

                    if ([guild.News.toPingRole].includes(searchForARole.id)) {

                        guild.News.toPingRole = null;
                        guild.save().catch(e => console.log(e));

                        return message.reply(`Successfully removed the role **${searchForARole.name}** from the Identity V News function, this means i won't ping the role once an update is announced`);
                    }
                    guild.News.toPingRole = searchForARole.id;
                    guild.save().catch(e => console.log(e));

                    return message.channel.send(sucEmbed.setDescription(`Yey! From now on, I will ping ${searchForARole} whenever I announce an Identity V News or Update!\n\nOh no, you didn't wanna do that? It's alright friend, if you want to disable the **to Ping** function, do\n` + "`" + prefix + "IdentityVNews role <mentionHereAgain>`\nYou get it? Adding an already existing **to-ping** role/mention disables it"));

                } else {
                    return message.channel.send(errEmbed.setDescription("**Arguments Missing!**\nIf you want me to set an __Identity V News and Updates__ Channel then you need to provide me which channel you want me to send news in, to do that, mention the channel in your second argument.\n\n**Example:** `" + prefix + "IdentityVNews Channel <#MentionChennelHere>`\n\nIn order for me to set a **to-ping** role, you gotta provide me the role you want me to mention whenever an Identity V News announcement is sent right?\n\nOkay now, try again but mention a role. \n**Example:** `" + prefix + "IdentityVNews Role <RoleGoesHere>`\n\nIt doesn't have to be a role, it can also be 'everyone' or 'here' if you want me to mention that ^-^"));
                }
            } else if (["patchnotes", "patch-notes", "patch_notes", "identityvpatchnotes", "patchnoteschannel"].includes(args[1].toLowerCase())) {
                if (!args[2]) return message.channel.send(errEmbed.setDescription("**Missing Arguments**\nYou gotta provide me the **Patch-Notes Channel** in your second arguments...\n\n**Example:** `" + prefix + "identityvnews patchnotes <#Channel>`"));

                if (["turn-off", "off", "disable"].includes(args[2].toLowerCase())) {
                    if (guild.PatchChannel === null) return message.reply("The **Identity V Patch-Notes** function is already disabled >:/");

                    const patchNotesChannel = guild.PatchChannel;

                    guild.PatchChannel = null;
                    guild.save().catch(e => console.log(e));

                    return message.reply(`Successfully disabled the **IdentityV Patch Notes** function ^-^\nI will no longer send the patch notes in <#${patchNotesChannel}>`);
                }

                const findPatchNotesChannel = await findChannel(message, args.slice(2).join(" "));

                if (!findPatchNotesChannel) return message.channel.send(errEmbed.setDescription("**Channel not found!**\nI failed to find any channel in your message, please make sure you actually provided one... Try again and run:\n`" + prefix + "idvNews patchnotes <#channelGoesHere>`"));

                if (!message.guild.channels.cache.get(findPatchNotesChannel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

                guild.PatchChannel = findPatchNotesChannel.id;
                guild.save().catch(e => console.log(e));

                return message.channel.send(sucEmbed.setDescription(`Sucessfully set the **Identity V Patch-Notes Channel** to <#${NewsChannel.id}>\n - From now on, newly released patch notes will be sent in that channel :D`));

            }
        }

        let checkFor = [
            {
                toCheck: guild.News.Channel,
                toSayIfNull: "📰 __**Identity V News Channel is not set**__\nDo `" + prefix + "IdentityVNews Channel <#channel>` if you want to get informed of the latest Identity V News",
                toSayIfTrue: "📰 **Identity V News Channel** <#" + guild.News.Channel + ">\nWanna disable this function? If so then do\n`" + prefix + "IdentityVNews channel disable`"
            },
            {
                toCheck: guild.PatchChannel,
                toSayIfNull: "📓 __**Identity V Patch-Notes Channel Is Not Set**__\nDo `" + prefix + "IdentityVNews PatchNotesChannel <#channel>` if you want Cowboish to post the full version of the Patch-Notes in the channel",
                toSayIfTrue: "📓 **Identity V Patch-Notes Channel** <#" + guild.PatchChannel + ">\nWanna disable this function? If so, do\n`" + prefix + "IdentityVNews Patch-Notes disable`"
            }
        ],
            description = "Cowboish Bot has the ability to power your server up with the lastest **Identity V News And Updates**\nAll you gotta do is providing the bot a channel to send news in it using this command.\nYou even have the ability to set a to-ping role or mention once the bot send a news annoncement!\n\n";

        for (const toCheckForThingie of checkFor) {
            if (toCheckForThingie.toCheck === null) description = description + toCheckForThingie.toSayIfNull + "\n\n";
            else description = description + toCheckForThingie.toSayIfTrue + "\n\n";
        }

        if (guild.News.toPingRole != null) {
            var TheToPingRole = "\n";

            if (["here", "everyone"].includes(guild.News.toPingRole)) {
                TheToPingRole = `\n@${guild.News.toPingRole}`;
            } else {
                let findTo_Ping_role = await findRole(message, guild.News.toPingRole);

                if (!findTo_Ping_role) TheToPingRole = TheToPingRole + "Found a deleted role... Please add a new IdentityVNews Role"
                else TheToPingRole = TheToPingRole + "<@&" + findTo_Ping_role + ">";
            }

            description = description + `🗞️ **Identity V News To-Ping-Role is set as ${TheToPingRole}**` + "\nWanna edit/remove the role? Do \n`" + prefix + "IdentityVNews role " + guild.News.toPingRole + "`\n\n";

        } else {
            description = description + "🗞️ **__Identity V News To-Ping-Role is not set!__**\nNo role will be pinged once an Identity V News announcement is sent, if you want to add a To-Ping-Role, do\n`" + prefix + "IdentityVNews role <role>`\n\n`<role>` can be a role, here or a everyone mention\n\n**Note:** Setting up a To-ping role/mention is not a must. On the other hand, you need to set a News-Channel in order for this function to work :)"
        }

        const doneEmbed = new MessageEmbed()
            .setTitle(`${message.guild.name} information!`)
            .setDescription(`${description}`)
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
            .setColor("0x00BDFF");

        return message.channel.send(doneEmbed);
    }
}