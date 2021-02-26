const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown } = require("../../src/functions.js");
const Discord = require("discord.js");

module.exports = {
    name: ["spidermanpresentation", "presenation", "sppresentation"],
    description: `Make your own Spider Man Presenation meme!\n\n**Usage:**\`$prefixspidermanpresenation <text>\``,
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args) => {
 
         const cooldownCheck = await findCooldown(message, "spidermanpresenation");
 
         if (cooldownCheck) return coolEmbed(message, "You're having too many presenations!", "The cooldown on this command is literally set to **10** seconds... can't you wait that long? 0-o\nPlease wait **REMAINING** before attempting to use this command again... :))", cooldownCheck.timeRemaining, ["s"]);

        let sayMessage = args.slice(1).join(" "),
            letterInALine = /.{28}\S*\s+/g,
            pixelSize = 30,
            height = 240;

        if (!sayMessage) {
            height = 260;
            sayMessage = `How to use this command: Provide a message for me to put here`;
            pixelSize = 40;
            letterInALine = /.{18}\S*\s+/g;

        } else if (sayMessage.length < 60){
            height = 200;
            pixelSize = 50;
            letterInALine = /.{18}\S*\s+/g;
        }
        else if (sayMessage.length < 200) {  
            pixelSize = 40;
            height = 200;
            letterInALine = /.{18}\S*\s+/g
        }
        else {
            pixelSize = 40;
            height = 200;
            letterInALine = /.{18}\S*\s+/g
            sayMessage = sayMessage.substr(0, 210);
        }
        
        const canvas = Canvas.createCanvas(680, 907);
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = "#D9CEBF";
        ctx.fillRect(0, 0, 680, 907);

        ctx.font = `${pixelSize}px sans-serif`;
        ctx.fillStyle = '#000000';

        ctx.fillText(sayMessage.replace(letterInALine, "$&@").split(/\s+@/).join("\n"), 60, height, 477);


        const background = await Canvas.loadImage("https://i.imgur.com/GMelUdQ.png");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'spidermanpresenation.png');

        message.channel.send(attachment);
        await addCooldown(message, 10000, "spidermanpresenation");

    }
}