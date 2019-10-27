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
    execute(message, args){
        
        
        {const helpEmbed = new RichEmbed()
                .setColor('#0099ff')
                .setTitle('Did someone say help?', true)
                .setDescription('Check ma website 👆☝')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')
                .addField('😁Fun', 'use >fun', true)
                .addField('🔧Moderation', 'use >moderation    ', true)
                .addField('⚙Config', 'use >config', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
                if (!args[1]) return message.reply(helpEmbed);}

        {const funEmbed = new RichEmbed()
                .setTitle('😁Help is here :D😁', true)
                .setColor('#0099ff')
                .addField('yee', 'Sends some random wierd messages', true)
                .addField('identify', 'Identifies what kind of idv player you are!', true)
                .addField('roll', 'Rolls a 4 sided dice...', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
                if (args[1] === 'fun')
                message.channel.sendEmbed(funEmbed);}

                {const modEmbed = new RichEmbed()
                .setTitle('🔧So u need sum help huh?🔧', true)
                .setColor('#0099ff')
                .addField('kick', 'Kicks the person u tagged out of the server', true)
                .addField('ban', 'Bans the person u tagged from joining the server', true)
                .addField('mute', 'Mutes the tagged person', true)
                .addField('clear', 'Sweeps a specified amount of messages u gave', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
                if (args[1] === 'moderation')
                message.channel.sendEmbed(modEmbed);}
                
              {  const genEmbed = new RichEmbed()
            .setTitle('⚙Help is here :D⚙', true)
            .setColor('#0099ff')
            .addField('help', 'Sends help..DUUUH', true)
            .addField('info', 'Sends info about the bot', true)
            .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
            if (args[1] === 'config')
            message.channel.sendEmbed(genEmbed);}
              
    }
}
