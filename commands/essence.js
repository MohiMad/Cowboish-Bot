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
    name: 'essence', 
    description: "opens an essence",
    execute(message, args){

        
        number = 45;
        imagNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        const newEmbed = new RichEmbed()
        .setAuthor('You opened an essence [S8 No.2] and got...', message.author.avatarURL)
        .attachFiles (["./s8/" + 'essence' + imagNumber + ".PNG"])
        .setURL('https://rkanjo2.wixsite.com/cowboishbot')
        .setImage('attachment://essence' + imagNumber + '.PNG')
        .setColor('0x#1BEE1A')
        .setFooter('NOTE: This command doesnt have the same ingame percentage');

        numba = 32;
        imageNumba = Math.floor (Math.random() * (numba - 1 + 1)) + 1;
        const p5Embed = new RichEmbed()
        .setAuthor('You opened an essence [P5 No.2] and got...', message.author.avatarURL)
        .attachFiles (["./p5/" + 'p5-' + imageNumba + ".jpg"])
        .setURL('https://rkanjo2.wixsite.com/cowboishbot')
        .setImage('attachment://p5-' + imageNumba + '.jpg')
        .setColor('0x#1BEE1A')
        .setFooter('NOTE: This command doesnt have the same ingame percentage');
    
        {if (!args[1]) message.channel.send('What essence do you want to open? please choose between ``p5`` or ``s8``');}

        {if ((args[1]) == 'p5')
        message.channel.sendEmbed(p5Embed);}

        {if ((args[1]) == 's8')
        message.channel.sendEmbed(newEmbed);}










    


    }
}
