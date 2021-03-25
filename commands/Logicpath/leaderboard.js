const logicPath = require("../../models/logicpath.js");
const { MessageEmbed } = require("discord.js")
const { coolEmbed, findCooldown, addCooldown, ErrorMsg } = require("../../src/functions.js");
const { first, second, third } = require("../../src/emojis.json");

module.exports = {
    name: ["leaderboard", "ld"],
    description: "Displays the top 5 users of the Logicpath category globally or in this server\nTo view which members have walked the most logicpath steps in this server, add `guild` as your 1st argument\n\n**Usage:** `$prefixleaderboard [server]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Logicpath",
    execute: async (message, args, bot, prefix) => {

        const cooldownCheck = await findCooldown(message, "leaderboard");

        if (cooldownCheck) return coolEmbed(message, "Ooof there is a cooldown on this command :C", "Please wait **REMAINING** until you can use this command again... :)", cooldownCheck.timeRemaining, ["s"]);

        if (!args[1]) {

            const res = await logicPath.find({}).sort({ logic: -1 }).limit(5).catch(e => {
                console.log(e);
            });

            let description = "Here is the top 5 list of Cowboish bot **Logicpath** commands based on how many steps they've walked in their logicpath\nThere will be a weekly rewards for top 5 players of the week!\n\nIf you want to check this guild's leaderboard, do `" + prefix + "LD guild`";

            for (i = 0; i < 5; i++) {
                let n = await bot.shard.broadcastEval(`this.users.cache.get('${res[i].UserID}')`);

                if (!n || n === undefined || n === null) n = "Not found";
                else n = n.tag;

                description = description + `\n\n〘${i + 1}〙**${n}**: <a:WalkinDetective:798252338946244628> ➜ **${res[i].logic}** Logicpath steps`;
            }

            const LD_Embed = new MessageEmbed()
                .setAuthor("Cowboish bot LP LeaderBoard!", message.author.displayAvatarURL())
                .setDescription(description.replace("〘1〙", `〘${first}〙`).replace("〘2〙", `〘${second}〙`).replace("〘3〙", `〘${third}〙`))
                .setColor("0xebe305")
                .setFooter(`Top 5 players out of 6491+ results`, bot.user.displayAvatarURL());

            message.channel.send(LD_Embed);

            await addCooldown(message, 30000, "leaderboard");

        } else if (["guild", "server"].includes(args[1].toLowerCase())) {

            await logicPath.find({ guildsID: message.guild.id })
                .sort([
                    ["logic", "descending"]
                ]).exec((err, res) => {
                    if (err) console.log(err);

                    let guildDesc = "▔ ▔ ▔ ▔ ▔";

                    const LD_Embed = new MessageEmbed()
                        .setAuthor("LogicPath LeaderBoard", bot.user.displayAvatarURL());

                    if (res.length === 0) {
                        LD_Embed.setColor("RED");
                        LD_Embed.setDescription("No data were found!\nIt seems like no one in this guild has any data saved on my database :')\n\nWanna start playing? do `>help logicpath` for more info");
                    }
                    else if (res.length < 5) {
                        LD_Embed.setColor("GREEN");
                        for (i = 0; i < res.length; i++) {
                            let member = await bot.shard.broadcastEval(`this.users.cache.get('${res[i].UserID}')`) || "Not found";

                            if (member == "Not found") {
                                guildDesc = guildDesc + `\n\n〘**${i + 1}**〙 **${member}**\n<a:WalkinDetective:798252338946244628> | *LogicPath steps* ➜ **${res[i].logic}**`
                            }
                            else {
                                guildDesc = guildDesc + `\n\n〘**${i + 1}**〙 **${member.tag}**\n<a:WalkinDetective:798252338946244628> | *LogicPath steps* ➜ **${res[i].logic}**`

                            }
                            LD_Embed.setFooter(`Top users on this guild out of ${res.length} results`);
                            LD_Embed.setDescription(guildDesc);
                        }

                    }
                    else {
                        LD_Embed.setColor("GREEN");

                        for (i = 0; i < 5; i++) {

                            let member = await bot.shard.broadcastEval(`this.users.cache.get('${res[i].UserID}')`) || "Not found";

                            if (member === "Not found") {
                                guildDesc = guildDesc + `\n\n〘**${i + 1}**〙 **${member}**\n<a:WalkinDetective:798252338946244628> | *LogicPath steps* ➜ **${res[i].logic}**`;
                            }
                            else {
                                guildDesc = guildDesc + `\n\n〘**${i + 1}**〙 **${member.tag}**\n<a:WalkinDetective:798252338946244628> | *LogicPath steps* ➜ **${res[i].logic}**`;

                            }
                            LD_Embed.setFooter(`Top 5 users out of ${res.length} results`);
                            LD_Embed.setDescription(guildDesc);
                        }
                    }
                    message.channel.send(LD_Embed);
                });

            await addCooldown(message, 30000, "leaderboard");


        } else {
            ErrorMsg(bot, message, "This command shows you the top users in the `logicpath` category in general or in the guild you're in...\n\nTo view the top 5 users for the logicpath category, do `" + prefix + "leaderboard`\nTo view top users in this guild, do `" + prefix + "leaderboard guild`");
        }

    }
}