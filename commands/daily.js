const { Client, RichEmbed, Attachment, Collection } = require('discord.js');
let cooldown = new Set();

module.exports = {
    name: 'daily',
    description: "daily rewards",
    execute(message, args) {

        const coolEmbed = new RichEmbed()
            .setTitle("Take it easy on me dude!")
            .setColor("0xe80000")
            .setDescription("It's a DAILY reward so you have to wait 24 hours until you can get your reward again..");
            



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
                .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"));

            }

            else if (cooldown.has(message.author.id)){
                message.delete().catch(O_o => { });

                message.channel.sendEmbed(coolEmbed).then(m => m.delete(20000));
    
                setTimeout(() => {
                    cooldown.delete(message.author.id)
    
                }, 86400000);

            }
            else {

                const dailyEmbed = new RichEmbed()
                .setTitle("🎁 Here is your daily reward 🎁")
                .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", "Here! take these **3**<:dice:655384578499936257>  **500**<:clue:655384523735040000>")
                .setColor("0xffd500")
                .setFooter("Remember to come back the next day to get your rewards again :)");


                message.channel.sendEmbed(dailyEmbed)
                .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices + 3;
                LP.Clues = LP.Clues + 500;
                LP.save().catch(err => console.log(err));



            }
        })



    }
}