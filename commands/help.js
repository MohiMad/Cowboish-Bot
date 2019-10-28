const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();

const token = 'NjM2MjQxNjY5MTE2Nzg4NzQ3.Xa9Rvw.xYmP5jl2gAH2I1T6Ex9QOUmUO80';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';
const fs = require ('fs');

module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args){


{const helpEmbed = new RichEmbed()
    .setColor('#0099ff')
    .setTitle('Did someone say help?', true)
    .setDescription('Check ma website 👆☝')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('😁IdentityV', 'use >idv', true)
    .addField('🔧Moderation', 'use >moderation    ', true)
    .addField('⚙Config', 'use >config', true)
    .setFooter('Remember to use my prefix > and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (!args[1]) return message.reply(helpEmbed);}

{const funEmbed = new RichEmbed()
    .setTitle('😁Help is here :D😁')
    .setColor('#0099ff')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`identify` `roll` `roll20` `essence` `randomize`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('YeeeeHawww :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'idv')
    message.channel.send(funEmbed);}

    {const modEmbed = new RichEmbed()
    .setTitle('🔧So u need sum help huh?🔧')
    .setColor('#0099ff')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`kick` `ban` `clear`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'moderation')
    message.channel.sendEmbed(modEmbed);}
    
  {  const genEmbed = new RichEmbed()
.setTitle('⚙Help is here :D⚙', true)
.setColor('#0099ff')
.setURL('https://rkanjo2.wixsite.com/cowboishbot')
.addField('`help`', 'Sends help..DUUUH', true)
.addField('`info`', 'Sends info about the bot', true)
.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
if (args[1] === 'config')
message.channel.sendEmbed(genEmbed);}
  }
}