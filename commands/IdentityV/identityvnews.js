const Guild = require("../../models/guild.js");
const Discord = require('discord.js');
const IdentityVNews = require("../../models/news.js");
const { checkForGuildDataExistance, findChannel, getChannelByID } = require("../../src/functions.js");

module.exports = {
    name: ["identityvnews", "idvnews", "identityvupdates", "identityvupdatesandnews", "identityvnewsandupdates", "idvupdates"],
    description: "Cowboish Bot has the ability to power your server up with the lastest **Identity V News And Updates**\nAll you gotta do is providing the bot a channel to send news in it using this command.\nYou even have the ability to set a **to-ping** role or mention once the bot send a news annoncement!\n\nYou can even set a channel for cowboish to send a full version of the **Patch Notes** whenever they're out\n\n**Usage:** `$prefixIdentityVNews <whatToSet> <channel/role>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MANAGE_WEBHOOKS"],
    category: "IdentityV",
    execute: async (message, args, bot, prefix) => {
        await checkForGuildDataExistance(message);
        const guild = await Guild.findOne({ guildID: message.guild.id });

        const errEmbed = new Discord.MessageEmbed()
            .setTitle("❌ Ooops an issue has occurred! ❌")
            .setColor("0xf72020");

        const sucEmbed = new Discord.MessageEmbed()
            .setTitle("Changes committed succesfully!")
            .setColor("0x20f72b")
            .setTimestamp();

        const cowboishNewsChannel = await getChannelByID(bot, "776912297838772224");
        const cowboishPatchChannel = await getChannelByID(bot, "781235256245878804");

        async function followChannel(newFollower, toFollow, reason) {
            await toFollow.addFollower(newFollower.id, reason)
                .catch(console.error);
        }

        /** [removeWebhooks function]
         *  Removes all existing followed-channel webhooks in a specific channel.
         * @param {Discord.Channel.id} Channel The channel you want to remove the webhooks from.
         * @param {Discord.NewsChannel.name} HookName The channel name which refers to the News-Channel webhook. (Must be an announcement channel).
         */
        async function removeWeebhooks(Channel, HookName) {
            await message.guild.channels.cache.get(Channel)
                .fetchWebhooks().then(async (hooks) => {
                    if (!hooks) return;

                    await hooks.each(async (hook) => {
                        if (hook.name != `Cowboish Server #${HookName}`) return;

                        await hook.delete(`Requested by ${message.author.tag}`).catch(e => console.log(e));

                    });
                });
        }



        if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.channel.send(`This command requires the **Manage Webhooks** permission and you don't have it, ${message.author}`);

        const NewsChannel = await findChannel(message, args[2]);

        if (args[1]) {
            if (["channel", "newschannel", "setchannel"].includes(args[1].toLowerCase())) {
                if (args[2]) {
                    if (["turn-off", "off", "disable"].includes(args[2].toLowerCase())) {
                        if (guild.NewsChannel === null) return message.reply("The Identity V News function is already disabled >:/");

                        const newsChannel = guild.NewsChannel;

                        await removeWeebhooks(guild.NewsChannel, cowboishNewsChannel.name);

                        guild.NewsChannel = null;
                        guild.save().catch(e => console.log(e));

                        return message.reply(`Successfully disabled the **IdentityVNews Announcement** function ^-^\nI will no longer send Identity V Game Updates in <#${newsChannel}>`);
                    }
                    if (!NewsChannel) return message.channel.send(errEmbed.setDescription("Please provide a channel to set as the Identity V News channel\n\n**Example:** `" + prefix + "identityvnews Channel <#channelMention>`"));
                    if (!message.guild.channels.cache.get(NewsChannel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

                    await followChannel(NewsChannel, cowboishNewsChannel, `Set a channel to announce Identity V News in, requested by ${message.author.tag}`);

                    guild.NewsChannel = NewsChannel.id;
                    guild.save().catch(e => console.log(e));

                    return message.channel.send(sucEmbed.setDescription(`Sucessfully set the **Identity V News** channel to <#${NewsChannel.id}>\n - From now on, Identity V News will be announced there...\n\n**Note:** Do not change the name of the webhook created.`));
                }
                return message.channel.send(errEmbed.setDescription("**Arguments Missing!**\nIf you want me to set an __Identity V News and Updates__ Channel then you need to provide me which channel you want me to send news in, to do that, mention the channel in your second argument.\n\n**Example:** `" + prefix + "IdentityVNews Channel <#MentionChennelHere>`"));

            }

            else if (["patch", "patches", "patchnotes", "patch-notes", "patch_notes", "identityvpatchnotes", "patchnoteschannel", "patchchannel"].includes(args[1].toLowerCase())) {
                if (!args[2]) {
                    if (guild.PatchChannel) return message.channel.send(errEmbed.setDescription("**Too Few Arguments!**\nAre you trying to set a new channel for me to send the Patch Notes in or do you want me to cancel this feature?\n\nTo add a new channel for me to send the patch notes in, run `" + prefix + "idvnews PatchChannel <#Channel>`\n\nWanna disable this feature? Run `" + prefix + "idvnews PatchChannel disable`"));
                    return message.channel.send(errEmbed.setDescription("**Missing Arguments**\nYou gotta provide me the **Patch-Notes Channel** in your second arguments...\n\n**Example:** `" + prefix + "identityvnews patchnotes <#Channel>`"));
                }

                if (["turn-off", "off", "disable"].includes(args[2].toLowerCase())) {
                    if (guild.PatchChannel === null) return message.reply("The **Identity V Patch-Notes** function is already disabled >:/");

                    const patchNotesChannel = guild.PatchChannel;

                    await removeWeebhooks(guild.PatchChannel, cowboishPatchChannel.name);

                    guild.PatchChannel = null;
                    guild.save().catch(e => console.log(e));

                    return message.reply(`Successfully disabled the **IdentityV Patch Notes** function ^-^\nI will no longer send the patch notes in <#${patchNotesChannel}>`);
                }

                const findPatchNotesChannel = await findChannel(message, args.slice(2).join(" "));

                if (!findPatchNotesChannel) return message.channel.send(errEmbed.setDescription("**Channel not found!**\nI failed to find any channel in your message, please make sure you actually provided one... Try again and run:\n`" + prefix + "idvNews patchnotes <#channelGoesHere>`"));

                if (!message.guild.channels.cache.get(findPatchNotesChannel.id)) return message.channel.send(errEmbed.setDescription("Oops! I couldn't find this channel in this guild... Make sure you're providing a valid channel that actually exists in this server"));

                await followChannel(NewsChannel, cowboishPatchChannel, `Set a channel to announce Identity V Patch Notes in, requested by ${message.author.tag}`)

                guild.PatchChannel = findPatchNotesChannel.id;
                guild.save().catch(e => console.log(e));

                return message.channel.send(sucEmbed.setDescription(`Sucessfully set the **Identity V Patch-Notes Channel** to <#${NewsChannel.id}>\n - From now on, newly released patch notes will be sent in that channel...\n**NOTE:** Do not change the name of the webhook created.`));

            } else if (["newslist", "list", "shownews"].includes(args[1].toLowerCase())) {
                const IdVNews = await IdentityVNews.findOne({ toGrab: "632291800585076761" });
                let i = 0;

                const embed = new Discord.MessageEmbed()
                    .setColor("1F05FA")
                    .setAuthor("Identity V ~ News/Updates", "https://i.imgur.com/hSMftcq.png")
                    .setDescription(IdVNews.News[i].Description)
                    .setImage(IdVNews.News[i].Image)
                    .setThumbnail(IdVNews.News[i].Thumbnail)
                    .setFooter(IdVNews.News[i].Footer, bot.user.displayAvatarURL({ format: "png", dynamic: false }));

                if (IdVNews.News[i].Title) embed.setTitle(IdVNews.News[i].Title)

                const msg = await message.channel.send(embed);


                async function generateNews(r) {
                    if (r.emoji.name == "➡️") {
                        if (i === IdVNews.News.length - 1) i = 0;
                        else i++;

                    } else if (r.emoji.name == "⬅️") {
                        if (i === 0) i = IdVNews.News.length - 1;
                        else i--;

                    } else {
                        await msg.reactions.removeAll().catch(error => console.log(error));
                        return await msg.edit("Processing News Has Been Stopped! Thank you for using Cowboish", embed);
                    }

                    embed.setDescription(IdVNews.News[i].Description)
                        .setImage(IdVNews.News[i].Image)
                        .setThumbnail(IdVNews.News[i].Thumbnail)
                        .setFooter(IdVNews.News[i].Footer, bot.user.displayAvatarURL({ format: "png", dynamic: false }));
                    if (IdVNews.News[i].Title) embed.setTitle(IdVNews.News[i].Title)

                    await msg.edit(embed);
                }


                Promise.all([
                    msg.react('⬅️'),
                    msg.react('➡️'),
                    msg.react('❌')
                ]).catch(e => console.log(e));


                const reactFilter = (reaction, user) => ["❌", "➡️", "⬅️"].includes(reaction.emoji.name) & user.id === message.author.id;

                const reactionCollector = await msg.createReactionCollector(reactFilter, {
                    time: 300000
                });

                reactionCollector.on("collect", async r => {
                    await r.users.remove(message.author);
                    generateNews(r)

                });

                reactionCollector.on('end', async () => {
                    await msg.reactions.removeAll().catch(error => console.log(error));
                    await msg.edit("Time ended, thank you for using Cowboish!", embed);
                });

                return;
            }
        }

        let checkFor = [
            {
                toCheck: (guild.NewsChannel),
                toSayIfNull: "📰 __**Identity V News Channel is not set**__\nDo `" + prefix + "IdentityVNews Channel <#channel>` if you want to get informed of the latest Identity V News",
                toSayIfTrue: "📰 **Identity V News Channel** <#" + guild.NewsChannel + ">\nWanna disable this function? If so then do\n`" + prefix + "IdentityVNews channel disable`"
            },
            {
                toCheck: guild.PatchChannel,
                toSayIfNull: "📓 __**Identity V Patch-Notes Channel Is Not Set**__\nDo `" + prefix + "IdentityVNews PatchNotesChannel <#channel>` if you want Cowboish to post the full version of the Patch-Notes in the channel",
                toSayIfTrue: "📓 **Identity V Patch-Notes Channel** <#" + guild.PatchChannel + ">\nWanna disable this function? If so, do\n`" + prefix + "IdentityVNews Patch-Notes disable`"
            }
        ],
            description = "Cowboish Bot has the ability to power your server up with the lastest **Identity V News And Updates**\nAll you gotta do is providing the bot a channel to send news in it using this command.\nYou can also set a Patch-Notes channel where the entire weekly patchnote list would be sent to.\n\n";

        for (const toCheckForThingie of checkFor) {
            if (toCheckForThingie.toCheck === null) description = description + toCheckForThingie.toSayIfNull + "\n\n";
            else description = description + toCheckForThingie.toSayIfTrue + "\n\n";
        }

        description += "🗞️ **Wanna scroll through the News List without having to set a channel?**\nIf so, do\n`" + prefix + "IdentityVNews newsList`\nYou can also see the entire Patch-Notes via the command `" + prefix + "Patchnotes`"

        const doneEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.guild.name} information!`)
            .setDescription(`${description}`)
            .setThumbnail(message.guild.iconURL())
            .setTimestamp()
            .setColor("0x00BDFF");

        return message.channel.send(doneEmbed);
    }
}