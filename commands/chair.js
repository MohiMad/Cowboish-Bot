const Canvas = require('canvas');
const { findMember } = require("../functions.js");
const Discord = require("discord.js");
module.exports = {
    name: 'chair',
    description: "CHair yo friends",
    execute: async (message, args, bot) => {

        const chaired = await findMember(message, args[1]) || message.author;

        const canvas = Canvas.createCanvas(1200, 900);
        const ctx = canvas.getContext('2d');
        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage('./pics/chair.png');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // Use helpful Attachment class structure to process the file for you

        ctx.strokeStyle = '#74037b';
        // Draw a rectangle with the dimensions of the entire canvas
        ctx.strokeRect(1, 1, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(chaired.user.displayAvatarURL);
        // Move the image downwards vertically and constrain its height to 200, so it's a square
        ctx.drawImage(avatar, 547, 500, 109, 109);

 

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'getChairedbich.gif');

        message.channel.send(`🖼️ HAH get chaired **${chaired.user.username}**`, attachment)
        
    }
}