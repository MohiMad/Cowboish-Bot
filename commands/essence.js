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
    name: 'essence', 
    description: "opens an essence",
    execute(message, args){
            number = 45;
            const newEmbed = new RichEmbed()
            .setTitle('You opened an essence [S8 No.2] and got...')
            .attachFiles (["./Cowboiii/s8/" + 'essence' + imagNumber + ".PNG"])
            .setImage('attachment://essence' + imagNumber + '.PNG')
            .setColor('0x#1BEE1A')
            .setFooter('Cowboish bot');
            message.channel.send(newEmbed);
    


    }
}
