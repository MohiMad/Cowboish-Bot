const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
const Discord = require('discord.js');



module.exports = {
    name: 'lasso',
    description: "lassos you",
    execute(message, args){

        let persona  = message.mentions.users.first()

        nuber = 9;

        imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;

        var facts = [message.author.username + ' Is lassoing ' + persona.username  + ' Have a nice ride :D', 
        message.author.username + ' lassoed ' + persona.username + ' what a ride!',
        persona.username + ' is riding on ' +  message.author.username + ' Yee Haaaw >:D'];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new RichEmbed()
        .setAuthor((facts[fact]), message.author.avatarURL)
        .attachFiles (["./lassos/" + 'lasso' + imagaNumber + ".gif"])
        .setImage('attachment://lasso' + imagaNumber + '.gif')
        .setColor('0x#1BEE1A')
        .setFooter('Want your replay to pop up here? submit it to me here => :D (MohiMeaww#2888)');

        if (!args[1]) return message.reply('Who do you want to lasso? Mention them in your 2nd args');

        if(message.mentions.users.first().id === message.author.id) 
            message.channel.send ("Um sorry,** " + message.author.username + '** but you cant lasso yourself :v');

        else message.channel.sendEmbed(lassoembed);

    }
}