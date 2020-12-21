const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const e = require("../emojis.json");

module.exports = {
    name: ["help", "helpme", "commands"],
    description: "You're using the command right now lol\nDisplays the bot's categories and it's commands\n\n**Usage:** `$prefixhelp [category] [commandName]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    execute(message, args, bot, prefix) {

        const helpEmbed = new MessageEmbed()
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
            .addField(`${e.dice} Logicpath ${e.ess1}`, '`' + prefix + 'help logicpath`', true)
            .addField("❓ Errors/suggestions ❓", "`" + prefix + "suggest`/`" + prefix + "reportissue`", true)
            .addField("For more info ", "[Cowboish Website](https://mohimad.github.io/CowboishBot/)\n[Invite Me :3](https://discordapp.com/oauth2/authorize?client_id=632291800585076761&scope=bot&permissions=1886780502)\n[Cowboish Server](https://discordapp.com/invite/YWcSukS)")
            .setFooter("Remember to use my prefix ( " + prefix + ") and help before providing the category's name ;D", bot.user.displayAvatarURL());



        if (!args[1]) return message.channel.send(helpEmbed);

        else if (["idv", "identity", "identityv"].includes(args[1].toLowerCase())) {

            const idvEmbed = new MessageEmbed()
                .setTitle('😁 Help is here :D 😁')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription('`identify` | `roll20` | `randomize` | `idvreddit` | `idvwiki` | `spawns` | `identityVNews` | `ping` | `patchnotes`')

            return message.channel.send(idvEmbed);

        }
        else if (["action", "actions", "roleplay", "gifs"].includes(args[1].toLowerCase())) {

            const actionEmbed = new MessageEmbed()
                .setTitle('<:wilding:648981862429097994> Identity V actions <:wilding:648981862429097994>')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription('`crash` | `bully` | `lasso` | `shoot` | `stun` | `terrorshock` | `hug` | `struggle`');

            return message.channel.send(actionEmbed);

        }
        else if (["mod", "moderation", "moderator"].includes(args[1].toLowerCase())) {

            const modEmbed = new MessageEmbed()
                .setTitle('🔧So u need sum help huh?🔧')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription('`kick` | `ban` | `clear` | ~~`mute`~~')
                .setFooter('Remember to use my prefix `' + prefix + '` before the commands', bot.user.displayAvatarURL());

            return message.channel.send(modEmbed);

        }
        else if (["config", "configuration"].includes(args[1].toLowerCase())) {

            const genEmbed = new MessageEmbed()
                .setTitle('⚙ Help is here :D ⚙', true)
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .addField('Here are the bots config commands', '`help` | `yee` | `guilds` | `ìnfo` | `suggest` | `reportissue`\n\nThe last command is `setcowboishprefix`, use it if you want to change my prefix')
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            return message.channel.send(genEmbed);

        }
        else if (["fun", "forfun", "funny"].includes(args[1].toLowerCase())) {

            const funEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🤣 Don't move i'm coming :v", true)
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription('`meme` | `joke` | `say` | `reddit` | `mohi`')
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            return message.channel.send(funEmbed);

        }
        else if (["lp", "logicpath"].includes(args[1].toLowerCase())) {

            const logicpathEmbed = new MessageEmbed()
                .setTitle("Identity V logicpath commands!")
                .setColor("RANDOM")
                .setDescription("In this category you get to play matches and roll dices to be able to open the season's current essences :D\n\n**LogicPath commands!**\n`daily` ➜ Get your daily reward, **24** hours cooldown\n\n`hunt` ➜ Answer the quiz of the chosen hunter to get a dice\n\n`quick` ➜ Play a quick match as a survivor to get dices\n\n`roll` ➜ Roll the 4-sided dice you just got, rewards may be: (<:inspirations:655840409674711060>, <:clue:655384523735040000>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`open` ➜ Open the season's current essences (<:s121:735775380266549319>, <:ess2:655840643847028751>, <:ess3:655840571616919586>)\n\n`logicpath` ➜ Check your logicpath status\n\n`shop` ➜ A list of stuff you can buy (Survivors, Hunters and essences)\n\n`buy` ➜ Buy Survivors, Hunters or essences\n\n`leaderboard` ➜ check the top 5 players for this category\n\n`set` ➜ Set your `region`, `biography` and `ID`\n\n`equip` ➜ equip/change your portrait-frame/portrait to be seen in the `lp` command\n\n`gift` ➜ Gift your friends your (<:inspirations:655840409674711060>, <:frags:655840344725913600>, <:clue:655384523735040000>, <:s121:735775380266549319>, <:ess2:655840643847028751> or <:ess3:655840571616919586>)\n\n`view` ➜ Displays what *skins*, *portraits* and *frames* you have and allows you to navigate them quicker")
                .setFooter("This category is still W.I.P so feel free to suggest anything by doing " + prefix + "suggest :)");

            return message.channel.send(logicpathEmbed);

        }
        else if (["image", "images"].includes(args[1].toLowerCase())) {
            const imageEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Image manipulation commands!")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("Some commands are Identity V related as well ;D\nFeel free to suggest more image manipulation ideas by joining [Cowboish server](https://discordapp.com/invite/YWcSukS)\n\n`slap` | `ingamechat` | `chair` | `chosendeath` | `siptea` | `postmanletter` | `paintingstare` | `simpsonshug`")

            return message.channel.send(imageEmbed);
        }

        else if (["ultity", "utility"].includes(args[1].toLowerCase())) {
            const ultity_Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Cowboish Utility commands :D")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("`setup` | `userinfo` | `serverinfo` | `identityVNews`");

            return message.channel.send(ultity_Embed);

        } else {
            return message.channel.send(helpEmbed);
        }

    }

}