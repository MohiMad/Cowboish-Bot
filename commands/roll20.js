const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'roll20',
    description: "rolls a 20 sided dice",
    execute(message, args, MohiMoo) {

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else {
            var facts = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

            var fact = Math.floor(Math.random() * facts.length);

            const rollEmbed = new RichEmbed()
                .setTitle('You rolled a 20 sided dice and got...')
                .setDescription((facts[fact]))
                .attachFiles(["./dice/" + "dice20.gif"])
                .setImage('attachment://dice20.gif')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')
                .setColor("RANDOM")
                .setFooter('Cowboish bot');

            message.channel.send(rollEmbed);

        }


    }
}
