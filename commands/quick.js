const { Client, RichEmbed, Attachment, Collection } = require('discord.js');
const cooldown = new Set();

module.exports = {
    name: 'quick',
    description: "play a quick match",
    execute(message, args) {

        let quick1 = ("You played as enchantress<:enchantress:648834319409872897> but your ping was high and you got downed easily, luckily you had a hero cowboy <:cowboy:649130677253439508> in the game who carried you the whole time\nYou managed to get a win and got **1** <:dice:655384578499936257> ");
        let quick2 = ("You chose to play as the op lawyer, the hunter was too afraid to face you so they chose to be friendly\nYou got a 4 man win and got **2** <:dice:655384578499936257>  ");
        let quick3 = ("Luck for but you unluck for the hunter, they were too laggy so you managed to get a win\nYou get **1** <:dice:655384578499936257> ");
        let quick4 = ("You did a 5 cipher kite! impressive\nYou get **1** <:dice:655384578499936257> ");

        let quick5 = ("You disconnected early game and the hunter found you! good job!\nYou should get nothing but i felt bad for you, here take this **1** <:dice:655384578499936257> ");
        let quick6 = ("You disconnected early game then rage quit.\n sry ma friend, but you get nothing");
        let quick7 = ("You got caught in the basement while opening a chest, well done!\nThe match was thrown away and you lost!");
        let quick8 = ("GG! you managed to draw it\nYou get **1** <:dice:655384578499936257> ");
        let quick9 = ("You got jumpscared by a photoboi, long story short you lost. Sad day for you\n You get nothing!");
        let quick10 = ("You won, noice \nyou get **2** <:dice:655384578499936257>  because that was your first win!");

        var facts = [quick1, quick3, quick4, quick5, quick8, quick2, quick10, quick6, quick7, quick9 ];
        var fact = Math.floor(Math.random() * facts.length);


        const coolEmbed = new RichEmbed()
            .setTitle("Take a breath maaan!")
            .setDescription("You took a breath didn't you xd, take a 5 minutes rest before playing another match to get a better luck")
            .setColor("0xe80000")
            .setFooter("In those 5 minutes, you can suggest something really quick to Mohi by doing >suggest");




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
                        D: 0

                })
                newLP.save().catch(err => console.log(err))
                .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"))


            }            

            else if (cooldown.has(message.author.id)){
                message.channel.sendEmbed(coolEmbed).then(m => m.delete(20000));
    
                setTimeout(() => {
                    cooldown.delete(message.author.id)
    
                }, 300000);

            }

            else if (facts[fact] === quick1 || quick3 || quick4 || quick5 || quick8){

                message.reply(facts[fact])
                .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices + 1;
                LP.save().catch(err => console.log(err));

            }

            else if (facts[fact] === quick2 || quick10){
                message.replay(facts[fact])
                .then(cooldown.add(message.author.id));


                LP.Dices = LP.Dices + 2;
                LP.save().catch(err => console.log(err));


            }

            else if (facts[fact] === quick6 || quick7 || quick9 ){
                message.reply(facts[fact])
                .then(cooldown.add(message.author.id));

            }



        })

    }
}