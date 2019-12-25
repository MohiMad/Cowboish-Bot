//_______________Modules_____________
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")
const fs = require('fs');
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjI5MTgwMDU4NTA3Njc2MSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc0NjAyNTIxfQ.0FNoMoV2BBfO7EdAcKkIDsX_N6CsHsjabC1kbzmbBNY', bot);
const { stripIndents } = require ("common-tags");
//___________________________________


//_______________MONGOOSE STUFF____________________
const mongoose = require("mongoose");

let uri = "mongodb+srv://MohiMoo:mmkdmkmmkdmk@minicowboi-yk7bw.mongodb.net/welcome?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//-----------------------------------------------------//

//Command handler HERE 
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
    var time = new Date();
    var timestamp = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ']';
} 

//__________-*End of command handler____________

bot.on("guildCreate", guild => {

    const create = bot.channels.find(ch => ch.name === '📑》cowboish_logs');

    if (!create) return; 
    else create.send(`👏 Just joined a new server named 👉 (**${guild.name}**)\nCowboish Bot is now in **${bot.guilds.size}** servers <3`);
//Sends a message to my server if bot joins a new server (NOT WORKING)

//Channel loop so bot sends a message to the server it joined
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
        .addField('🤗💗 Thank you for inviting me to the party 💗🤗',
        stripIndents`**>My cowboish birthday 🎉🎊 14/10/2019**
        **> 👍 | do >help and i will be there for help :)**
        **> 🔧 | My prefix is > remember using it before any command of my commands**
        **> 🙂 | Now im in ${bot.guilds.size}, servers and growing <3**
        **> ❔  | Errors or suggestions? do >suggest/>issue**`)
        .addBlankField()
        .addField("💗 | Support me", 
        stripIndents`
        [Cowboish website](https://rkanjo2.wixsite.com/cowboishbot) | [Invite me to servers around](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | [Cowboish Server](https://discordapp.com/invite/YWcSukS)`);
        
    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(welcomeEmbed);
    //sends the embed when joined

    bot.on("guildDelete", guild => {

        const logs = bot.channels.find(ch => ch.name === '📑》cowboish_logs');

        if (!logs) return; 
        
        else logs.send(`I have been removed from: (**${guild.name}**) :'C`);
    
    });
    //if bot deleted it will let me know (NOT WORKING)



      


    
});

bot.on('ready', () => {
    console.log(`${timestamp} Logged in as ${bot.user.tag}!`);
    console.log(`--------------------------------------------`);
    console.log(`Bot is up and running`);
    console.log(`--------------------------------------------`);

    bot.user.setActivity('Identit | >help')
    const activities_list = [
        " Use >help to send help",
        "Identit | >help",
        "Identity V | >help",
        "Welcome to Identit | >help",
        "Identit | >help", `idv in ${bot.guilds.size} servers`,
        "do >suggest to suggest something to Mohi :)",
        `Milestone: ${bot.guilds.size}/50 <3`
        //random activity list
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 100000);//sets the activity each 120 s
})


