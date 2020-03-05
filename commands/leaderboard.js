const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require("discord.js")

const { stripIndents } = require("common-tags");
module.exports = {
    name: 'leaderboard',
    description: "Leaderboard for logicpath commands",
    execute: async (message, args, bot) => {


        if (!args[1]) {
            const guild_cmd = "`>LD guild`"

            logicPath.find({})
                .sort([
                    ["logic", "descending"]
                ]).exec((err, res) => {
                    if (err) console.log(err);

                    let n1 = bot.users.get(res[0].UserID) || "Not found";
                    let n2 = bot.users.get(res[1].UserID) || "Not found";
                    let n3 = bot.users.get(res[2].UserID) || "Not found";
                    let n4 = bot.users.get(res[3].UserID) || "Not found";
                    let n5 = bot.users.get(res[4].UserID) || "Not found";

                    const LD_Embed = new RichEmbed()
                        .setAuthor("Cowboish bot LP LeaderBoard!", message.author.displayAvatarURL)
                        .setDescription(stripIndents`
                    Here is the top 5 list of Cowboish bot **Logicpath** commands based on how many steps they've walked in their logicpath
                    There will be a weekly rewards for top 5 players of the week!
                    **NOTE!!**: If you want to check this guild's leaderboard, do **${guild_cmd}**
                    〘<:uno:676017997420167187>〙 **${n1.username}** - *Rewards* = **50**<:echoes:655840505225281536>, **3**<:ess1:655840713904488469>, **3**<:ess2:655840643847028751>, **3**<:ess3:655840571616919586> and **500**<:clue:655384523735040000>
                    <:LP:675763680863977513> ➜ **${res[0].logic}**
                        Opened ➜ **${res[0].S + res[0].A + res[0].B + res[0].C + res[0].D}**
                        <:clue:655384523735040000> ➜ **${res[0].Clues}**
                        S ➜ **${res[0].S}**
                        ▔ ▔ ▔ ▔ ▔
                        〘<:dos:676019548016738304>〙 **${n2.username}** - *Rewards* = **40**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **400**<:clue:655384523735040000>
                        <:LP:675763680863977513> ➜ **${res[1].logic}**
                        Opened ➜ **${res[1].S + res[1].A + res[1].B + res[1].C + res[1].D}**
                        <:clue:655384523735040000> ➜ **${res[1].Clues}**
                        S ➜ **${res[1].S}**
                        ▔ ▔ ▔ ▔ ▔
                        〘<:tres:676019592757248001>〙 **${n3.username}** - *Rewards* = **30**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **300**<:clue:655384523735040000>
                        <:LP:675763680863977513> ➜ **${res[2].logic}**
                        Opened ➜ **${res[2].S + res[2].A + res[2].B + res[2].C + res[2].D}**
                        <:clue:655384523735040000> ➜ **${res[2].Clues}**
                        S ➜ **${res[2].S}**
                        ▔ ▔ ▔ ▔ ▔
                        〘4〙 **${n4.username}** - *Rewards* = **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
                        <:LP:675763680863977513> ➜ **${res[3].logic}**
                        Opened ➜ **${res[3].S + res[3].A + res[3].B + res[3].C + res[3].D}**
                        <:clue:655384523735040000> ➜ **${res[3].Clues}**
                        S ➜ **${res[3].S}**
                        ▔ ▔ ▔ ▔ ▔
                        〘5〙 **${n5.username}** - *Rewards* = **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
                        <:LP:675763680863977513> ➜ **${res[4].logic}**
                        Opened ➜ **${res[4].S + res[4].A + res[4].B + res[4].C + res[4].D}**
                        <:clue:655384523735040000> ➜ **${res[4].Clues}**
                        S ➜ **${res[4].S}**
                    `)
                        .setColor("0xebe305")
                        .setFooter(`Top 5 players out of ${res.length} results`, bot.user.displayAvatarURL);

                    message.channel.send(LD_Embed)


                })
        } else if (["guild", "Guild", "server", "Server"].includes(args[1])) {
            logicPath.find({ guildsID: message.guild.id })
                .sort([
                    ["logic", "descending"]
                ]).exec((err, res) => {
                    if (err) console.log(err);

                    const LD_Embed = new RichEmbed()
                        .setAuthor("LogicPath LeaderBoard", bot.user.displayAvatarURL);

                    if (res.length === 0) {
                        LD_Embed.setColor("RED");
                        LD_Embed.setDescription("No data were found!\nIt seems like no one in this guild has any data saved on my database :')\n\nWanna start playing? do `>help logicpath` for more info");
                    }
                    else if (res.length < 5) {
                        LD_Embed.setColor("GREEN");
                        for (i = 0; i < res.length; i++) {

                            let I_D = res[i].ID || "`Not set`";

                            if (I_D === "0") {
                                I_D = "`Not set`";
                            } else {
                                I_D = res[i].ID;
                            }

                            let member = bot.users.get(res[i].UserID) || "Not found";

                            if (member == "Not found") {
                                LD_Embed.addField(`▔ ▔ ▔ ▔ ▔`, stripIndents`
                            〘**${i + 1}**〙 **${member}**
                            🆔 | *Ingame ID* ➜ **${I_D}**
                            <:LP:675763680863977513> | *LogicPath steps* ➜ **${res[i].logic}**
                            <:clue:655384523735040000> | *Clues* ➜ **${res[i].Clues}**
                            Essences opened: **${res[i].S + res[i].A + res[i].B + res[i].C + res[i].D}**
                            `);
                            }
                            else {
                                LD_Embed.addField(`▔ ▔ ▔ ▔ ▔`,
                                    stripIndents`
                            〘**${i + 1}**〙 **${member.tag}**
                            🆔 | *Ingame ID* ➜ **${I_D}**
                            <:LP:675763680863977513> | *LogicPath steps* ➜ **${res[i].logic}**
                            <:clue:655384523735040000> | *Clues* ➜ **${res[i].Clues}**
                            Essences opened: **${res[i].S + res[i].A + res[i].B + res[i].C + res[i].D}**
                            `);
                            }
                            LD_Embed.setFooter(`Top users on this guild out of ${res.length} results`);

                        }

                    }
                    else {
                        LD_Embed.setColor("GREEN");
                        for (i = 0; i < 5; i++) {

                            let ID = res[i].ID || "`Not set`";

                            if (ID === "0") {
                                ID = "`Not set`";
                            } else {
                                ID = res[i].ID;
                            }

                            let member = bot.users.get(res[i].UserID) || "Not found";

                            if (member === "Not found") {
                                LD_Embed.addField(`▔ ▔ ▔ ▔ ▔`, stripIndents`
                            〘**${i + 1}**〙 **${member}**
                            
                            🆔 | *Ingame ID* ➜ **${ID}**
                            <:LP:675763680863977513> | *LogicPath steps* ➜ **${res[i].logic}**
                            <:clue:655384523735040000> | *Clues* ➜ **${res[i].Clues}**
                            Essences opened: **${res[i].S + res[i].A + res[i].B + res[i].C + res[i].D}**
                            `);
                            }
                            else {
                                LD_Embed.addField(stripIndents`
                            
                                ▔ ▔ ▔ ▔ ▔`,
                                    stripIndents`
                            〘**${i + 1}**〙 **${member.tag}**
                            🆔 | *Ingame ID* ➜ **${ID}**
                            <:LP:675763680863977513> | *LogicPath steps* ➜ **${res[i].logic}**
                            <:clue:655384523735040000> | *Clues* ➜ **${res[i].Clues}**
                            Essences opened: **${res[i].S + res[i].A + res[i].B + res[i].C + res[i].D}**
                            `);

                            }
                            LD_Embed.setFooter(`Top 5 users out of ${res.length} results`);


                        }


                    }
                    message.channel.send(LD_Embed);


                })

        }


    }
}