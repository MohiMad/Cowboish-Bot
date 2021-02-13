const Canvas = require('canvas');
const Discord = require("discord.js");
const { getMember, coolEmbed, addCooldown, findCooldown } = require("../../assets/functions.js");

module.exports = {
    name: ["siptea", "sip-tea", "sippingtea", "sip"],
    description: "*sips tea nervously*",
    permissions: ["SEND_MESSAGES", "ATTACH_FILES"],
    category: "Image",
    execute: async (message, args) => {

        const cooldownCheck = await findCooldown(message, "sip");

        if (cooldownCheck) return coolEmbed(message, "Oof the cooldown is still on .-.", "Please wait **REMAINING** before you can use this command once again ^^", cooldownCheck.timeRemaining, ["s"]);


        const person = await getMember(message, args.slice(1).join(" ")) || await getMember(message, message.author.id);

        const canvas = Canvas.createCanvas(193, 261);

        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage("https://i.imgur.com/3NfFC2p.jpg");

        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        const avatar = await Canvas.loadImage(person.user.displayAvatarURL({ format: 'png', dynamic: false }));

        ctx.drawImage(avatar, 29, 46, 117, 108);

        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'sippin_tea.png');

        message.channel.send(attachment);
        await addCooldown(message, 10000, "sip");

    }
}