const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'invite', 
    description: "Sends an invitation link",
    execute(message, args, bot){

        const invEmbed = new RichEmbed()
            .setColor("0xffff00")
            .setTimestamp()
            .setTitle(`Cowboish invitation link!`)
            .setURL("https://mohimad.github.io/CowboishBot/")
            .setDescription(`[Click on me to invite Cowboish bot :3](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=268758102)`)
            .setFooter("Luv ya <3", bot.user.displayAvatarURL)

            message.channel.send(invEmbed);
    }
}