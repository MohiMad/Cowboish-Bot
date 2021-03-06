const { clues, insp, frags, ess1, ess2, ess3, dice, logic, LPskin } = require("../../src/emojis.json");

const { MessageEmbed } = require('discord.js');
const { newLP, coolEmbed, findCooldown, addCooldown, } = require("../../src/functions.js");
const logicPath = require("../../models/logicpath.js");

module.exports = {
    name: ["roll", "rolldice", "dice", "r"],
    description: "Roll a 4-sided Dice and get some Logicpath rewards such as Essences, Clues and Inspirations\nYou can roll up to 10 dices at once by providing the amount of Dices you want to roll as your 1st Argument\n\n**Usage:** `$prefixroll [amount]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "USE_EXTERNAL_EMOJIS"],
    category: "Logicpath",
    execute: async (message, args, prefix, bot) => {
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
                        Ess1: 1,
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


            let CLUES = 0;
            let INSPIRATIONS = 0;
            let ESS1 = 0;
            let ESS2 = 0;
            let ESS3 = 0;
            let LOGIC = 0;


            for (i = 1; i < number + 1; i++) {
                let nmbr;

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

            let loot = ``;

            if (CLUES != 0) loot = loot + `**${CLUES}** ${clues}`;
            if (INSPIRATIONS != 0) loot = loot + ` + **${INSPIRATIONS}** ${insp}`;
            if (ESS1 != 0) loot = loot + ` + **${ESS1}** ${ess1}`;
            if (ESS2 != 0) loot = loot + ` + **${ESS2}** ${ess2}`;
            if (ESS3 != 0) loot = loot + ` + **${ESS3}** ${ess3}`


            const DiceEmbed = new MessageEmbed()
                .setTitle(`${number} Dice(s) has been rolled!`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}), "https://mohimad.github.io/cowboishbot/")
                .setColor("0xC9B37A")
                .setDescription(`Logicpath Steps ➜ **${LOGIC}** ${logic}\nResults ➜ ${loot}`)
                .setThumbnail("https://media.giphy.com/media/ndXWBuMg078f5p0O0I/giphy.gif")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            if (LP.logic === 1528 || LP.logic > 1528) {
                if (!LP.Opened.includes("LP-15")) {
                    LP.Opened = [...LP.Opened, "LP-15"];
                    LP.A = LP.A + 1;

                    DiceEmbed.setDescription(`You have walked **${LP.logic}** logicpath steps and got\n__*Guard 26 - Mr. Eggshell*__\n\nLogicpath Steps ➜ **${LOGIC}** ${logic}\nResults ➜ ${loot}`)
                        .setThumbnail("https://i.imgur.com/Xf4wDZC.png");
                }
            } else if (LP.logic > 1000 && LP.logic < 1528) {
                DiceEmbed.addField("Almost there!", `You're **${1528 - LP.logic}** steps away from getting __Mr. Eggshell__ ${LPskin}`);
            }

            LP.Dices = LP.Dices - number;
            await LP.save().catch(e => console.log(e));
            await addCooldown(message, 1000 * number, "roll");

            message.channel.send(DiceEmbed);

        }

    }

}
