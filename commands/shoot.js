const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'shoot',
    description: "shoots you",
    execute(message, args){

        let persona  = message.mentions.users.first()

        if (!args[1]) return message.reply('Who do you want to shoot? Mention them in your 2nd args');

        if(message.mentions.users.first().id === message.author.id) 
            message.channel.send ("Why would you... shoot yourself,** " + message.author.username + '**');

        nuber = 5;

        imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;

        var facts = [
        'oof ' + message.author.username + ' shot ' + persona.username  + ' that looks like it hurts!', 
        message.author.username + ' shot ' + persona.username + ' BOOM HEADSHOT!', 
        persona.username + ' got shot by ' +  message.author.username + ' shouldve brought excitement.'];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new RichEmbed()
        .setAuthor((facts[fact]), message.author.avatarURL)
        .attachFiles (["./flaregun/" + 'flaregun' + imagaNumber + ".gif"])
        .setImage('attachment://flaregun' + imagaNumber + '.gif')
        .setColor('0x#1BEE1A')
        .setFooter('some of the gifs are not mine... credit is at bottom right!');
        if(message.mentions.users.first().id === message.author.id) 
        message.channel.send ("Why would ** " + message.author.username + '** shoot themself 🤔🤔');

    else message.channel.sendEmbed(lassoembed);
        

    }
}