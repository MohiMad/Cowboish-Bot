const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");
module.exports = {
    name: 'bully',
    description: "bullyies you",
    execute: async (message, args, bot) => {

        let persona = await findMember(message, args[1]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to bully? Mention them right after the command | example: >bully @Cowboish Bot . oh no... plz don't bully me :(")
        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")
        }
        else if (persona.id === message.author.id) {
            message.channel.send("Nah cmon,** " + message.author.username + '** why would you bully yourself? :C');

        } else {

            

            var facts = [
                'Oof ' + persona.user.username + ' is getting bullied by ' + message.author.username,
                'cmon ' + message.author.username + ' dont do ' + persona.user.username + ' like dat!',
                'Omg ' + message.author.username + ' stop bullying ' + persona.user.username + '!'
            ];

            var fact = Math.floor(Math.random() * facts.length);

            bullies = [
                "https://media.giphy.com/media/VI3JhvSjNbGrrj2D8r/giphy.gif",
                "https://media.giphy.com/media/fVyJPV8fILb69tulwG/giphy.gif",
                "https://media.giphy.com/media/VgTGeLnEpppAKOMjWS/giphy.gif",
                "https://media.giphy.com/media/ZZTwBZifNdTxqiQcJ5/giphy.gif",
                "https://media.giphy.com/media/Ketwl53yVpflR6wNeD/giphy.gif",
                "https://media.giphy.com/media/dX3T6yjJHWktn7JXJ5/giphy.gif"

            ];

            bully = Math.floor(Math.random() * bullies.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(bullies[bully])
                .setColor("RANDOM")

            message.channel.send(bullyembed);

        }





    }
}