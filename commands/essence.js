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
    execute(message, agrs){
            number = 45;
            imagNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
            message.channel.send('You opened an essence and got...', {files: ["Mohamad/Cowboish-Bot/s8/" + 'essence' + imagNumber + ".png"]})


    }
}
