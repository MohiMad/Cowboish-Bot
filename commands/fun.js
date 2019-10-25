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
    name: 'fun', 
    description: "help with fun commands",
    execute(message, agrs){
const funEmbed = new Discord.RichEmbed()
.setTitle('😁Help is here :D😁', true)
.setColor('#0099ff')
.addField('yee', 'Sends some random wierd messages', true)
.addField('identify', 'Identifies what kind of idv player you are!', true)
.addField('roll', 'Rolls a 4 sided dice...', true)
.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(funEmbed);


        }
    
    }