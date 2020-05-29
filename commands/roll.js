const { RichEmbed } = require('discord.js');
const cooldown = new Set();
const { newLP, coolEmbed, ErrorMsg } = require("../functions.js");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'roll',
    description: "rolls a 4 sided dice",
    execute: async (message, args, bot) => {


        //random dice chances
        let imagNumba = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        //ends here

        let LP = await logicPath.findOne({ UserID: message.author.id });

        async function diceLoad(message, loot) {
            let m = await message.channel.send("<:dice:655384578499936257> **Rolling the dice**");

            setTimeout(() => {
                m.edit("<:dice:655384578499936257> **Rolling the dice.**");

            }, 500);

            setTimeout(() => {
                m.edit("<:dice:655384578499936257> **Rolling the dice..**");

            }, 1000);

            setTimeout(() => {
                m.edit("<:dice:655384578499936257> **Rolling the dice...**");

            }, 1500);

            setTimeout(() => {
                m.edit("<:dice:655384578499936257> **Dice results:**\n**" + loot + "**");

            }, 2000);

        }



        if (!LP) {
            newLP(message);
        }
        else if (cooldown.has(message.author.id)) {
            if (message.deletable) message.delete();

            return coolEmbed(message, "Ooof im tired", "To keep spamming away, there is a cooldown for this command and it's set to **3** seconds\nWait until it ends and try to execute this command again :D");
        }

        else if (LP.Dices === 0) {

            const noEmbed = new RichEmbed()
                .setTitle("Oops looks like you ran out of dices <:dice:655384578499936257>")
                .setColor("RANDOM")
                .setDescription("**You don't have any Dices left**\nBut don't worry! You can get more dice by doing `>quick`, `>daily` or `>hunt`")
                .setFooter("For more info, do >help logicpath");

            return message.channel.send(noEmbed);

        }
        else {

            let diceChances =
                [
                    //We begin with 1 dice chances

                    "10 <:clue:655384523735040000>", //1
                    "20 <:inspirations:655840409674711060>", //2
                    "1 <:ess1:655840713904488469>", //3
                    "Nothing", //4

                    //We go dice 2 results

                    "20 <:clue:655384523735040000>", //5
                    "10 <:clue:655384523735040000>, and 1 <:ess1:655840713904488469>", //6
                    "1 <:ess1:655840713904488469>, and 1 <:ess2:655840643847028751>", //7
                    "20 <:clue:655384523735040000>", //8
                    "50 <:inspirations:655840409674711060>, and 30 <:clue:655384523735040000>", //9

                    //We go dice 3 chances

                    "30 <:clue:655384523735040000>, and 1 <:ess1:655840713904488469>", //10
                    "10 <:clue:655384523735040000>, and 20 <:inspirations:655840409674711060>", //11
                    "30 <:clue:655384523735040000>", //12
                    "10 <:clue:655384523735040000>, 1 <:ess1:655840713904488469>, and 1 <:ess2:655840643847028751>", //13

                    //Dice 4 chances now??

                    "40 <:clue:655384523735040000>", //14
                    "20 <:clue:655384523735040000>, 1 <:ess1:655840713904488469>, and 60 <:inspirations:655840409674711060>", //15
                    "20 <:clue:655384523735040000>, and 1 <:ess1:655840713904488469>", //16,

                    "1 <:danganronpa_ess:715502686891540520>",//17
                    "1 <:danganronpa_ess:715502686891540520> + 1 <:ess1:655840713904488469>",
                    "2 <:danganronpa_ess:715502686891540520> + 10 <:clue:655384523735040000>",
                    "10 <:clue:655384523735040000> + 1 <:danganronpa_ess:715502686891540520>",
                    "1 <:danganronpa_ess:715502686891540520> + 20 <:inspirations:655840409674711060>"

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

            }, 3000);

        }






    }
}