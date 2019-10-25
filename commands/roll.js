module.exports = {
    name: 'roll', 
    description: "rolls a 4 sided dice",
    execute(message, agrs){

var facts = ['lfmaaaao u got 1 how unlucky...', 'Naaaaw u got 2 :P', 'ooof u got 3', 'Wow u got 4 what a luckyguy']
var fact = Math.floor(Math.random() * facts.length)
const exampleEmbed = new Discord.RichEmbed()
    .setTitle('Dice Rolled!', true)
    .addField(facts[fact], 'trololololol', true)
    .setColor('#0099ff')
    .setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634625422868480000/ezgif-6-525809508f3e.gif')
    .setFooter('Cowboish Bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
message.channel.sendEmbed(exampleEmbed);



    }
}