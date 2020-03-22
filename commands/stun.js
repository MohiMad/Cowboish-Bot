const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'stun',
    description: "stuns you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to shut the pallet on? Mention them right after the command | example: >stun @Cowboish Bot.")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("I won't do that for you,** " + message.author.username + "**");

        }
        else {

            

            var facts = ['Oof ' + message.author.username + ' stunned ' + persona.user.username + ' with a pallet :C'
                , message.author.username + ' shut the pallet down in front of ' + persona.user.username + "'s face"];

            var fact = Math.floor(Math.random() * facts.length);

            let gifs = [
                "https://media.giphy.com/media/kZimQCtfhr6KAWxtKY/giphy.gif",
                "https://media.giphy.com/media/Kebl8fwR139CLl1eqM/giphy.gif",
                "https://media.giphy.com/media/hTaWusjGRpo20ocdHk/giphy.gif",
                "https://media.giphy.com/media/fTmk1jxRn2XIsKIf3C/giphy.gif",
                "https://media.giphy.com/media/j6GLwbymLmyUsOSoRM/giphy.gif",
                "https://media.giphy.com/media/TfXO3qsu2El2L6FdDP/giphy.gif"
            ];

            let gif = Math.floor(Math.random() * gifs.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(gifs[gif])
                .setColor("RANDOM");


            message.channel.send(bullyembed);

        }



    }
}