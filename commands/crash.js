const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();



module.exports = {
    name: 'crash', 
    description: "crash you",
    execute(message, args){

        if (!args[1]) return message.reply("Who do you want to land on? Mention them right after the command | example: >crash @Cowboish Bot . wait... don't do that to me plz :v").then(m => m.delete(1000));

let persona  = message.mentions.users.first()

nube = 10;

imagaNumbe = Math.floor (Math.random() * (nube - 1 + 1)) + 1;

var facts = ['Boom! ' + message.author.username + ' landed on ' + persona.username];
var fact = Math.floor(Math.random() * facts.length);

const bullyembed = new RichEmbed()
.setAuthor((facts[fact]), message.author.avatarURL)
.attachFiles (["./crashs/" + 'crash' + imagaNumbe + ".gif"])
.setImage('attachment://crash' + imagaNumbe + '.gif')
.setColor("RANDOM")
.setFooter('Want your replay to pop up here? add me to submit it ;D (MohiMeaww#2888)');


if(message.mentions.users.first().id === message.author.id) 
    message.channel.send ("Ehh sorry,** " + message.author.username + '** but you cant land on your self :v');

else message.channel.sendEmbed(bullyembed);

}
}