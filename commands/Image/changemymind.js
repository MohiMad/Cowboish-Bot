const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown } = require("../../src/functions.js");
const Discord = require("discord.js");

module.exports = {
    name: ["changemymind", "changememind"],
    description: `Customize "Change My Mind" meme template through Cowboish!\n\n**Usage:**\`$prefixchangemymind <text>\``,
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args) => {

         const cooldownCheck = await findCooldown(message, "changemymind");
  
         if (cooldownCheck) return coolEmbed(message, "You're abusing this command .-.", "The cooldown on this command is literally set to **10** seconds... can't you wait that long? 0-o\nPlease wait **REMAINING** before attempting to use this command again... :))", cooldownCheck.timeRemaining, ["s"]);

        let sayMessage = args.slice(1).join(" "),
            letterInALine = /.{28}\S*\s+/g,
            pixelSize = 60,
            height = 825,
            g = -20;

        if (!sayMessage) {
            height = 855;
            sayMessage = `Cowbois are so hot and handsome!`;
            pixelSize = 70;
            letterInALine = /.{18}\S*\s+/g;

        } else if (sayMessage.length < 35){
            height = 855;
            pixelSize = 70;
            letterInALine = /.{18}\S*\s+/g;
        }
        else if (sayMessage.length < 100) {  
            pixelSize = 40;
            height = 855;
            letterInALine = /.{18}\S*\s+/g
        }
        else {
            pixelSize = 40;
            height = 855;
            letterInALine = /.{18}\S*\s+/g
            g = -23;
            sayMessage = sayMessage.substr(0, 210);
        }
        
        const canvas = Canvas.createCanvas(1420, 1113);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage("https://i.imgur.com/qTWg0Qx.png");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = `${pixelSize}px sans-serif`;
        ctx.fillStyle = '#000000';

        ctx.rotate(g * Math.PI / 180);
        ctx.fillText(sayMessage.replace(letterInALine, "$&@").split(/\s+@/).join("\n"), 300, height, 485);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'changemymind.png');

        message.channel.send(attachment);
        await addCooldown(message, 10000, "changemymind");

    }
}