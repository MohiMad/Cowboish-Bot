const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'terrorshock',
    description: "terrorshocks you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to terrorshock? Mention them right after the command | example: >crash @Cowboish Bot . wait... don't do that to me plz :v")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("U... wanna terrorshock yourself?,** " + message.author.username + '** is that even possible??!');

        }
        else {

            nube = 8;

            imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

            var facts = [
                'Oof ' + message.author.username + ' got ' + persona.user.username + ' terrorshocked :C',
                persona.user.username + " got terrorshocked by " + message.author.username + "R.I.P",
                "Oh daaang " + persona.user.username + " got terrorshocked by " + message.author.username + " that's hurts :("
            ];
            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./tc/" + 'tc' + imagaNumbe + ".gif"])
                .setImage('attachment://tc' + imagaNumbe + '.gif')
                .setColor("RANDOM");


            message.channel.send(bullyembed);

        }
    }
}