const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
const Discord = require('discord.js');



module.exports = {
    name: 'lasso',
    description: "lassos you",
    execute(message, args){
        if (!args[1]) return message.reply('Who do you want to lasso? Mention them in your 2nd args');

        
        let persona  = message.mentions.users.first()

        nuber = 9;

        imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;

        var facts = [ 
        'Yoooink!' + message.author.username + ' lassoed ' + persona.username,
        persona.username + ' is riding on ' +  message.author.username + ' Yee Haaaw >:D',
        message.author.username + ' stole ' + persona.username  + " from the hunter's hands"];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new RichEmbed()
        .setAuthor((facts[fact]), message.author.avatarURL)
        .attachFiles (["./lassos/" + 'lasso' + imagaNumber + ".gif"])
        .setImage('attachment://lasso' + imagaNumber + '.gif')
        .setColor('0x#1BEE1A')
        .setFooter('Want your replay to pop up here? add me to submit it => (MohiMeaww#2888)');
        
        if(message.mentions.users.first().id === message.author.id) 
            return message.channel.send ("Um sorry,** " + message.author.username + '** but you cant lasso yourself :v');

        else message.channel.sendEmbed(lassoembed);

    }
}