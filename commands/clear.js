const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'clear', 
    description: "clear commands",
    execute(message, args){
        if (!args[1]) return message.reply('How many messeges do u want me to sweep?')
        if (args[1] > 100) return message.reply ("I can't delete more than 100 mesaages dum dum")
        message.channel.bulkDelete(args[1]);
        message.channel.send ('Successully deleted '+(args[1]) + ' messages :D  got the order from => **' + message.author.username + '**')
        


    }
}