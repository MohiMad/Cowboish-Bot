const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';
const fs = require ('fs');


module.exports = {
    name: 'bully', 
    description: "bullyies you",
    execute(message, args){

{if (!args[1]) return message.reply('Who do you want to bully? Mention them in your 2nd args');}
let persona  = message.mentions.users.first()
nube = 6;
imagaNumbe = Math.floor (Math.random() * (nube - 1 + 1)) + 1;
var facts = ['Oof ' + persona.username + ' is getting bullied by ' + message.author.username, 
'cmon ' + message.author.username + ' dont do ' + persona.username + ' like dat!', 
'Omg ' + message.author.username+ ' stop bullying '+ persona.username +'!'];
var fact = Math.floor(Math.random() * facts.length);

{const bullyembed = new RichEmbed()
.setAuthor((facts[fact]), message.author.avatarURL)
.attachFiles (["./bully/" + 'bully' + imagaNumbe + ".gif"])
.setImage('attachment://bully' + imagaNumbe + '.gif')
.setColor('0x#1BEE1A')
.setFooter('most of the gifs are not mine... credit is at the bottom!')
    message.channel.sendEmbed(bullyembed);}

}
}