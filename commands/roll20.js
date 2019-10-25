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
    name: 'roll20', 
    description: "rolls a 20 sided dice",
    execute(message, agrs){
            var facts = ["lfmaaao u got 1", "F you got 2", "rip thats a 3", "smh u got 4", "5 xd", "muhahah thats a 6", "F in the chat for u 7", "F pressed :v 8", "lmaaao a 9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19 :p", "whao how lucky 20"];
            var fact = Math.floor(Math.random() * facts.length);
            const rollEmbed = new Discord.RichEmbed()
            .setTitle('You rolled a 20 sided dice and got...')
            .addField((facts[fact]), 'Yeee haaaaw >:D')
            .setThumbnail('https://media.giphy.com/media/RlqEFaA0gNSM1TgPok/giphy.gif')
            .setColor('0x#1BEE1A')
            .setFooter('Cowboish bot');
            message.channel.sendEmbed(rollEmbed);
    }
}