bot.on('message', async message => {

    //_____________Divine discord login____________

    const { ddblAPI } = require('ddblapi.js');
    const ddbl = new ddblAPI('632291800585076761',
    '4e66be8dd67dfbcadd0f11bc79d6401814173674484144af4bfd4970d0657883cd229c3f2bf47de979b6edf95901ae2cedbc35a477621c7d49f31ea22ba39943');

    ddbl.postStats(`${message.guilds.size}`)
    .then(console.log); 

    ddbl.getStats('632291800585076761')
    .then(console.log);

     ddbl.getVotes()
    .then(console.log);  
    //________________________________


    let prefix = ">";

    let args = message.content.substring(prefix.length).split(" ");

    if (!message.content.startsWith(prefix)) return;

    
    if (message.author.id === bot.user.id) return;


    if (message.author.bot) return;

    //ulitiy stuff


    switch (args[0]) {


        //Identity V commands Starts Here!

        case "roll20": case "r20":
            bot.commands.get('roll20').execute(message, args);
            break;

        case "identify": case "whois": case "stereotype":
            bot.commands.get('identify').execute(message, args);
            break;

        case "winrate": case "wr":
            bot.commands.get('winrate').execute(message, args);
            break;

        case "essence": case "ess": case "e":
            bot.commands.get('essence').execute(message, args);
            break;

       

        case "randomize": case "random": case "pick":
            bot.commands.get('random').execute(message, args);
            break;

        //End Of identity V commands



        //Fun Commands Starts Here!

        case "joke": case "lemmelaugh":
            bot.commands.get('joke').execute(message, args);
            break;

        case "yee":
            bot.commands.get('yee').execute(message, args);
            break;

        case 'meme': case "memes":
            bot.commands.get('meme').execute(message, args);
            break;

        case 'idv': case "identityv": 
            bot.commands.get('idv').execute(message, args);
            break;

        case 'say': case "repeat": 
            bot.commands.get('say').execute(message, args);
            break;

        //End Of Fun commands

        //IDENTITY V LOGICPATH COMMANDS
        case "roll": case "r": case "dice":
            bot.commands.get('roll').execute(message, args);
            break;

        case "open":
            bot.commands.get('open').execute(message, args);
        break;

        case "LP": case "logicpath": case "inv": case "inventroy":
            bot.commands.get('logicpath').execute(message, args);
        break;

        case "quick": case "play":
            bot.commands.get('quick').execute(message, args);
        break;

        case "hunter": case "hunt":
            bot.commands.get('hunt').execute(message, args);
        break;

        case "dailyreward": case "daily":
            bot.commands.get('daily').execute(message, args);
        break;

        case "shop":
            bot.commands.get('shop').execute(message, args);
        break;

        case "buy":
            bot.commands.get('buy').execute(message, args);
        break;



        //END OF LOGICPATH


        //Identity V Actions 

        case "blink":
            bot.commands.get('blink').execute(message, args);
            break;

        case "stun":
            bot.commands.get('stun').execute(message, args);
            break;

        case "crash":
            bot.commands.get('crash').execute(message, args);
            break;

        case "terrorshock": case "tc":
            bot.commands.get('terrorshock').execute(message, args);
            break;

        case "lasso": case "yoink":
            bot.commands.get('lasso').execute(message, args);
            break;

        case "shoot": case "flaregun":
            bot.commands.get('shoot').execute(message, args);
            break;

        case "bully": 
            bot.commands.get('bully').execute(message, args);
            break;
        //End of Identity V Actions



        //Moderation Commands starts here

        case "clear": case "purge": case "delete":

            bot.commands.get('clear').execute(message, args);

            break;

        case "kick":

            bot.commands.get('kick').execute(message, args);

            break;

        case "ban":

            bot.commands.get('ban').execute(message, args);

            break;

        case "mute": case "shutup":

            bot.commands.get('mute').execute(message, args);

            break;

        //End of moderation commands


        //Config commands starts here

        case "info": case "botinfo":

            bot.commands.get('info').execute(message, args);

            break;

        case "userinfo": case "usrinfo":
            bot.commands.get('userinfo').execute(message, args);
        break;

        case "serverinfo": case "srvrinfo":
            bot.commands.get('serverinfo').execute(message, args);
        break;

        case 'ping': 
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
            break;

        case "help": case "commands": case "helpme":
            bot.commands.get('help').execute(message, args);
            break;

        case 'guilds': case "servers":

            message.channel.send(`Cowboish stats => **${bot.users.size}** users, in **${bot.channels.size}** channels of **${bot.guilds.size}** servers :D`)
            break;
        
        case 'suggest': case "reportbug": case "issue":
                bot.commands.get('suggest').execute(message, args, bot);

        break;

        //End of config commands

    }
});






bot.login(config.token);

