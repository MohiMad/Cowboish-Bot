const { MessageEmbed } = require('discord.js');

module.exports = {
    name: ["roll20", "r20", "rolldice20", "roll20sideddice"],
    description: "Rolls a 20 Sided Dice... Isn't a part of the Logicpath category which means it doesn't affect your logicpathsteps",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    execute(message) {

        var facts = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

        var fact = Math.floor(Math.random() * facts.length);

        const rollEmbed = new MessageEmbed()
            .setTitle('You rolled a 20 sided dice and got...')
            .setDescription((facts[fact]))
            .setImage("https://media.giphy.com/media/Y1ejXrUbBCnEhCyTAI/giphy.gif")
            .setColor("RANDOM")
            .setFooter('Cowboish bot');

        message.channel.send(rollEmbed);
    }
}
