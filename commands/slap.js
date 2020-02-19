const Canvas = require('canvas');
const { ErrorMsg, findMember } = require("../functions.js");
const Discord = require("discord.js");
module.exports = {
    name: 'slap',
    description: "slap yo friends",
    execute: async (message, args, bot) => {


        const canvas = Canvas.createCanvas(1200, 800);
        const ctx = canvas.getContext('2d');
        // Since the image takes time to load, you should await it
        const background = await Canvas.loadImage('./pics/slap.jpg');
        // This uses the canvas dimensions to stretch the image onto the entire canvas
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const slapper = await Canvas.loadImage(message.author.displayAvatarURL);


        if (!args[1]) {
            ctx.drawImage(slapper, 40, 85, 246, 227);

            const botSlaps = await Canvas.loadImage(bot.user.displayAvatarURL);

            ctx.drawImage(botSlaps, 797, 107, 195, 188);

        } else {
            const slapped = await findMember(message, args[1]);


            if (!slapped) {
                return ErrorMsg(bot, message, "Couldn't find that member!\nDUDE please provide the target's id/tag or mention them after the command!");
            }

            else {
                if (slapped.id === bot.user.id) {
                    setTimeout(() => {
                        message.reply("**Aaaah what was that for??!** :'c");
                    }, 7000);
                }

                const slappedAvatar = await Canvas.loadImage(slapped.user.displayAvatarURL);

                ctx.drawImage(slappedAvatar, 40, 85, 246, 227);


                ctx.drawImage(slapper, 797, 107, 195, 188);

            }
        }

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'slapyoazz.gif');

        message.channel.send(attachment)


    }
}