const { stripIndents } = require('common-tags');

const Canvas = require('canvas');

const Discord = require("discord.js");

const { findMember, newLP, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'siptea',
    description: "Ashryb shai",
    execute: async (message, args, bot) => {

        let person = await findMember(message, args[1]);


        if (!args[1]) person = message.author;

        else if (!person) person = message.author;

        else person = await findMember(message, args[1]);

        const canvas = Canvas.createCanvas(193, 261);

        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./pics/siptea.jpg');

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(person.displayAvatarURL || person.user.displayAvatarURL);

        ctx.drawImage(avatar, 29, 46, 117, 108);


        const attachment = new Discord.Attachment(canvas.toBuffer(), 'sippin_tea.png');

        message.channel.send(attachment);

    }
}