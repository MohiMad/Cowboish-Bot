const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown, findMember } = require("../assets/functions.js");
const Discord = require("discord.js");

module.exports = {
    name: ["paintingstare", "stareatpainting", "distractingpainting", "painting"],
    description: "Stare the at Painter's um- painting :v\n*ah yes very distracting... this command was released with the Painter lol*\nYou can attach an image with the command so cowboish puts it into the painting... cowboish even checks if there are attachments in the channel and he puts it in the painting if no image is provided\n\n**Usage:** `$prefixpaintingstare <image>`",
    permissions: ["SEND_MESSAGES", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args, bot) => {

        const cooldownCheck = await findCooldown(message, "paintingstare");
        if (cooldownCheck) return coolEmbed(message, "Too much to stare at 0__0", "Take it easy, go grab yourself a cup of coffee and return and you'll be able to use this command again...\nOr you can stare at your screen for **REMAINING** >:v", cooldownCheck.timeRemaining, ["s"]);

        const canvas = Canvas.createCanvas(640, 608);
        const ctx = canvas.getContext('2d');

        const lookingForAMemberPing = await findMember(message, args.slice(1).join(" "));
        let memberImage;

        if (!message.attachments.first()) {

            await message.channel.messages.fetch().then(async (x) => {

                let IMAGE = x.filter(m => m.author.id != bot.user.id && m.attachments.first() != (undefined || null));

                if (!lookingForAMemberPing) {
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

        ctx.drawImage(memberImage, 52, 245, 166, 195);

        const background = await Canvas.loadImage("https://i.imgur.com/jnnxE6C.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'starestare0-0.png');

        message.channel.send(attachment);

        await addCooldown(message, 10000, "paintingstare");


    }
}