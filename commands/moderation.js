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
    name: 'moderation', 
    description: "help with moderation",
    execute(message, agrs){
const modEmbed = new Discord.RichEmbed()
.setTitle('🔧So u need sum help huh?🔧', true)
.setColor('#0099ff')
.addField('kick', 'Kicks the person u tagged out of the server', true)
.addField('ban', 'Bans the person u tagged from joining the server', true)
.addField('mute', 'Mutes the tagged person', true)
.addField('clear', 'Sweeps a specified amount of messages u gave', true)
.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(modEmbed);
    


    }
}