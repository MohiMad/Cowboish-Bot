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
    name: 'help', 
    description: "sends help",
    execute(message, agrs){
const helpEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Did someone say help?', true)
                .setDescription('Check ma website 👆☝')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')
                .addField('😁Fun', 'use >fun', true)
                .addField('🔧Moderation', 'use >moderation    ', true)
                .addField('⚙Config', 'use >config', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
            message.channel.sendEmbed(helpEmbed);
    }
}