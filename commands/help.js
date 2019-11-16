const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();


module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args){


const helpEmbed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle('Did someone say help?', true)
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('😁IdentityV', 'use >help idv', true)
    .addField('😁Actions', 'use >help actions', true)
    .addField('🔧Moderation', 'use >help moderation    ', true)
    .addField('⚙Config', 'use >help config', true)
    .addField("For more info ", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" +  " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=8)")
    .setFooter('Remember to use my prefix > and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (!args[1]) return message.channel.send(helpEmbed);

const funEmbed = new RichEmbed()
    .setTitle('😁Help is here :D😁')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`identify` `roll` `roll20` `essence` `randomize`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('YeeeeHawww :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'idv')
    message.channel.send(funEmbed);

    const fuEmbed = new RichEmbed()
    .setTitle('Identity V actions :)')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`crash` `bully` `lasso` `shoot` `stun`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('Want your replays to show in this bots roleplay commands? feel free to send them to me here (MohiMeaww#2888)', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'actions')
    message.channel.send(fuEmbed);

    const modEmbed = new RichEmbed()
    .setTitle('🔧So u need sum help huh?🔧')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`kick` `ban` `clear`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'moderation')
    message.channel.sendEmbed(modEmbed);
    
    const genEmbed = new RichEmbed()
.setTitle('⚙Help is here :D⚙', true)
.setColor("RANDOM")
.setURL('https://rkanjo2.wixsite.com/cowboishbot')
.addField('`help`', 'Sends help..DUUUH', true)
.addField('`info`', 'Sends info about the bot', true)
.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
if (args[1] === 'config')
message.channel.sendEmbed(genEmbed);
  }
}