const { MessageEmbed } = require('discord.js');
const { newLP, coolEmbed, addCooldown, findCooldown } = require("../functions.js");
const { ess2, ess1, ess3, clues, dice } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'daily',
    description: "daily rewards",
    execute: async (message) => {
        await newLP(message);


        const cooldownCheck = await findCooldown(message, "daily");

        if (cooldownCheck) return coolEmbed(message, "The cooldown isn't over yet ma friend .-.", "Since it's a daily reward, the cooldown is set to **24** hours...\nYou have to wait **REMAINING** until you can obtain your daily-rewards once again :)", cooldownCheck.timeRemaining, ["h", "m", "s"]);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        const dailyEmbed = new MessageEmbed()
            .setTitle("🎁 Daily reward given! 🎁")
            .setThumbnail("https://i.imgur.com/VGo6rp3.png")
            .setDescription(`I've yeeted **10** ${dice}, **500** ${clues} and **10** ${ess1} **10** ${ess2} into your account ;D`)
            .setColor("0xffd500")
            .setFooter("Remember to come back the next day to get your rewards again :)");


        await addCooldown(message, 86400000, "daily");

        LP.Dices = LP.Dices + 10;
        LP.Clues = LP.Clues + 500;
        LP.Ess1 = LP.Ess1 + 10;
        LP.Ess2 = LP.Ess2 + 10;


        LP.save().catch(err => console.log(err));

        message.channel.send(dailyEmbed);
    }
}