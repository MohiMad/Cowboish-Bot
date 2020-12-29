const { MessageEmbed } = require("discord.js");
const logicPath = require("../models/logicpath.js")
const emoji = require("../emojis.json");

const { addCooldown } = require("../functions.js");
const { stripIndents } = require("common-tags");
module.exports = {

    quiz: async (bot, message, path, charName, spamStopper) => {

        if (spamStopper.has(message.author)) return;

        const filter = m => m.author.id === message.author.id;

        const LP = await logicPath.findOne({ UserID: message.author.id });

        let diceChances = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3];

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

        let charFile = require(`./${path}.json`);

        let charItem = charFile[Math.floor(Math.random() * charFile.length)];

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
        message.channel.send(quizEmbed);

        await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] }).then(async collected => {

            if (charItem.Answer.includes(collected.first().content.toLowerCase())) {

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

                let command;
                if (path.includes("Survivors")) command = "quick";
                else command = "hunt";

                await addCooldown(message, 60 * 1000, command);

            }
            else {
                setTimeout(() => { spamStopper.delete(message.author); }, 1000);
                return message.channel.send(`**${message.author.username}**, Wrooong! You lost the minigame!`);
            }

        }).catch(e => {
            spamStopper.delete(message.author);
            return message.channel.send(`**${message.author.username}**, Time is over! You lost the minigame!`);
        });




    }

};