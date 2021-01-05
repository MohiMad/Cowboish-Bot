const { MessageEmbed } = require("discord.js");
const logicPath = require("../models/logicpath.js")
const emoji = require("../emojis.json");

const { addCooldown, spliceArray } = require("../functions.js");
const { stripIndents } = require("common-tags");

async function addTheCooldown(message, path) {
    let command;
    if (path.includes("Survivors")) command = "quick";
    else command = "hunt";

    await addCooldown(message, 60000, command);
}

module.exports = {

    quiz: async (bot, message, path, charName, spamStopper) => {

        if (spamStopper.has(message.author)) return;

        const filter = m => m.author.id === message.author.id;

        const LP = await logicPath.findOne({ UserID: message.author.id });

        let diceChances = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3];

        let dice = diceChances[Math.floor(Math.random() * diceChances.length)];

        let reward;
        if (LP.ThreeMatches != 0) {
            reward = dice * 2 + `${emoji.dice} (Doubled reward... **${LP.ThreeMatches} left**)`;

            dice = dice * 2;
            LP.ThreeMatches = LP.ThreeMatches - 1;

            await LP.save().catch(e => console.log(e));
        } else {
            reward = `${dice} ${emoji.dice}`;
        }

        if (LP.Inventory.includes("pass")) reward = `${reward}\n\n**${emoji.passCard} PassCard (${LP.Inventory.filter(x => x === "pass").length})**\nType "Pass" to skip answering this question!`;
        if (LP.Inventory.includes("switch")) reward = `${reward}\n\n**${emoji.switchCard} SwitchCard (${LP.Inventory.filter(x => x === "switch").length})**\nType "Switch" to switch to another question!`;
        if (LP.Inventory.includes("reveal")) reward = `${reward}\n\n**${emoji.revealCard} RevealCard (${LP.Inventory.filter(x => x === "reveal").length})**\nType "Reveal" to reveal the answer of this question!`;

        let charFile = require(`./${path}.json`);

        let itemNumber = Math.floor(Math.random() * charFile.length)
        let charItem = charFile[itemNumber];

        let artist = charItem.Artist;

        if (artist === null || artist === undefined) artist = "Cowboish Bot"

        const quizEmbed = new MessageEmbed()
            .setTitle(`Answer the question below to get a dice ${emoji.dice}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setDescription(stripIndents`
			**Question about** : ${charName}
			**Difficulty** : ${charItem.Difficulty}
			**Time** : 60 Seconds
			**Reward** : ${reward}` + "\n\n" + charItem.Question)
            .setImage(charItem.Attachment)
            .setFooter(artist, bot.user.displayAvatarURL())
            .setColor("RANDOM");

        spamStopper.add(message.author);
        const sentMsg = await message.channel.send(quizEmbed);

        await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {

            if (["pass", "passcard", "skip", "passquestion", "pass question", "skipquestion", "skip question"].includes(collected.first().content.toLowerCase())) {
                await addTheCooldown(message, path);
                spamStopper.delete(message.author);
                if (!LP.Inventory.includes("pass")) return message.channel.send(`${message.author}, **You don't have any Pass-Cards to use! You should buy more from the shop!**\nMinigame failed! Please try again...`);

                LP.Inventory = spliceArray(LP.Inventory, "pass");
                LP.Dices = LP.Dices + dice;

                LP.save().catch(e => console.log(e));
                return message.channel.send(`**${emoji.passCard} You've used your Pass-card to skip this question!**\n - Here, take your ${dice} Dice(s) ${emoji.dice}...`);
            }
            else if (["reveal", "reveal answer", "revealcard", "reveal-card", "reveal card", "revealanswer"].includes(collected.first().content.toLowerCase())) {
                await addTheCooldown(message, path);

                if (!LP.Inventory.includes("reveal")) {
                    spamStopper.delete(message.author);
                    return message.channel.send(`${message.author}, **You don't have any Reveal-Cards to use! You should buy more from the shop!**\nMinigame failed! Please try again...`);
                }

                if (collected.first().deletable) collected.first().delete();

                LP.Inventory = spliceArray(LP.Inventory, "reveal");

                if (LP.ThreeMatches != 0) {
                    reward = dice + `${emoji.dice} (Doubled reward... **${LP.ThreeMatches + 1} left**)\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
                } else {
                    reward = `${dice} ${emoji.dice}\n\n__**You can't use Powerups after using a ${emoji.revealCard} card**__`;
                }

                quizEmbed.setDescription(stripIndents`
			    **Question about** : ${charName}
			    **Difficulty** : ${charItem.Difficulty}
			    **Time** : 60 Seconds
                **Reward** : ${reward}` + "\n\n" + charItem.Question + `\n\n**${emoji.revealCard} | Reveal Card Used!**\nThe answer of this question is: ${charItem.Answer[0]}`);

                sentMsg.edit(quizEmbed);

                await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {

                    if (charItem.Answer.includes(collected.first().content.toLowerCase())) {

                        let wins = [
                            `**${message.author.username}** got the right answer and got **${dice}** dice(s) ${emoji.dice}`,
                            `Here is your **${dice}** dices(s) ${emoji.dice}, **${message.author.username}**!`,
                            `**${message.author.username}** answered correctly! Here is your **${dice}** dice(s) ${emoji.dice}`
                        ];

                        let win = Math.floor(Math.random() * wins.length);

                        spamStopper.delete(message.author);

                        if (LP.ThreeMatches != 0) LP.Dices = LP.Dices + dice;
                        else LP.Dices = LP.Dices + dice;

                        await addTheCooldown(message, path);
                        message.channel.send(wins[win]);

                    }
                    else {
                        await addTheCooldown(message, path);
                        setTimeout(spamStopper.delete(message.author), 1000);
                        message.channel.send(`**${message.author.username}**, Wrooong!\nLmao how come you even fail that? The answer was literally revealed -w-`);
                    }

                }).catch(() => {
                    spamStopper.delete(message.author);
                    message.channel.send(`**${message.author.username}**, Time is over! You lost the minigame!`);
                });
                await LP.save().catch(err => console.log(err));

            }
            else if (["switch", "switch", "switchquestion", "switch question"].includes(collected.first().content.toLowerCase())) {

                LP.Inventory = spliceArray(LP.Inventory, "switch");

                if (collected.first().deletable) collected.first().delete();

                let itemNumber2 = Math.abs(itemNumber - 1);

                let char2Item = charFile[itemNumber2];

                let artist2 = char2Item.Artist ? char2Item.Artist : "Cowboish Bot";

                if (artist2 === null || artist2 === undefined) artist2 = "Cowboish Bot";

                if (LP.ThreeMatches != 0) {
                    reward = dice + `${emoji.dice} (Doubled reward... **${LP.ThreeMatches + 1} left**)\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
                } else {
                    reward = `${dice} ${emoji.dice}\n\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
                }

                const newQuizEmbed = new MessageEmbed()
                    .setTitle(`Answer the question below to get a dice ${emoji.dice}`)
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setDescription(stripIndents`
			        **Question about** : ${charName}
			        **Difficulty** : ${char2Item.Difficulty}
			        **Time** : 60 Seconds
			        **Reward** : ${reward}` + "\n\n" + char2Item.Question)
                    .setImage(char2Item.Attachment)
                    .setFooter(artist2, bot.user.displayAvatarURL())
                    .setColor("RANDOM");

                await sentMsg.edit(newQuizEmbed);
                await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {

                    if (["pass", "passcard", "skip", "passquestion", "pass question", "skipquestion", "skip question", "switch", "switch", "switchquestion", "switch question", "reveal", "reveal answer", "revealcard", "reveal-card", "reveal card", "revealanswer"].includes(collected.first().content.toLowerCase())) {
                        await addTheCooldown(message, path);
                        spamStopper.delete(message.author);

                        return message.channel.send(`**${message.author.toString()} You can't use Powerups after using a Switch-Card...**\nMinigame lost! Try again!`);
                    }
                    else if (char2Item.Answer.includes(collected.first().content.toLowerCase())) {

                        let wins = [
                            `**${message.author.username}** got the right answer and got **${dice}** dice(s) ${emoji.dice}`,
                            `Here is your **${dice}** dices(s) ${emoji.dice}, **${message.author.username}**!`,
                            `**${message.author.username}** answered correctly! Here is your **${dice}** dice(s) ${emoji.dice}`
                        ];

                        let win = Math.floor(Math.random() * wins.length);

                        spamStopper.delete(message.author);

                        if (LP.ThreeMatches != 0) LP.Dices = LP.Dices + dice;
                        else LP.Dices = LP.Dices + dice;

                        await addTheCooldown(message, path);
                        message.channel.send(wins[win]);
                    }
                    else {
                        await addTheCooldown(message, path);
                        setTimeout(spamStopper.delete(message.author), 1000);
                        message.channel.send(`**${message.author.username}**, Wrooong! You lost the minigame!`);
                    }

                }).catch(() => {
                    spamStopper.delete(message.author);
                    message.channel.send(`**${message.author.username}**, Time is over! You lost the minigame!`);
                });

                await LP.save().catch(err => console.log(err));
            }
            else if (charItem.Answer.includes(collected.first().content.toLowerCase())) {

                let wins = [
                    `**${message.author.username}** got the right answer and got **${dice}** dice(s) ${emoji.dice}`,
                    `Here is your **${dice}** dices(s) ${emoji.dice}, **${message.author.username}**!`,
                    `**${message.author.username}** answered correctly! Here is your **${dice}** dice(s) ${emoji.dice}`
                ];

                let win = Math.floor(Math.random() * wins.length);

                message.channel.send(wins[win]);
                spamStopper.delete(message.author);

                if (LP.ThreeMatches != 0) LP.Dices = LP.Dices + dice;
                else LP.Dices = LP.Dices + dice;

                await LP.save().catch(err => console.log(err));
                await addTheCooldown(message, path)
            }
            else {
                await addTheCooldown(message, path);
                setTimeout(spamStopper.delete(message.author), 1000);
                return message.channel.send(`**${message.author.username}**, Wrooong! You lost the minigame!`);
            }
            await LP.save().catch(err => console.log(err));

        }).catch((e) => {
            spamStopper.delete(message.author);
            return message.channel.send(`**${message.author.username}**, Time is over! You lost the minigame!`);
        });

    }

};