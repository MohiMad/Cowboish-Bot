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
    name: 'lasso',
    description: "lassos you",
    execute(message, args){
let persona  = message.mentions.users.first()
nuber = 8;
imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;
var facts = ['**' + message.author.username + '** Is lassoing **' + persona.username  + '** Have a nice ride :D', 
'**' + message.author.username + '** lassoed **' + persona.username + '** what a ride!', '**' + persona.username + '** is riding on **' +  message.author.username + '** Yee Haaaw >:D'];
var fact = Math.floor(Math.random() * facts.length);
const lassoembed = new RichEmbed()
.setTitle((facts[fact]), message.author.avatarURL)
.attachFiles (["./lassos/" + 'lasso' + imagaNumber + ".gif"])
.setImage('attachment://lasso' + imagaNumber + '.gif')
.setColor('0x#1BEE1A')
.setFooter('some of the gifs are not mine... credit is at bottom right!')
message.channel.sendEmbed(lassoembed);

    }
}