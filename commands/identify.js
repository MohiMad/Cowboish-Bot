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
    name: 'identify', 
    description: "identifies what idv player ur",
    execute(message, agrs){
var facts = ["Is the coordinator ho misses the flare gun xD", "Is the gardener who says 'Foucus on decoding' while dismantling a rocket chair...", "is the wildning who decodes the whole match, dude u better be a minds eye", "is the prospector who removes the hunter's attack recovery animation after getting hit...",
"is this the guy that can't kite for sh*t?", "is the guy who drops the pallet down infront of his teammates face... what a betrayl", "is the player that begs for gifts in the server chat", "Camp = report", "Man stop getting terror shocked!", "the 'i was laggy' excuse user", "Disconnects early game and gets found first... GG",
"Surrenders...", "WHY DO I GET FOUND FIRST!!", "The guy who says switch character when ur playing as a lawyer", "The guy who only talks sh*t in server chat", "The guy who thinks that idv is a dating game, it's not Tinder V bro", "Pls hunter be friendly i luv u <3", "Toxics at the exit gate and gets dragged by the gamekeepers hook..",
"The 'Don't move i'm coming' mindseye, gg", "Omg these randoms are soo baaad",
"Lawyer is waifu for laifu :v", "The 'im a hero' cowboi"];
var fact = Math.floor(Math.random() * facts.length);
message.channel.send(facts[fact]);



    }
}