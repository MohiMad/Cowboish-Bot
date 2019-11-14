const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'roll', 
    description: "rolls a 4 sided dice",
    execute(message, args){
        numba = 4;

        imagNumba = Math.floor (Math.random() * (numba - 1 + 1)) + 1;

        const diceEmbed = new RichEmbed()
        .setAuthor(`${message.author.username} rolled a 4 sided dice and got...`, message.author.avatarURL)
        .attachFiles (["./dice/" + 'dice' + imagNumba + ".gif"])
        .setImage('attachment://dice' + imagNumba + '.gif')
        .setURL('https://rkanjo2.wixsite.com/cowboishbot')
        .setColor("RANDOM")
        .setFooter('Cowboish Bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        message.channel.send(diceEmbed);




    }
}