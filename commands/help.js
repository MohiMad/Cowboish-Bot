const { RichEmbed } = require('discord.js');

const { stripIndents } = require('common-tags');

module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args, MohiMoo) {


        const helpEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle('Did someone say help?')
            .setURL('https://mohimad.github.io/CowboishBot/')
            .addField('<:idvtroll:651464392243675156> IdentityV <:idvtroll:651464392243675156>', '``>help idv``', true)
            .addField('😁 Idv Actions 😁', '``>help actions``', true)
            .addField('🔧 Moderation 🔧', '``>help moderation``', true)
            .addField('⚙ Config ⚙', '``>help config``', true)
            .addField('🤣 Fun 🤣', '``>help fun``', true)
            .addField('📷 Images 📷', '``>help images``', true)
            .addField("🛠 Utility 🛠", "``>help utility``", true)
            .addField('<:dice:655384578499936257>  Logicpath <:ess1:655840713904488469> ', '``>help logicpath``', true)
            .addField("❓ Errors/suggestions ❓", "`>suggest`", true)
            .addField("For more info ", "[Cowboish website](https://mohimad.github.io/CowboishBot/)" + " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | " + "[Cowboish Server](https://discordapp.com/invite/YWcSukS)")
            .setFooter('Remember to use my prefix > and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
        if (!args[1]) return message.channel.send(helpEmbed);

        const funEmbed = new RichEmbed()
            .setTitle('😁 Help is here :D 😁')
            .setColor("RANDOM")
            .setURL('https://mohimad.github.io/CowboishBot/')
            .setDescription('`identify` | `roll` | `roll20` | `randomize` | `idv`')
            .setFooter('Remember to use my prefix > before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
        if (args[1] === 'idv')
            message.channel.send(funEmbed);

        const fuEmbed = new RichEmbed()
            .setTitle('<:wilding:648981862429097994> Identity V actions <:wilding:648981862429097994>')
            .setColor("RANDOM")
            .setURL('https://mohimad.github.io/CowboishBot/')
            .setFooter('Remember to use my prefix > before the commands ;D')
            .setDescription('`crash` | `bully` | `lasso` | `shoot` | `stun` | `terrorshock` | `hug` | `struggle`');

        if (args[1] === 'actions')
            message.channel.send(fuEmbed);

        const modEmbed = new RichEmbed()
            .setTitle('🔧So u need sum help huh?🔧')
            .setColor("RANDOM")
            .setURL('https://mohimad.github.io/CowboishBot/')
            .setDescription('`kick` | `ban` | `clear` | `mute` \n\nRemember to use my prefix ``>`` before the commands ;D')
            .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'moderation')
            message.channel.send(modEmbed);

        const genEmbed = new RichEmbed()
            .setTitle('⚙ Help is here :D ⚙', true)
            .setColor("RANDOM")
            .setURL('https://mohimad.github.io/CowboishBot/')
            .addField('Here are the bots config commands', '`help` | `ping` | `guilds` | `ìnfo` | `suggest`\n\nThe last command is `setcowboishprefix`, use it if you want to change my prefix\n**NOTE**: `setcowboishprefix` command doesnt need a prefix to use!')
            .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'config') {
            message.channel.send(genEmbed);
        }


        const helpmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("🤣 Don't move i'm coming :v", true)
            .setURL('https://mohimad.github.io/CowboishBot/')
            .setDescription('`meme` | `joke` | `say`')
            .setFooter('Remember to use my prefix > and before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'fun')
            message.channel.send(helpmbed);

        const testEmbed = new RichEmbed()
            .setTitle("Identity V logicpath commands!")
            .setColor("RANDOM")
            .setDescription("In this category you get to play matches and roll dices to be able to open the season's current essences :D\n\n**LogicPath commands!**\n`>daily` ➜ Get your daily reward, **24** hours cooldown\n\n`>hunt` ➜ Answer the quiz of the chosen hunter to get a dice\n\n`>quick` ➜ Play a quick match as a survivor to get dices\n\n`>roll` ➜ Roll the 4-sided dice you just got, rewards may be: (<:inspirations:655840409674711060>, <:clue:655384523735040000>, <:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`>open` ➜ Open the season's current essences (<:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`>logicpath` ➜ Check your logicpath status\n\n`>shop` ➜ A list of stuff you can buy (Survivors, Hunters and essences)\n\n`>buy` ➜ Buy Survivors, Hunters or essences\n\n`>leaderboard` ➜ check the top 5 players for this category\n\n`>bio` ➜ Describe who you are so it displays in the `>LP` cmd\n\n`>region` ➜ Set which region your in so it displays in the `>LP` cmd\n\nä`>equip` ➜ equip/change your portrait frame to be seen in the `>lp` command")
            .setFooter("This category is still W.I.P so feel free to suggest anything by doing >suggest :)");

        if (args[1] === "logicpath") {
            message.channel.send(testEmbed);
        }

        const imageEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("Image manipulation commands!")
            .setDescription("Some commands are Identity V related as well ;D\nFeel free to suggest more image manipulation ideas by joining [Cowboish server](https://discordapp.com/invite/YWcSukS)\n\n`slap` | `ingamechat` | `chair` | `chosendeath`")

        if (["image", "images"].includes(args[1].toLowerCase())) {
            message.channel.send(imageEmbed);
        }

        if (["ultity", "utility"].includes(args[1].toLowerCase())) {
            const ultity_Embed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("Cowboish Utility commands :D")
                .setDescription("`setup` | `userinfo` | `serverinfo` | `setup`")
                .setFooter("Don't forget to use my prefix before the commands :3");

            message.channel.send(ultity_Embed)
        }



    }

}