const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'clear', 
    description: "clear commands",
    execute(message, args){
if (!args[1]) return message.reply('How many messeges do u want me to sweep?')
message.channel.bulkDelete(args[1]);



    }
}