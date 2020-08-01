const { RichEmbed, Attachment } = require('discord.js');

const { clues, ess1 } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");
const { newLP } = require("../functions.js");

module.exports = {
    name: 'survey',
    description: "Answer the survey :D",
    execute: async (message, bot, MohiMoo, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP) return newLP(message);

        if (LP.Opened.includes("1kcowboish"))
            return message.channel.send(`Can't answer the survey twice... **${message.author.username}**`);

        var firstQuestion = "0";
        var secondQuestion = "0";
        var thirdQuestion = "0";
        var fourthQuestion = "0";
        var fifthQuestion = "0";
        var lastquestion = "0";

        const filter = m => m.author.id === message.author.id;

        const attachment = new Attachment("https://i.imgur.com/PCCpBxC.jpg");

        await message.channel.send(attachment);
        message.channel.send("**What category of this bot do you enjoy the most?**\n`IdentityV`, `IdentityV Actions`, `Fun`, `Image manipulation`, or `logicpath`?").then(async () => {

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 180000
            }).then(async collected => {
                firstQuestion = collected.first().content;

                message.channel.send("**How long have you been interacting with the Cowboish bot?**\nDays? Months?");

                await message.channel.awaitMessages(filter, {
                    max: 2,
                    time: 180000
                }).then(async collected => {
                    secondQuestion = collected.first().content;

                    message.channel.send(`**What's your current hunter/survivor tier?**\n__Format example__: Hunter(Crocodile 1) Survivor(Elk 4)`);

                    await message.channel.awaitMessages(filter, {
                        max: 2,
                        time: 180000
                    }).then(async collected => {
                        thirdQuestion = collected.first().content;

                        message.channel.send("**How did you find out about this bot's existance?**\nSeen it in a server? Searched for discord bots?");

                        await message.channel.awaitMessages(filter, {
                            max: 2,
                            time: 180000
                        }).then(async collected => {
                            fourthQuestion = collected.first().content;
                            message.channel.send("**Rate the bot out of 10...**\n(0 being the worst grade...)");

                            await message.channel.awaitMessages(filter, {
                                max: 2,
                                time: 180000
                            }).then(async collected => {

                                fifthQuestion = collected.first().content;

                                message.channel.send(`**Do you have anything to say to the developer of this bot?**\nIf not, just say "No" -v-`);
                                await message.channel.awaitMessages(filter, {
                                    max: 2,
                                    time: 180000
                                }).then(async collected => {
                                    lastquestion = collected.first().content;

                                    LP.Opened = [...LP.Opened, "1kcowboish"];
                                    LP.Ess1 = LP.Ess1 + 10;
                                    LP.Clues = LP.Clues + 1000;
                                    await LP.save().catch(e => console.log(e));

                                    let embed = new RichEmbed()
                                        .setTitle("Cowboish 1000 servers survey!")
                                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                        .setThumbnail(message.author.displayAvatarURL)
                                        .setColor("0xF8CE14")
                                        .setDescription(`**What category of this bot do you enjoy the most?**\n${firstQuestion}\n\n**How long have you been interacting with Cowboish bot?**\n${secondQuestion}\n\n**What's your current hunter/survivor tier?**\n${thirdQuestion}\n\n**How did you find out about this bot's existance?**\n${fourthQuestion}\n\n**Rate the bot out of 10...**\n${fifthQuestion}\n\n**Got anything to say to Mohi?**\n${lastquestion}`)
                                        .setTimestamp()
                                        .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                                    MohiMoo.send(embed);

                                    let respEmbed = new RichEmbed()
                                        .setTitle("Your submission has been sent to the developer of Cowboish bot :D")
                                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                                        .setThumbnail("https://i.imgur.com/QZn6Hkd.png")
                                        .setDescription(`As a reward/celebration for hitting 1k servers...\nYou have been gifted **1000**${clues} and **10**${ess1} and a special limited Cowboish-frame :D\n\nYou can equip that frame by doing` + "`" + prefix + "equip frame cowboish` UwU")
                                        .setColor("0xF8CE14")
                                        .setFooter("Thanks for your cooperation :3");

                                    message.channel.send(respEmbed);

                                }).catch(() => {
                                    return message.reply(`**Time is out!** try again...`);
                                });

                            }).catch(() => {
                                return message.reply(`**Time is out!** try again...`);
                            });

                        }).catch(collected => {
                            return message.reply(`**Time is out!** try again...`);
                        });
                    }).catch(collected => {
                        return message.reply(`**Time is out!** try again...`);
                    });
                }).catch(collected => {
                    return message.reply(`**Time is out!** try again...`);
                });
            }).catch(collected => {
                return message.reply(`**Time is out!** try again...`);
            });
        });


    }
}