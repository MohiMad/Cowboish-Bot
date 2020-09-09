const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: 'death',
    description: "Generate 'chosen death' meme",
    execute: async (message, args) => {

        const cooldownCheck = await findCooldown(message, "death");

        if (cooldownCheck) return coolEmbed(message, "You're abusing this command .-.", "The cooldown on this command is literally set to **10** seconds... can't you wait that long? 0-o\nPlease wait **REMAINING** before attempting to use this command again... :))", cooldownCheck.timeRemaining, ["s"]);


        let sayMessage = args.slice(1).join(" "),
            letterInALine = /.{35}\S*\s+/g,
            pixelSize = 80,
            height = 90;

        if (!sayMessage) {
            height = 115;
            sayMessage = `When you don't provide\nCowboish Bot a message\nto put here:`;
            pixelSize = 125;
        }

        if (sayMessage.length < 65) {
            height = 115;
            pixelSize = 115;
            letterInALine = /.{20}\S*\s+/g
        }
        if (sayMessage.length > 210) sayMessage = sayMessage.substr(0, 210);

        const canvas = Canvas.createCanvas(1600, 1347);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage("https://i.imgur.com/b96Odbj.jpg");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.font = `${pixelSize}px sans-serif`;
        ctx.fillStyle = '#000000';

        ctx.fillText(sayMessage.replace(letterInALine, "$&@").split(/\s+@/).join("\n"), 50, height);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'deth.png');

        message.channel.send(attachment);
        await addCooldown(message, 10000, "death");

    }
}