const Canvas = require('canvas');
const { ErrorMsg } = require("../functions.js");
const Discord = require("discord.js");
module.exports = {
    name: 'chat',
    description: "Type something in english chat",
    execute: async (message, args, bot) => {

        const sayMessage = args.slice(1).join(" ");
        
        if (message.guild.me.hasPermission("ATTACH_FILES")) {
            return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        }
        else if(!args[1]){
            ErrorMsg(bot, message, "Can send an empty message!\nPlease provide something to send to the ingame chat!\n\n**Rich usgage:** `>chat <message Goes HERE>`")
        }
        else if(sayMessage.length > 50){
            ErrorMsg(bot, message, "The message given is tooo loong, like for real\nPlease try to send something that's shorter :)")
        }
        else{
        const canvas = Canvas.createCanvas(1137, 640);
        const ctx = canvas.getContext('2d');
        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage('./pics/chat.jpg');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // Use helpful Attachment class structure to process the file for you

        ctx.strokeStyle = '#74037b';
        // Draw a rectangle with the dimensions of the entire canvas
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(message.author.displayAvatarURL);
        // Move the image downwards vertically and constrain its height to 200, so it's a square
        ctx.drawImage(avatar, 17.5, 316, 52, 52);

        ctx.font = '20px sans-serif';

        ctx.fillStyle = '#bdc9df';

        ctx.fillText(message.author.username, 152, 330);

        ctx.font = '18px sans-serif';
        ctx.fillStyle = '#e1e8f2';

        ctx.fillText(sayMessage, 128, 361);



        const attachment = new Discord.Attachment(canvas.toBuffer(), 'ingame-chat.png');

        message.channel.send(`💬 **Message generated!**`, attachment)
        }
    }
}