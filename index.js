const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';


const fs = require ('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for (const file of commandFiles){
const command = require(`./commands/${file}`);

bot.commands.set(command.name, command);

}
bot.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels;
    channelLoop:
    for (let c of channels) {
        let channelType = c[1].type;
        if (channelType === "text") {
            channelID = c[0];
            break channelLoop;
        }
    }
    

    const welcomeEmbed = new RichEmbed()
    .setTitle('Thank you for inviting me to the party ;D')
    .addField('Cowboish website 👆☝', 'My cowboish bithday 🎉🎊 14/10/2019')
    .setURL('https://rkanjo2.wixsite.com/cowboishbot')
    .attachFiles (["./emoji" + ".png"])
    .setThumbnail('attachment://emoji' + '.png')
    .setColor('0xe8eb34')
    .addField('My prefix is ">"', 'Remember using it before any command')
    .addField(`Now i'm in **${bot.guilds.size}** servers :)`, 'And growing <3')
    .setFooter('Use >help to get help with using my commands ;D');

    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(welcomeEmbed);
});

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Identit | >help')
    const activities_list = [
        " Use >help to send help", 
        "Identit | >help", 
        "Identity V | >help",
    "Welcome to Identit | >help",
    "Identit | >help", `idv in ${bot.guilds.size} servers`
        ];
    
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
            bot.user.setActivity(activities_list[index]); 
        }, 100000);
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");


    switch (args[0]) {
        case "roll20":
            bot.commands.get('roll20').execute(message, args);
                break;

        case "yee":
            bot.commands.get('yee').execute(message, args);
            break;

        case "help":
            bot.commands.get('help').execute(message, args);
            break;

        case 'guilds':
        message.channel.send(`im in ${bot.guilds.size} servers <3`)
        break;


        case "info":
            bot.commands.get('info').execute(message, args);
            break;

        case "lasso":
            bot.commands.get('lasso').execute(message, args);
        break;

        case "shoot":
                bot.commands.get('shoot').execute(message, args);
                break;

        case "bully":
            bot.commands.get('bully').execute(message, args);
        break;

        case "clear":
            bot.commands.get('clear').execute(message, args);
            break;

        case "identify":
            bot.commands.get('identify').execute(message, args);
            break;

        case "winrate":
            bot.commands.get('winrate').execute(message, args);
                break;

        case "essence":
            bot.commands.get('essence').execute(message, args);
                break;

        case "roll":
            bot.commands.get('roll').execute(message, args);
            break;

            case "randomize":
                bot.commands.get('random').execute(message, args);
                break;

        case "kick":
            bot.commands.get('kick').execute(message, args);
            break;


        case "ban":
            
            bot.commands.get('ban').execute(message, args);
            break;



    }
});






bot.login(token);

