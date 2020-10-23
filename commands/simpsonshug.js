const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown, findMember } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: "simpsonshug",
    description: "H U G UWU",
    execute: async (message, args, bot) => {

        const cooldownCheck = await findCooldown(message, "simpsonshug");
        if (cooldownCheck) return coolEmbed(message, "You're hugging too frequently QwQ", "I know you love hugging and people love being hugged by you... But Cowboish needs a **REMAINING** rest now -v-", cooldownCheck.timeRemaining, ["s"]);

        const canvas = Canvas.createCanvas(640, 633);
        const ctx = canvas.getContext('2d');

        const lookingForAMemberPing = await findMember(message, args.slice(1).join(" "));
        let memberImage;

        if (!message.attachments.first()) {

            await message.channel.messages.fetch().then(async (x) => {

                let IMAGE = x.filter(m => m.author.id != bot.user.id && m.attachments.first() != (undefined || null));

                if (lookingForAMemberPing.user.id === message.author.id) {
                    if (!IMAGE.first()) {
                        memberImage = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png', dynamic: false, }));
                    } else {
                        memberImage = await Canvas.loadImage(IMAGE.first().attachments.first().url);
                    }
                } else {
                    memberImage = await Canvas.loadImage(lookingForAMemberPing.user.displayAvatarURL({ format: 'png', dynamic: false, }));
                }
            });
        } else {
            memberImage = await Canvas.loadImage(message.attachments.first().url);
        }

        var rotation = -10;

        ctx.rotate(rotation * Math.PI / 180);
        ctx.drawImage(memberImage, 115, 115, 205, 145);
        ctx.rotate((rotation * -1) * Math.PI / 180);

        const background = await Canvas.loadImage("https://i.imgur.com/7wdjN4K.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'simpsons_H-U-G.png');

        message.channel.send(attachment);

        await addCooldown(message, 10000, "simpsonshug");


    }
}