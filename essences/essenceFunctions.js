const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { ess1, ess2, ess3, frags } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");

module.exports = {

    statsCheck: async (message, essName, esse, linkURL) => {
        const LP = await logicPath.findOne({ UserID: message.author.id });
        let essence = esse.slice(1);
        
        let e = "";
        let x = 0;

        for (i = 0; i < essence.length; i++) {
            if (LP.Opened.includes(essence[i].Item)) {
                x = x + 1;
                e = e + `\n✅ ${essence[i].Name}`;
            }
            else e = e + `\n❌ ${essence[i].Name}`;

        }

        let embed = new MessageEmbed()
            .setColor("0xf0d911")
            .setAuthor(`${essName} items claimed!`, linkURL)
            .setDescription(e)
            .setFooter(`Obtained ${x} items out of ${essence.length}`);

        message.channel.send(embed);

    }
};