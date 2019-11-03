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
    name: 'identify',
    description: "identifies ur friends",
    execute(message, args){

        {if (!args[1]) return message.reply('Who do you want to identify? tag them in your 2nd args!')}
        let persona  = message.mentions.users.first()

        var facts = [
        persona.username + " Is the coordinator who misses her flare gun",
        persona.username +" Is the gardener who says 'Foucus on decoding' while dismantling a rocket chair...", 
        persona.username + " is the wilding who decodes the whole match, dude u better be a minds eye", 
        persona.username + " is the prospector who removes the hunter's attack recovery animation after getting hit, good job!",
        persona.username +" is this the guy that can't kite for sh*t?", 
        persona.username + " is the guy who drops the pallet down infront of his teammates face... what a betrayl",
        persona.username + " is the player that begs for gifts in the server chat",
        persona.username + " is the player who sends Camp = report", 
        'Hey!' +  persona.username + " plz stop getting terror shocked!",
        persona.username + " is the 'i was laggy' excuse user", 
        persona.username + " always disconnects early game and gets found first... GG",
        persona.username + " always Surrenders...", 
        persona.username + ": WHY DO I GET FOUND FIRST!!", 
        persona.username + " is guy who only talks sh*t in server chat", 
        persona.username + " is the guy who thinks that idv is a dating game, it's not Tinder V bro", 
        "Pls hunter be friendly i luv u <3 thats what " + persona.username + ' usually says' ,
        persona.username + " toxics at the exit gate and gets dragged by the gamekeepers hook..",
        persona.username + " is the 'Don't move i'm coming' mindseye, gg", 
        "Omg these randoms are soo baaad, that's what " + persona.username + ' said.',
        persona.username + " thinks he is the hero cowboi, heh"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);



    }
}