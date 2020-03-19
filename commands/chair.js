const Canvas = require('canvas');
const { findMember, ErrorMsg } = require("../functions.js");
const Discord = require("discord.js");
module.exports = {
    name: 'chair',
    description: "CHair yo friends",
    execute: async (message, args, bot) => {

        const chaired = await findMember(message, args[1]);

        const canvas = Canvas.createCanvas(1200, 900);
        const ctx = canvas.getContext('2d');
        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage('./pics/chair.jpg');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // Use helpful Attachment class structure to process the file for you

        ctx.strokeStyle = '#74037b';
        // Draw a rectangle with the dimensions of the entire canvas
        ctx.strokeRect(1, 1, canvas.width, canvas.height);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            const authAvatar = await Canvas.loadImage(message.author.displayAvatarURL);
            ctx.drawImage(authAvatar, 547, 500, 109, 109);

        }
        else {
            if (!chaired) {
                return ErrorMsg(bot, message, "Couldn't find that member!\nplease provide their id/tag or mention them after the command!");
            }
            else {
                const avatar = await Canvas.loadImage(chaired.user.displayAvatarURL);
                // Move the image downwards vertically and constrain its height to 200, so it's a square
                ctx.drawImage(avatar, 547, 500, 109, 109);


            }

        }

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'getChairedbich.gif');

        message.channel.send(`<:rocketchair:679651828157513741> HAH get chaired **${chaired.user.username}**!`, attachment)

    }
}