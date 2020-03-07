const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js");

const { stripIndents }= require("common-tags");

module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute(message, args, bot, MohiMoo) {

        const suggest = bot.channels.get('653529896903245834');

        const sayMessage = args.slice(1).join(" ");

        const suggestEmbed = new RichEmbed()
            .setAuthor(message.author.username + " has a suggestion!", message.author.avatarURL)
            .setDescription(stripIndents`
            🆔: *${message.author.id}*
            📎 **User Tag**: *${message.author.tag}*

            💭 **Suggestion**:
            ${sayMessage}
            `)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
            .setColor("RANDOM");

        const thanksEmbed = new RichEmbed()
            .setTitle("Thank you for your feedback!")
            .setDescription(`Your suggestion has been succesfully sent to [Cowboish Server](https://discordapp.com/invite/YWcSukS)\nFeel free to join if you want to see what **${MohiMoo.tag}** thinks about it :)`)
            .setColor("RANDOM");

        if (message.deletable) message.delete();

        if (!args[1]) {
            message.channel.send("You can't suggest nothing :v");
        }

        else {

            suggest.send(suggestEmbed).then(sentEmbed => {
                sentEmbed.react('❌').then(sentEmbed.react('✅')).then(sentEmbed.react('🔶'))
            })
            message.channel.send(thanksEmbed);
        }

    }

}