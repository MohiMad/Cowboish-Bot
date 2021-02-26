const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown } = require("../../src/functions.js");
const Discord = require("discord.js");

module.exports = {
    name: ["postmanletter", "letter", "postmansletter", "postmansign"],
    description: "Puts your message in Postman's letter :D\nArt belongs to: [@thevileruler](https://twitter.com/thevileruler)\n\n**Usage:** `$prefixletter <message goes here uwu>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args) => {

        const cooldownCheck = await findCooldown(message, "letter");

        if (cooldownCheck) return coolEmbed(message, "Oooops!", "There is a **10s** cooldown set on this command... Please wait **REMAINING** before being able to execute this command again :3", cooldownCheck.timeRemaining, ["s"]);

        const canvas = Canvas.createCanvas(475, 475);
        const ctx = canvas.getContext('2d');

        let letterMessage;
        if (!args[1]) letterMessage = "Try again, but this\ntime give me a\nmessage to put in\nthis poster...";
        else letterMessage = new String(args.slice(1).join(" "));

        const postmanArt = await Canvas.loadImage("https://i.imgur.com/HjNKpGb.jpg");
        ctx.drawImage(postmanArt, 0, 0, canvas.width, canvas.width);

        ctx.fillStyle = '#000000';
        ctx.font = '22px sans-serif';

        var letterInALine = /.{15}\S*\s+/g,
            width = 140,
            length = 330;

        if (letterMessage.length < 15) {
            length = 375,
                width = 160;
            letterInALine = /.{7}\S*\s+/g
            ctx.font = '30px sans-serif';
        }


        if (letterMessage.length > 108) {
            letterInALine = /.{25}\S*\s+/g;
            ctx.font = '15px sans-serif';
        }

        if (!letterMessage.includes(" ") && letterMessage.length > 18) {

            for (i = 1; i < Math.round(letterMessage.length / 18); i++) {
                var divideratAntal = letterMessage.charAt(18 * i);
                letterMessage = letterMessage.replace(divideratAntal, "\n");

            }

        } else {
            letterMessage = letterMessage.replace(letterInALine, "$&@").split(/\s+@/).join("\n");
        }

        ctx.fillText(letterMessage, width, length);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'postmansletter.png');
        await addCooldown(message, 10000, "letter");
        message.channel.send(attachment);

    }
}