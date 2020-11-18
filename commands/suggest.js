const { MessageEmbed } = require('discord.js');
const { coolEmbed, addCooldown, findCooldown } = require("../functions.js");

const spamStopper = new Set();
module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute: async (message, bot, args, MohiMoo) => {

        const cooldownCheck = await findCooldown(message, "suggest");

        var firstQuestion = "0";
        var secondQuestion = "0";

        let authorName = message.author.username;
        const suggest = bot.channels.cache.get('653529896903245834');

        let sayMessage = args.slice(1).join(" ");

        if (!suggest) return;

        const filter = m => m.author.id === message.author.id;

        if (cooldownCheck) return coolEmbed(message, "The cooldown is still on!", "Since this command can be spammed, there is a **5 minutes** cooldown set on it...\nYou have to wait **REMAINING** before being able to send another suggestion ^-^", cooldownCheck.timeRemaining, ["m", "s"]);


        if (spamStopper.has(message.author)) return message.reply("**A suggestion is already ongoing!**");

        if (!sayMessage) {

            message.channel.send('**Before starting... Just know that everything suggested will be sent to the devs...**\nAre you sure you wanna continue? Type "No" to cancel... Send anything else to continue the suggesting process...');
            spamStopper.add(message.author);
            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 180000
            }).then(async collected => {

                if (["no"].includes(collected.first().content.toLowerCase())) {
                    spamStopper.delete(message.author);

                    return message.channel.send(`**Canceled suggesting, ${authorName}!**`);
                }

                message.channel.send("**What is your suggestion?**\nPlease describe as clearly as possible...");


                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 180000
                }).then(async collected => {
                    firstQuestion = collected.first().content;

                    message.channel.send("**At what priority level do you want this suggestion to happen?**\nLow? Medium? High?");

                    await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 180000
                    }).then(async collected => {

                        secondQuestion = collected.first().content;

                        let embed = new MessageEmbed()
                            .setAuthor(`${message.author.username} has a suggestion!`, message.author.displayAvatarURL())
                            .setThumbnail(message.author.displayAvatarURL())
                            .setColor("0xF8CE14")
                            .setDescription(`🆔: *${message.author.id}*\n📎 **User Tag**: *${message.author.tag}*\n\n💭 **Suggestion**:\n${firstQuestion}\n\n☝ **Priority level**:\n${secondQuestion}`)
                            .setTimestamp()
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                        suggest.send(embed).then(async sentMessage => {
                            ["❌", "🔶", "✅"].forEach(async x => {
                                await sentMessage.react(x);
                            });
                        });

                        let respEmbed = new MessageEmbed()
                            .setTitle("Your suggestion has been sent successfully!")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL())
                            .setDescription("Your suggestion has been sent to [**Cowboish Server**](https://discordapp.com/invite/YWcSukS)\nFeel free to join if you want to see what **" + MohiMoo.tag + "** thinks about it :)")
                            .setColor("0xF8CE14")
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                        message.channel.send(respEmbed);
                        await addCooldown(message, 5 * 60 * 1000, "suggest");
                        spamStopper.delete(message.author);

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

        } else {
            message.channel.send('**Before starting... Just know that everything suggested will be sent to the devs...**\nAre you sure you wanna continue? Type "No" to cancel... Send anything else to continue suggesting...');
            spamStopper.add(message.author);

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 180000
            }).then(async collected => {

                if (["no"].includes(collected.first().content.toLowerCase())) return message.channel.send(`**Canceled suggesting, ${authorName}!**`);

                firstQuestion = sayMessage;

                message.channel.send("**At what priority level do you want this suggestion to happen?**\nLow? Medium? High?");

                await message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 180000
                }).then(async collected => {

                    secondQuestion = collected.first().content;

                    let embed = new MessageEmbed()
                        .setAuthor(`${message.author.username} has a suggestion!`, message.author.displayAvatarURL())
                        .setThumbnail(message.author.displayAvatarURL())
                        .setColor("0xF8CE14")
                        .setDescription(`
                        🆔: *${message.author.id}*
                        📎 **User Tag**: *${message.author.tag}*

                        💭 **Suggestion**:
                        ${firstQuestion}
                        
                        ☝ **Priority level**: 
                        ${secondQuestion}`)
                        .setTimestamp()
                        .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                    suggest.send(embed).then(async sentMessage => {
                        ["❌", "🔶", "✅"].forEach(async x => {
                            await sentMessage.react(x);
                        });
                    });

                    let respEmbed = new MessageEmbed()
                        .setTitle("Your suggestion has been sent successfully!")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setDescription("Your suggestion has been sent to [**Cowboish Server**](https://discordapp.com/invite/YWcSukS)\nFeel free to join if you want to see what **" + MohiMoo.tag + "** thinks about it :)")
                        .setColor("0xF8CE14")
                        .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                    message.channel.send(respEmbed);
                    await addCooldown(message, 5 * 60 * 1000, "suggest");
                    spamStopper.delete(message.author);

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