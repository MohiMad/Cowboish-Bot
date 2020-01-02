const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'logicpath',
    description: "logic info",
    execute(message, args){

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);
            
            let LPEmbed = new RichEmbed()
                .setTitle(`${message.author.username} Identity V info`)
                .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", 
                stripIndents` 🚶 | *LogicPath steps* ➜ **${LP.logic}**
                 <:dice:655384578499936257> | *Dices* ➜ **${LP.Dices}**
                 <:clue:655384523735040000> | *Clues* ➜ **${LP.Clues}**
                 <:inspirations:655840409674711060> | *Inspirations* ➜ **${LP.Inspirations}**
                 <:frags:655840344725913600> | *Fragments* ➜ **${LP.frags}**

                 **Essences**
                 <:ess1:655840713904488469> | Essence *s9-1* ➜ **${LP.Ess1}**
                 <:ess3:655840571616919586> | CAOII Essence ➜ **${LP.Ess2}**
                 <:ess2:655840643847028751> | Essence *s9-3* ➜ **${LP.Ess3}**`, true)
                 .addField("Skins", stripIndents`
                 S: **${LP.S}**
                 A: **${LP.A}**
                 B: **${LP.B}**
                 C: **${LP.C}**
                 Graffiti: **${LP.D}**
                 `, true);
        

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
     
                 else {
                message.channel.send(LPEmbed)
                 .catch(err => console.log(err));
                }
        })


            
        
           

    }
}