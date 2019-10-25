module.exports = {
    name: 'config', 
    description: "general commands",
    execute(message, agrs){
            const genEmbed = new Discord.RichEmbed()
            .setTitle('⚙Help is here :D⚙', true)
            .setColor('#0099ff')
            .addField('help', 'Sends help..DUUUH', true)
            .addField('info', 'Sends info about the bot', true)
            .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
        message.channel.sendEmbed(genEmbed);
    
    
    
    
    }}