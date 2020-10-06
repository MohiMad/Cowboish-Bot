const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'terrorshock',
    description: "terrorshocks you",
    execute: async (message, args, bot, prefix) => {


        let persona = await findMember(message, args.slice(1).join(" "));

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        if (!args[1]) return ErrorMsg(bot, message, "Who do you want to terrorshock? Mention them right after the command | example: `" + prefix + "crash @Cowboish Bot` Wait... don't do that to me plz :v")


        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "terrorshock <MentionHere>`")


        if (persona.id === message.author.id) return message.channel.send(`You... wanna terrorshock yourself **${message.author}** is that even possible??!`);


        var facts = [
            'Oof ' + message.author.username + ' got ' + persona.user.username + ' terrorshocked :C',
            persona.user.username + " got terrorshocked by " + message.author.username,
            "Oh daaang " + persona.user.username + " got terrorshocked by " + message.author.username + ", that's hurts :("
        ];
        var fact = Math.floor(Math.random() * facts.length);

        let gifs = [
            "https://media.giphy.com/media/QC1qkRoP4he8LSTHiI/giphy.gif",
            "https://media.giphy.com/media/THmbomy7gCPo7sI0Jx/giphy.gif",
            "https://media.giphy.com/media/jQVkx1KobkMbDSHJvv/giphy.gif",
            "https://media.giphy.com/media/WOMxVv5u7g4QACyZ01/giphy.gif",
            "https://media.giphy.com/media/kxlmBgEsLgFFbcZhDY/giphy.gif",
            "https://media.giphy.com/media/daDBdw4UfZ3JVoAO78/giphy.gif"
        ];

        let gif = Math.floor(Math.random() * gifs.length);

        const TSEmbed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.avatarURL())
            .setImage(gifs[gif])
            .setColor("RANDOM");


        message.channel.send(TSEmbed);


    }
}