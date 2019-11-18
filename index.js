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
    

    const welcomeEmbed = new Discord.RichEmbed()
    .setTitle('Thank you for inviting me to the party ;D')
    .addField('My cowboish bithday 🎉🎊 14/10/2019', 'use >help and i will be there for help :)')
    .attachFiles (["./emoji" + ".png"])
    .setThumbnail('attachment://emoji' + '.png')
    .setColor('0xe8eb34')
    .addField('My prefix is ">"', 'Remember using it before any command')
    .addField(`Now i'm in **${bot.guilds.size}** servers :)`, 'And growing <3')
    .addField("Support me ♡ ♥", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" +  " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=8)");
    
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


bot.on('message', async message => {

    let prefix = ">";

    let args = message.content.substring(prefix.length).split(" ");

      if (!message.content.startsWith(prefix)) return;

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
            message.channel.send(`Cowboish Bot is now in ${bot.guilds.size} servers :D`)
        break;

        case 'meme':
            bot.commands.get('meme').execute(message, args);  
        break;

        case 'idv':
            bot.commands.get('idv').execute(message, args);  
        break;

        case "stun":
            bot.commands.get('stun').execute(message, args);
                break; 

        case "crash":
            bot.commands.get('crash').execute(message, args);
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

        case 'mute':
            
                let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

                if(!tomute) return message.reply("Couldn't find user! make sure that you tagged them right after the command example >mute <member> s/h/d");
                
                if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Oof looks like i can't mute them... how op");
                
                let muterole = message.guild.roles.find(muterole => muterole.name === "😶Taped Mouth😶");
                
                
                  if(!muterole){
                    try{
                      muterole = await message.guild.createRole({
                        name: "😶Taped Mouth😶",
                        color: "#000000",
                        permissions:[]
                      })
                      message.guild.channels.forEach(async (channel, id) => {
                        await channel.overwritePermissions(muterole, {
                          SEND_MESSAGES: false,
                          ADD_REACTIONS: false
                        });
                      });
                    }catch(e){
                      console.log(e.stack);
                    }
                  
                  
                  let mutetime = args[2];
                  
                  if(!mutetime) return message.reply("You didn't specify a time! example >mute <membertag> s/h/d");
                  
                  await(tomute.addRole(muterole.id));
                  
                  message.reply(`Rip <@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
                  
                  setTimeout(function(){
                    tomute.removeRole(muterole.id);
                    message.channel.send(`<@${tomute.id}> has been unmuted!`);
                  }, ms(mutetime));
                }
                
                
        break;



    }
});






bot.login(token);

