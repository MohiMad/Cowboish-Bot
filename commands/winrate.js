const { MessageEmbed } = require('discord.js');
const { findMember } = require("../assets/functions.js");
module.exports = {
    name: ["winrate", "win-rate", "wr"],
    description: "Check your/others' winrate\n\n**Usage:** `$prefixwinrate [user]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "IdentityV",
    execute: async (message, args) => {

        let persona = await findMember(message, args.slice(1).join(" "));

        var fact = Math.floor(Math.random() * 100);

        const wiEmbed = new MessageEmbed()
            .setAuthor(message.author.username + "'s winrate is " + fact + '%', message.author.avatarURL())
            .setColor('0x1AA9EE')

        if (!persona || persona.user.id === message.author.id) return message.channel.send(wiEmbed);

        const winEmbed = new MessageEmbed()
            .setAuthor(persona.user.username + "'s winrate is " + fact + '%', persona.user.avatarURL())
            .setColor("RANDOM")

        message.channel.send(winEmbed);

    }
}