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


bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Identit | >help')
    const activities_list = [
        " >help command", 
        "Identit",
        "with some gurls", 
        "Identity V",
    "Welcome to Identit",
    "Identit | >help"
        ];
    
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
            bot.user.setActivity(activities_list[index]); 
        }, 10000);
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

        case "moderation":
            bot.commands.get('moderation').execute(message, args);
            break;

        case "fun":
            bot.commands.get('fun').execute(message, args);
            break;

        case "config":
            bot.commands.get('config').execute(message, args);
            break;

        case "info":
            bot.commands.get('info').execute(message, args);
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

            case 'randomize':
                {var facts = ["1st Officer:watch::alarm_clock:", "Enchantress:skull:🌩️", "Mechanic:joystick::robot:", "Wilding:boar::apple:", "Barmaid:beer::beers:", "Acrobat🤹🏻‍♀️", "Prospector:doughnut::doughnut:", "Seer:eye_in_speech_bubble::owl:", "Forward:rugby_football::muscle:", "Embalmer:coffin::coffin:", "Dancer:dancer::dancer:", "Coordinator:gun:" , "Explorer:closed_book:", "Magician:tophat:", "Perfumer:butterfly:", "Priestess:milky_way::milky_way:", "Minds eye:eye_in_speech_bubble:", "Mercenary:boxing_glove::shield:", "Gardener:bamboo::tools:", "Lucky guy:four_leaf_clover:", "Doctor👩‍⚕️:syringe:", "Thief:flashlight::heavy_dollar_sign:", "Lawyer:eyeglasses::map:", "Cowboy:cowboy::cow2:"];
                var fact = Math.floor(Math.random() * facts.length);
                if (!args[1]) return message.reply('What do you want to randomize? Choose between **survivor** **hunter** **gamemode** or **member**')
                if (args[1] === 'survivor') 
                message.channel.send('BE THE ' + '**' + (facts[fact])+'**' );}
            
                
                {var hunters = ["Geisha:chocolate_bar::kimono:", "Smiley Face:clown::rocket:", "Feaster:octopus:", "Axe Boy:fire::pick:", "Dream Witch:pick:", "Soul Weaver:spider_web::spider:", "Hell Ember:shark::fire:", "Gamekeeper:deer:", "Mad eyes:beers::beer:", "Wu chang:umbrella2::bell:", "Ripper☁️:fog:", "Evil Reptilian:frog::lizard:", "Bloody queen:rose::knife:", "No. 26:bomb::bomb:"];
                var hunter = Math.floor(Math.random() * hunters.length);
                if (args[1] === 'hunter') 
                message.channel.send('Go and hunt as the ' + '**' + (hunters[hunter] + '**'));
                break;}

        case "kick":
            bot.commands.get('kick').execute(message, args);
            break;


        case "ban":
            
            bot.commands.get('ban').execute(message, args);
            break;



    }
});






bot.login(token);

