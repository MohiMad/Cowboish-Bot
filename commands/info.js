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
    name: 'info', 
    description: "info about bot",
    execute(message, agrs){
const embed = new Discord.RichEmbed()

.setTitle('Bot Information', true)
.addField('Cowboish bot', ('Version ' + version), true)
.setColor(0xE9D01F)
.addField('Website ', 'https://rkanjo2.wixsite.com/cowboishbot', true)
.addField('Need help with commands?', 'Use >help', true)
.setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(embed);



    }
}