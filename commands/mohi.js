const Canvas = require('canvas');
const Discord = require("discord.js");
const { ErrorMsg, coolEmbed, addCooldown, findCooldown } = require("../functions.js");
const MOHI = require("../models/mohi.js");

module.exports = {
    name: ["mohi", "ihom", "mohii", "mohii"],
    description: "Mohiiii\n\n*please don't ask why this exists*",
    permissions: ["SEND_MESSAGES", "ATTACH_FILES"],
    execute: async (message, args, bot, prefix) => {

        let cooldownCheck = await findCooldown(message, "mohi");

        if (cooldownCheck) return coolEmbed(message, "MOHI mohi MOHIIIII mohiiii", "mohi mohi mohiiiiii mohi mohuiuiiiii mohuiiiii **REMAINING** mohi mohii ;3", cooldownCheck.timeRemaining, ["s"]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH FILES** to true");

        const canvas = Canvas.createCanvas(477, 394);
        const ctx = canvas.getContext('2d');

        const memberImage = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'png', dynamic: false, }));
        ctx.drawImage(memberImage, 80, 45, 150, 150);
        const background = await Canvas.loadImage("https://i.imgur.com/zRDeAkc.png");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      

        const MO = await MOHI.findOne({ ID: "mohi" });
        MO.times = MO.times + 1;
        MO.save().catch(e => console.log(e));

        ctx.font = '15px sans-serif';
        ctx.fillText(`Times said ${MO.times}`, 5, 15);


        ctx.font = '50px sans-serif';
        ctx.rotate(20 * Math.PI / 200);
        ctx.fillText(args[0].replace(prefix, ""), 315, 50);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'mohiiiii.png');

        await addCooldown(message, 30000, "mohi");
        message.channel.send(attachment);

    }
}