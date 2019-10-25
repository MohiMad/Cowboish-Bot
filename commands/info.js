module.exports = {
    name: 'info', 
    description: "info about bot",
    execute(message, agrs){
const embed = new Discord.RichEmbed()

.setTitle('Bot Information', true)
.addField('Cowboish bot', ('Version ' + version), true)
.setColor(0xE9D01F)
.addField('Website ', 'https://rkanjo2.wixsite.com/cowboishbot', true)
.addField('Need help with commands?', 'Use >help', true)
.setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
message.channel.sendEmbed(embed);



}}