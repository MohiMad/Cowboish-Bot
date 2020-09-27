const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { newLP, ErrorMsg, addCooldown, findCooldown, coolEmbed } = require("../functions.js");
const { ess1, ess2, ess3, frags } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");
const { firstEssence, secondEssence, thirdEssence } = require("../essences/essences.json");

const { statsCheck } = require("../essences/essenceFunctions.js");

module.exports = {
    name: 'open',
    description: "opens an essence for ya ",
    execute: async (message, args, bot, MohiMoo, prefix) => {
        await newLP(message);

        const cooldownCheck = await findCooldown(message, "open");

        if (cooldownCheck) return coolEmbed(message, "Ooops! The cooldown is still on >:/", "Please wait **REMAINING** before being able to execute this command again :)\n\n*psst, Mohi love you <3*", cooldownCheck.timeRemaining, ["s"]);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        var s10_cmd = "`s12-1` or `1`";
        s10_2_cmd = "`s12-2` or `2`",
            s10_3_cmd = "`s12-3` or `3`",

            exmple = "`" + prefix + "open 1` to open a `s12-1` " + ess1 + " essence",
            stats_cmd = "`" + prefix + "open stats <essenceID>`",
            author = message.author.username,
            open10 = "`" + prefix + "open s12-1 10`\n`" + prefix + "open s12-1 3`",
            boolean = false,
            statsBooboo = false;

        const noargsEmbed = new RichEmbed()
            .setAuthor("Please provide one of the essences ID after the command", message.author.displayAvatarURL)
            .setColor("RANDOM")
            .setDescription(stripIndents`The current season's Essences are:
                        ${ess1} | **Essences s12-1** ─ ID ➜ ${s10_cmd}
                        ${ess2} | **Essence s12-2** ─ ID ➜ ${s10_2_cmd}
                        ${ess3} | **Essence s12-3** ─ ID ➜ ${s10_3_cmd}

                        **Example**: ${exmple}

                        To check what items you have obtained from a specific essence, do
                        ${stats_cmd}

                        Wanna open more than one essence at once? Add up a number between 2 and 10 after providing the essence's ID
                        **Example:** 
                        ${open10}
                `)
            .setThumbnail("https://i.imgur.com/BXAjWou.png")
            .setFooter(bot.user.tag, bot.user.displayAvatarURL);

        let fragments = 0;

        try {

            if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

            if (!args[1]) return message.channel.send(noargsEmbed);


            for (var i = 0; i < 3; i++) {

                let essence,
                    essenceLP;

                if (i === 0) {
                    essence = firstEssence;
                    essenceLP = LP.Ess1;
                }

                if (i === 1) {
                    essence = secondEssence;
                    essenceLP = LP.Ess2;

                }
                if (i === 2) {
                    essence = thirdEssence;
                    essenceLP = LP.Ess3;
                }

                let randomItem = Math.floor(Math.random() * essence.length);

                if (essence[0].Shortcuts.includes(args[1].toLowerCase())) {

                    if (!args[2] || args[2] === "1") {
                        boolean = true;
                        if (essenceLP === 0) return message.reply("**You don't have any " + essence[0].Emoji + " `" + essence[0].WhichEss + "` essences!**\nTry rolling some dices or buy some from the shop!");

                        const embed = new RichEmbed()
                            .setAuthor(essence[randomItem].Title.replace("author", message.author.username), essence[0].LinkOfIt)
                            .setImage(`https://i.imgur.com/${essence[randomItem].LinkTag}${essence[0].Format}`)
                            .setColor(essence[randomItem].Color)
                            .setFooter(essence[randomItem].Footer, bot.user.displayAvatarURL)

                        if (LP.Opened.includes(essence[randomItem].Item)) {
                            embed.setDescription(`You have this item already! You get **${essence[randomItem].FragAmount}** ${frags} instead :D`);
                            LP.frags = LP.frags + essence[randomItem].FragAmount;

                        } else {
                            LP.Opened = [...LP.Opened, essence[randomItem].Item];
                            if (essence[randomItem].Item === "s12-2-1") LP.Sculptor = true;

                            if (essence[randomItem].Tier === "S") LP.S = LP.S + 1;
                            if (essence[randomItem].Tier === "A") LP.A = LP.A + 1;
                            if (essence[randomItem].Tier === "S") LP.B = LP.B + 1;
                            if (essence[randomItem].Tier === "C") LP.C = LP.C + 1;
                            if (essence[randomItem].Tier === "D") LP.D = LP.D + 1;

                            if (["ess1-14", "ess1-15", "ess1-16", "ess1-48", "ess1-49", "ess1-50", "ess1-51", "s12-2-36", "s12-2-37", "s12-2-38", "s12-2-46", "s12-2-47", "s12-2-48", "s12-2-49"].includes(essence[randomItem].Item)) embed.setDescription(`Yaay you got a new portrait! You can equip it by doing` + "`" + prefix + `equip portrait ${essence[randomItem].PortraitName}` + "`");
                        }
                        if (i === 0) LP.Ess1 = LP.Ess1 - 1;
                        if (i === 1) LP.Ess2 = LP.Ess2 - 1;
                        if (i === 2) LP.Ess3 = LP.Ess3 - 1;

                        await LP.save().catch(err => console.log(err));
                        await addCooldown(message, 3000, "open");

                        message.channel.send(embed);

                    } else {
                        boolean = true;
                        let EssenceNumber = Number(args[2]);

                        if (isNaN(args[2])) return message.channel.send(`**${author}** please provide me the amount of **${essence[0].WhichEss}** essences ${essence[0].Emoji} you want to open...`);
                        if (EssenceNumber > 10) return message.channel.send(`**${author}** can't open more than 10 essences...`);
                        if (essenceLP < EssenceNumber) return message.channel.send(`**You have less than ${EssenceNumber} ${essence[0].WhichEss} essences, ${message.author.username}**`);
                        if (EssenceNumber < 1) return message.reply("**Can't open less than 1 essence >:/**");
                        if (["-"].includes(EssenceNumber)) return message.reply("**Can't open a negative amount of essences >:/**");

                        let itemNumber = Math.floor(Math.random() * essence.length);
                        if (itemNumber === 0) {
                            itemNumber = Math.floor(Math.random() * essence.length);
                        }
                        if (itemNumber === 0) itemNumber = 1;

                        let itemNumber1 = Math.floor(Math.random() * essence.length);
                        let itemNumber2 = Math.floor(Math.random() * essence.length);
                        let itemNumber3 = Math.floor(Math.random() * essence.length);
                        let itemNumber4 = Math.floor(Math.random() * essence.length);
                        let itemNumber5 = Math.floor(Math.random() * essence.length);
                        let itemNumber6 = Math.floor(Math.random() * essence.length);
                        let itemNumber7 = Math.floor(Math.random() * essence.length);
                        let itemNumber8 = Math.floor(Math.random() * essence.length);
                        let itemNumber9 = Math.floor(Math.random() * essence.length);
                        let itemNumber10 = Math.floor(Math.random() * essence.length);

                        let description = "\n",
                            lastEssenceColor,
                            lastEssenceImage;

                        for (let s = 0; s < EssenceNumber; s++) {

                            let rndom;
                            if (s === 0) rndom = itemNumber1;
                            if (s === 1) rndom = itemNumber2;
                            if (s === 2) rndom = itemNumber3;
                            if (s === 3) rndom = itemNumber4;
                            if (s === 4) rndom = itemNumber5;
                            if (s === 5) rndom = itemNumber6;
                            if (s === 6) rndom = itemNumber7;
                            if (s === 7) rndom = itemNumber8;
                            if (s === 8) rndom = itemNumber9;
                            if (s === 9) rndom = itemNumber10;

                            if (s + 1 === EssenceNumber) {
                                lastEssenceColor = essence[rndom].Color ? essence[rndom].Color : essence[itemNumber].Color;
                                lastEssenceImage = `https://i.imgur.com/${essence[rndom].LinkTag ? essence[rndom].LinkTag : essence[itemNumber].LinkTag}${essence[0].Format}`;

                            }

                            if (LP.Opened.includes(essence[rndom].Item)) {
                                fragments = fragments + (essence[rndom].FragAmount ? essence[rndom].FragAmount : essence[itemNumber].FragAmount);
                                description = description + `\n\n[**${s + 1} 】 ${essence[rndom].Name ? essence[rndom].Name : essence[itemNumber].Name}**](https://i.imgur.com/${essence[rndom].LinkTag ? essence[rndom].LinkTag : essence[itemNumber].LinkTag}${essence[0].Format})`;

                            } else {

                                LP.Opened = [...LP.Opened, essence[rndom].Item ? essence[rndom].Item : essence[itemNumber].Item];
                                if (essence[rndom].Item ? essence[rndom].Item : essence[itemNumber].Item === "s12-2-1") LP.Sculptor = true;

                                if (essence[rndom].Tier ? essence[rndom].Tier : essence[itemNumber].Tier === "S") LP.S = LP.S + 1;
                                if (essence[rndom].Tier ? essence[rndom].Tier : essence[itemNumber].Tier === "A") LP.A = LP.A + 1;
                                if (essence[rndom].Tier ? essence[rndom].Tier : essence[itemNumber].Tier === "S") LP.B = LP.B + 1;
                                if (essence[rndom].Tier ? essence[rndom].Tier : essence[itemNumber].Tier === "C") LP.C = LP.C + 1;
                                if (essence[rndom].Tier ? essence[rndom].Tier : essence[itemNumber].Tier === "D") LP.D = LP.D + 1;

                                description = description + `\n\n[${s + 1} 】 ${essence[rndom].Name ? essence[rndom].Name : essence[itemNumber].Name}](https://i.imgur.com/${essence[rndom].LinkTag ? essence[rndom].LinkTag : essence[itemNumber].LinkTag}${essence[0].Format})`;

                            }

                        }

                        description = description.replace("\n", `Duplicated items gave you: **${fragments}** <:frags:655840344725913600>`);

                        let Ess1TenEmbed = new RichEmbed()
                            .setTitle(`Here is what you got from your ${EssenceNumber} essences:`)
                            .setTimestamp()
                            .setColor(lastEssenceColor)
                            .setThumbnail(essence[0].LinkOfIt)
                            .setImage(lastEssenceImage)
                            .setAuthor(`${EssenceNumber} s12-${essence[0].WhichEss.replace("Ess", "")} essences has been opened!`, essence[0].LinkOfIt)
                            .setDescription(description);

                        LP.frags = LP.frags + fragments;

                        if (i === 0) LP.Ess1 = LP.Ess1 - EssenceNumber;
                        if (i === 1) LP.Ess2 = LP.Ess2 - EssenceNumber;
                        if (i === 2) LP.Ess3 = LP.Ess3 - EssenceNumber;

                        LP.save().catch(err => console.log(err));
                        await addCooldown(message, 1000 * EssenceNumber, "open");
                        message.channel.send(Ess1TenEmbed);

                    }
                }

                else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                    boolean = true;

                    if (!args[2]) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");

                    if (essence[0].Shortcuts.includes(args[2].toLowerCase())) {
                        statsBooboo = true;
                        await statsCheck(message, `s12-${essence[0].WhichEss.replace("Ess", "")}`, essence, essence[0].LinkOfIt);
                        await addCooldown(message, 3000, "open");

                    }

                }
            }
            if (boolean === false) return message.channel.send(noargsEmbed);
            if (statsBooboo === false) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");


        } catch (err) {
            console.log(err);
            message.reply("**Sorry, hit an unfamiliar error!**");

        }



    }
}