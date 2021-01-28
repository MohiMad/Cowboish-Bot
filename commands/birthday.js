const { MessageEmbed } = require('discord.js');
const { newLP } = require("../assets/functions.js");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'birthday',
    description: "...",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    isDisabled: true,
    admins: ["632291800585076761"],
    execute: async (message, prefix) => {
        await newLP(message);
        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (LP.Opened.includes("seerBirthday")) return;

        const embed = new MessageEmbed()
            .setTitle("Yeeeee Happy Birthday Seeeeeeeeeer 🥳🎉🎉")
            .setAuthor("October 31", message.author.displayAvatarURL())
            .setColor("0xECE615")
            .setDescription("On October 31, Eli Clark joined the manor :D\nAs a late clebration, we give you **SeerBirthday** *frame* and *portrait*\n\nTo equip the seer portrait, do `" + prefix + "equip portrait happy birthday seer`\nTo equip the Seer frame, do `" + prefix + "equip frame seer`")
            .setImage("https://i.imgur.com/9dVcah8.png")
            .setThumbnail("https://i.imgur.com/jUhhMje.png");

        LP.Opened = [...LP.Opened, "seerBirthday"];
        LP.save().catch(e => console.log(e));

        return message.channel.send(embed);
    }
}