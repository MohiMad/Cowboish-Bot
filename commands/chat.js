const Canvas = require('canvas');
const { ErrorMsg, coolEmbed, addCooldown, findCooldown } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: 'chat',
    description: "Type something in english chat",
    execute: async (message, args, bot, prefix) => {

        const cooldownCheck = await findCooldown(message, "chat");

        if (cooldownCheck) return coolEmbed(message, "There is a cooldown put on this command", "Please wait **REMAINING** before you can use this command again...", cooldownCheck.timeRemaining, ["s"]);

            const sayMessage = args.slice(1).join(" ");

            if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");
             if (!args[1]) return ErrorMsg(bot, message, "Can send an empty message!\nPlease provide something to send to the ingame chat!\n\n**Right Usage:** `" + prefix + "chat <message Goes HERE>`");
            if (sayMessage.length > 50) return ErrorMsg(bot, message, "The message given is tooo loong, like for real\nPlease try to send something that's shorter :)")
            
                const canvas = Canvas.createCanvas(1137, 640);
                const ctx = canvas.getContext('2d');

                const background = await Canvas.loadImage("https://i.imgur.com/hK8xkQV.jpg");

                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

                const avatar = await Canvas.loadImage(message.author.avatarURL({ format: 'png', dynamic: false }));
                ctx.drawImage(avatar, 17.5, 316, 52, 52);

                ctx.font = '20px sans-serif';

                ctx.fillStyle = '#bdc9df';

                ctx.fillText(message.author.username, 152, 330);

                ctx.font = '18px sans-serif';
                ctx.fillStyle = '#e1e8f2';

                ctx.fillText(sayMessage, 128, 361);

                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ingame-chat.png');

                message.channel.send(attachment);
                
                await addCooldown(message, 25000, "chat");

    }
}