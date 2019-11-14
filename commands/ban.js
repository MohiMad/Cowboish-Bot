
const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'ban', 
    description: "bans a player",
    execute(message, args){
const usa = message.mentions.users.first();


if (usa) {
    const member = message.guild.member(usa);

    if (member) {
        member.ban({ ression: 'oof u got banned from this server' }).then(() => {
            message.reply(`oof ${user.tag} got banned :v`)

        })
    } else {
        message.reply("Bruh this user doesn\'t exist in this server, make sure u typed it right")
    }
} else {
    message.reply('Omg how can u be a moderator🤦‍u need to specify the person u want to ban lol')
}


        }
    }