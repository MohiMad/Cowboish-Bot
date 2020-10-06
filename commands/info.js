const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: 'info',
    description: "info about bot",
    execute(message, args, bot, MohiMoo, prefix) {


        const betterEmbed = new MessageEmbed()
            .setColor("0xFFE700")
            .setDescription(stripIndents`👇 <@632291800585076761> information 👇
    Cowboish bot is Mohi's first project coded using *JavaScript*
    Mohi: -Ngl at first, I took this bot as a hobby... for fun, wasting my spare time on Discord with friends...
    Never... like, NEVER thought I would make it this far <3

    ⚙️ Bot's prefix : **${prefix}**
    - *Use this prefix before any of my commands ;D*

    📌 Do __*${prefix}help*__ to recieve help >:D

    <:cowboy:649130677253439508> Creator: **${MohiMoo.tag}**

    🎉 My birthday : 🎂 **14/10/2019**
    
    `, true)
            .addField("▔ ▔ ▔ ▔ ▔", stripIndents`**For more information**
    [Cowboish Website](https://mohimad.github.io/CowboishBot/)
    [Invite Me ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502)
    [Cowboish Server](https://discordapp.com/invite/YWcSukS)`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(betterEmbed);


    }

}
