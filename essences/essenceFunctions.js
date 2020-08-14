const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { ess1, ess2, ess3, frags } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");

module.exports = {


    openOneEssence: async (message, bot, prefix, essence, randomNumber, linkURL, imageFormat) => {
        const LP = await logicPath.findOne({ UserID: message.author.id });

        const embed = new RichEmbed()
            .setAuthor(essence[randomNumber].Title.replace("author", message.author.username), linkURL)
            .setImage(`https://i.imgur.com/${essence[randomNumber].LinkTag}${imageFormat}`)
            .setColor(essence[randomNumber].Color)
            .setFooter(essence[randomNumber].Footer, bot.user.displayAvatarURL)

        if (LP.Opened.includes(essence[randomNumber].Item)) embed.setDescription(`You have this item already! You get **${essence[randomNumber].FragAmount}** ${frags} instead :D`);

        else {
            LP.Opened = [...LP.Opened, essence[randomNumber].Item];
            if (essence[randomNumber].Item === "s12-2-1") LP.Sculptor = true;

            if (essence[randomNumber].Tier === "S") LP.S = LP.S + 1;
            if (essence[randomNumber].Tier === "A") LP.A = LP.A + 1;
            if (essence[randomNumber].Tier === "S") LP.B = LP.B + 1;
            if (essence[randomNumber].Tier === "C") LP.C = LP.C + 1;
            if (essence[randomNumber].Tier === "D") LP.D = LP.D + 1;
            await LP.save().catch(e => console.log(e));

            if (["ess1-14", "ess1-15", "ess1-16", "ess1-48", "ess1-49", "ess1-50", "ess1-51", "s12-2-36", "s12-2-37", "s12-2-38", "s12-2-46", "s12-2-47", "s12-2-48", "s12-2-49"].includes(essence[randomNumber].Item)) embed.setDescription(`Yaay you got a new portrait! You can equip it by doing` + "`" + prefix + `equip portrait ${essence[randomNumber].PortraitName}` + "`");
        }

        message.channel.send(embed);
    },
    statsCheck: async (message, essName, essence, linkURL) => {
        const LP = await logicPath.findOne({ UserID: message.author.id });

        let e = "";
        let x = 0;

        for (i = 0; i < essence.length; i++) {
            if (LP.Opened.includes(essence[i].Item)) {
                x = x + 1;
                e = e + `\n✅ ${essence[i].Name}`;
            }
            else e = e + `\n❌ ${essence[i].Name}`;

        }

        let embed = new RichEmbed()
            .setColor("0xf0d911")
            .setAuthor(`${essName} items claimed!`, linkURL)
            .setDescription(e)
            .setFooter(`Obtained ${x} items out of ${essence.length}`);

        message.channel.send(embed);

    }
};