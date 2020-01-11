const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute(message, args, bot){


const suggest = bot.channels.find(ch => ch.name === '👀》cowboish-suggestions');

const sayMessage = args.slice(1).join(" ");


if (message.deletable) message.delete();

const suggestEmbed = new RichEmbed()
.setAuthor(message.author.username + " suggestes the following...", message.author.avatarURL)
.setDescription(sayMessage)
.setColor("RANDOM");

const thanksEmbed = new RichEmbed()
.setTitle("Thank you for your feedback!")
.addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", "Your suggestion has been sent to [Cowboish Server](https://discordapp.com/invite/YWcSukS) succesfully! Feel free to join if you want to see what <@478527909250990090> thinks about it :)")
.setColor("RANDOM");




if (!args[1])
    message.channel.send("You can't suggest nothing :v");
else



(suggest.send(suggestEmbed)).then(sentEmbed => {
    sentEmbed.react('❌').then(sentEmbed.react('✅')).then(sentEmbed.react('🔶'))
}).then(message.channel.send(thanksEmbed));

    }

}