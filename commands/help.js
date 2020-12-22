const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const e = require("../emojis.json");

module.exports = {
    name: ["help", "helpme", "commands"],
    description: "You're using the command right now lol\nDisplays the bot's categories and it's commands\n\n**Usage:** `$prefixhelp [category] [commandName]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    execute: async (message, args, bot, prefix) => {

        const Commands = bot.commands.array();

        async function listThemCommands(category) {
            let array = new Array();
            const filteredCommands = await Commands.filter(x => x.category === category);
            for (const y of filteredCommands) {
                if (y.name[0].length === 1) array.push("`" + y.name + "`");
                else array.push("`" + y.name[0] + "`");
            }
            return array.join(" | ");
        }

        async function showUsage(category) {
            const filteredCommands = await Commands.filter(x => x.category === category);

            if (!args[2]) return;

            for (command of filteredCommands) {
                let name = command.name[0];
                if (name.length === 1) name = command.name;

                if (command.name.includes(args[2].toLowerCase())) {

                    const embed = new MessageEmbed()
                        .setTitle(`Usage of the command ${name} in the ${category} Category`)
                        .setColor("RANDOM")
                        .setDescription(`${command.description}\n\n**Command Aliases:** ` + "`" + command.name.join("`, `") + "`")
                        .setFooter(`Information about the ${name} command`);

                    message.channel.send(embed)
                    return true;
                }
            }
        }

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

            if (await showUsage("IdentityV") === true) return;

            const idvEmbed = new MessageEmbed()
                .setTitle('😁  Help is here  😁')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setThumbnail("https://i.imgur.com/owSSNF4.png")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("To check how to use a specific command do `" + prefix + "help idv <command>`\n\nCommands: " + await listThemCommands("IdentityV"));

            return message.channel.send(idvEmbed);

        }
        else if (["action", "actions", "roleplay", "gifs"].includes(args[1].toLowerCase())) {

            if (await showUsage("Actions") === true) return;

            const actionEmbed = new MessageEmbed()
                .setTitle('<:wilding:648981862429097994> Identity V actions <:wilding:648981862429097994>')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("To check how to use a specific command do `" + prefix + "help actions <command>`\n\nCommands: " + await listThemCommands("Actions"));

            return message.channel.send(actionEmbed);

        }
        else if (["mod", "moderation", "moderator"].includes(args[1].toLowerCase())) {

            if (await showUsage("Moderation") === true) return;

            const modEmbed = new MessageEmbed()
                .setTitle('🔧So u need sum help huh?🔧')
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription("To check how to use a specific command do `" + prefix + "help moderation <command>`\n\nCommands: " + await listThemCommands("Moderation"))
                .setFooter('Remember to use my prefix `' + prefix + '` before the commands', bot.user.displayAvatarURL());

            return message.channel.send(modEmbed);

        }
        else if (["config", "configuration"].includes(args[1].toLowerCase())) {

            if (await showUsage("Config") === true) return;

            const genEmbed = new MessageEmbed()
                .setTitle('⚙ Help is here :D ⚙', true)
                .setColor("RANDOM")
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription("To check how to use a specific command do `" + prefix + "help config <command>`\n\nCommands: " + await listThemCommands("Config"))
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            return message.channel.send(genEmbed);

        }
        else if (["fun", "forfun", "funny"].includes(args[1].toLowerCase())) {

            if (await showUsage("Fun") === true) return;

            const funEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("🤣 Don't move i'm coming :v", true)
                .setURL('https://mohimad.github.io/CowboishBot/')
                .setDescription("To check how to use a specific command do `" + prefix + "help fun <command>`\n\nCommands: " + await listThemCommands("Fun"))
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            return message.channel.send(funEmbed);

        }
        else if (["lp", "logicpath"].includes(args[1].toLowerCase())) {

            if (await showUsage("Logicpath") === true) return;

            const logicpathEmbed = new MessageEmbed()
                .setTitle("Identity V logicpath commands!")
                .setColor("RANDOM")
                .setDescription("To check how to use a specific command do `" + prefix + "help logicpath <command>`\n\nCommands: " + await listThemCommands("Logicpath"))
                .setFooter("This category is still W.I.P so feel free to suggest anything by doing " + prefix + "suggest :)");

            return message.channel.send(logicpathEmbed);

        }
        else if (["image", "images"].includes(args[1].toLowerCase())) {
            if (await showUsage("Image") === true) return;

            const imageEmbed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Image manipulation commands!")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("To check how to use a specific command do `" + prefix + "help image <command>`\n\nCommands: " + await listThemCommands("Image"))

            return message.channel.send(imageEmbed);
        }

        else if (["ultity", "utility"].includes(args[1].toLowerCase())) {
            if (await showUsage("Utility") === true) return;


            const ultity_Embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Cowboish Utility commands :D")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())
                .setDescription("To check how to use a specific command do `" + prefix + "help utility <command>`\n\nCommands: " + await listThemCommands("Utility"))

            return message.channel.send(ultity_Embed);

        } else {
            return message.channel.send(helpEmbed);
        }

    }

}