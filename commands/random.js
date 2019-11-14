const Discord = require('discord.js');
const bot = new Discord.Client();
const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';


const fs = require ('fs');
module.exports = {
    name: 'random', 
    description: "randomizes a surv",
    execute(message, args){

var facts = ["1st Officer:watch::alarm_clock:", "Enchantress:skull:🌩️", "Mechanic:joystick::robot:", "Wilding:boar::apple:", "Barmaid:beer::beers:", "Acrobat🤹🏻‍♀️", "Prospector:doughnut::doughnut:", "Seer:eye_in_speech_bubble::owl:", "Forward:rugby_football::muscle:", "Embalmer:coffin::coffin:", "Dancer:dancer::dancer:", "Coordinator:gun:" , "Explorer:closed_book:", "Magician:tophat:", "Perfumer:butterfly:", "Priestess:milky_way::milky_way:", "Minds eye:eye_in_speech_bubble:", "Mercenary:boxing_glove::shield:", "Gardener:bamboo::tools:", "Lucky guy:four_leaf_clover:", "Doctor👩‍⚕️:syringe:", "Thief:flashlight::heavy_dollar_sign:", "Lawyer:eyeglasses::map:", "Cowboy:cowboy::cow2:"];

var fact = Math.floor(Math.random() * facts.length);

if (!args[1]) return message.reply('What do you want to randomize? Choose between **survivor** or  **hunter**');

if (args[1] === 'survivor') 
message.channel.send('BE THE ' + '**' + (facts[fact])+'**' );


var hunters = ["Geisha:chocolate_bar::kimono:", "Smiley Face:clown::rocket:", "Feaster:octopus:", "Axe Boy:fire::pick:", "Dream Witch:pick:", "Soul Weaver:spider_web::spider:", "Hell Ember:shark::fire:", "Gamekeeper:deer:", "Mad eyes:beers::beer:", "Wu chang:umbrella2::bell:", "Ripper☁️:fog:", "Evil Reptilian:frog::lizard:", "Bloody queen:rose::knife:", "No. 26:bomb::bomb:"];

var hunter = Math.floor(Math.random() * hunters.length);

if (args[1] === 'hunter') 
message.channel.send('Go and hunt as the ' + '**' + (hunters[hunter] + '**'));

    }
}