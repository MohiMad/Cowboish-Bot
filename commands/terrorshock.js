const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();



module.exports = {
    name: 'terror shock', 
    description: "terrorshocks you",
    execute(message, args){

        if (!args[1]) return message.reply("Who do you want to terrorshock? Mention them right after the command | example: >crash @Cowboish Bot . wait... don't do that to me plz :v").then(m => m.delete(10000));

let persona  = message.mentions.users.first()

nube = 8;

imagaNumbe = Math.floor (Math.random() * (nube - 1 + 1)) + 1;

var facts = [
    'Oof ' + message.author.username + ' got ' + persona.username + ' terrorshocked :C',
    persona.username + " got terrorshocked by " + message.author.username + "R.I.P",
    "Oh daaang " + persona.username + " got terrorshocked by " + message.author.username + " that's hurts :("
];
var fact = Math.floor(Math.random() * facts.length);

const bullyembed = new RichEmbed()
.setAuthor((facts[fact]), message.author.avatarURL)
.attachFiles (["./tc/" + 'tc' + imagaNumbe + ".gif"])
.setImage('attachment://tc' + imagaNumbe + '.gif')
.setColor("RANDOM")
.setFooter('Want your replay to pop up here? add me to submit it ;D (MohiMeaww#2888)');


if(message.mentions.users.first().id === message.author.id) 
    message.channel.send ("U... wanna terrorshock yourself?,** " + message.author.username + '** is that even possible??!');

else message.channel.sendEmbed(bullyembed);

}
}