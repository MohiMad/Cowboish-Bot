const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'shoot',
    description: "shoots you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to shoot? Mention them right after the command | example: >shoot @Cowboish Bot. Btw plz don't do that to me :(")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("Why would ** " + message.author.username + '** shoot themself 🤔🤔');
        } else {

            nuber = 7;

            imagaNumber = Math.floor(Math.random() * (nuber - 1 + 1)) + 1;

            var facts = [
                'oof ' + message.author.username + ' shot ' + persona.user.username + ' that looks like it hurts!',
                message.author.username + ' shot ' + persona.user.username + ' BOOM HEADSHOT!',
                persona.user.username + ' got shot by ' + message.author.username + ' shouldve brought excitement.'];

            var fact = Math.floor(Math.random() * facts.length);

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./flaregun/" + 'flaregun' + imagaNumber + ".gif"])
                .setImage('attachment://flaregun' + imagaNumber + '.gif')
                .setColor("RANDOM");
                


            message.channel.send(lassoembed);

        }



    }
}