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
    name: 'roll', 
    description: "rolls a 4 sided dice",
    execute(message, agrs){
        var person  = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        numba = 4;
        imagNumba = Math.floor (Math.random() * (numba - 1 + 1)) + 1;
        const diceEmbed = new RichEmbed()
        .setTitle(`You rolled a 4 sided dice and got...`)
        .attachFiles (["./dice/" + 'dice' + imagNumba + ".gif"])
        .setImage('attachment://dice' + imagNumba + '.gif')
        .setURL('https://rkanjo2.wixsite.com/cowboishbot')
        .setColor('0x#1BEE1A')
        .setFooter('Cowboish Bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
        message.channel.send(diceEmbed);




    }
}