const Guild = require("../models/guild.js");
const { MessageEmbed } = require("discord.js");
const IdentityVNews = require("../models/news.js");
const spamStopper = new Set();
const p = require("../essences/patchnotes.js");

module.exports = {
    name: 'announcenews',
    description: "...",
    admins: ["478527909250990090", "427200618399268874", "638831021995065344"],
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MANAGE_MESSAGES", "ADD_REACTIONS"],
    execute: async (message, bot, args) => {

        const GUILDS = await Guild.find({});
        const Perms = ["SEND_MESSAGES", "ATTACH_FILES", "EMBED_LINKS"];

        if (args[1]) {
            if (["patch", "patchnotes", "patch-notes"].includes(args[1].toLowerCase())) {
                if (message.author.id != "478527909250990090") return;
                if (message.channel.id != "781594242069692466") return;
                if (!p.patchNotes) return;

                let patchNotes = p.patchNotes.replace(/(])/g, ']**')
                    .replace(/[[]/g, '**[')
                    .match(/.{1,1900}(\n|$)/gism);
                //.replace(/[(]/g, '**(').replace(/[)]/g, ')**');

                for (var i = 0; i < patchNotes.length; i++) {
                    const embed = new MessageEmbed()
                        .setColor("BLUE");

                    if (i === 0) {
                        embed.setTitle(`Identity V Patch Notes: ${p.PatchDate}`)
                            .setThumbnail("https://i.imgur.com/hSMftcq.png")
                    }
                    if (i === patchNotes.length - 1) {
                        embed.setFooter(p.patchDateFooter, bot.user.displayAvatarURL({ format: "png", dynamic: false }))
                            .setImage(p.patchImage);
                    }

                    GUILDS.filter(x => x.PatchChannel != null).forEach(async (doc) => {
                        const findPatchChannel = await bot.channels.cache.get(doc.PatchChannel);
                        if (!findPatchChannel) return;
                        if (findPatchChannel.deleted) return;
                        if (!findPatchChannel.viewable) return;
                        const permsInPatchChannel = findPatchChannel.guild.me.permissionsIn(findPatchChannel).toArray()

                        if (!Perms.includes(permsInPatchChannel)) {
                            if (!Perms[0].includes(permsInPatchChannel)) return;

                            if (i === 0) return findPatchChannel.send("Hello there! The Manor owner sent me to announce Patchnotes in this channel but unfortunately, I can't because I'm missing the permissions (**Attach Files** and **Embed Links**) in this channel specifically.\n\nPlease check the role that overrides these permissions and enable it so I'm able to announce Patchnotes next time, thanks! :)")
                            else return;
                        }

                        await findPatchChannel.send(embed.setDescription(patchNotes[i]));
                    });
                }
                return message.channel.send("Patch notes sent");
            }
        } else {
            if (message.channel.id != "778904412793864223") return;

            var vtoFind, vMessage, vTitle, vDescription, vImage, vThumbnail, vFooter;

            if (spamStopper.has(message.author)) return message.reply("**Cancelled... Please run the command again!**");

            let Q1 = await message.channel.send("Wanna cancel? send `N`\n**What kind of a shortcut would you give this News document?**\nShort and non-spacing shortcuts are recommended, like `percyNewHunter`...");
            spamStopper.add(message.author);

            const filter = m => m.author.id == message.author.id;

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 600000
            }).then(async collected => {
                if (["n"].includes(collected.first().content.toLowerCase())) {
                    spamStopper.delete(message.author);
                    return message.channel.send(`**Canceled!**`);
                }

                vtoFind = collected.first().content;

                collected.first().delete().catch(err => console.error(err));

                await Q1.edit("Send `N` to cancel...\n**What message do you want to be sent with the embed?**\nRight here, you can add '$ping' to the message content if you see the announcement ping-worthy");

                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10 * 60 * 1000
                }).then(async collected => {

                    if (["n"].includes(collected.first().content.toLowerCase())) {
                        spamStopper.delete(message.author);
                        return message.channel.send(`**Canceled!**`);
                    }

                    vMessage = collected.first().content;

                    collected.first().delete().catch(err => console.error(err));
                    Q1.edit("You can still cancel by sending `N` if you feel like you messed up...\n**What would the title of the embed be?**\nPick something fancy and related about the update/news ;)");

                    await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 10 * 60 * 1000
                    }).then(async collected => {

                        vTitle = collected.first().content;

                        collected.first().delete().catch(err => console.error(err));
                        Q1.edit("`N` to cancel\n**Now pick an intersting description of the embed...**\nMake sure to be as clear and informative as possible, to add a hyper like, do `[Blue Hyper Text](Link Here)`");

                        await message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 10 * 60 * 1000
                        }).then(async collected => {
                            vDescription = collected.first().content;

                            Q1.edit("**Now pick an image for me to attach into the embed...**\nHere, it can either be an image from your device or even a link... If it's a link then it __MUST__ end with `.png`/`.jpg`/`.gif` etc..");
                            collected.first().delete().catch(err => console.error(err));

                            await message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 10 * 60 * 1000
                            }).then(async collected => {

                                if (!collected.first()) return;
                                else if (["n"].includes(collected.first().content.toLowerCase())) {
                                    spamStopper.delete(message.author);
                                    return message.channel.send(`**Canceled!**`);
                                }
                                else if (!collected.first().attachments.first()) vImage = collected.first().content;
                                else vImage = collected.first().attachments.first().url;

                                Q1.edit("**Now, send me a thumbnail(small image on the right) for me to attach into the embed**\nCan be an image from your device or a link...\nWant me to make it a fancy **Netease** icon? Send `netease`\nWant me to attach the **Identity V** icon? Send `idv`");
                                collected.first().delete().catch(err => console.error(err));

                                await message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 10 * 60 * 1000
                                }).then(async collected => {

                                    if (["n"].includes(collected.first().content.toLowerCase())) {
                                        spamStopper.delete(message.author);
                                        return message.channel.send(`**Canceled!**`);
                                    }
                                    else if (["idv", "identityv", "identity v"].includes(collected.first().content.toLowerCase())) {
                                        vThumbnail = "https://i.imgur.com/owSSNF4.png";
                                    } else if (["netease", "net ease"].includes(collected.first().content.toLowerCase())) {
                                        vThumbnail = "https://i.imgur.com/WAf9KK1.png";
                                    } else {
                                        if (!collected.first().attachments.first()) vThumbnail = collected.first().content;
                                        else vThumbnail = collected.first().attachments.first().url;
                                    }

                                    Q1.edit("**Now pick a Footer for the embed**\nA footer could be further information, or even the News' release date :D");
                                    collected.first().delete().catch(err => console.error(err));
                                    await message.channel.awaitMessages(filter, {
                                        max: 1,
                                        time: 10 * 60 * 1000
                                    }).then(async collected => {
                                        if (["n"].includes(collected.first().content.toLowerCase())) {
                                            spamStopper.delete(message.author);
                                            return message.channel.send(`**Canceled!**`);
                                        }
                                        vFooter = collected.first().content;
                                        collected.first().delete().catch(err => console.error(err));

                                        const embed = new MessageEmbed()
                                            .setColor("1F05FA")
                                            .setAuthor("Identity V ~ News/Updates", "https://i.imgur.com/hSMftcq.png")
                                            .setTitle(vTitle)
                                            .setDescription(vDescription)
                                            .setImage(vImage)
                                            .setThumbnail(vThumbnail)
                                            .setFooter(vFooter, bot.user.displayAvatarURL({ format: "png", dynamic: false }));

                                        Q1.edit(vMessage.replace("$ping", "(Ping)"), embed);

                                        await Q1.react('✅');
                                        await Q1.react('❌');

                                        let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;
                                        let sendFilter = (reaction, user) => reaction.emoji.name === '✅' & user.id === message.author.id;

                                        let end = Q1.createReactionCollector(endFilter, {
                                            time: 300000
                                        });

                                        let sendIt = Q1.createReactionCollector(sendFilter, {
                                            time: 300000
                                        });

                                        sendIt.on("collect", async r => {
                                            Q1.reactions.removeAll().catch(error => console.log(error));
                                            spamStopper.delete(message.author);

                                            IdVNews = await IdentityVNews.findOne({ toGrab: "632291800585076761" });
                                            await IdentityVNews.updateOne({ toGrab: "632291800585076761" },
                                                {
                                                    News: [
                                                        {

                                                            toFind: `${vtoFind}`,
                                                            Message: `${vMessage}`,
                                                            Title: `${vTitle}`,
                                                            Description: `${vDescription}`,
                                                            Image: `${vImage}`,
                                                            Thumbnail: `${vThumbnail}`,
                                                            Footer: `${vFooter}`
                                                        },
                                                        ...IdVNews.News
                                                    ]

                                                });

                                            IdvNews = await IdentityVNews.findOne({ toGrab: "632291800585076761" });

                                            for (const g of GUILDS.filter(x => x.News.Channel != null)) {
                                                if (g.News.Channel == null) return;

                                                const guild = await bot.guilds.cache.get(g.guildID);
                                                if (!guild) return;
                                                if (!guild.available) return;

                                                const toSendChannel = await bot.channels.cache.get(g.News.Channel);
                                                if (!toSendChannel) return;
                                                if (toSendChannel.deleted) return;
                                                if (!toSendChannel.viewable) return;

                                                const permsInNewsChannel = toSendChannel.guild.me.permissionsIn(toSendChannel).toArray()

                                                if (!Perms.includes(permsInNewsChannel)) {
                                                    if (!Perms[0].includes(permsInNewsChannel)) return;

                                                    return findPatchChannel.send("Hello there! The Manor owner sent me to announce Identity V News in this channel but unfortunately, I can't because I'm missing the permissions (**Attach Files** and **Embed Links**) in this channel specifically.\n\nPlease check the role that overrides these permissions and enable it so I'm able to announce Identity V news next time, thanks! :)")
                                                }

                                                let toPingRole = await guild.roles.cache.get(g.News.toPingRole);
                                                if (g.News.toPingRole == "everyone") toPingRole = "@everyone";
                                                else if (g.News.toPingRole == "here") toPingRole = "@here";
                                                else if (!toPingRole) toPingRole = "";

                                                await toSendChannel.send(vMessage.replace("$ping", toPingRole), embed);

                                            }

                                            message.channel.send(`${message.author} process started... Update/News should be sent in the mean time :)`);

                                        });

                                        end.on('collect', async r => {
                                            Q1.reactions.removeAll().catch(error => console.log(error));
                                            spamStopper.delete(message.author);

                                            message.channel.send(`${message.author} cancelled the process of announcing.. ^-^`);

                                        });

                                        end.on('end', async () => {
                                            spamStopper.delete(message.author);
                                            Q1.reactions.removeAll().catch(error => console.log(error));
                                        });

                                    }).catch(collected => {
                                        spamStopper.delete(message.author);
                                        return message.reply(`**Time is over!** try again...`);
                                    });

                                }).catch(collected => {
                                    spamStopper.delete(message.author);

                                    return message.reply(`**Time is over!** try again...`);
                                });

                            }).catch(collected => {
                                spamStopper.delete(message.author);

                                return message.reply(`**Time is over!** try again...`);
                            });

                        }).catch(collected => {
                            spamStopper.delete(message.author);

                            return message.reply(`**Time is over!** try again...`);
                        });

                    }).catch(collected => {
                        spamStopper.delete(message.author);

                        return message.reply(`**Time is over!** try again...`);
                    });

                }).catch(collected => {
                    spamStopper.delete(message.author);

                    return message.reply(`**Time is over!** try again...`);
                });
            }).catch(collected => {
                spamStopper.delete(message.author);
                return message.reply(`**Time is over!** try again...`);
            });

        }

    }
}