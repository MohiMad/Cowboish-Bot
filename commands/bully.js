const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");
module.exports = {
    name: 'bully',
    description: "bullyies you",
    execute: async (message, args, bot) => {

        let persona = await findMember(message, args[1]);

        if (message.guild.me.hasPermission("ATTACH_FILES")) {
            return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        }
        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to bully? Mention them right after the command | example: >bully @Cowboish Bot . oh no... plz don't bully me :(")
        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")
        }
        else if (persona.id === message.author.id) {
            message.channel.send("Nah cmon,** " + message.author.username + '** why would you bully yourself? :C');

        } else {

            nube = 8;

            imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

            var facts = [
                'Oof ' + persona.user.username + ' is getting bullied by ' + message.author.username,
                'cmon ' + message.author.username + ' dont do ' + persona.user.username + ' like dat!',
                'Omg ' + message.author.username + ' stop bullying ' + persona.user.username + '!'
            ];

            var fact = Math.floor(Math.random() * facts.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./bully/" + 'bully' + imagaNumbe + ".gif"])
                .setImage('attachment://bully' + imagaNumbe + '.gif')
                .setColor("RANDOM")

            message.channel.send(bullyembed);

        }





    }
}