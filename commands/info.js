const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: 'info', 
    description: "info about bot",
    execute(message, args, bot, MohiMoo){


const betterEmbed = new RichEmbed()
    .setThumbnail(bot.displayAvatarURL)
    .setColor(bot.displayHexColor === '#000000' ? '#ffffff' : bot.displayHexColor)

    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", 
    stripIndents`👇 <@632291800585076761> information 👇
    Cowboish bot is my first projects to code using *discord.js*

    ⚙️ Bot's prefix : **>**
    - *Use this prefix before any of my commands ;D*

    📌 Do __*>help*__ to recieve help >:D

    <:cowboy:649130677253439508> Creator: ${MohiMoo.username}

    🎉 My birthday : 🎂 **14/10/2019**
    
    `, true)
    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents`**For more information**
    [Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)
    [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502)
    [Cowboish Server](https://discordapp.com/invite/YWcSukS)`)
    .attachFiles(["./emoji" + ".png"])
    .setThumbnail('attachment://emoji' + '.png')
    .setTimestamp();

    message.channel.send(betterEmbed);


    }

}
