const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'roll20', 
    description: "rolls a 20 sided dice",
    execute(message, args){

        var facts = ["1", "2", "3", "4", "5 ", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

        var fact = Math.floor(Math.random() * facts.length);

        const rollEmbed = new RichEmbed()
        .setTitle('You rolled a 20 sided dice and got...')
        .addField((facts[fact]), 'Yeee haaaaw >:D')
        .attachFiles (["./dice/" + "dice20.gif"])
        .setImage('attachment://dice20.gif')
        .setURL('https://rkanjo2.wixsite.com/cowboishbot')
        .setColor('0x#1BEE1A')
        .setFooter('Cowboish bot');

        message.channel.sendEmbed(rollEmbed);
    }
}
