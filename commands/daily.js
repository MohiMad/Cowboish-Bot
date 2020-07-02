const { RichEmbed } = require('discord.js');
let cooldown = new Set();
const { newLP } = require("../functions.js");
const { ess2, ess1, ess3, clues, dice } = require("../emojis.json");

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
                    .setTitle("🎁 Daily reward given! 🎁")
                    .setThumbnail("https://i.imgur.com/VGo6rp3.png")
                    .setDescription(`I've yeeted **10** ${dice}, **500** ${clues} and **10** ${ess3} into your account ;D`)
                    .setColor("0xffd500")
                    .setFooter("Remember to come back the next day to get your rewards again :)");


                message.channel.send(dailyEmbed)
                    .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices + 10;
                LP.Clues = LP.Clues + 500;
                LP.Ess3 = LP.Ess3 + 10;

                LP.save().catch(err => console.log(err));



            }

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, 86400000);


        })







    }
}