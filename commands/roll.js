const { RichEmbed } = require('discord.js');
const cooldown = new Set();
module.exports = {
    name: 'roll',
    description: "rolls a 4 sided dice",
    execute(message, args, MohiMoo) {

        //------------------Some value here

        //random dice chances
        let numba = 4;
        let imagNumba = Math.floor(Math.random() * (numba - 1 + 1)) + 1;
        let rollattach = 'dice' + imagNumba + ".gif";
        //ends here

        const coolEmbed = new RichEmbed()
            .setTitle("Ooof i'm tired, can i get carried?")
            .setDescription("To keep spamming away, there is a cooldown set to 10 seconds for this command, so now lemme rest just 10 seconds")
            .setColor("0xeb4034");


        //if dice result is two
        let dice2Chance1 = 'Here! take these **20** clues <:clue:655384523735040000>';

        let dice2Chance2 = "Here is your **10** clues <:clue:655384523735040000> and **1**<:ess1:655840713904488469> do ``open s9-1`` to open it!";

        let dice2Chance3 = "Noice you get **20** inspirations <:inspirations:655840409674711060> and **10** clues <:clue:655384523735040000>";

        let dice2Chance4 = "You walked 2 steps in your logicpath and got **20** clues <:clue:655384523735040000>";

        let dice2Chance5 = "You get **1** <:ess3:655840571616919586> and **10** <:clue:655384523735040000> use them wisely!\nto open the COAII essence, do ``open cao``";

        let dice2Chance6 = "Congrats! here is your **1** <:ess2:655840643847028751> use it wisely\nTo open the essence you just got, do `>open s9-2`";



        var facts2 = [dice2Chance1, dice2Chance2, dice2Chance3, dice2Chance4, dice2Chance5, dice2Chance6];

        var fact2 = Math.floor(Math.random() * facts2.length);
        //dice2 embed

        const diceEmbed = new RichEmbed()
            .setDescription(`**${message.author.username}** rolled that dice <:dice:655384578499936257> and got a **2** `)
            .addField('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔', (facts2[fact2]))
            .attachFiles(["./dice/" + rollattach])
            .setThumbnail('attachment://' + rollattach)
            .setColor("RANDOM");//embed2 ends here
        //____________________________________

        //facts1 here
        let dice1Chance1 = "Rip thats only a **10** clues <:clue:655384523735040000> for you";

        let dice1Chance2 = "I feel bad for you, but you get nothing :v";

        let dice1Chance3 = "You walked **1** step in your logicpath and got **10** clues <:clue:655384523735040000>";

        let dice1Chance4 = "You were **1** step away from getting **1**<:ess1:655840713904488469> and now you have it! do ``open s9-1`` to open it.";

        let dice1Chance5 = "One <:ess3:655840571616919586> is now in your pocket... wait is it?\nTo open the coa essence do ``open coa``";

        var facts1 = [dice1Chance1, dice1Chance2, dice1Chance3, dice1Chance4, dice1Chance5];

        var fact1 = Math.floor(Math.random() * facts1.length);
        //Dice embed 1 
        const diceEmbed1 = new RichEmbed()
            .setDescription(`**${message.author.username}** rolled a <:dice:655384578499936257> dice but they unlucky af so they get a **1** `)
            .addField('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔', (facts1[fact1]))
            .attachFiles(["./dice/" + rollattach])
            .setThumbnail('attachment://' + rollattach)
            .setColor("RANDOM");
        //____________________________________

        let dice4Chance1 = "The detective in your logicpath walked **4** steps, you get no essences but **40** clues <:clue:655384523735040000> were added to your inventory";

        let dice4Chance2 = "Noice! you get **1**<:ess1:655840713904488469>, **20** clues <:clue:655384523735040000> and **60**<:inspirations:655840409674711060>";

        let dice4Chance3 = "You walked **4** steps in your logicpath and got 40 clues <:clue:655384523735040000> and **1** <:ess1:655840713904488469>";

        let dice4Chance4 = "Your reward: **1** <:ess1:655840713904488469> & **1** <:ess3:655840571616919586> - Two birds with one stone :/\nTo open the COAIII essence do ``open coa``";

        let dice4Chance5 = "Here ya go! you get **1** <:ess2:655840643847028751> and **20** <:clue:655384523735040000>\nTo open the essence you just got, do `>open s9-2`";

        var facts4 = [dice4Chance1, dice4Chance2, dice4Chance3, dice4Chance4, dice4Chance5];

        var fact4 = Math.floor(Math.random() * facts4.length);


        //Dice embed no 4
        const diceEmbed4 = new RichEmbed()
            .setDescription(`**${message.author.username}** rolled a dice <:dice:655384578499936257> and got a ` + "**4** , lucky you!")
            .addField('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔', (facts4[fact4]))
            .attachFiles(["./dice/" + rollattach])
            .setThumbnail('attachment://' + rollattach)
            .setColor("RANDOM");
        //_____________________________________

        let dice3Chance1 = 'You walked 3 steps in your logicpath and got 30 clues <:clue:655384523735040000>';

        let dice3Chance2 = "Eyy! you got **20** clues <:clue:655384523735040000> and **1** <:ess1:655840713904488469>";

        let dice3Chance3 = "Oh look, you got **10** clues <:clue:655384523735040000> and **50** <:inspirations:655840409674711060>";

        let dice3Chance4 = "**20** <:clue:655384523735040000> & **1** <:ess3:655840571616919586> are now yours\nTo open the COAII essence do ``open coa`` ";

        var facts3 = [dice3Chance1, dice3Chance2, dice3Chance3, dice3Chance4];
        var fact3 = Math.floor(Math.random() * facts3.length);

        //for dice embed 3
        const diceEmbed3 = new RichEmbed()
            .setDescription(`Looks like **${message.author.username}** got a ` + " **3** from the dice <:dice:655384578499936257> they just rolled.")
            .addField('▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔', (facts3[fact3]))
            .attachFiles(["./dice/" + rollattach])
            .setThumbnail('attachment://' + rollattach)
            .setColor("RANDOM");
        //_______________________________________________


        const logicPath = require("../models/logicpath.js");

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);


            if (!LP) {

                const newLP = new logicPath({
                    UserID: message.author.id,
                    logic: 0,
                    Dices: 15,
                    Clues: 0,
                    Ess1: 5,
                    Ess2: 5,
                    Ess3: 5,
                    Inspirations: 0,
                    frags: 0,
                    S: 0,
                    A: 0,
                    B: 0,
                    C: 0,
                    D: 0,
                    Echoes: 0,

                    ID: 0,

                    Survivors: {
                        Cowboy: false,
                        Mercenary: false,
                        Coordinator: false,
                        Priestess: false,
                        Mechanic: false,
                        Mindseye: false,
                        Prefumer: false,
                        Dancer: false,
                        Seer: false,
                        Embalmer: false,
                        Acrobat: false,
                        Officer: false,
                        Barmaid: false,
                        Magician: false,
                        Explorer: false,
                        Forward: false,
                        Prospector: false,
                        Enchantress: false,
                        Wilding: false,
                        Postman: false,
                        NewSurv: false,
                        AnotherSurv: false,
                    },

                    Hunters: {

                        WuChang: false,
                        AxeBoi: false,
                        Lizard: false,
                        Clown: false,
                        GameKeeper: false,
                        Ripper: false,
                        SoulWeaver: false,
                        Geisha: false,
                        PhotoGrapher: false,
                        MadEyes: false,
                        Feaster: false,
                        DreamWitch: false,
                        BloodyQueen: false,
                        Pingu: false,
                        Sister: false,
                        NewHunta: false,
                        AnotherHunta: false

                    },
                    Opened: []


                })
                newLP.save().catch(err => console.log(err))
                    .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"))

            }             //DICE 1 EVENT


            else if (cooldown.has(message.author.id)) {
                if (message.deletable) message.delete();
                message.channel.send(coolEmbed).then(m => m.delete(20000));

            }

            else if (LP.Dices === 0) {

                const noEmbed = new RichEmbed()
                    .setTitle("Oops looks like you ran out of dices <:dice:655384578499936257>")
                    .setDescription("To get more dices<:dice:655384578499936257>, do `>quick`, `>daily` or `>hunt`")
                    .setFooter("For more info, do >help logicpath");

                return message.channel.send(noEmbed);


            }



            else if (rollattach === 'dice1.gif' && (facts1[fact1]) === dice1Chance1) {

                message.channel.send(diceEmbed1)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 10;

                LP.logic = LP.logic + 1;

                LP.save().catch(err => console.log(err));


            }

            else if (rollattach === 'dice1.gif' && (facts1[fact1]) === dice1Chance3) {
                message.channel.send(diceEmbed1)
                    .then(cooldown.add(message.author.id));


                LP.Dices = LP.Dices - 1;

                LP.Clues = LP.Clues + 10;

                LP.logic = LP.logic + 1;

                LP.save().catch(err => console.log(err));


            }
            else if (rollattach === 'dice1.gif' && (facts1[fact1]) === dice1Chance2) {
                message.channel.send(diceEmbed1)
                    .then(cooldown.add(message.author.id));


                LP.logic = LP.logic + 1;
                LP.Dices = LP.Dices - 1;

                LP.save().catch(err => console.log(err));



            }

            else if (rollattach === 'dice1.gif' && (facts1[fact1]) === dice1Chance4) {
                message.channel.send(diceEmbed1)
                    .then(cooldown.add(message.author.id));


                LP.logic = LP.logic + 1;

                LP.Dices = LP.Dices - 1;


                LP.Ess1 = LP.Ess1 + 1;
                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === 'dice1.gif' && (facts1[fact1]) === dice1Chance5) {
                message.channel.send(diceEmbed1)
                    .then(cooldown.add(message.author.id));


                LP.logic = LP.logic + 1;

                LP.Dices = LP.Dices - 1;

                LP.Ess2 = LP.Ess2 + 1;

                LP.save().catch(err => console.log(err));

            }
            //Dice 2 event
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance1) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));


                LP.logic = LP.logic + 2;

                LP.Clues = LP.Clues + 20;
                LP.Dices = LP.Dices - 1;

                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance2) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));


                LP.logic = LP.logic + 2;

                LP.Clues = LP.Clues + 10;
                LP.Dices = LP.Dices - 1;

                LP.Ess1 = LP.Ess1 + 1;
                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance3) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));



                LP.logic = LP.logic + 2;
                LP.Clues = LP.Clues + 10;
                LP.Inspirations = LP.Inspirations + 20;
                LP.Dices = LP.Dices - 1;

                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance4) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 20;
                LP.logic = LP.logic + 2;
                LP.Dices = LP.Dices - 1;

                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance5) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 10;
                LP.logic = LP.logic + 2;
                LP.Dices = LP.Dices - 1;
                LP.Ess2 = LP.Ess2 + 1;

                LP.save().catch(err => console.log(err));

            }
            else if (rollattach === "dice2.gif" && (facts2[fact2]) === dice2Chance6) {
                message.channel.send(diceEmbed)
                    .then(cooldown.add(message.author.id));

                LP.logic = LP.logic + 2;
                LP.Dices = LP.Dices - 1;
                LP.Ess3 = LP.Ess3 + 1;

                LP.save().catch(err => console.log(err));

            }
            //dice 3 here
            else if (rollattach === "dice3.gif" && (facts3[fact3]) === dice3Chance1) {
                message.channel.send(diceEmbed3)
                    .then(cooldown.add(message.author.id));



                LP.Clues = LP.Clues + 30;
                LP.Dices = LP.Dices - 1;

                LP.logic = LP.logic + 3;

                LP.save().catch(err => console.log(err));
            }

            else if (rollattach === "dice3.gif" && (facts3[fact3]) === dice3Chance2) {
                message.channel.send(diceEmbed3)
                    .then(cooldown.add(message.author.id));



                LP.Clues = LP.Clues + 20;
                LP.Dices = LP.Dices - 1;

                LP.Ess1 = LP.Ess1 + 1;
                LP.logic = LP.logic + 3;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice3.gif" && (facts3[fact3]) === dice3Chance3) {
                message.channel.send(diceEmbed3)
                    .then(cooldown.add(message.author.id));



                LP.Clues = LP.Clues + 30;
                LP.Dices = LP.Dices - 1;

                LP.Inspirations = LP.Inspirations + 50;
                LP.logic = LP.logic + 3;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice3.gif" && (facts3[fact3]) === dice3Chance4) {
                message.channel.send(diceEmbed3)
                    .then(cooldown.add(message.author.id));

                LP.Clues = LP.Clues + 20;
                LP.Dices = LP.Dices - 1;
                LP.logic = LP.logic + 3;
                LP.Ess2 = LP.Ess2 + 1;

                LP.save().catch(err => console.log(err));
            }
            //dice 4 here

            else if (rollattach === "dice4.gif" && (facts4[fact4]) === dice4Chance1) {
                message.channel.send(diceEmbed4)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 40;
                LP.Dices = LP.Dices - 1;

                LP.logic = LP.logic + 4;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice4.gif" && (facts4[fact4]) === dice4Chance2) {
                message.channel.send(diceEmbed4)
                    .then(cooldown.add(message.author.id));


                LP.Ess1 = LP.Ess1 + 1;
                LP.Inspirations = LP.Inspirations + 60;
                LP.Dices = LP.Dices - 1;

                LP.Clues = LP.Clues + 20;
                LP.logic = LP.logic + 4;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice4.gif" && (facts4[fact4]) === dice4Chance3) {
                message.channel.send(diceEmbed4)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 40;
                LP.Dices = LP.Dices - 1;

                LP.Ess1 = LP.Ess1 + 1;
                LP.logic = LP.logic + 4;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice4.gif" && (facts4[fact4]) === dice4Chance4) {
                message.channel.send(diceEmbed4)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 10;
                LP.Dices = LP.Dices - 1;

                LP.Ess1 = LP.Ess1 + 1;
                LP.Ess2 = LP.Ess2 + 1;

                LP.logic = LP.logic + 4;

                LP.save().catch(err => console.log(err));
            }
            else if (rollattach === "dice4.gif" && (facts4[fact4]) === dice4Chance5) {
                message.channel.send(diceEmbed4)
                    .then(cooldown.add(message.author.id));


                LP.Clues = LP.Clues + 20;
                LP.Dices = LP.Dices - 1;

                LP.Ess3 = LP.Ess3 + 1;

                LP.logic = LP.logic + 4;

                LP.save().catch(err => console.log(err));
            }

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, 10000);


        });


    }
}