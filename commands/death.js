const Canvas = require('canvas');
const { ErrorMsg } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: 'death',
    description: "Generate 'chosen death' meme",
    execute: async (message, args, bot) => {

        const sayMessage = args.slice(1).join(" ");

        if(!args[1]){
            ErrorMsg(bot, message, "Can't create a meme with empty text!\nPlease provide something to put in the meme's text!\n\n**Right usage:** `>chosendeath <message Goes HERE>`")
        }
        else if(sayMessage.length > 170){
            ErrorMsg(bot, message, "The text given is tooo loong, like for real\nPlease try to send something that's shorter :)")
        }
        else{

        const canvas = Canvas.createCanvas(1600, 1347);
        const ctx = canvas.getContext('2d');
        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage('./pics/death.jpg');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        // Use helpful Attachment class structure to process the file for you

        ctx.font = '75px sans-serif';
        ctx.fillStyle = '#000000';

        ctx.fillText(sayMessage, 50, 80, 1520);



        const attachment = new Discord.Attachment(canvas.toBuffer(), 'deth.png');

        message.channel.send(attachment)
        }
    }
}