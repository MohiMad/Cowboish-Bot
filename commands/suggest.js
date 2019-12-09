const {Client, RichEmbed} = require('discord.js');

module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute(message, args){


const suggest = bot.channels.find(ch => ch.name === '👀》cowboish-suggestions');

const sayMessage = args.slice(1).join(" ");

message.delete().catch(O_o => { });

const suggestEmbed = new RichEmbed()
.setAuthor(message.author.username + " suggestes the following...", message.author.avatarURL)
.setDescription(sayMessage)
.setColor("RANDOM");

if (!args[1])
    message.channel.send("You can't suggest nothing :v");
else


(suggest.sendEmbed(suggestEmbed)).then(sentEmbed => {
    sentEmbed.react('❌').then(sentEmbed.react('✅')).then(sentEmbed.react('🔶'))
}).then(message.channel.send("🙌 Suggested succesfully... thank you for you feedback!"));

    }

}