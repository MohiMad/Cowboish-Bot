const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'stun',
    description: "stuns you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to shut the pallet on? Mention them right after the command | example: >stun @Cowboish Bot.").then(m => m.delete(10000));

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("I won't do that for you,** " + message.author.username + "**");

        }
        else {

            nube = 6;

            imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

            var facts = ['Oof ' + message.author.username + ' stunned ' + persona.user.username + ' with a pallet :C'
                , message.author.username + ' shut the pallet in front of ' + persona.user.username + "'s face xd"];
            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./stuns/" + 'stun' + imagaNumbe + ".gif"])
                .setImage('attachment://stun' + imagaNumbe + '.gif')
                .setColor("RANDOM");


            message.channel.send(bullyembed);

        }



    }
}