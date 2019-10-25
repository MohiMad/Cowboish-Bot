const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';


const fs = require ('fs');
module.exports = {
    name: 'roll', 
    description: "rolls a 4 sided dice",
    execute(message, agrs){

var facts = ['lfmaaaao u got 1 how unlucky...', 'Naaaaw u got 2 :P', 'ooof u got 3', 'Wow u got 4 what a luckyguy']
var fact = Math.floor(Math.random() * facts.length)
const exampleEmbed = new Discord.RichEmbed()
    .setTitle('Dice Rolled!', true)
    .addField(facts[fact], 'trololololol', true)
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634625422868480000/ezgif-6-525809508f3e.gif')
    .setFooter('Cowboish Bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
message.channel.sendEmbed(exampleEmbed);



    }
}