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
        var facts = ["1", "2", "3", "4", "5 ", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
        var fact = Math.floor(Math.random() * facts.length);
        const rollEmbed = new RichEmbed()
        .setTitle('You rolled a 20 sided dice and got...')
        .addField((facts[fact]), 'Yeee haaaaw >:D')
        .attachFiles (["./dice/" + "dice20.gif"])
        .setImage('attachment://dice20.gif')
        .setColor('0x#1BEE1A')
        .setFooter('Cowboish bot');
        message.channel.sendEmbed(rollEmbed);
    }
}
