const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();



module.exports = {
    name: 'bully', 
    description: "bullyies you",
    execute(message, args){

        if (!args[1]) return message.reply('Who do you want to bully? Mention them in your 2nd args');

let persona  = message.mentions.users.first()

nube = 8;

imagaNumbe = Math.floor (Math.random() * (nube - 1 + 1)) + 1;

var facts = ['Oof ' + persona.username + ' is getting bullied by ' + message.author.username, 
'cmon ' + message.author.username + ' dont do ' + persona.username + ' like dat!', 
'Omg ' + message.author.username+ ' stop bullying '+ persona.username +'!'];

var fact = Math.floor(Math.random() * facts.length);

const bullyembed = new RichEmbed()
.setAuthor((facts[fact]), message.author.avatarURL)
.attachFiles (["./bully/" + 'bully' + imagaNumbe + ".gif"])
.setImage('attachment://bully' + imagaNumbe + '.gif')
.setColor("RANDOM")
.setFooter('Want your replay to pop up here? add me to submit it => (MohiMeaww#2888)');


if(message.mentions.users.first().id === message.author.id) 
    message.channel.send ("Nah cmon,** " + message.author.username + '** why would you bully yourself? :C');

else message.channel.sendEmbed(bullyembed);

}
}