const {Client, RichEmbed, Attachment, Collection} = require('discord.js');


module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args){


const helpEmbed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle('Did someone say help?')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('<:idvtroll:651464392243675156> IdentityV <:idvtroll:651464392243675156>', 'use >help idv', true)
    .addField('😁 Actions 😁', 'use >help actions', true)
    .addField('🔧Moderation 🔧', 'use >help moderation    ', true)
    .addField('⚙ Config ⚙', 'use >help config', true)
    .addField('🤣 Fun 🤣', 'use >help fun', true)
    .addField("For more info ", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" +  " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | " + "[Cowboish Server](https://discordapp.com/invite/YWcSukS)")
    .setFooter('Remember to use my prefix > and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (!args[1]) return message.channel.send(helpEmbed);

const funEmbed = new RichEmbed()
    .setTitle('😁Help is here :D😁')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`identify`|`roll`|`roll20`|`essence`|`randomize`|`idv`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('YeeeeHawww :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'idv')
    message.channel.send(funEmbed);

    const fuEmbed = new RichEmbed()
    .setTitle('Identity V actions :)')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`crash`|`bully`|`lasso`|`shoot`|`stun`|`terrorshock`', 'Remember to use my prefix > before the commands ;D');    
    if (args[1] === 'actions')
    message.channel.send(fuEmbed);

    const modEmbed = new RichEmbed()
    .setTitle('🔧So u need sum help huh?🔧')
    .setColor("RANDOM")
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('`kick`|`ban`|`clear`|`mute`', 'Remember to use my prefix > before the commands ;D')
    .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'moderation')
    message.channel.sendEmbed(modEmbed);
    
    const genEmbed = new RichEmbed()
.setTitle('⚙ Help is here :D ⚙', true)
.setColor("RANDOM")
.setURL('https://rkanjo2.wixsite.com/cowboishbot')
.addField('Here are the bots config commands', '`help`|`ping`|`guilds`|`ìnfo`|`userinfo`|`suggest`')

.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
if (args[1] === 'config')
message.channel.sendEmbed(genEmbed);


const helpmbed = new RichEmbed()
    .setColor("RANDOM")
    .setTitle("🤣Don't move i'm coming :v", true)
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .addField('🤣Fun commands🤣', '`meme`|`joke`|`say`')
    .setFooter('Remember to use my prefix > and before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
    if (args[1] === 'fun')
    message.channel.sendEmbed(helpmbed);
    
    

  }

}