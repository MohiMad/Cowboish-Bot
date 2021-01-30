const { MessageEmbed } = require('discord.js');
const { getMember, randomizeAnIndex } = require("../assets/functions.js");

module.exports = {
    name: ["punch"],
    description: "Punch your friends >:D\n\n**Usage:** `$prefixpunch <user>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args, bot) => {

        const member = await getMember(message, args.slice(1).join(" ")) || await getMember(message, message.author.id);

        const reponses = [
            "$author punches $victim",
            "$victim got punched by $author",
            "$author gave $victim a fat punch...",
            "Oof $author punched $victim..."
        ];

        let victim = member.user.username;
        let merc = message.author.username;

        if (victim == merc) {
            merc = bot.user.username;
            setTimeout(() => {
                message.channel.send(`This what happens when you don't mention someone you want to punch, ${message.author.toString()}`);
            }, 5000);
        }

        const reponseEmbed = new MessageEmbed()
            .setAuthor(member.user.displayAvatarURL({ dynamic: true }))
            .setTitle(reponses[randomizeAnIndex(responses)].replace("$author", merc).replace("$victim", victim))
            .setColor("0x4E7FC4")
            .setImage("https://media.giphy.com/media/zlQwztwr0y8OuO5WMR/giphy.gif")
            .setFooter(`Poor ${member.user.username}...`);

        return message.channel.send(reponseEmbed);

    }
}