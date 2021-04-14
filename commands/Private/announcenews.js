const { MessageEmbed } = require("discord.js");
const IdentityVNews = require("../../models/news.js");
const spamStopper = new Set();
const p = require("../../src/patchnotes.js");
const { getChannelByID, formatDate } = require("../../src/functions.js");

module.exports = {
    name: 'announcenews',
    description: "...",
    admins: ["478527909250990090", "698795283055902832", "427200618399268874", "638831021995065344"],
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MANAGE_MESSAGES", "ADD_REACTIONS"],
    execute: async (message, bot, args) => {

        const cowboishNewsChannel = await getChannelByID(bot, "776912297838772224");
        const cowboishPatchChannel = await getChannelByID(bot, "781235256245878804");

        async function handleCrossposting(msg, embedToSend, vMessage, vTitle, vDescription, vImage, vThumbnail, vFooter) {
            if (vMessage == null) vMessage = "Check the latest Identity V News!";

            await msg.react('✅');
            await msg.react('❌');

            const reactFilter = (reaction, user) => ["❌", "✅"].includes(reaction.emoji.name) & user.id === message.author.id;

            const reactionCollector = await msg.createReactionCollector(reactFilter, {
                time: 300000
            });

            reactionCollector.on("collect", async r => {
                if (r.emoji.name == "✅") {
                    await msg.reactions.removeAll().catch(error => console.log(error));
                    spamStopper.delete(message.author);

                    const IdVNews = await IdentityVNews.findOne({ toGrab: "632291800585076761" });
                    await IdentityVNews.updateOne({ toGrab: "632291800585076761" },
                        {
                            News: [
                                {

                                    toFind: `x`,
                                    Message: vMessage ? vMessage : null,
                                    Title: vTitle ? vTitle : null,
                                    Description: `${vDescription}`,
                                    Image: `${vImage}`,
                                    Thumbnail: `${vThumbnail}`,
                                    Footer: `${vFooter}`
                                },
                                ...IdVNews.News
                            ]

                        });
                    await cowboishNewsChannel.send(vMessage, embedToSend).then(async (post) => {
                        if (post.crosspostable) {
                            await post.crosspost().catch(console.error);
                        }
                    }).catch(console.error);

                } else {
                    msg.reactions.removeAll().catch(error => console.log(error));
                    spamStopper.delete(message.author);

                    msg.edit(`${message.author} cancelled the process of announcing.. ^-^`);
                }
            });

            reactionCollector.on('end', async () => {
                spamStopper.delete(message.author);
                msg.reactions.removeAll().catch(error => console.log(error));
                msg.edit("Announcing cancelled!", embedToSend);
            });
        }

        if (args[1]) {
            if (["patch", "patchnotes", "patch-notes"].includes(args[1].toLowerCase())) {
                if (message.author.id != "478527909250990090") return;
                if (message.channel.id != "781594242069692466") return;
                if (!p.patchNotes) return;

                const patchNotes = p.patchNotes
                    .replace(/(\[.*\])|(\d+%)/g, "**$&**")
                    .match(/.{1,1900}(\n|$)/gism);

                if (!cowboishNewsChannel) return;
                if (cowboishNewsChannel.deleted) return;
                if (!cowboishNewsChannel.viewable) return;

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

                    cowboishPatchChannel.send(embed.setDescription(patchNotes[i])).then(async (post) => {
                        setTimeout(async () => {
                            if (post.crosspostable) {
                                await post.crosspost().catch(console.error);
                            }
                        }, 1000 * i);
                    }).catch(console.error);
                }
            } else if (["twitter", "twitt", "twi"].includes(args[1].toLowerCase())) {

                const twitterEmbed = new Discord.MessageEmbed()
                    .setColor("1F05FA")
                    .setAuthor("Identity V ~ News/Updates", "https://i.imgur.com/hSMftcq.png")
                    .setDescription(`${message.embeds[0].description}\n\n[Source](${message.embeds[0].url})`)
                    .setImage(message.embeds[0].image.url)
                    .setThumbnail("https://i.imgur.com/owSSNF4.png")
                    .setFooter(formatDate(Date.now()).replace(/\//g, " . "), bot.user.displayAvatarURL({ format: "png", dynamic: false }));

                const sendit = await message.channel.send(twitterEmbed);

                handleCrossposting(sendit, twitterEmbed, null, null, `${message.embeds[0].description}\n\n[Source](${message.embeds[0].url})`, message.embeds[0].image.url, "https://i.imgur.com/owSSNF4.png", formatDate(Date.now()).replace(/\//g, " . "));
            }
        } else {
            if (message.channel.id != "778904412793864223") return;

            let vMessage, vTitle, vDescription, vImage, vThumbnail, vFooter;

            if (spamStopper.has(message.author)) return message.reply("**Cancelled... Please run the command again!**");

            let Q1 = await message.channel.send("Wanna cancel? send `N`\n**What kind of a shortcut would you give this News document?**\nShort and non-spacing shortcuts are recommended, like `percyNewHunter`...");
            spamStopper.add(message.author);

            const filter = m => m.author.id == message.author.id;
            let messagesSent = 0;

            const messageCollector = await message.channel.createMessageCollector(filter, {
                max: 7,
                time: 600000
            });

            messageCollector.on('collect', async (collected) => {
                if (["n", "no", "cancel"].includes(collected.content.toLowerCase())) {
                    spamStopper.delete(message.author);
                    return await Q1.edit(`**Canceled!**`);
                }

                messagesSent++;

                if (messagesSent === 0) {
                    vMessage = collected.content;
                    Q1.edit("You can still cancel by sending `N` if you feel like you messed up...\n**What would the title of the embed be?**\nPick something fancy and related about the update/news ;)");

                } else if (messagesSent === 1) {
                    vTitle = collected.content;
                    Q1.edit("`N` to cancel\n**Now pick an intersting description of the embed...**\nMake sure to be as clear and informative as possible, to add a hyper like, do `[Blue Hyper Text](Link Here)`");

                } else if (messagesSent === 2) {
                    vDescription = collected.content;

                    Q1.edit("**Now pick an image for me to attach into the embed...**\nHere, it can either be an image from your device or even a link... If it's a link then it __MUST__ end with `.png`/`.jpg`/`.gif` etc..");
                } else if (messagesSent === 3) {
                    if (!collected) {
                        spamStopper.delete(message.author);
                        return message.channel.send(`**No image found!**\nCanceled!`);
                    }
                    if (!collected.attachments.first()) vImage = collected.content;
                    else vImage = collected.attachments.first().url;
                    Q1.edit("**Now, send me a thumbnail(small image on the right) for me to attach into the embed**\nCan be an image from your device or a link...\nWant me to make it a fancy **Netease** icon? Send `netease`\nWant me to attach the **Identity V** icon? Send `idv`\nWant me to attach the **Identity V GAME** icon? Send `game`");

                } else if (messagesSent === 4) {
                    if (["idv", "identityv", "identity v"].includes(collected.content.toLowerCase())) {
                        vThumbnail = "https://i.imgur.com/owSSNF4.png";
                    } else if (["netease", "net ease"].includes(collected.content.toLowerCase())) {
                        vThumbnail = "https://i.imgur.com/WAf9KK1.png";
                    } else if (["game", "gameicon"].includes(collected.content.toLowerCase())) {
                        vThumbnail = "https://i.imgur.com/hSMftcq.png";
                    } else {
                        if (!collected.attachments.first()) vThumbnail = collected.content;
                        else vThumbnail = collected.attachments.first().url;
                    }

                    Q1.edit("**Now pick a Footer for the embed**\nA footer could be further information, or even the News' release date :D");

                } else if (messagesSent === 5) {
                    vFooter = collected.content;

                    const embed = new MessageEmbed()
                        .setColor("1F05FA")
                        .setAuthor("Identity V ~ News/Updates", "https://i.imgur.com/hSMftcq.png")
                        .setTitle(vTitle)
                        .setDescription(vDescription)
                        .setImage(vImage)
                        .setThumbnail(vThumbnail)
                        .setFooter(vFooter, bot.user.displayAvatarURL({ format: "png", dynamic: false }));

                    Q1.edit(vMessage, embed);

                    handleCrossposting(Q1, embed, vMessage, vTitle, vDescription, vImage, vThumbnail, vFooter);
                }
                await collected.delete({ timeout: 3000 }).catch(err => console.error(err));
            });

        }

    }
}