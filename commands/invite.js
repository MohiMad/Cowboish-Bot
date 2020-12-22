const { MessageEmbed } = require("discord.js");

module.exports = {
    name: ["invite", "botinvite", "botinvitationlink", "cowboishinvite"], 
    description: "Sends the invitation link for Cowboish Bot\nProvides two links, one with the recommended permissions and one with full permissions (Admin)",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Config",
    execute(message, bot){

        const invEmbed = new MessageEmbed()
            .setColor("0xffff00")
            .setTimestamp()
            .setTitle(`Cowboish invitation link!`)
            .setDescription(`[(Recommended Invitation link)](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=268758102)\n\n[Invitation link (Adminstrator)](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=8)`)
            .setFooter("Luv ya <3", bot.user.displayAvatarURL())

            message.channel.send(invEmbed);
    }
}