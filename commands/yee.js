const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();




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