const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: ["info", "botinfo", "bot-info"],
    description: "Sends general information about Cowboish bot",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Config",
    execute(message, bot, MohiMoo, prefix, args) {


        const embed = new MessageEmbed()
            .setColor("0xFFE700")
            .setTitle("Cowboish Bot Information")
            .setThumbnail(bot.user.displayAvatarURL())
            .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        if (!args[1] || isNaN(args[1]) || Number(args[1]) > 2) {
            embed.setDescription(stripIndents`
            Cowboish bot is a community-made Identity V Discord bot. Written using JavaScript but with love 💛
            Navigate to the next page by sending \`${prefix}info 2\`


                > 📄 **Server Count**:
                 - ${bot.guilds.cache.size} servers

                > 👥 **User Count**:
                - ${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} users

                > ⚙️ **Bot's prefix**:
                  - My prefix is \`${prefix}\`

                > 🔳 **Creator:** 
                  - ${MohiMoo.tag}

                > 🎉 Bot's Creation Date: 
                  - **14/10/2019**


            `)
                .setFooter("Cowboish Bot's Information - Page 1 of 2", bot.user.displayAvatarURL())
                .addField("> Regarding Credits And Usage Rights", "- All art used in Cowboish have their artists credited.\nIf you have any issues with your content being featured don't hesitate in contacting the developer.")
                .addField("> Disclaimer", stripIndents`Cowboish Bot was created for the community's sake and I don't make any profit from it.
                I don't get paid for the development of the bot and It wasn't made for monetary purposes. 
                All src used in this project are screenshots taken from the game.
                
                If you work at Netease and you visited this page in the desire of wanting the client to be brought down, please contact me and I shall do what's best. Again, this client wasn't made for profiting and I created it for fun only and to improve my programming skills.`)
                .addField("Reference Links", "[Cowboish Website](https://mohimad.github.io/cowboishbot/) `|` [Invitation Link](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) `|` [Cowboish Server](https://discordapp.com/invite/YWcSukS) `|` [Github Repository](https://github.com/MohiMad/Cowboish-Bot)")
        } else {
            embed.setTitle("Sweet people Cowboish wouldn't make it this far without:")
                .addField("\u200b", stripIndents`
                > **DrpyCatty#8878**
                 - Helped a lot with command inspiration and quizes question creation. 🧡
    
                > **Dziadek#3639**
                 - Sent me the essences' items screenshots for multiple seasons. 💛
    
                > **Lilith#9210**
                 - A very old supporter who helped me with various things I can't even count them with my fingers. 💚
    
                > **xBunnyHop#0001**
                 - A fellew Discord bot developer I met since the beginning and is still with me till this point. ❤
    
                > **Xie Bi’An#3582**
                 - A very creative quizes question maker who wrote most of the questions in Cowboish. 🤍
    
                > **chr3st5an#3210**
                 - Photographer Bot developer and my one and only Identity V Discord bot competitor. 💙
    
                > **Hanhan#3156**
                 - My sweetie 💞💕💕 Been always there when I needed her. 💖

                `)
                .setFooter("Cowboish Bot's Information - Page 2 of 2", bot.user.displayAvatarURL())

        }

        message.channel.send(embed);


    }

}
