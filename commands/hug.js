const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: ["hug", "squeeze"],
    description: "Hugs the mentioned user :D\nGive your friends some hugs but in a idv style ;)\n\n**Usage:** `$prefixhug <user>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    execute: async (message, args, bot, prefix) => {

        const persona = await findMember(message, args.slice(1).join(" "));

        if (!args[1]) return message.channel.send("Who do you want to hug? you can't hug air :v");

        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "hug <MentionHere>`")

         if (persona.id === message.author.id) return message.channel.send(`I would hug you if I was a human, ${message.author}...`);

            let hugs = [
                "https://media.giphy.com/media/WO5lHiF8TlyuAIzGvB/giphy.gif",
                "https://media.giphy.com/media/jRBH1BrIqdLPdW8eo1/giphy.gif",
                "https://media.giphy.com/media/hpFTl6sn0OdpXZNKxM/giphy.gif",
                "https://media.giphy.com/media/iGpvkIsdAw7K2MxEsr/giphy.gif",
                "https://media.giphy.com/media/8FcLMAHkLgBAsfbrgV/giphy.gif",
                "https://media.giphy.com/media/eJ96BIs6ABNa4ellhk/giphy.gif", //lady bella's
                "https://media.giphy.com/media/SXOY6zg9WhZQdtxCrW/giphy.gif" //Hannah's uwu

            ]

            let hug = Math.floor(Math.random() * hugs.length);

            var facts = [
                `Aww ${message.author.username} hugs ${persona.user.username} :3`,
                `${message.author.username} gives ${persona.user.username} a big hug`,
                `${message.author.username} squeezes ${persona.user.username} >:3`,

            ];
            var fact = Math.floor(Math.random() * facts.length);

            const hugEmbed = new MessageEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL())
                .setImage((hugs[hug]))
                .setColor("RANDOM")

            message.channel.send(hugEmbed);

    }
}