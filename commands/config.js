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
    name: 'config', 
    description: "general commands",
    execute(message, agrs){
            const genEmbed = new Discord.RichEmbed()
            .setTitle('⚙Help is here :D⚙', true)
            .setColor('#0099ff')
            .addField('help', 'Sends help..DUUUH', true)
            .addField('info', 'Sends info about the bot', true)
            .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
        message.channel.sendEmbed(genEmbed);
    
    
    
    
         }
        
    }