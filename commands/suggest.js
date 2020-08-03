const { RichEmbed } = require('discord.js');
const { coolEmbed, addCooldown, findCooldown } = require("../functions.js");

module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute: async (message, bot, MohiMoo) => {

        const cooldownCheck = await findCooldown(message, "suggest");

        if (!cooldownCheck) {

            var firstQuestion = "0";
            var secondQuestion = "0";

            let authorName = message.author.username;
            const suggest = bot.channels.get('653529896903245834');


            const filter = m => m.author.id === message.author.id;

            message.channel.send('**Before starting... Just know that everything suggested will be sent to the devs...**\nAre you sure you wanna continue? Type "No" to cancel... Send anything else to continue suggesting...');

            await message.channel.awaitMessages(filter, {
                max: 2,
                time: 180000
            }).then(async collected => {

                if (["no"].includes(collected.first().content.toLowerCase())) return message.channel.send(`**Canceled suggesting, ${authorName}!**`);

                message.channel.send("**What is your suggestion?**\nPlease describe as clearly as possible...");


                await message.channel.awaitMessages(filter, {
                    max: 2,
                    time: 180000
                }).then(async collected => {
                    firstQuestion = collected.first().content;

                    message.channel.send("**At what priority level do you want this suggestion to happen?**\nLow? Medium? High?");

                    await message.channel.awaitMessages(filter, {
                        max: 2,
                        time: 180000
                    }).then(async collected => {

                        secondQuestion = collected.first().content;

                        let embed = new RichEmbed()
                            .setAuthor(`${message.author.username} has a suggestion!`, message.author.displayAvatarURL)
                            .setThumbnail(message.author.displayAvatarURL)
                            .setColor("0xF8CE14")
                            .setDescription(`
                        🆔: *${message.author.id}*
                        📎 **User Tag**: *${message.author.tag}*

                        💭 **Suggestion**:
                        ${firstQuestion}
                        
                        ☝ **Priority level**: 
                        ${secondQuestion}`)
                            .setTimestamp()
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                        suggest.send(embed).then(async sentMessage => {
                            ["❌", "🔶", "✅"].forEach(async x => {
                                await sentMessage.react(x);
                            });
                        });

                        let respEmbed = new RichEmbed()
                            .setTitle("Your suggestion has been sent successfully!")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL)
                            .setDescription("Your suggestion has been sent to [**Cowboish Server**](https://discordapp.com/invite/YWcSukS)\nFeel free to join if you want to see what **" + MohiMoo.tag + "** thinks about it :)")
                            .setColor("0xF8CE14")
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                        message.channel.send(respEmbed);
                        await addCooldown(message, 5 * 60 * 1000, "suggest");
                    });

                }).catch(collected => {
                    return message.reply(`**Time is over!** try again...`);
                });
            }).catch(collected => {
                return message.reply(`**Time is over!** try again...`);
            });

        } else {
            coolEmbed(message, "The cooldown is still on!", "Since this command can be spammed, there is a **5 minutes** cooldown set on it...\nYou have to wait **REMAINING** before being able to send another suggestion ^-^", cooldownCheck.timeRemaining, ["m", "s"]);
        }
    }

}