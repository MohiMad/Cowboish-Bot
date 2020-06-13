const { clues, insp, frags, ess1, ess2, ess3, dangan, dice } = require("../emojis.json");

const { RichEmbed } = require('discord.js');
const cooldown = new Set();
const { newLP, coolEmbed, ErrorMsg } = require("../functions.js");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'roll',
    description: "rolls a 4 sided dice",
    execute: async (message, args, bot, prefix) => {

        let imagNumba = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

        let LP = await logicPath.findOne({ UserID: message.author.id });

        async function diceLoad(message, loot) {
            let m = await message.channel.send(dice + " | **Dice results:**\n**" + loot + "**");

        }

        if (!LP) {
            newLP(message);
        }
        else if (cooldown.has(message.author.id)) {
            if (message.deletable) message.delete();

            return coolEmbed(message, "Ooof im tired", "To keep spamming away, there is a cooldown for this command and it's set to **5** seconds\nWait until it ends and try to execute this command again :D");
        }

        else if (LP.Dices === 0) {

            const noEmbed = new RichEmbed()
                .setTitle(`Oops looks like you ran out of dices ${dice}`)
                .setColor("RANDOM")
                .setDescription("**You don't have any Dices left**\nBut don't worry! You can get more dice by doing `" + prefix + "quick`, `" + prefix + "daily` or `" + prefix + "hunt`")
                .setFooter("For more info, do " + prefix + "help logicpath");

            return message.channel.send(noEmbed);

        }
        else {

            if (!args[1]) {

                let diceChances =
                    [
                        //We begin with 1 dice chances

                        `10 ${clues}`, //1
                        `20 ${insp}`, //2
                        `1 ${ess1}`, //3
                        "Nothing", //4

                        //We go dice 2 results

                        `20 ${clues}`, //5
                        `10 ${clues}, and 1 ${ess1}`, //6
                        `1 ${ess1}, and 1 ${ess2}`, //7
                        `20 ${clues}`, //8
                        `50 ${insp}, and 30 ${clues}`, //9

                        //We go dice 3 chances

                        `30 ${clues}, and 1 ${ess1}`, //10
                        `10 ${clues}, and 20 ${insp}`, //11
                        `30 ${clues}`, //12
                        `10 ${clues}, 1 ${ess1}, and 1 ${ess2}`, //13

                        //Dice 4 chances now??

                        `40 ${clues}`, //14
                        `20 ${clues}, 1 ${ess1}, and 60 ${insp}`, //15
                        `20 ${clues}, and 1 ${ess1}`, //16,

                        `1 ${dangan}`,//17
                        `1 ${dangan} + 1 ${ess1}`,
                        `2 ${dangan} + 10 ${clues}`,
                        `10 ${clues} + 1 ${dangan}`,
                        `1 ${dangan} + 20 ${insp}`

                    ];

                diceChance = Math.floor(Math.random() * diceChances.length);


                cooldown.add(message.author.id);


                if (diceChance === 0) {
                    LP.Clues = LP.Clues + 1;
                }
                if (diceChance === 1) {
                    LP.Inspirations = LP.Inspirations + 20;
                }
                if (diceChance === 2) {
                    LP.Ess1 = LP.Ess1 + 1;
                }
                if (diceChance === 3) {
                    LP.Clues = LP.Clues + 1;
                }

                //Here ends dice 1

                if (diceChance === 4) {
                    LP.Clues = LP.Clues + 20;
                }
                if (diceChance === 5) {
                    LP.Clues = LP.Clues + 10;
                    LP.Ess1 = LP.Ess1 + 1;
                }
                if (diceChance === 6) {
                    LP.Ess1 = LP.Ess1 + 1;
                    LP.Ess2 = LP.Ess2 + 1;
                }
                if (diceChance === 7) {
                    LP.Clues = LP.Clues + 20;
                }
                if (diceChance === 8) {
                    LP.Clues = LP.Clues + 30;
                    LP.Inspirations = LP.Inspirations + 50;
                }

                //Dice 2 ends here 

                if (diceChance === 9) {
                    LP.Clues = LP.Clues + 30;
                    LP.Ess1 = LP.Ess1 + 1;
                }
                if (diceChance === 10) {
                    LP.Clues = LP.Clues + 10;
                    LP.Inspirations = LP.Inspirations + 20;
                }
                if (diceChance === 11) {
                    LP.Clues = LP.Clues + 30;
                }
                if (diceChance === 12) {
                    LP.Clues = LP.Clues + 10;
                    LP.Ess1 = LP.Ess1 + 1;
                    LP.Ess2 = LP.Ess2 + 1;
                }

                //Dice 3 ends 

                if (diceChance === 13) {
                    LP.Clues = LP.Clues + 40;
                }
                if (diceChance === 14) {
                    LP.Clues = LP.Clues + 20;
                    LP.Ess1 = LP.Ess1 + 1;
                    LP.Inspirations = LP.Inspirations + 60;
                }
                if (diceChance === 15) {
                    LP.Clues = LP.Clues + 20;
                    LP.Ess1 = LP.Ess1 + 1;
                }

                if (diceChance === 16) {
                    LP.dangan = LP.dangan + 1;
                }
                if (diceChance === 17) {
                    LP.dangan = LP.dangan + 1;
                    LP.Ess1 = LP.Ess1 + 10;
                }
                if (diceChance === 18) {
                    LP.dangan = LP.dangan + 2;
                    LP.Clues = LP.Clues + 10;
                }
                if (diceChance === 19) {
                    LP.dangan = LP.dangan + 1;
                    LP.Clues = LP.Clues + 10;
                }
                if (diceChance === 20) {
                    LP.dangan = LP.dangan + 1;
                    LP.Inspirations = LP.Inspirations + 20;
                }

                //end of dices 4            

                diceLoad(message, diceChances[diceChance]);

                cooldown.add(message.author.id);


                LP.Dices = LP.Dices - 1;

                LP.logic = LP.logic + imagNumba;


                LP.save().catch(e => console.log(e));

                setTimeout(() => {
                    cooldown.delete(message.author.id);

                }, 5000);

            }

            else if (["5", "five"].includes(args[1].toLowerCase())) {

                if (LP.Dices < 5) return message.channel.send(`❌ | **${message.author.username}**, you have less than 5 ${dice}...\nYou can roll your dices one by one tho...`);


                let dice_amount_chance = [
                    12, //0
                    16, //1
                    18, //2
                    20, //3
                    17, //4
                    15, //5
                    14, //6,
                    19, //7

                ];

                let dice_five_chances = [
                    //We keep the chances and the amount at the same flow so if chance 1 occours amount 1 occours as well :)

                    `110 ${clues} + 20 ${insp}`, //0

                    `80 ${clues} + 2 ${ess1} + 50 ${insp}`, //1

                    `130 ${clues} + 1 ${ess1} + 1 ${dangan} + 20 ${insp}`, //2

                    `150 ${clues} + 2 ${ess1} + 2 ${dangan}`, //3

                    `160 ${clues} + 1 ${ess1}`, //4

                    `120 ${clues} + 2 ${ess1} + 1 ${dangan}`, //5

                    `90 ${clues} + 2 ${ess1} + 50 ${insp}`, //6

                    `100 ${clues} + 1 ${dangan} + 1 ${ess1} + 60 ${insp}`, //7

                ];

                let random_dice_five_number = Math.floor(Math.random() * dice_five_chances.length);

                switch (random_dice_five_number) {
                    case 0:
                        LP.Clues = LP.Clues + 110;
                        LP.Inspirations = LP.Inspirations + 20;
                        break;

                    case 1:
                        LP.Clues = LP.Clues + 80;
                        LP.Inspirations = LP.Inspirations + 50;
                        LP.Ess1 = LP.Ess1 + 2;

                        break;

                    case 2:
                        LP.Clues = LP.Clues + 130;
                        LP.Ess1 = LP.Ess1 + 1;
                        LP.dangan = LP.dangan + 1;
                        LP.Inspirations = LP.Inspirations + 20;
                        break;

                    case 3:
                        LP.Clues = LP.Clues + 150;
                        LP.Ess1 = LP.Ess1 + 2;
                        LP.dangan = LP.dangan + 2;
                        break;

                    case 4:
                        LP.Clues = LP.Clues + 160;
                        LP.Ess1 = LP.Ess1 + 1;
                        break;

                    case 5:
                        LP.Clues = LP.Clues + 120;
                        LP.Ess1 = LP.Ess1 + 2;
                        LP.dangan = LP.dangan + 1;
                        break;

                    case 6:
                        LP.Clues = LP.Clues + 90;
                        LP.Inspirations = LP.Inspirations + 50;
                        LP.Ess1 = LP.Ess1 + 2;
                        break;

                    case 7:
                        LP.Clues = LP.Clues + 100;
                        LP.Ess1 = LP.Ess1 + 1;
                        LP.dangan = LP.dangan + 1;
                        LP.Inspirations = LP.Inspirations + 60;
                        break;

                }

                LP.logic = LP.logic + dice_amount_chance[random_dice_five_number];

                LP.Dices = LP.Dices - 5;

                LP.save().catch(e => console.log(e));

                message.channel.send(`${dice} | **Five Dices have been rolled!**\n**__Results__**:\n__Logicpath steps__: **${dice_amount_chance[random_dice_five_number]}**\n__Rewards__: **${dice_five_chances[random_dice_five_number]}**`);


            } else if (["10", "ten"].includes(args[1].toLowerCase())) {

                if (LP.Dices < 10) return message.channel.send(`❌ | **${message.author.username}** You have less than 10 Dices...`);

                let dice_10_amount = [
                    30, //0
                    26, //1
                    28, //2
                    35, //3
                    40, //4
                    10, //5
                ];

                let dice_10_chances = [
                    `200 ${clues} + 6 ${ess1}`, //0

                    `180 ${clues} + 3 ${ess1} + 2 ${dangan}`, //1

                    `210 ${clues} + 2 ${ess1} + 2 ${dangan} + 50 ${insp}`, //2

                    `300 ${clues} + 2 ${ess1} + ${dangan}`, //3

                    `320 ${clues} + 3 ${ess1} + 80 ${insp}`, //4

                    `60 ${clues} + 1 ${ess1}`, //5

                ];

                let random_10_dice_number = Math.floor(Math.random() * dice_10_chances.length);


                switch (random_10_dice_number) {
                    case 0:
                        LP.Clues = LP.Clues + 200;
                        LP.Ess1 = LP.Ess1 + 6;
                        break;

                    case 1:
                        LP.Clues = LP.Clues + 180;
                        LP.Ess1 = LP.Ess1 + 3;
                        LP.dangan = LP.dangan + 2;
                        break;

                    case 2:
                        LP.Clues = LP.Clues + 210;
                        LP.Ess1 = LP.Ess1 + 2;
                        LP.dangan = LP.dangan + 2;
                        LP.Inspirations = LP.Inspirations + 50;
                        break;

                    case 3:
                        LP.Clues = LP.Clues + 200;
                        LP.Ess1 = LP.Ess1 + 2;
                        LP.dangan = LP.dangan + 1;
                        break;

                    case 4:
                        LP.Clues = LP.Clues + 320;
                        LP.Ess1 = LP.Ess1 + 3;
                        LP.Inspirations = LP.Inspirations + 80;
                        break;

                    case 5:
                        LP.clues = LP.clues + 60;
                        LP.Ess1 = LP.Ess1 + 1;
                        break;
                }

                LP.Dices = LP.Dices - 10;

                LP.logic = LP.logic + dice_10_amount[random_10_dice_number];

                LP.save().catch(e => console.log(e));

                message.channel.send(`**${dice} | Rolled 10 Dices!**\n**__Results__:**\n__Logicpath steps__: **${dice_10_amount[random_10_dice_number]}**\n__Rewards__: **${dice_10_chances[random_10_dice_number]}**`);

            } else {

                let invalidArgsEmbed = new RichEmbed()
                    .setTitle("Invalid arguments friend :')", message.author.displayAvatarURL)
                    .setColor("0xFFF033")
                    .setThumbnail("https://cdn.discordapp.com/emojis/655384578499936257.png?v=1")
                    .setDescription("You can only roll one single dice, five dices or 10 dices at once...\n\nTo roll one single dice, don't provide any arguments after the command\n**Example**: `" + prefix + "roll`\n\nTo roll **5** dices at once, do `" + prefix + "roll 5`\n\nTo roll **10** dices at once, do `" + prefix + "roll 10`\n\nProviding number-words such as `five` or `ten` works as well >;D")
                    .setFooter("Keep in mind that you must have enough amount of dices to be able to roll that amount :)", bot.user.displayAvatarURL);


                message.channel.send(invalidArgsEmbed);
            }
        }

    }

}
