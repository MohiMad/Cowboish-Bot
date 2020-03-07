const Discord = require("discord.js");

const { stripIndents } = require("common-tags");

module.exports = (bot, guild) => {

    const create = bot.channels.get('651476936379596830');

    if (!create) return;
    else create.send(`👏 Just joined a new server named 👉 **${guild.name}**\nCowboish Bot is now in **${bot.guilds.size}** servers <3`);
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
    const Mohi = bot.users.get("478527909250990090");

    let maprefix = "`setcowboishprefix`";

    var help = "`>help`";

    var suggest = "`>suggest`/`>issue`";

    const welcomeEmbed = new Discord.RichEmbed()
        .addField('🤗💗 Thank you for inviting me to the party 💗🤗',
            stripIndents`
        Cowboish bot is the first working Identity V discord bot and is **MohiMoo**'s first project :D

        🎉 | My cowboish birthday 🎊 **14/10/2019**

        👍 | Do ${help} and i will be there for help :)

        ❓ | Wanna change my prefix? use the command ${maprefix}, yes this command has no prefix

        🔧 | My prefix is **>** remember using it before any command of my commands

        🙂 | Now im in **${bot.guilds.size}** servers, and growing <3

        ❔  | **Errors** or **suggestions**? do ${suggest}
        
        💠 | For more info contact: **${Mohi.tag}**
        `)
        .addBlankField()
        .addField("💗 | Support me",
            stripIndents`
        [Cowboish website](https://mohimad.github.io/CowboishBot/) | [Invite me to servers around](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=268758102) | [Cowboish Server](https://discordapp.com/invite/YWcSukS)`);

    let channel = bot.channels.get(guild.systemChannelID || channelID);
    channel.send(welcomeEmbed);
    //sends the embed when joined
};