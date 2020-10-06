const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'crash',
    description: "crash you",
    execute: async (message, args, bot, prefix) => {

        const persona = await findMember(message, args.slice(1).join(" "));

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        if (!args[1]) return ErrorMsg(bot, message, "Who do you want to land on? Mention them right after the command | example: `" + prefix + "crash @Cowboish Bot` . wait... don't do that to me plz :v")

        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "crash <MentionHere>`")

        if (persona.id === message.author.id) return message.channel.send(`Oof sorry, **${message.author.username}** but that's not possible :/`);


        let gifs = [
            "https://media.giphy.com/media/cmliyaAqUAegHYZNsu/giphy.gif",
            "https://media.giphy.com/media/cPMYOVEICHOUErSzeI/giphy.gif",
            "https://media.giphy.com/media/YQNH4LDr4xgv4DkjXj/giphy.gif",
            "https://media.giphy.com/media/UWhGyW7QtJjxYUisIJ/giphy.gif",
            "https://media.giphy.com/media/l3Zgg9bXR8m0Emihog/giphy.gif",
            "https://media.giphy.com/media/Q60hBMy11VSghidaeI/giphy.gif",
            "https://media.giphy.com/media/U5ViGRkUXWzpPzKebW/giphy.gif"
        ];

        let gif = Math.floor(Math.random() * gifs.length);

        var facts = [
            message.author.username + ' landed on ' + persona.user.username,
            `${message.author.username} crashed on ${persona.user.username}`
        ];
        var fact = Math.floor(Math.random() * facts.length);

        const bullyembed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.avatarURL())
            .setImage(gifs[gif])
            .setColor("RANDOM");

        message.channel.send(bullyembed);

    }
}