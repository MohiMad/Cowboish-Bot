const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: 'info', 
    description: "info about bot",
    execute(message, args, bot, MohiMoo, errWhere){

        try{

const betterEmbed = new RichEmbed()
    .setThumbnail(bot.displayAvatarURL)
    .setColor(bot.displayHexColor === '#000000' ? '#ffffff' : bot.displayHexColor)

    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", 
    stripIndents`👇 <@632291800585076761> information 👇
    **> ⚙️ Bot's prefix : >**
    **> 📌 Do >help to recieve help**
    **> <:cowboy:649130677253439508> Creator <@478527909250990090>**
    **> ID: 632291800585076761 **
    **> 💬 Username: Cowboish Bot **
    **> 📎 Tag : Cowboish bot#0820**
    **> 🎉 Account's birthday : 🎂 14/10/2019**`, true)
    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents`**For more information**
    [Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)
    [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502)
    [Cowboish Server](https://discordapp.com/invite/YWcSukS)`)
    .attachFiles(["./emoji" + ".png"])
    .setThumbnail('attachment://emoji' + '.png')
    .setTimestamp();

    message.channel.send(betterEmbed);

}catch(err){
    MohiMoo.send(errWhere + "\n```" + err + "```");
    console.log(err);
    message.channel.send("❌ **An error has occured!** sorry :C");
}

    }

}
