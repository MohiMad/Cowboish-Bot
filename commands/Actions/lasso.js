const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../../assets/functions.js");

module.exports = {
    name: ["lasso", "yeet", "yoink"],
    description: "Yeehaw you know we're cowboish so we needed to have a lasso command 🤠\n\n**Usage:** `$prefixlasso <userMention>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args, bot, perfix) => {

        let persona = await findMember(message, args[1]);

        if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to lasso? Mention them right after the command | example: `' + perfix + 'lasso @Cowboish Bot` Oh yes lasso me >:D')

        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + perfix + "lasso <MentionHere>`")


        if (persona.id === message.author.id) return message.channel.send(`Um sorry ** ${message.author.username}**, but you cant lasso yourself :v`);
        let gifs = [
            "https://media.giphy.com/media/iihJY3okuMaWJM2VJz/giphy.gif",
            "https://media.giphy.com/media/USxllv8yO2lKlVX2kn/giphy.gif",
            "https://media.giphy.com/media/XI7P3VBc0ZswzZJXNT/giphy.gif",
            "https://media.giphy.com/media/l4S1iNUgNehVLqai4o/giphy.gif",
            "https://media.giphy.com/media/ieyTuLktoejkR6cWEE/giphy.gif",
            "https://media.giphy.com/media/YP8BNZWtWa77wKU1Sp/giphy.gif"
        ];

        let gif = Math.floor(Math.random() * gifs.length);


        var facts = [
            'Yoooink! ' + message.author.username + ' lassoed ' + persona.user.username,
            message.author.username + ' stole ' + persona.user.username + " from the hunter's hands",
            `${message.author.username} yeeted ${persona.user.username} away from the hunter`
        ];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.displayAvatarURL())
            .setImage(gifs[gif])
            .setColor("RANDOM")


        message.channel.send(lassoembed);

    }
}