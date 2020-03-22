const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'shoot',
    description: "shoots you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);
        
        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to shoot? Mention them right after the command | example: >shoot @Cowboish Bot. Btw plz don't do that to me :(")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("Why would ** " + message.author.username + '** shoot themself 🤔🤔');
        } else {


            var facts = [
                'oof ' + message.author.username + ' shot ' + persona.user.username + ', that looks like it hurts!',
                message.author.username + ' shot ' + persona.user.username + ' in the face',
                persona.user.username + ' got shot by ' + message.author.username
            ];

            var fact = Math.floor(Math.random() * facts.length);

            let gifs = [
                "https://media.giphy.com/media/cmCHwTpo5BcpAWPsqM/giphy.gif",
                "https://media.giphy.com/media/j0Fhyx3xgFQ6IgDZLS/giphy.gif",
                "https://media.giphy.com/media/WpTmaEmDC4Z4VAJZp3/giphy.gif",
                "https://media.giphy.com/media/mBFxHLVMKUnfLx0U6A/giphy.gif",
                "https://media.giphy.com/media/WV9ZYinl8gE50ZhYRP/giphy.gif",
                "https://media.giphy.com/media/jRe4j9FZs6WEpy3ItN/giphy.gif",
                "https://media.giphy.com/media/dZFyAYep8LRsU0TEfd/giphy.gif"
            ];

            let gif = Math.floor(Math.random() * gifs.length);

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(gifs[gif])
                .setColor("RANDOM");
                


            message.channel.send(lassoembed);

        }



    }
}