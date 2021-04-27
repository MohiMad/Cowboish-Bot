const { MessageEmbed } = require("discord.js");
const emoji = require("../src/emojis.json");

const { addCooldown, spliceArray, newLP } = require("../src/functions.js");
const { stripIndents } = require("common-tags");

async function addTheCooldown(message, path) {
    await addCooldown(message, 60000, path.includes("Survivors") ? "quick" : "hunt");
}

class Quiz {
    constructor(bot, message, path, charName, spamStopper) {
        this.bot = bot;
        this.message = message;
        this.path = path;
        this.charName = charName;
        this.spamStopper = spamStopper;
        this.filter = (m) => m.author.id === message.author.id;
        this.diceChances = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3];
        this.dice = this.diceChances[Math.floor(Math.random() * this.diceChances.length)];
        this.reward;
        this.collected;
        this.messageCollector;
        this.sentMsg;
        this.LP;
        this.quizEmbed;
        this.powerUpUsed = false;
        this.reason = false;
        this.charFile = require(`./${this.path}.json`);
        this.itemNumber = Math.floor(Math.random() * this.charFile.length);
        this.charItem = this.charFile[this.itemNumber];
        this.amountMessages = 0;
    }

    async handleThreeMatches() {
        if (this.LP.ThreeMatches != 0) {
            this.reward = this.dice * 2 + `${emoji.dice} (Doubled reward... **${this.LP.ThreeMatches} left**)`;

            this.dice *= 2;
            this.LP.ThreeMatches = this.LP.ThreeMatches - 1;

            await this.LP.save().catch(e => console.log(e));
        } else {
            this.reward = `${this.dice} ${emoji.dice}`;
        }

        //We return the instance in order to chain calls
        return this;
    }

    handlePowerUps() {
        if (this.LP.Inventory.includes("pass")) this.reward += `\n\n**${emoji.passCard} PassCard (${this.LP.Inventory.filter(x => x === "pass").length})**\nType "Pass" to skip answering this question!`;
        if (this.LP.Inventory.includes("switch")) this.reward += `\n\n**${emoji.switchCard} SwitchCard (${this.LP.Inventory.filter(x => x === "switch").length})**\nType "Switch" to switch to another question!`;
        if (this.LP.Inventory.includes("reveal")) this.reward += `\n\n**${emoji.revealCard} RevealCard (${this.LP.Inventory.filter(x => x === "reveal").length})**\nType "Reveal" to reveal the answer of this question!`;

        return this;
    }

    async handlePassCard() {
        if (["pass", "passcard", "skip", "passquestion", "pass question", "skipquestion", "skip question"].includes(this.collected.content.toLowerCase())) {

            this.reason = true;
            this.messageCollector.stop();

            if (this.powerUpUsed === true) {
                this.reason = true;
                this.messageCollector.stop();

                return this.message.channel.send(`**You can't use a Pass Card after using another powerup!**\nMinigame failed! Please try again...`);

            }

            this.powerUpUsed = true;

            if (!this.LP.Inventory.includes("pass")) {
                return this.message.channel.send(`${this.message.author.toString()}, **You don't have any Pass-Cards to use! You should buy more from the shop!**\nMinigame failed! Please try again...`);
            }

            this.LP.Inventory = spliceArray(this.LP.Inventory, "pass");
            this.LP.Dices += this.dice;

            this.LP.save().catch(e => console.log(e));
            this.message.channel.send(`**${emoji.passCard} You've used your Pass-card to skip this question!**\n - Here, take your ${this.dice} Dice(s) ${emoji.dice}...`);

        }

        return this;
    }

    async handleRevealCard() {
        if (["reveal", "reveal answer", "revealcard", "reveal-card", "reveal card", "revealanswer"].includes(this.collected.content.toLowerCase())) {
            await addTheCooldown(this.message, this.path);

            if (!this.LP.Inventory.includes("reveal")) {
                this.reason = true;
                this.messageCollector.stop();

                return this.message.channel.send(`${this.message.author.toString()}, **You don't have any Reveal-Cards to use! You should buy more from the shop!**\nMinigame failed! Please try again...`);
            }

            if (this.powerUpUsed === true) {
                this.reason = true;
                this.messageCollector.stop();

                return this.message.channel.send(`**You can't use a Reveal Card after using another powerup!**\nMinigame failed! Please try again...`);
            }


            if (this.collected.deletable) this.collected.delete();

            this.LP.Inventory = spliceArray(this.LP.Inventory, "reveal");

            if (this.LP.ThreeMatches != 0) {
                this.reward = this.dice + `${emoji.dice} (Doubled reward... **${this.LP.ThreeMatches + 1} left**)\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
            } else {
                this.reward = `${this.dice} ${emoji.dice}\n\n__**You can't use Powerups after using a ${emoji.revealCard} card**__`;
            }

            this.quizEmbed.setDescription(stripIndents`
            **Question about** : ${this.charName}
            **Difficulty** : ${this.charItem.Difficulty}
            **Time** : 60 Seconds
            **Reward** : ${this.reward}

            ${this.charItem.Question}
            [Attachment](${this.charItem.Attachment})

            **${emoji.revealCard} | Reveal Card Used!**
            The answer of this question is: ${this.charItem.Answer[0]}
                        `);

            this.reason = "revealCard";
            this.powerUpUsed = true;

            await this.sentMsg.edit(this.quizEmbed);
        }

        return this;
    }

    async handleSwitchCard() {
        if (["switch", "switch", "switchquestion", "switch question"].includes(this.collected.content.toLowerCase())) {

            if (!this.LP.Inventory.includes("switch")) {
                this.spamStopper.delete(this.message.author);

                return this.message.channel.send(`${this.message.author.toString()}, **You don't have any Switch-Cards to use! You should buy more from the shop!**\nMinigame failed! Please try again...`);
            }

            if (this.powerUpUsed === true) {
                this.reason = true;
                this.messageCollector.stop();

                return this.message.channel.send(`**You can't use a Switch Card after using another powerup!**\nMinigame failed! Please try again...`);
            }

            this.LP.Inventory = spliceArray(this.LP.Inventory, "switch");

            if (this.collected.deletable) this.collected.delete();

            this.itemNumber = Math.abs(this.itemNumber - 1);
            this.charItem = this.charFile[this.itemNumber];

            if (this.LP.ThreeMatches != 0) {
                this.reward = this.dice + `${emoji.dice} (Doubled reward... **${this.LP.ThreeMatches + 1} left**)\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
            } else {
                this.reward = `${this.dice} ${emoji.dice}\n\n__**You can't use Powerups after using a ${emoji.switchCard} card**__`;
            }

            const newQuizEmbed = new MessageEmbed()
                .setTitle(`Answer the question below to get a dice ${emoji.dice}`)
                .setAuthor(this.message.author.username, this.message.author.displayAvatarURL())
                .setDescription(stripIndents`
			        **Question about** : ${this.charName}
			        **Difficulty** : ${this.charItem.Difficulty}
			        **Time** : 60 Seconds
			        **Reward** : ${this.reward}


                    ${this.charItem.Question}
                     [Attachment](${this.charItem.Attachment})`)
                .setImage(this.charItem.Attachment)
                .setFooter(this.charItem.Artist ? this.charItem.Artist : "Cowboish Bot", this.bot.user.displayAvatarURL())
                .setColor("RANDOM");

            this.powerUpUsed = true;
            await this.sentMsg.edit(newQuizEmbed);

        }

        return this;

    }

    async handleCorrectAnswer() {
        if (this.powerUpUsed && this.amountMessages == 1) return;

        if (this.charItem.Answer.includes(this.collected.content.toLowerCase())) {

            let wins = [
                `**${this.message.author.username}** got the right answer and got **${this.dice}** dice(s) ${emoji.dice}`,
                `Here is your **${this.dice}** dices(s) ${emoji.dice}, **${this.message.author.username}**!`,
                `**${this.message.author.username}** answered correctly! Here is your **${this.dice}** dice(s) ${emoji.dice}`
            ];

            let win = Math.floor(Math.random() * wins.length);

            this.message.channel.send(wins[win]);
            this.spamStopper.delete(this.message.author);

            this.LP.Dices += this.dice;

            await this.LP.save().catch(err => console.log(err));
            this.reason = true;
            this.messageCollector.stop();
        }
        else {
            if (this.reason === true) return;

            if (this.reason == "revealCard") {
                this.message.channel.send(`**${this.message.author.username}**, Wrooong!\nLmao how come you even fail that? The answer was literally revealed -w-`);
            } else {
                this.message.channel.send(`**${this.message.author.username}**, Wrooong! You lost the minigame!`);
            }

            this.reason = true;
            this.messageCollector.stop();
        }
        return this;
    }

    async handleMessageCollecting() {
        if (this.spamStopper.has(this.message.author)) return;

        this.LP = await newLP(this.message);

        await this.handleThreeMatches().then(() => this.handlePowerUps()).catch(err => console.log(err));

        const quizEmbed = new MessageEmbed()
            .setTitle(`Answer the question below to get a dice ${emoji.dice}`)
            .setAuthor(this.message.author.username, this.message.author.displayAvatarURL())
            .setDescription(stripIndents`
            **Question about** : ${this.charName}
            **Difficulty** : ${this.charItem.Difficulty}
            **Time** : 60 Seconds
            **Reward** : ${this.reward}


            ${this.charItem.Question}
             [Attachment](${this.charItem.Attachment})`)
            .setImage(this.charItem.Attachment)
            .setFooter(this.charItem.Artist ? this.charItem.Artist : "Cowboish Bot", this.bot.user.displayAvatarURL())
            .setColor("RANDOM");

        this.spamStopper.add(this.message.author);
        const sentMsg = await this.message.channel.send(quizEmbed);

        const messageCollector = await this.message.channel.createMessageCollector(this.filter, {
            time: 60000,
            errors: ['time']
        });

        messageCollector.on('collect', async (collected) => {
            this.collected = collected;
            this.messageCollector = messageCollector;
            this.sentMsg = sentMsg;
            this.quizEmbed = quizEmbed;
            this.amountMessages++;

            try {
                await this.handlePassCard();
                await this.handleRevealCard();
                await this.handleSwitchCard();
                await this.handleCorrectAnswer();
            } catch (err) {
                console.log(err);
                message.channel.send("Oops, caught an error... sorry");
            }

        });

        messageCollector.on('end', async () => {
            setTimeout(() => {
                this.spamStopper.delete(this.message.author);
            }, 1000);

            await addTheCooldown(this.message, this.path);

            if (![true, "revealCard"].includes(this.reason)) return this.message.channel.send(`**${this.message.author.username}**, Time is over! You lost the minigame!`);
        });
    }
}

module.exports = {
    quiz: async (bot, message, path, charName, spamStopper) => {
        return new Quiz(bot, message, path, charName, spamStopper).handleMessageCollecting();
    }

};