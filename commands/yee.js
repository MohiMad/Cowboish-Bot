const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();
const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';
const fs = require ('fs');



const fs = require ('fs');
module.exports = {
    name: 'yee', 
    description: "haaaw",
    execute(message, args){

        var facts = ["Haaaw >:D", "Yeeeeeeeeeeeet", "Pizza?", "did someone say Yee?"];

        var fact = Math.floor(Math.random() * facts.length);

        message.channel.send(facts[fact]);
    }
}