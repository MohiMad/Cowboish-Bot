const { MessageEmbed } = require('discord.js');
const { findMember } = require("../../src/functions.js");

module.exports = {
    name: ["struggle", "bongostruggle", "bongocatstruggle"],
    description: "Struggle away from the Hunter cutely >:3\n**Credits to:** [Noxandus Rayn](https://www.youtube.com/channel/UChHchLwXe0AqdDTZ7JTZ3JQ)\n\n**Usage:** `$prefixstruggle <user>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args) => {


        let persona = await findMember(message, args.slice(1).join(" "));

        if (!args[1]) persona = message.author;
        else if (!persona) persona = message.author;
        else persona = await findMember(message, args.slice(1).join(" "));

        var facts = [
            `${persona.username} struggles...`,
            `${persona.username} is struggling >:3`,
        ];

        var fact = Math.floor(Math.random() * facts.length);


        const struggleEmbed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.displayAvatarURL())
            .setImage("https://media.giphy.com/media/fUjs0DifJYe2dgHuoe/giphy.gif")
            .setFooter(`Credits to @chrysalisobel on giphy <3`)
            .setColor("RANDOM");

        message.channel.send(struggleEmbed);

    }
}