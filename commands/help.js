module.exports = {
    name: 'help', 
    description: "sends help",
    execute(message, agrs){
const helpEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Did someone say help?', true)
                .setDescription('Check ma website 👆☝')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')
                .addField('😁Fun', 'use >fun', true)
                .addField('🔧Moderation', 'use >moderation    ', true)
                .addField('⚙Config', 'use >config', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
            message.channel.sendEmbed(helpEmbed);
    }
}