const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: ["info", "botinfo", "bot-info"],
    description: "Sends general information about Cowboish bot",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Config",
    execute(message, bot, MohiMoo, prefix) {


        const betterEmbed = new MessageEmbed()
            .setColor("0xFFE700")
            .setDescription(stripIndents`👇 <@632291800585076761> information 👇
    Cowboish bot is Mohi's first project coded using *JavaScript*

    ⚙️ Bot's prefix : **${prefix}**
    - *Use this prefix before any of my commands ;D*

    📌 Do __*${prefix}help*__ to recieve help >:D

    <:cowboy:649130677253439508> Creator: **${MohiMoo.tag}**

    🎉 My birthday : 🎂 **14/10/2019**

    **Credits And Usage Rights:**
    - All art used in Cowboish have their artists credited.\nIf you have any issues with your content being featured don't hesitate in contacting me.
    
    `, true)
            .addField("\u200b", stripIndents`**For More Information**
    [Cowboish Website](https://mohimad.github.io/CowboishBot/)
    [Invite Me ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502)
    [Cowboish Server](https://discordapp.com/invite/YWcSukS)`)
            .setThumbnail(bot.user.displayAvatarURL())
            .setTimestamp();

        message.channel.send(betterEmbed);


    }

}
