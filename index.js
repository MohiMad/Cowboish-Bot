const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';

const cheerio = require('cheerio');
const request = require('request');
const snekfetch = require('snekfetch');
const ms = require('ms');
const PREFIX = '>';
var version = '1.0.2';


bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Identit | >help')
})


bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");




    switch (args[0]) {
        case 'yee':
            var facts = ["Haaaw >:D", "Yeeeeeeeeeeeet", "Pizza?", "did someone say Yee?"];
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
            break;

        case 'help':
            const helpEmbed = new Discord.RichEmbed()
                .setColor('#0099ff')
                .setTitle('Did someone say help?', true)
                .setDescription('Check ma website 👆☝')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')
                .addField('😁Fun', 'use command fun', true)
                .addField('🔧Moderation', 'use command moderation    ', true)
                .addField('⚙Config', 'use command general', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
            message.channel.sendEmbed(helpEmbed);
            break;

        case 'moderation':
            const modEmbed = new Discord.RichEmbed()
                .setTitle('🔧So u need sum help huh?🔧', true)
                .setColor('#0099ff')
                .addField('kick', 'Kicks the person u tagged out of the server', true)
                .addField('ban', 'Bans the person u tagged from joining the server', true)
                .addField('mute', 'Mutes the tagged person', true)
                .addField('sweep', 'Sweeps a specified amount of messages u gave', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
            message.channel.sendEmbed(modEmbed);
            break;

        case 'fun':
            const funEmbed = new Discord.RichEmbed()
                .setTitle('😁Help is here :D😁', true)
                .setColor('#0099ff')
                .addField('yee', 'Sends some random wierd messages', true)
                .addField('identify', 'Identifies what kind of idv player you are!', true)
                .addField('roll', 'Rolls a 4 sided dice...', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
            message.channel.sendEmbed(funEmbed);
            break;

        case 'config':
            const genEmbed = new Discord.RichEmbed()
                .setTitle('⚙Help is here :D⚙', true)
                .setColor('#0099ff')
                .addField('help', 'Sends help..DUUUH', true)
                .addField('info', 'Sends info about the bot', true)
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
            message.channel.sendEmbed(genEmbed);
            break;



        case 'info':
            const embed = new Discord.RichEmbed()

                .setTitle('Bot Information', true)
                .addField('Cowboish bot', ('Version ' + version), true)
                .setColor(0xE9D01F)
                .addField('Website ', 'https://rkanjo2.wixsite.com/cowboishbot', true)
                .addField('Need help with commands?', 'Use >help', true)
                .setThumbnail('https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
            message.channel.sendEmbed(embed);
            break;

        case 'sweep':
            if (!args[1]) return message.reply('How many messeges do u want me to sweep?')
            message.channel.bulkDelete(args[1]);
            break;

        case 'identify':
            var facts = ["Is the coordinator ho misses the flare gun xD", "Is the gardener who says 'Foucus on decoding' while dismantling a rocket chair...", "is the wildning who decodes the whole match, dude u better be a minds eye", "is the prospector who removes the hunter's attack recovery animation after getting hit...",
                "is this the guy that can't kite for sh*t?", "is the guy who drops the pallet down infront of his teammates face... what a betrayl", "is the player that begs for gifts in the server chat", "Camp = report", "Man stop getting terror shocked!", "the 'i was laggy' excuse user", "Disconnects early game and gets found first... GG",
                "Surrenders...", "WHY DO I GET FOUND FIRST!!", "The guy who says switch character when ur playing as a lawyer", "The guy who only talks sh*t in server chat", "The guy who thinks that idv is a dating game, it's not Tinder V bro", "Pls hunter be friendly i luv u <3", "Toxics at the exit gate and gets dragged by the gamekeepers hook..",
                "The 'Don't move i'm coming' mindseye, gg", "Omg these randoms are soo baaad",
                "Lawyer is waifu for laifu :v", "The 'im a hero' cowboi"];
            var fact = Math.floor(Math.random() * facts.length);
            message.channel.send(facts[fact]);
            break;


        case 'roll':
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
            break;

        case 'kick':
            const user = message.mentions.users.first();

            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('oof looks like u got kicked!').then(() => {
                        message.reply(`F in the chat for ${user.tag} for getting kicked`);
                    }).catch(err => {
                        message.reply('Smh im unable to kick this guy🙄 how op..');
                        console.log(err);
                    });

                } else {
                    message.reply("Bruh this user doesnt exist in this server, make sure u typed it right")
                }

            } else {
                message.reply('Omg how can u be a moderator🤦‍u need to specify the person u want to kick lol')
            }
            break;


        case 'ban':
            const usa = message.mentions.users.first();

            if (usa) {
                const member = message.guild.member(usa);

                if (member) {
                    member.ban({ ression: 'oof u got banned from this server' }).then(() => {
                        message.reply(`oof ${user.tag} got banned :v`)

                    })
                } else {
                    message.reply("Bruh this user doesn\'t exist in this server, make sure u typed it right")
                }
            } else {
                message.reply('Omg how can u be a moderator🤦‍u need to specify the person u want to ban lol')
            }

            break;

        case 'mute':
            module.exports.run = async (bot, message, args) => {
                let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!tomute) return message.reply("Couldn't find user :P");
                if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I can not shut this guy up :C");
                let muterole = message.guild.roles.find(muterole => muterole.name === "taped mouth");

                if (!muterole) {
                    try {
                        muterole = await message.guild.createRole({
                            name: "taped mouth",
                            color: "#000000",
                            permissions: []
                        })
                        message.guild.channels.forEach(async (channel, id) => {
                            await channel.overwritePermissions(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            });
                        });
                    } catch (e) {
                        console.log(e.stack);
                    }
                }

                let mutetime = args[1];
                if (!mutetime) return message.reply ("You didn't specify a time!");

                await (tomute.addRole(muterole.id));
                message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

                setTimeout(function () {
                    tomute.removeRole(muterole.id);
                    message.channel.send(`<@${tomute.id}> got his mouth shut >:D`);
                }, ms(mutetime));


            }

            module.exports.help = {
                name: "tempmute"
            }
            break;





        case 'meme':
            exports.run = async (client, message, args) => {
                try {
                    const memeEmbed = new Discord.RichEmbed()
                        .setColor(0x00A2E8)
                        .setTitle(allowed[randomnumber].data.title)
                        .setDescription("Posted by: " + allowed[randomnumber].data.author)
                        .setImage(allowed[randomnumber].data.url)
                        .addField("Other info:", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
                        .setFooter("Memes provided by r/dankmemes")
                    const { body } = await snekfetch
                        .get('https://www.reddit.com/r/dankmemes.json?sort=top&t=week')
                        .query({ limit: 800 });
                    const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
                    if (!allowed.length) return message.channel.send('It seems we are out of fresh memes!, Try again later.');
                    const randomnumber = Math.floor(Math.random() * allowed.length)
                    message.channel.sendEmbed(memeEmbed);
                } catch (err) {
                    return console.log(err);

                }
            }

    }
});






bot.login(token);

