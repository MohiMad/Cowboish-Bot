const { findRole } = require("../functions.js");
const Guild = require("../models/guild.js");
const { MessageEmbed } = require("discord.js");
const IdentityVNews = require("../models/news.js");
const spamStopper = new Set();

module.exports = {
    name: 'announcenews',
    description: "You know how we do it ;)",
    execute: async (message, bot) => {

        if (!["478527909250990090", "427200618399268874", "638831021995065344"].includes(message.author.id) && message.channel.id != "778904412793864223") return;

        var vtoFind, vMessage, vTitle, vDescription, vImage, vThumbnail, vFooter;

        if (spamStopper.has(message.author)) return message.reply("**Cancelled... Please run the command again!**");

        message.channel.send("Wanna cancel? send `N`\n**What kind of a shortcut would you give this News document?**\nShort and non-spacing shortcuts are recommended, like `percyNewHunter`...");
        spamStopper.add(message.author);

        const filter = m => m.author.id === message.author.id;
        await message.channel.awaitMessages(filter, {
            max: 1,
            time: 10 * 60 * 1000
        }).then(async collected => {

            if (["n"].includes(collected.first().content.toLowerCase())) {
                spamStopper.delete(message.author);
                return message.channel.send(`**Canceled!**`);
            }

            vtoFind = collected.first().content;

            message.channel.send("Send `N` to cancel...\n**What message do you want to be sent with the embed?**\nRight here, you can add '$ping' to the message content if you see the announcement ping-worthy");

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 10 * 60 * 1000
            }).then(async collected => {

                if (["n"].includes(collected.first().content.toLowerCase())) {
                    spamStopper.delete(message.author);
                    return message.channel.send(`**Canceled!**`);
                }

                vMessage = collected.first().content;

                message.channel.send("You can still cancel by sending `N` if you feel like you messed up...\n**What would the title of the embed be?**\nPick something fancy and related about the update/news ;)");

                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 10 * 60 * 1000
                }).then(async collected => {

                    vTitle = collected.first().content;

                    message.channel.send("`N` to cancel\n**Now pick an intersting description of the embed...**\nMake sure to be as clear and informative as possible, to add a hyper like, do `[Blue Hyper Text](Link Here)`");

                    await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 10 * 60 * 1000
                    }).then(async collected => {
                        vDescription = collected.first().content;

                        message.channel.send("**Now pick an image for me to attach into the embed...**\nHere, it can either be an image from your device or even a link... If it's a link then it __MUST__ end with `.png`/`.jpg`/`.gif` etc..");

                        await message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 10 * 60 * 1000
                        }).then(async collected => {

                            if (!collected.first()) return;
                            else if (!collected.first().attachments.first()) vImage = collected.first().content;
                            else vImage = collected.first().attachments.first().url;

                            message.channel.send("**Now, send me a thumbnail(small image on the right) for me to attach into the embed**\nCan be an image from your device or a link...\nWant me to make it a fancy **Netease** icon? Send `netease`\nWant me to attach the **Identity V** icon? Send `idv`");

                            await message.channel.awaitMessages(filter, {
                                max: 1,
                                time: 10 * 60 * 1000
                            }).then(async collected => {


                                if (["idv", "identityv", "identity v"].includes(collected.first().content.toLowerCase())) {
                                    vThumbnail = "https://i.imgur.com/owSSNF4.png";
                                } else if (["netease", "net ease"].includes(collected.first().content.toLowerCase())) {
                                    vThumbnail = "https://i.imgur.com/WAf9KK1.png";
                                } else {
                                    if (!collected.first().attachments.first()) vThumbnail = collected.first().content;
                                    else vThumbnail = collected.first().attachments.first().url;
                                }

                                message.channel.send("**Now pick a Footer for the embed**\nA footer could be further information, or even the News' release date :D");

                                await message.channel.awaitMessages(filter, {
                                    max: 1,
                                    time: 10 * 60 * 1000
                                }).then(async collected => {
                                    vFooter = collected.first().content;

                                    const embed = new MessageEmbed()
                                        .setColor("1F05FA")
                                        .setAuthor("Identity V ~ News/Updates", "https://i.imgur.com/hSMftcq.png")
                                        .setTitle(vTitle)
                                        .setDescription(vDescription)
                                        .setImage(vImage)
                                        .setThumbnail(vThumbnail)
                                        .setFooter(vFooter, bot.user.displayAvatarURL({ format: "png", dynamic: false }));

                                    let msg = await message.channel.send(vMessage.replace("$ping", "(Ping)"), embed);

                                    await msg.react('✅');
                                    await msg.react('❌');

                                    let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

                                    let sendFilter = (reaction, user) => reaction.emoji.name === '✅' & user.id === message.author.id;

                                    let end = msg.createReactionCollector(endFilter, {
                                        time: 300000
                                    });


                                    let sendIt = msg.createReactionCollector(sendFilter, {
                                        time: 300000
                                    });

                                    sendIt.on("collect", async r => {
                                        msg.reactions.removeAll().catch(error => console.log(error));
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
                                                        Footer: `${vFooter}`,
                                                        HasSent: false

                                                    },
                                                    ...IdVNews.News
                                                ]

                                            });

                                        IdvNews = await IdentityVNews.findOne({ toGrab: "632291800585076761" });

                                        IdvNews.News[0].HasSent = true;
                                        IdvNews.save().catch(e => console.log(e));

                                        const GUILDS = await Guild.find({});

                                        for (const g of GUILDS.filter(x => x.News.Channel != null)) {
                                            if (g.News.Channel === null) return;
                                            const toSendChannel = bot.channels.cache.get(g.News.Channel);
                                            if (!toSendChannel) return;

                                            const guild = bot.guilds.cache.get("636241255994490900");

                                            let toPingRole = guild.roles.cache.get(g.News.toPingRole);

                                            if (g.News.toPingRole === "everyone") toPingRole = "@everyone";
                                            else if (g.News.toPingRole === "here") toPingRole = "@here";
                                            else if (!toPingRole) toPingRole = "";

                                            await toSendChannel.send(vMessage.replace("$ping", toPingRole), embed);
                                        }

                                        message.channel.send(`${message.author} process started... Update/News should be sent in the mean time :)`);
                                    });

                                    end.on('collect', async r => {
                                        msg.reactions.removeAll().catch(error => console.log(error));
                                        spamStopper.delete(message.author);

                                        message.channel.send(`${message.author} cancelled the process of announcing.. ^-^`);

                                    });

                                    end.on('end', async () => {
                                        spamStopper.delete(message.author);
                                        msg.reactions.removeAll().catch(error => console.log(error));
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