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
    name: 'shoot',
    description: "shoots you",
    execute(message, args){
let persona  = message.mentions.users.first()
{if (!args[1]) return message.reply('Who do you want to shoot? Mention them in your 2nd args');}
nuber = 5;
imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;
var facts = [
'oof ' + message.author.username + ' shot ' + persona.username  + ' that looks like it hurts!', 
message.author.username + ' shot ' + persona.username + ' BOOM HEADSHOT!', 
persona.username + ' got shot by ' +  message.author.username + ' shouldve brought excitement.'];
var fact = Math.floor(Math.random() * facts.length);
const lassoembed = new RichEmbed()
.setAuthor((facts[fact]), message.author.avatarURL)
.attachFiles (["./flaregun/" + 'flaregun' + imagaNumber + ".gif"])
.setImage('attachment://flaregun' + imagaNumber + '.gif')
.setColor('0x#1BEE1A')
.setFooter('some of the gifs are not mine... credit is at bottom right!')
message.channel.sendEmbed(lassoembed);

    }
}