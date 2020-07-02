const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'hug',
    description: "take dis hug",
    execute: async (message, args, bot, prefix) => {


        const persona = await findMember(message, args[1]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to hug? you can't hug air :v")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "hug <MentionHere>`")

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
                "https://media.giphy.com/media/kGRI4KATznkZ8rF9N7/giphy.gif",
                "https://media.giphy.com/media/jsHq6vUwe6To8itjGQ/giphy.gif"

            ]

            let hug = Math.floor(Math.random() * hugs.length);

            var facts = [
                `Aww ${message.author.username} hugs ${persona.user.username} :3`,
                `${message.author.username} gives ${persona.user.username} a big hug`,
                `${message.author.username} squeezes ${persona.user.username} >:3`,

            ];
            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage((hugs[hug]))
                .setColor("RANDOM")



            message.channel.send(bullyembed);

        }

    }
}