const Canvas = require('canvas');
const { coolEmbed, addCooldown, findCooldown, findMember } = require("../functions.js");
const Discord = require("discord.js");

module.exports = {
    name: "paintingstare",
    description: "Stare the at painter's um- painting >:v",
    execute: async (message, args, bot, prefix) => {

        const cooldownCheck = await findCooldown(message, "paintingstare");
        if (cooldownCheck) return coolEmbed(message, "Too much to stare at 0__0", "Take it easy, go grab yourself a cup of coffee and return and you'll be able to use this command again...\nOr you can stare at your screen for **REMAINING** >:v", cooldownCheck.timeRemaining, ["s"]);

        const canvas = Canvas.createCanvas(640, 608);
        const ctx = canvas.getContext('2d');

        const lookingForAMemberPing = await findMember(message, args.slice(1).join(" "))
        let memberImage;

        //await message.channel.messages.fetch();

        if (!message.attachments.first().url) {
            if (lookingForAMemberPing) {
                memberImage = await Canvas.loadImage(lookingForAMemberPing.user.displayAvatarURL);
            } else {
                memberImage = await Canvas.loadImage(message.author.displayAvatarURL);
            }
        } else {
            memberImage = await Canvas.loadImage(message.attachments.first().url);
        }

        ctx.drawImage(memberImage, 52, 245, 166, 195);


        const background = await Canvas.loadImage("https://i.imgur.com/jnnxE6C.png");
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const attachment = new Discord.Attachment(canvas.toBuffer(), 'starestare0-0.png');

        message.channel.send(attachment);

        await addCooldown(message, 10000, "paintingstare");


    }
}