const { MessageEmbed } = require('discord.js');
const { coolEmbed, addCooldown, findCooldown } = require("../../src/functions.js");
let spamStopper = new Set();

module.exports = {
    name: ["reportissue", "issue", "reportbug", "bugreport"],
    description: "Gives you the ability to report an existing issue/bug in Cowboish...\nThe issue/bug will be sent in [Cowboish Server](https://discord.com/invite/YWcSukS)\nYou can even attach a screenshot/bug-replication-preview\n\n**Note:** Do not report big explicits using this command. Instead, DM **Mohi#2888** because the bug report using this command is visible to all members in the Support server...\n\n**Usage:** `$prefixreportissue`\n*and then cowboish will ask you multiple questions about the bug/issue you've encountered*",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MANAGE_MESSAGES"],
    category: "Config",
    banned: ["742743667168510092", "707937433299451934"],
    execute: async (message, bot, args) => {

        var firstQuestion = "0";
        var secondQuestion = "0";
        const suggest = bot.channels.cache.get('721685336161517579');
        let errorMsg = args.slice(1).join(" ");

        if (!suggest) return;

        const cooldownCheck = await findCooldown(message, "reportissue");

        if (cooldownCheck) return coolEmbed(message, "Ooops! Can't report Issues so quickly!", "There is a **5 minutes** cooldown set on this command!\nYou have to wait **REMAINING** before being able to report another Issue", cooldownCheck.timeRemaining, ["m", "s"]);


            let embed = new MessageEmbed()
                .setAuthor(`Someone found an issue/bug!`)
                .setTimestamp()
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setColor("0xF8CE14");

            const filter = m => m.author.id === message.author.id;

            if (spamStopper.has(message.author)) return message.reply("**There is a report going on already!**");

            if (!errorMsg) {

                message.channel.send("**What Issue are you facing with this bot?**\nPlease describe as clearly as possible :)");
                spamStopper.add(message.author);

                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 180000
                }).then(async collected => {
                    firstQuestion = collected.first().content;

                    message.channel.send("**When did you encounter this bug?**\nGiving a specific timestamp would help a lot...");


                    await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 180000
                    }).then(async collected => {
                        secondQuestion = collected.first().content;

                        message.channel.send('**Do you have any screenshot of the bug/issue?**\nPlease send an image of how the bug looks like... if you don’t have a screenshot of it just type "No"');

                        await message.channel.awaitMessages(filter, {
                            max: 1,
                            time: 180000
                        }).then(async collected => {

                            embed.setDescription(`🆔: *${message.author.id}*\n\n❗ **Issue/Bug**:\n${firstQuestion}\n⏰ **Timestamp**:\n${secondQuestion}`);

                            if (!collected.first()) return;
                            else if (!collected.first().attachments.first()) embed.setImage("https://i.imgur.com/kEZanqR.png");
                            else embed.setImage(collected.first().attachments.first().url);

                            suggest.send(embed);

                            let respEmbed = new MessageEmbed()
                                .setTitle("Your issue/bug will reach out to the developer soon!")
                                .setDescription("Your submitted issue/bug has been sent to the developers...\nWe will look through your submission and try to fix it as soon as possible :D\n\nThanks for your cooperation")
                                .setColor("0xF8CE14")
                                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                            message.channel.send(respEmbed);
                            await addCooldown(message, 5 * 60 * 1000, "reportissue");
                            spamStopper.delete(message.author);


                        }).catch(e => {
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

            } else {
                firstQuestion = errorMsg;

                message.channel.send("**When did you encounter this bug?**\nGiving a specific timestamp would help a lot...");
                spamStopper.add(message.author);

                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 180000
                }).then(async collected => {
                    secondQuestion = collected.first().content;

                    message.channel.send('**Do you have any screenshot of the bug/issue?**\nPlease send an image of how the bug looks like... if you don’t have a screenshot of it just type "No"');

                    await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 180000
                    }).then(async collected => {

                        embed.setDescription(`🆔: *${message.author.id}*\n\n❗ **Issue/Bug**:\n${firstQuestion}\n⏰ **Timestamp**:\n${secondQuestion}`);

                        if (!collected.first()) return;
                        else if (!collected.first().attachments.first()) embed.setImage("https://i.imgur.com/kEZanqR.png");
                        else embed.setImage(collected.first().attachments.first().url);

                        suggest.send(embed);

                        let respEmbed = new MessageEmbed()
                            .setTitle("Your issue/bug will reach out to the developer soon!")
                            .setDescription("Your submitted issue/bug has been sent to the developers...\nWe will look through your submission and try to fix it as soon as possible :D\n\nThanks for your cooperation")
                            .setColor("0xF8CE14")
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                        message.channel.send(respEmbed);
                        await addCooldown(message, 5 * 60 * 1000, "reportissue");
                        spamStopper.delete(message.author);

                    }).catch(e => {
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