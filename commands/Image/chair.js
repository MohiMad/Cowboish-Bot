const Canvas = require('canvas');
const { findMember, findCooldown, coolEmbed, addCooldown } = require("../../assets/functions.js");
const Discord = require("discord.js");

module.exports = {
    name: ["chair", "rocketchair"],
    description: "Place your friends on the Rocket Chair >:D\nThis command will replace the profile-picture of the mentioned user(or you) on a poor chaired Explorer\n\n**Usage:** `$prefixchair [user]`",
    permissions: ["SEND_MESSAGES", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args) => {

        let cooldownCheck = await findCooldown(message, "chair");

        if (cooldownCheck) return coolEmbed(message, "You're using this command way too fast >:(", "I'm a bot... But bots deserves rest too :'(\nPlease wait **REMAINING** before trying to use this command again...", cooldownCheck.timeRemaining, ["s"]);

        const chaired = await findMember(message, args.slice(1).join(" "));

        const canvas = Canvas.createCanvas(1200, 900);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage("https://i.imgur.com/HMBFSzn.jpg");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        try {

            let avatar;

            if (!args[1]) avatar = await Canvas.loadImage(message.author.avatarURL({ format: 'png', dynamic: false }));
            else if (!chaired) avatar = await Canvas.loadImage(message.author.avatarURL({ format: 'png', dynamic: false }));
            else avatar = await Canvas.loadImage(chaired.user.avatarURL({ format: 'png', dynamic: false }));

            ctx.drawImage(avatar, 547, 500, 109, 109);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'getChaired.png');

            message.channel.send(attachment);
            await addCooldown(message, 25000, "chair");

        } catch (e) {
            console.log(e);
        }
    }
}