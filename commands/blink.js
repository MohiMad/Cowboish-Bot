const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'blink',
    description: "blink yo azz",
    execute: async (message, args, bot, prefix) => {


        let persona = await findMember(message, args[1]);

        let person = message.author.username;

        let blinks = [
            "https://media.giphy.com/media/YOpwZ3jr5K6NNR2Zvo/giphy.gif",
            "https://media.giphy.com/media/RGRPnKttJ8qvlW49bI/giphy.gif",
            "https://media.giphy.com/media/WqLmLFHyxCaNamvv95/giphy.gif",
            "https://media.giphy.com/media/U4LCFb2WlqvHd7VHDi/giphy.gif",
            "https://media.giphy.com/media/LM1n0ETdcqJEnrhSqD/giphy.gif",
            "https://media.giphy.com/media/H1YLMr6ZYNq9mUfUgH/giphy.gif",
            "https://media.giphy.com/media/S9oeNa2E63gKP4k75y/giphy.gif",
            "https://media.giphy.com/media/IbNsqcUpLKDsyZfSpx/giphy.gif",
            "https://media.giphy.com/media/SXO8CtYraR35V5E0lk/giphy.gif",
            "https://media.giphy.com/media/jnoDjfkhShvhplArpk/giphy.gif",
            "https://media.giphy.com/media/ghOIJSu55J73TjL6xk/giphy.gif"

        ];

        let blink = Math.floor(Math.random() * blinks.length)

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to blink? Mention them right after the command | example: `' + prefix + 'blink @Cowboish Bot`. heh try to blink me >:D');

        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "blink <MentionHere>`")
        }
        else if (persona.id === message.author.id) {
            return message.channel.send("Nah don't waste the blink on yourself, **" + message.author.username + "**");

        }
        else {

            var facts = [
                `${persona.user.username} got blinked by ${person}`,
            ];

            var fact = Math.floor(Math.random() * facts.length);

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(blinks[blink])
                .setColor("RANDOM")
                .setFooter(`That poor poor ${persona.user.username} :C`, persona.user.displayAvatarURL);


            message.channel.send(lassoembed);
        }




    }
}