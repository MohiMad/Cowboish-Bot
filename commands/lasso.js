const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'lasso',
    description: "lassos you",
    execute: async (message, args, bot) => {

        let persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, 'Who do you want to lasso? Mention them right after the command | example: >lasso @Cowboish Bot . Oh yes lasso me >:D')
        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            return message.channel.send("Um sorry,** " + message.author.username + '** but you cant lasso yourself :v');

        }
        else {

            nuber = 10;

            imagaNumber = Math.floor(Math.random() * (nuber - 1 + 1)) + 1;

            var facts = [
                'Yoooink! ' + message.author.username + ' lassoed ' + persona.user.username,
                persona.user.username + ' is riding on ' + message.author.username + ' Yee Haaaw >:D',
                message.author.username + ' stole ' + persona.user.username + " from the hunter's hands"];

            var fact = Math.floor(Math.random() * facts.length);

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./lassos/" + 'lasso' + imagaNumber + ".gif"])
                .setImage('attachment://lasso' + imagaNumber + '.gif')
                .setColor("RANDOM")



            message.channel.send(lassoembed);

        }


    }
}