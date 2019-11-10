const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '2.0.0';


const fs = require ('fs');
module.exports = {
    name: 'info', 
    description: "info about bot",
    execute(message, agrs){
const embed = new Discord.RichEmbed()

.setTitle('Bot Information', true)
.addField('Cowboish bot', ('Version ' + version), true)
.setColor(0xE9D01F)
.addField('Birthday', '14/10/2019 <3')
.addField('Gender', 'male')
.addField('Parents', 'MohiMoo and MohiMeaaw :v')
.addField("Support me ♡ ♥", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" +  " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=8)")
.addField('Need help with commands?', 'Use >help', true)
.setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(embed);



    }
}