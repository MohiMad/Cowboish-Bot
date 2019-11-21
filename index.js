const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';
const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
var version = '1.0.2';
const fs = require ('fs');
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for (const file of commandFiles){
const command = require(`./commands/${file}`);



bot.commands.set(command.name, command);


var time = new Date();
var timestamp = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ']';


}
bot.on("guildCreate", guild => {
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
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

    bot.on("guildDelete", guild => {
        console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
    });
    

    const welcomeEmbed = new Discord.RichEmbed()
    .setTitle('Thank you for inviting me to the party ;D')
    .addField('My cowboish bithday 🎉🎊 14/10/2019', 'use >help and i will be there for help :)')
    .attachFiles (["./emoji" + ".png"])
    .setThumbnail('attachment://emoji' + '.png')
    .setColor("RANDOM")
    .addField('My prefix is ">"', 'Remember using it before any command')
    .addField(`Now i'm in **${bot.guilds.size}** servers :)`, 'And growing <3')
    .addField("Support me ♡ ♥", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" +  " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=8)");
    
    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(welcomeEmbed);
});

bot.on('ready', () => {
    console.log(`${timestamp} Logged in as ${bot.user.tag}!`);
    console.log(`--------------------------------------------`);
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    console.log(`Bot is up and running`);
    console.log(`--------------------------------------------`);

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


bot.on('message', async message => {

    let prefix = ">";

    let args = message.content.substring(prefix.length).split(" ");

      if (!message.content.startsWith(prefix)) return;

    switch (args[0]) {

        case 'menurole':
                message.channel.send('React with the following emojis to get the role :cowboy: => COWBOY role');
                let muterole = message.guild.roles.find(muterole => muterole.name === "Cowboy");
                message.react('🤠');
                if(!muterole){
                    muterole = await message.guild.createRole({
                      name: "Cowboy",
                      color: "#000000",
                      permissions:[]})     }        
    
                      const filter = (reaction, user) => {
                        return ['🤠'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };                
    
                      message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        const reaction = collected.first();
                if (reaction.emoji.name === '🤠') {
                        message.reply('You got the cowboy role!');
                        await(message.author.addRole(muterole.id));
                }
                    })
                break;


        case "roll20":
            bot.commands.get('roll20').execute(message, args);
                break;

        case "joke":
            bot.commands.get('joke').execute(message, args);
                break;

        case "yee":
            bot.commands.get('yee').execute(message, args);
            break;

        case "help":
            bot.commands.get('help').execute(message, args);
            break;

        case 'guilds':
            message.channel.send(`Cowboish Bot is now in ${bot.guilds.size} servers :D`)
        break;

        case 'meme':
            bot.commands.get('meme').execute(message, args);  
        break;

        case 'idv':
            bot.commands.get('idv').execute(message, args);  
        break;

        case 'say':

            const sayMessage = args.slice(1).join(" ");

            message.delete().catch(O_o=>{}); 

            if (!args[1]) 
            message.channel.send("Tell me what to say...");

            message.channel.send(sayMessage);
        break;

        case "stun":
            bot.commands.get('stun').execute(message, args);
                break; 

        case "crash":
            bot.commands.get('crash').execute(message, args);
                break; 

        case "terrorshock":
            bot.commands.get('terrorshock').execute(message, args);
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

        case "mute":
            
            bot.commands.get('mute').execute(message, args);
                
        break;

        case 'ping':
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
            break;
        
           

    }
});






bot.login(token);

