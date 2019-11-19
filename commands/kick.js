const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
    name: 'kick', 
    description: "kicks a person",
    execute(message, agrs){
           const user = message.mentions.users.first();

           if (user) {
               const member = message.guild.member(user);

               if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return message.reply("You can't kick but can get kicked 😗😗").then(m => m.delete(5000));
            }
               if (member) {
                   member.kick('oof looks like u got kicked!').then(() => {
                       message.reply(`F in the chat for ${user.tag} for getting kicked`);
                   }).catch(err => {
                       message.reply('Smh im unable to kick this guy🙄 how op..');
                       console.log(err);
                   });

               } else {
                   message.reply("Bruh this user doesnt exist in this server, make sure u typed it right")
               }

           } else {
               message.reply('Omg how can u be a moderator🤦‍u need to specify the person u want to kick lol')
           }

            }
}