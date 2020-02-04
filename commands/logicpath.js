const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'logicpath',
    description: "logic info",
    execute: async (message, args, bot) => {


        let LPuser = message.mentions.users.first() || message.author;

        if (!args[1]) {
            LPuser = message.author;
        }
        else if (!LPuser) {
            LPuser = message.author;
        }

        const LP = await logicPath.findOne({ UserID: LPuser.id });

        if (!LP) {
            const noLPEmbed = new RichEmbed()
                .setTitle(`${LPuser.username}'s Identity V info`)
                .setDescription(
                    stripIndents` 🚶 | *LogicPath steps* ➜ **0**
                    <:dice:655384578499936257> | *Dices* ➜ **0**
                    <:clue:655384523735040000> | *Clues* ➜ **0**
                    <:inspirations:655840409674711060> | *Inspirations* ➜ **0**
                    <:frags:655840344725913600> | *Fragments* ➜ **0**

                    **Essences**
                    <:ess1:655840713904488469> | Essence *s9-1* ➜ **0**
                    <:ess3:655840571616919586> | COAII Essence ➜ **0**
                    <:ess2:655840643847028751> | Essence *s9-2* ➜ **0**`)
                .addField("Skins", stripIndents`
                    S: **0**
                    A: **0**

                    Essences opened: **0**`)
                .setColor("GREEN")
                .setFooter("Damn look at all of this loot QwQ");

            message.channel.send(noLPEmbed);

        } else {
            let ID = "`>ID <IngameIDhere>`" || LP.ID;

            if (ID === "0") {
                ID = "`>ID <IngameIDhere>`";
            } else { ID = LP.ID; }

            const LPEmbed = new RichEmbed()
                .setAuthor(`${LPuser.username}'s Identity V info`, message.author.avatarURL)
                .setDescription(stripIndents` 🆔 | *Ingame ID ➜ ${ID}*
                    **>ID <InGameID>** to change your ID

                    🚶 | *LogicPath steps* ➜ **${LP.logic}**
                    <:dice:655384578499936257> | *Dices* ➜ **${LP.Dices}**
                    <:clue:655384523735040000> | *Clues* ➜ **${LP.Clues}**
                    <:inspirations:655840409674711060> | *Inspirations* ➜ **${LP.Inspirations}**
                    <:frags:655840344725913600> | *Fragments* ➜ **${LP.frags}**

                    **Essences**
                    <:ess1:655840713904488469> | Essence *s9-1* ➜ **${LP.Ess1}**
                    <:ess3:655840571616919586> | COAII Essence ➜ **${LP.Ess2}**
                    <:ess2:655840643847028751> | Essence *s9-2* ➜ **${LP.Ess3}**`)
                .addField("Skins", stripIndents`
                    S: **${LP.S}**
                    A: **${LP.A}**

                    Essences opened: **${LP.S + LP.A + LP.B + LP.C + LP.D}**
                    `, true)
                .setColor("GREEN");

            message.channel.send(LPEmbed).catch(err => console.log(err));
        }




    }

}

