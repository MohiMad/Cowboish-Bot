const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'stun',
    description: "stuns you",
    execute(message, args, MohiMoo) {


        if (!args[1]) return message.reply("Who do you want to shut the pallet on? Mention them right after the command | example: >stun @Cowboish Bot.").then(m => m.delete(10000));

        let persona = message.mentions.users.first()

        nube = 6;

        imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

        var facts = ['Oof ' + message.author.username + ' stunned ' + persona.username + ' with a pallet :C'
            , message.author.username + ' shut the pallet in front of ' + persona.username + "'s face xd"];
        var fact = Math.floor(Math.random() * facts.length);

        const bullyembed = new RichEmbed()
            .setAuthor((facts[fact]), message.author.avatarURL)
            .attachFiles(["./stuns/" + 'stun' + imagaNumbe + ".gif"])
            .setImage('attachment://stun' + imagaNumbe + '.gif')
            .setColor("RANDOM");

        if (message.mentions.users.first().id === message.author.id)
            message.channel.send("I won't do that for you,** " + message.author.username);

        else message.channel.send(bullyembed);



}
}