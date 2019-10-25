module.exports = {
    name: 'moderation', 
    description: "help with moderation",
    execute(message, agrs){
const modEmbed = new Discord.RichEmbed()
.setTitle('🔧So u need sum help huh?🔧', true)
.setColor('#0099ff')
.addField('kick', 'Kicks the person u tagged out of the server', true)
.addField('ban', 'Bans the person u tagged from joining the server', true)
.addField('mute', 'Mutes the tagged person', true)
.addField('clear', 'Sweeps a specified amount of messages u gave', true)
.setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(modEmbed);
    


    }
}