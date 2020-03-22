const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'blink',
    description: "blink yo azz",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        let person = message.author.username;

        let blinks = [
            "https://media.giphy.com/media/WqLmLFHyxCaNamvv95/giphy.gif",
            "https://media.giphy.com/media/U4LCFb2WlqvHd7VHDi/giphy.gif",
            "https://media.giphy.com/media/jpzooO3smI5JRG0wuU/giphy.gif",
            "https://media.giphy.com/media/LM1n0ETdcqJEnrhSqD/giphy.gif",
            "https://media.giphy.com/media/cNvyZFFMJdTAac6qR7/giphy.gif",
            "https://media.giphy.com/media/UVAS9ONmZPFin7UBw2/giphy.gif"

        ];

        let blink = Math.floor(Math.random() * blinks.length)

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to blink? Mention them right after the command | example: >blink @Cowboish Bot. heh try to blink me >:D');

        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")
        }
        else if (persona.id === message.author.id) {
            return message.channel.send("Nah don't waste the blink on yourself, **" + message.author.username + "**");

        }
        else {

            var facts = [
                "Oof " + persona.user.username + " got their ass blinked by " + person,
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