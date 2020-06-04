const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'lasso',
    description: "lassos you",
    execute: async (message, args, bot, perfix) => {

        let persona = await findMember(message, args[1]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, 'Who do you want to lasso? Mention them right after the command | example: `' + perfix + 'lasso @Cowboish Bot` Oh yes lasso me >:D')
        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + perfix + "lasso <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            return message.channel.send("Um sorry,** " + message.author.username + '** but you cant lasso yourself :v');

        }
        else {

            let gifs = [
                "https://media.giphy.com/media/iihJY3okuMaWJM2VJz/giphy.gif",
                "https://media.giphy.com/media/USxllv8yO2lKlVX2kn/giphy.gif",
                "https://media.giphy.com/media/j1n2Ip5KDBn4KOFoYd/giphy.gif",
                "https://media.giphy.com/media/XI7P3VBc0ZswzZJXNT/giphy.gif",
                "https://media.giphy.com/media/Qy8eT1raTGRVkFvVfd/giphy.gif",
                "https://media.giphy.com/media/ZENiBRWDNIY0FzF7Gv/giphy.gif",
                "https://media.giphy.com/media/KCeHCT4bLZavsZnSWL/giphy.gif",
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

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(gifs[gif])
                .setColor("RANDOM")



            message.channel.send(lassoembed);

        }


    }
}