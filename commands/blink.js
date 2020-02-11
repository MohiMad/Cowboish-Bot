const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'blink',
    description: "blink yo azz",
    execute(message, args, bot) {

        if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to blink? Mention them right after the command | example: >blink @Cowboish Bot. heh try to blink me >:D').then(m => m.delete(10000));


        let persona = message.mentions.users.first()

        let person = message.author.username

        nuber = 6;

        imagaNumber = Math.floor(Math.random() * (nuber - 1 + 1)) + 1;

        var facts = ["Oof " + persona.username + " got their ass blinked by " + person];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new RichEmbed()
            .setAuthor((facts[fact]), message.author.avatarURL)
            .attachFiles(["./blink/" + 'blink' + imagaNumber + ".gif"])
            .setImage('attachment://blink' + imagaNumber + '.gif')
            .setColor("RANDOM");

        if (message.mentions.users.first().id === message.author.id)
            return message.channel.send("Nah don't waste the blink on yourself, **" + message.author.username + "**");

        else message.channel.send(lassoembed);




    }
}