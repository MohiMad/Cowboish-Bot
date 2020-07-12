const { RichEmbed } = require('discord.js');

const { stripIndents } = require('common-tags');

module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args, prefix) {

        const helpEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle('Did someone say help?')
            .setURL('https://mohimad.github.io/CowboishBot/')
            .addField('<:idvtroll:651464392243675156> IdentityV <:idvtroll:651464392243675156>', '`' + prefix + 'help idv`', true)
            .addField('😁 Idv Actions 😁', '`' + prefix + 'help actions`', true)
            .addField('🔧 Moderation 🔧', '`' + 'help moderation`', true)
            .addField('⚙ Config ⚙', '`' + prefix + 'help config`', true)
            .addField('🤣 Fun 🤣', '`' + prefix + 'help fun`', true)
            .addField('📷 Images 📷', '`' + prefix + 'help images`', true)
            .addField("🛠 Utility 🛠", "`" + prefix + "help utility`", true)
            .addField('<:dice:655384578499936257>  Logicpath <:ess1:655840713904488469> ', '`' + prefix + 'help logicpath`', true)
            .addField("❓ Errors/suggestions ❓", "`" + prefix + "suggest`", true)
            .addField("For more info ", "[Cowboish Website](https://mohimad.github.io/CowboishBot/)" + " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | " + "[Cowboish Server](https://discordapp.com/invite/YWcSukS)")
            .setFooter('Remember to use my prefix ( ' + prefix + ') and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');



        if (!args[1]) {

            return message.channel.send(helpEmbed);

        } else if (["idv", "identity", "identityv"].includes(args[1].toLowerCase())) {

            const idvEmbed = new RichEmbed()
                .setTitle('😁 Help is here :D 😁')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription('`identify` | `roll` | `roll20` | `randomize` | `idv` | `idvwiki` | `spawns`')
                .setFooter('Remember to use my prefix ( ' + prefix + ') and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

            message.channel.send(idvEmbed);

        } else if (["action", "actions", "roleplay", "gifs"].includes(args[1].toLowerCase())) {

            const actionEmbed = new RichEmbed()
                .setTitle('<:wilding:648981862429097994> Identity V actions <:wilding:648981862429097994>')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setFooter('Remember to use my prefix ( ' + prefix + ') and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png')
                .setDescription('`crash` | `bully` | `lasso` | `shoot` | `stun` | `terrorshock` | `hug` | `struggle`');

            message.channel.send(actionEmbed);

        } else if (["mod", "moderation", "moderator"].includes(args[1].toLowerCase())) {

            const modEmbed = new RichEmbed()
                .setTitle('🔧So u need sum help huh?🔧')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription('`kick` | `ban` | `clear` | `mute` \n\nRemember to use my prefix `' + prefix + '` before the commands ;D')
                .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

            message.channel.send(modEmbed);

        } else if (["config", "configuration"].includes(args[1].toLowerCase())) {

            const genEmbed = new RichEmbed()
                .setTitle('⚙ Help is here :D ⚙', true)
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .addField('Here are the bots config commands', '`help` | `ping` | `guilds` | `ìnfo` | `suggest`\n\nThe last command is `setcowboishprefix`, use it if you want to change my prefix\n**NOTE**: `setcowboishprefix` command doesnt need a prefix to use!')
                .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

            message.channel.send(genEmbed);

        } else if (["fun", "forfun", "funny"].includes(args[1].toLowerCase())) {

            const funEmbed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("🤣 Don't move i'm coming :v", true)
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription('`meme` | `joke` | `say`')
                .setFooter('Remember to use my prefix ( ' + prefix + ') and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

            message.channel.send(funEmbed);

        } else if (["lp", "logicpath"].includes(args[1].toLowerCase())) {

            const logicpathEmbed = new RichEmbed()
                .setTitle("Identity V logicpath commands!")
                .setColor("RANDOM")
                .setDescription("In this category you get to play matches and roll dices to be able to open the season's current essences :D\n\n**LogicPath commands!**\n`daily` ➜ Get your daily reward, **24** hours cooldown\n\n`hunt` ➜ Answer the quiz of the chosen hunter to get a dice\n\n`quick` ➜ Play a quick match as a survivor to get dices\n\n`roll` ➜ Roll the 4-sided dice you just got, rewards may be: (<:inspirations:655840409674711060>, <:clue:655384523735040000>, <:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`open` ➜ Open the season's current essences (<:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`logicpath` ➜ Check your logicpath status\n\n`shop` ➜ A list of stuff you can buy (Survivors, Hunters and essences)\n\n`buy` ➜ Buy Survivors, Hunters or essences\n\n`leaderboard` ➜ check the top 5 players for this category\n\n`set` ➜ Set your `region`, `biography` and `ID` so they display in your `logicpath` profile\n\n`equip` ➜ equip/change your portrait-frame/portrait to be seen in the `lp` command\n\n`gift` ➜ Gift your friends your (<:inspirations:655840409674711060>, <:frags:655840344725913600>, <:clue:655384523735040000>, <:ess1:655840713904488469>, <:ess2:655840643847028751> or <:ess3:655840571616919586>)")
                .setFooter("This category is still W.I.P so feel free to suggest anything by doing >suggest :)");

            message.channel.send(logicpathEmbed);

        } if (["image", "images"].includes(args[1].toLowerCase())) {
            const imageEmbed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("Image manipulation commands!")
                .setDescription("Some commands are Identity V related as well ;D\nFeel free to suggest more image manipulation ideas by joining [Cowboish server](https://discordapp.com/invite/YWcSukS)\n\n`slap` | `ingamechat` | `chair` | `chosendeath` | `siptea`")

            message.channel.send(imageEmbed);
        }

        if (["ultity", "utility"].includes(args[1].toLowerCase())) {
            const ultity_Embed = new RichEmbed()
                .setColor("RANDOM")
                .setTitle("Cowboish Utility commands :D")
                .setDescription("`setup` | `userinfo` | `serverinfo`")
                .setFooter('Remember to use my prefix ( ' + prefix + ') and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

            message.channel.send(ultity_Embed)
        } else {
            message.channel.send(helpEmbed);
        }







    }

}