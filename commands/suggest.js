const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'suggest',
    description: "sends a suggestion to mohimoo",
    execute(message, args, bot, MohiMoo, errWhere){

        const suggest = bot.channels.get('653529896903245834');
        
        const sayMessage = args.slice(1).join(" ");
                
        
        const suggestEmbed = new RichEmbed()
            .setAuthor(message.author.username + " suggestes the following...", message.author.avatarURL)
            .setDescription(sayMessage)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp()
            .setColor("RANDOM");
        
        const thanksEmbed = new RichEmbed()
            .setTitle("Thank you for your feedback!")
            .setDescription("Your suggestion has been succesfully sent to [Cowboish Server](https://discordapp.com/invite/YWcSukS) Feel free to join if you want to see what <@478527909250990090> thinks about it :)")
            .setColor("RANDOM");
        
        if (message.deletable) message.delete();

        if (!args[1]){
            message.channel.send("You can't suggest nothing :v");
        }

        else{
        
        suggest.send(suggestEmbed).then(sentEmbed => {
            sentEmbed.react('❌').then(sentEmbed.react('✅')).then(sentEmbed.react('🔶'))
        })
        message.channel.send(thanksEmbed);
    }

    }

}