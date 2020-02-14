const { RichEmbed } = require('discord.js');
let cooldown = new Set();
const { newLP, guildAdd } = require("../functions.js");


module.exports = {
    name: 'daily',
    description: "daily rewards",
    execute(message, args, MohiMoo) {

        const coolEmbed = new RichEmbed()
            .setTitle("Take it easy on me dude!")
            .setColor("0xe80000")
            .setDescription("It's a DAILY reward so you have to wait 24 hours until you can get your reward again..");




        const logicPath = require("../models/logicpath.js");

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);


            if (!LP) { newLP(message) }

            else if (cooldown.has(message.author.id)) {
                if (message.deletable) message.delete();

                message.channel.send(coolEmbed).then(m => m.delete(20000));


            }
            else {

                const dailyEmbed = new RichEmbed()
                    .setTitle("🎁 Here is your daily reward 🎁")
                    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", "Here! take these **3**<:dice:655384578499936257>  **200**<:clue:655384523735040000>")
                    .setColor("0xffd500")
                    .setFooter("Remember to come back the next day to get your rewards again :)");


                message.channel.send(dailyEmbed)
                    .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices + 3;
                LP.Clues = LP.Clues + 200;
                LP.save().catch(err => console.log(err));



            }

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, 86400000);

            guildAdd(message);

        })


        




    }
}