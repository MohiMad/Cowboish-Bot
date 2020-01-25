const { RichEmbed } = require('discord.js');

const { stripIndents } = require('common-tags');

module.exports = {
    name: 'help',
    description: "sends help!",
    execute(message, args, MohiMoo, errWhere){

        try{


        const helpEmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle('Did someone say help?')
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('<:idvtroll:651464392243675156> IdentityV <:idvtroll:651464392243675156>', '``>help idv``', true)
            .addField('😁 Idv Actions 😁', '``>help actions``', true)
            .addField('🔧 Moderation 🔧', '``>help moderation``', true)
            .addField('⚙ Config ⚙', '``>help config``', true)
            .addField('🤣 Fun 🤣', '``>help fun``', true)
            .addField('<:dice:655384578499936257>  Logicpath <:ess1:655840713904488469> ', '``>help logicpath``', true)
            .addField("For more info ", "[Cowboish website](https://rkanjo2.wixsite.com/cowboishbot)" + " | [Invite me to servers around ;D](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502) | " + "[Cowboish Server](https://discordapp.com/invite/YWcSukS)")
            .setFooter('Remember to use my prefix > and help before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
        if (!args[1]) return message.channel.send(helpEmbed);

        const funEmbed = new RichEmbed()
            .setTitle('😁 Help is here :D 😁')
            .setColor("RANDOM")
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('`identify` | `roll` | `roll20` | `essence` | `randomize` | `idv`', 'Remember to use my prefix > before the commands ;D')
            .setFooter('YeeeeHawww :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');
        if (args[1] === 'idv')
            message.channel.send(funEmbed);

        const fuEmbed = new RichEmbed()
            .setTitle('<:wilding:648981862429097994> Identity V actions <:wilding:648981862429097994>')
            .setColor("RANDOM")
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('`crash` | `bully` | `lasso` | `shoot` | `stun` | `terrorshock`', 'Remember to use my prefix > before the commands ;D');

        if (args[1] === 'actions')
            message.channel.send(fuEmbed);

        const modEmbed = new RichEmbed()
            .setTitle('🔧So u need sum help huh?🔧')
            .setColor("RANDOM")
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('`kick` | `ban` | `clear` | `mute`', 'Remember to use my prefix > before the commands ;D')
            .setFooter('A wild Cowboii :v', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'moderation')
            message.channel.send(modEmbed);

        const genEmbed = new RichEmbed()
            .setTitle('⚙ Help is here :D ⚙', true)
            .setColor("RANDOM")
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('Here are the bots config commands', '`help` | `ping` | `guilds` | `ìnfo` | `userinfo` | `suggest` | `setup`')
            .setFooter('Cowboish bot', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'config')
            message.channel.send(genEmbed);


        const helpmbed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle("🤣 Don't move i'm coming :v", true)
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .addField('🤣 Fun commands 🤣', '`meme` | `joke` | `say`')
            .setFooter('Remember to use my prefix > and before the commands ;D', 'https://cdn.discordapp.com/attachments/633755400411414539/634054173914169354/537262399003033601.png');

        if (args[1] === 'fun')
            message.channel.send(helpmbed);

        const testEmbed = new RichEmbed()
            .setTitle("Identity V logicpath commands!")
            .setColor("RANDOM")
            .setDescription(stripIndents`
            In this category you get to play matches and roll dices to be able to open the season's current essences :D

            **LogicPath commands!**

            __*>daily*__ ➜ Get your daily reward, **24** hours cooldown

            __*>hunt*__ ➜ Hunt as the Hunter to get some dices

            __*>quick*__ ➜ Play a quick match as a survivor to get dices

            __*>roll*__ ➜ Roll the 4-sided dice you just got, rewards may be: (<:inspirations:655840409674711060>, <:clue:655384523735040000>, <:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)

            __*>open*__ ➜ Open the season's current essences (<:ess1:655840713904488469>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)

            __*>logicpath*__ ➜ Check your logicpath status

            __*>shop*__ ➜ A list of stuff you can buy (Survivors, Hunters and essences)

            __*>buy*__ ➜ Buy Survivors, Hunters or essences

            `)
            .setFooter("This category is still W.I.P so feel free to suggest anything by doing >suggest :)");
        
            if (args[1] === "logicpath"){
                message.channel.send(testEmbed);
            }

        }catch(err){
            MohiMoo.send(errWhere + "\n```" + err + "```");
            console.log(err);
            message.channel.send("❌ **An error has occured!** sorry :C");
        }



    }

}