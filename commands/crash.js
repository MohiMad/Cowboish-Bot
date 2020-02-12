const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'crash',
    description: "crash you",
    execute: async (message, args, bot) => {


        const persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to land on? Mention them right after the command | example: >crash @Cowboish Bot . wait... don't do that to me plz :v")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send(`Oof sorry, **${message.author.username}** but that's not possible :/`);
        } else {

            nube = 10;

            imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

            var facts = [
                'Boom! ' + message.author.username + ' landed on ' + persona.user.username,
            ];
            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./crashs/" + 'crash' + imagaNumbe + ".gif"])
                .setImage('attachment://crash' + imagaNumbe + '.gif')
                .setColor("RANDOM")



            message.channel.send(bullyembed);

        }

    }
}