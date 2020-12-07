const { clues, insp, frags, ess1, ess2, ess3, dice, logic } = require("../emojis.json");

const { MessageEmbed } = require('discord.js');
const { newLP, coolEmbed, findCooldown, addCooldown, } = require("../functions.js");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'roll',
    description: "rolls a 4 sided dice",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        let LP = await logicPath.findOne({ UserID: message.author.id });

        let cooldownCheck = await findCooldown(message, "roll");

        if (cooldownCheck) return coolEmbed(message, "Please wait until the cooldown is over!", "Please wait **REMAINING** before you can roll more dices!", cooldownCheck.timeRemaining, ["s"]);


        if (LP.Dices === 0) {

            const noEmbed = new MessageEmbed()
                .setTitle(`Oops looks like you ran out of dices ${dice}`)
                .setColor("RANDOM")
                .setDescription("**You don't have any Dices left**\nBut don't worry! You can get more dice by doing `" + prefix + "quick`, `" + prefix + "daily` or `" + prefix + "hunt`")
                .setFooter("For more info, do " + prefix + "help logicpath");

            return message.channel.send(noEmbed);

        } else {
            let number = Number(args[1]);

            if (!number) number = 1;
            if (number < 0) return message.channel.send(`❌ | **${message.author.username}**, Can't roll a negative amount of dices >:/`);
            if (isNaN(number)) return message.channel.send(`❌ | **${message.author.username}**, please provide me a **number** of dices you want to roll!`)
            if (number > 10) return message.channel.send(`❌ | **${message.author.username}**, can't roll more than **10** Dices!`);
            if (LP.Dices < number) return message.channel.send(`❌ | **${message.author.username}**, You have less than **${number}** ${dice}!`);

            let diceChances =
                [
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 1
                    },
                    {
                        Clues: 0,
                        Inspirations: 20,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 1
                    },
                    {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 1
                    },
                    {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 1
                    },
                    {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 1,
                        Logic: 1
                    }, {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 2,
                        Ess3: 0,
                        Logic: 1
                    }, {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 2,
                        Ess3: 1,
                        Logic: 1
                    },//logic 1 ends here
                    {
                        Clues: 20,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 2
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 2
                    },
                    {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 1,
                        Ess3: 0,
                        Logic: 2
                    },
                    {
                        Clues: 20,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 2
                    },
                    {
                        Clues: 30,
                        Inspirations: 50,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 2
                    },
                    {
                        Clues: 10,
                        Inspirations: 50,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 1,
                        Logic: 2
                    }, 
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 3,
                        Ess3: 0,
                        Logic: 2
                    }, //2 ends
                    {
                        Clues: 30,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 3
                    },
                    {
                        Clues: 10,
                        Inspirations: 20,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 3
                    },
                    {
                        Clues: 30,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 0,
                        Logic: 3
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 1,
                        Ess3: 0,
                        Logic: 3
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 0,
                        Ess3: 2,
                        Logic: 3
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 3,
                        Ess3: 0,
                        Logic: 3
                    },
                    {
                        Clues: 0,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 1,
                        Ess3: 1,
                        Logic: 3
                    }, //End of logic 3
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 2,
                        Ess3: 1,
                        Logic: 4
                    },
                    {
                        Clues: 20,
                        Inspirations: 60,
                        Ess1: 2,
                        Ess2: 1,
                        Ess3: 0,
                        Logic: 4
                    },
                    {
                        Clues: 20,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 1,
                        Ess3: 0,
                        Logic: 4
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 0,
                        Ess3: 1,
                        Logic: 4
                    },
                    {
                        Clues: 10,
                        Inspirations: 0,
                        Ess1: 1,
                        Ess2: 1,
                        Ess3: 1,
                        Logic: 4
                    },
                    {
                        Clues: 20,
                        Inspirations: 60,
                        Ess1: 1,
                        Ess2: 2,
                        Ess3: 1,
                        Logic: 4
                    },
                    {
                        Clues: 20,
                        Inspirations: 0,
                        Ess1: 2,
                        Ess2: 2,
                        Ess3: 0,
                        Logic: 4
                    },
                    {
                        Clues: 30,
                        Inspirations: 0,
                        Ess1: 0,
                        Ess2: 1,
                        Ess3: 2,
                        Logic: 4
                    }
                ];

            diceChance1 = Math.floor(Math.random() * diceChances.length);
            diceChance2 = Math.floor(Math.random() * diceChances.length);
            diceChance3 = Math.floor(Math.random() * diceChances.length);
            diceChance4 = Math.floor(Math.random() * diceChances.length);
            diceChance5 = Math.floor(Math.random() * diceChances.length);
            diceChance6 = Math.floor(Math.random() * diceChances.length);
            diceChance7 = Math.floor(Math.random() * diceChances.length);
            diceChance8 = Math.floor(Math.random() * diceChances.length);
            diceChance9 = Math.floor(Math.random() * diceChances.length);
            diceChance10 = Math.floor(Math.random() * diceChances.length);

            function giveRewards(diceChance) {

                if (diceChances[diceChance].Clues != 0) LP.Clues = LP.Clues + diceChances[diceChance].Clues;
                if (diceChances[diceChance].Inspirations != 0) LP.Inspirations = LP.Inspirations + diceChances[diceChance].Inspirations;
                if (diceChances[diceChance].Ess1 != 0) LP.Ess1 = LP.Ess1 + diceChances[diceChance].Ess1;
                if (diceChances[diceChance].Ess2 != 0) LP.Ess2 = LP.Ess2 + diceChances[diceChance].Ess2;
                if (diceChances[diceChance].Ess3 != 0) LP.Ess3 = LP.Ess3 + diceChances[diceChance].Ess3;
                LP.logic = LP.logic + diceChances[diceChance].Logic;

            }

            let emojiDices = ``;

            let CLUES = 0;
            let INSPIRATIONS = 0;
            let ESS1 = 0;
            let ESS2 = 0;
            let ESS3 = 0;
            let LOGIC = 0;


            for (i = 1; i < number + 1; i++) {
                let nmbr;
                emojiDices = emojiDices + `${dice}`;

                let rowed = [0, diceChance1, diceChance2, diceChance3, diceChance4, diceChance5, diceChance6, diceChance7, diceChance8, diceChance9, diceChance10];

                nmbr = rowed[i];

                giveRewards(nmbr);

                CLUES = CLUES + diceChances[nmbr].Clues;
                INSPIRATIONS = INSPIRATIONS + diceChances[nmbr].Inspirations;
                ESS1 = ESS1 + diceChances[nmbr].Ess1;
                ESS2 = ESS2 + diceChances[nmbr].Ess2;
                ESS3 = ESS3 + diceChances[nmbr].Ess3;
                LOGIC = LOGIC + diceChances[nmbr].Logic;

            }

            let loot = `Logicpath Steps ➜ **${LOGIC}** ${logic}\n`;

            if (CLUES != 0) loot = loot + `**${CLUES}** ${clues}`;
            if (INSPIRATIONS != 0) loot = loot + ` + **${INSPIRATIONS}** ${insp}`;
            if (ESS1 != 0) loot = loot + ` + **${ESS1}** ${ess1}`;
            if (ESS2 != 0) loot = loot + ` + **${ESS2}** ${ess2}`;
            if (ESS3 != 0) loot = loot + ` + **${ESS3}** ${ess3}`


            const DiceEmbed = new MessageEmbed()
                .setAuthor(`${number} Dice(s) has been rolled!`, message.author.displayAvatarURL, "https://mohimad.github.io/CowboishBot/")
                .setColor("0xC9B37A")
                .setDescription("**《** " + emojiDices + " **》**" + "\n" + loot)

            if (LP.logic > 1528) {
                if (!LP.Opened.includes("LP-14")) {
                    LP.Opened = [...LP.Opened, "LP-14"];
                    LP.A = LP.A + 1;

                    DiceEmbed.setDescription(`You had walked **1528** logicpath steps and got\n__*Feaster - Exoplanet*__\n\n**《**${emojiDices}**》**\n${loot}`)
                        .setThumbnail("https://i.imgur.com/x2jL9TY.png");
                }
            }

            LP.Dices = LP.Dices - number;
            await LP.save().catch(e => console.log(e));
            await addCooldown(message, 1000 * number, "roll");

            message.channel.send(DiceEmbed);

        }

    }

}
