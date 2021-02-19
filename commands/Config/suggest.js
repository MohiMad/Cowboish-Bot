const { MessageEmbed } = require('discord.js');
const { coolEmbed, addCooldown, findCooldown } = require("../../assets/functions.js");
const { stripIndents } = require("common-tags");

const spamStopper = new Set();
module.exports = {
    name: ["suggest", "sendsuggestion", "suggestidea"],
    description: "Send a suggestion to the Developer of Cowboish Bot...\nCowboish will ask you a chain of question to complete your suggestion\nSuggestions are directly sent in the [Cowboish Server](https://discord.com/invite/YWcSukS) but your username/other information won't be displayed... Your suggestion is completely anonymous ^-^",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Config",
    banned: ["742743667168510092"],
    execute: async (message, bot, args, MohiMoo, prefix) => {

        const cooldownCheck = await findCooldown(message, "suggest");

        let firstQuestion = "";
        let secondQuestion = "";

        const authorName = message.author.username;
        const suggest = bot.channels.cache.get('653529896903245834');

        const sayMessage = args.slice(1).join("  ");
        let keepGoing = true;

        if (!suggest) return;
        if (message.channel.id === suggest.id) return;
        const filter = m => m.author.id === message.author.id;
        if (cooldownCheck) return coolEmbed(message, "The cooldown is still on!", "Since this command can be spammed, there is a **5 minutes** cooldown set on it...\nYou have to wait **REMAINING** before being able to send another suggestion ^-^", cooldownCheck.timeRemaining, ["m", "s"]);

        if (spamStopper.has(message.author)) return message.reply("**A suggestion is already ongoing... Now it's cancelled, try again!**");

        /**
         * [Modified awaitMessage function usage]
         * This function is specifically made for the suggesting command. There is a "vanilla" awaitMessage function which is found in functions.js
         * @param {String} toSend string that contains what you want to send to the channel before awaiting messages
         * @param {String} code the code that you want to execute once the bot collects a message
         * @returns {null}
         * **/
        async function awaitMessage(toSend, code) {
            spamStopper.add(message.author);

            if (keepGoing == false) {
                return spamStopper.delete(message.author);
            }
            message.channel.send(toSend);

            await message.channel.awaitMessages(filter, {
                max: 1,
                time: 180000,
                errors: ['time'],
            }).then(async (collected) => {
                spamStopper.delete(message.author);
                eval(code);
            }).catch((e) => {
                spamStopper.delete(message.author);
                if (!e.message) return message.reply("**Time is over!** try again...");
                console.log(e);
            });
        }

        let respEmbed = new MessageEmbed()
            .setTitle("Your suggestion has been sent successfully!")
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription("Your suggestion has been sent to [**Cowboish Server**](https://discordapp.com/invite/YWcSukS)\nFeel free to join if you want to see what **" + MohiMoo.tag + "** thinks about it :)")
            .setColor("0xF8CE14")
            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

        if (!sayMessage) {
            awaitMessage('**What is your suggestion?**\nPlease describe as clearly as possible... Wanna cancel? send "Cancel"',
                `
                if (["cancel", "yes"].includes(collected.first().content.toLowerCase())) {
                        keepGoing = false;

                        message.channel.send(\`**Canceled suggesting, ${authorName}!**\`);
                    } else if(collected.first().content.length < 20){
                        keepGoing = false;

                        message.channel.send(\`**${message.author.toString()} Your suggestion was too short!**\nThe minium length of a sugestion is 20 characters, your suggestion was ${20 - collected.first().content.length} characters shorter.\`);
                    }
                    else if (collected.first().content.startsWith(prefix)) {
                        keepGoing = false;
                    } else {
                        firstQuestion = collected.first().content;
                    }`).then(async () => {
                    awaitMessage('**At what priority level do you want this suggestion to happen?**\nLow? Medium? High?',
                        `if (["cancel", "yes"].includes(collected.first().content.toLowerCase())) {
                            keepGoing = false;
    
                            message.channel.send(\`**Canceled suggesting, ${authorName}!**\`);
                        } else if (collected.first().content.startsWith(prefix)) {
                            keepGoing = false;
                        } else {
                            secondQuestion = collected.first().content;
                        }
                    
                    `)
                        .then(async () => {
                            if (keepGoing == false) return;
                            if (spamStopper.has(message.author)) return

                            let embed = new MessageEmbed()
                                .setAuthor(`Someone has a suggestion!`)
                                .setThumbnail(bot.user.displayAvatarURL())
                                .setColor("0xF8CE14")
                                .setDescription(stripIndents`
                        🆔: *${message.author.id}*
        
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

                            await addCooldown(message, 5 * 60 * 1000, "suggest");
                            spamStopper.delete(message.author);

                            message.channel.send(respEmbed);
                        });
                })


        } else {
            if (sayMessage.length < 20) return message.channel.send(`**${message.author.toString()} Your suggestion was too short!**\nThe minium length of a sugestion is 20 characters, your suggestion was ${20 - collected.first().content.length} characters shorter.`);

            firstQuestion = sayMessage;

            awaitMessage("**At what priority level do you want this suggestion to happen?**\nLow? Medium? High?... You can cancel by sending \"Cancel\"",
                `
                if (["cancel", "yes"].includes(collected.first().content.toLowerCase())) {
                keepGoing = false;

                message.channel.send(\`**Canceled suggesting, ${authorName}!**\`);
            } else if (collected.first().content.startsWith(prefix)) {
                keepGoing = false;
            } else {
                secondQuestion = collected.first().content;
            }`
            ).then(async () => {
                if (keepGoing == false) return;
                if (spamStopper.has(message.author)) return;

                let embed = new MessageEmbed()
                    .setAuthor(`Someone has a suggestion!`)
                    .setThumbnail(bot.user.displayAvatarURL())
                    .setColor("0xF8CE14")
                    .setDescription(stripIndents`
                🆔: *${message.author.id}*

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

                message.channel.send(respEmbed);
                await addCooldown(message, 5 * 60 * 1000, "suggest");
                spamStopper.delete(message.author);
            })

        }

    }

}