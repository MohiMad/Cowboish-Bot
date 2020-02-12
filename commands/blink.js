const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'blink',
    description: "blink yo azz",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        let person = message.author.username

        nuber = 6;

        imagaNumber = Math.floor(Math.random() * (nuber - 1 + 1)) + 1;

        var facts = ["Oof " + persona.username + " got their ass blinked by " + person];

        var fact = Math.floor(Math.random() * facts.length);

        if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to blink? Mention them right after the command | example: >blink @Cowboish Bot. heh try to blink me >:D').then(m => m.delete(10000));

        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")
        }
        else if (persona.id === message.author.id) {
            return message.channel.send("Nah don't waste the blink on yourself, **" + message.author.username + "**");

        } else {

            const lassoembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .attachFiles(["./gifs/blink/" + 'blink' + imagaNumber + ".gif"])
                .setImage('attachment://gifs/blink' + imagaNumber + '.gif')
                .setColor("RANDOM")
                .setFooter(`That poor poor ${persona.username} :C`, persona.user.displayAvatarURL);


            message.channel.send(lassoembed);
        }




    }
}