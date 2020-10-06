const Canvas = require('canvas');
const { ErrorMsg, findMember, coolEmbed, addCooldown, findCooldown } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: 'slap',
    description: "slap yo friends",
    execute: async (message, args, bot) => {

        const cooldownCheck = await findCooldown(message, "slap");
        if (cooldownCheck) return coolEmbed(message, "You're slapping too fast friend :'(", "Take it easy on your friends and on me .-.\nPlease wait **REMAINING** before using this command again ^^", cooldownCheck.timeRemaining, ["s"]);
        const canvas = Canvas.createCanvas(531, 330);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage("https://i.imgur.com/JHFyRr3.jpg");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const slapper = await Canvas.loadImage(message.author.displayAvatarURL({ format: "png", dynamic: false }));
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");
        if (!args[1]) {
            ctx.drawImage(slapper, 295, 145, 125, 132);
            const botSlaps = await Canvas.loadImage(bot.user.displayAvatarURL({ format: "png", dynamic: false }));
            ctx.drawImage(botSlaps, 168, 67, 100, 100);
        } else {
            const slapped = await findMember(message, args.slice(1).join(" "));
            if (!slapped) {
                ctx.drawImage(slapper, 295, 145, 125, 132);
                const botSlaps = await Canvas.loadImage(bot.user.displayAvatarURL({ format: "png", dynamic: false }));
                ctx.drawImage(botSlaps, 168, 67, 100, 100);
            }
            else {
                if (slapped.id === bot.user.id) {
                    setTimeout(() => {
                        message.reply("**Aaaah what was that for??!** :'c");
                    }, 7000);
                }

                const slappedAvatar = await Canvas.loadImage(slapped.user.displayAvatarURL({ format: "png", dynamic: false }));
                ctx.drawImage(slappedAvatar, 295, 145, 125, 132);
                ctx.drawImage(slapper, 168, 67, 100, 100);
            }
        }
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'slapyoazz.jpg');
        message.channel.send(attachment);
        await addCooldown(message, 10000, "slap");

    }
}