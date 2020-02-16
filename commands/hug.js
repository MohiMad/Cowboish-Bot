const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'hug',
    description: "take dis hug",
    execute: async (message, args, bot) => {


        const persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to hug? you can't hug air :v")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send(`Oof sorry, **${message.author.username}** but that's not possible :/`);
        } else {

            let hugs = [
                "https://media.giphy.com/media/WO5lHiF8TlyuAIzGvB/giphy.gif",
                "https://media.giphy.com/media/jRBH1BrIqdLPdW8eo1/giphy.gif",
                "https://media.giphy.com/media/MXRUzzaVTXACQ251JU/giphy.gif",
                "https://media.giphy.com/media/hpFTl6sn0OdpXZNKxM/giphy.gif",
                "https://media.giphy.com/media/iGpvkIsdAw7K2MxEsr/giphy.gif",
                
            ]

            let hug = Math.floor(Math.random() * (facts - 1 + 1)) + 1;

            var facts = [
                `Aww ${message.author.username} hugs ${persona.user.username} :3`,
                `${message.author.username} gives ${persona.user.username} a big hug`,
                `${persona.user.username} is being hugged by ${message.author.username}, cute!`

            ];
            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles([hugs[hug]])
                .setImage('attachment://' + hugs[hug])
                .setColor("RANDOM")



            message.channel.send(bullyembed);

        }

    }
}