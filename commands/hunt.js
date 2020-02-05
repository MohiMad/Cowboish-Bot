const { RichEmbed } = require('discord.js');
let cooldown = new Set();
const { newLP } = require("../functions.js");

module.exports = {
    name: 'hunt',
    description: "play a match as a hunter",
    execute(message, args, MohiMoo) {


        let dice = "<:dice:655384578499936257>";

        var quick1 = (`you won! don't get too happy the survivors were hounds...\n**1** ${dice} is now in your inventory!`);

        var quick2 = (`a terrorshock early game secured you the win, you got a 4 man kill!\nHere is your **2** ${dice}`);

        var quick3 = (`aww! you got could get a 4 man kill but you let the last survivor out!\ntake these **2** ${dice} bcuz ur kind owo`);

        var quick4 = (`you were laggy af early game but the train saved you by knocking two survivors down xd\nYou get **1** ${dice}`);

        var quick5 = (`you matched up against tryhard griffins and they all escaped :v\nYou get nothing ma friend`);

        var quick6 = (`you was doing great until you disconnected which made your target get away\nMohiMoo felt bad for you so he gives you this **1** ${dice}`);

        var quick7 = (`ma friend, you shouldn't have played if you know that your ping is too high\nyou asked for it yourself... you get nothing :p`);

        var quick8 = (`lmao xd, even the suvivors felt bad for you cuz you're trash xd\nThey gave you the draw and **2** ${dice} you better thank them in the post chat!`);

        var quick9 = (`you matched up against *MohiMoo* who kept lassoing your target and that cost you the win!\nit's alright ma friend you will get something next time :)`);

        var quick10 = (`oh look it's Grizzly! and because you're a big fan of him you chose to be friendly\nyou get nothing, it was your choice after all`);

        var facts = [quick1, quick3, quick4, quick5, quick8, quick2, quick10, quick6, quick7, quick9];
        var fact = Math.floor(Math.random() * facts.length);

        const coolEmbed = new RichEmbed()
            .setTitle("Take a breath maaan!")
            .setDescription("The match didn't end yet... you have to wait 5 minutes before you can play another match")
            .setColor("0xe80000")
            .setFooter("In those 5 minutes, you can suggest something really quick to Mohi by doing >suggest");



        const logicPath = require("../models/logicpath.js");

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);
        

            if (!LP) { newLP(message) }
            

            else if (cooldown.has(message.author.id)){
                if (message.deletable) message.delete();
                message.channel.send(coolEmbed).then(m => m.delete(20000));
    
                

            }

            else if ( (facts[fact]) === quick1 || quick4 || quick6 ){

                message.reply((facts[fact]))
                .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices +1;

                LP.save().catch(err => console.log(err));

            }

            else if ( (facts[fact]) ===  quick2 || quick3 || quick8 ){

                message.reply((facts[fact]))
                .then(cooldown.add(message.author.id))
                

                LP.Dices = LP.Dices +2;

                LP.save().catch(err => console.log(err));

            }

            else {

                message.reply((facts[fact]))
                .then(cooldown.add(message.author.id));

            }

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, 300000);


        
        })


        }
    }