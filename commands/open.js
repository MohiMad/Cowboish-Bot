const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { newLP, ErrorMsg, addCooldown, findCooldown, coolEmbed } = require("../functions.js");
const { ess1, ess2, ess3, frags } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");
let spamStopper = new Set();
const s12Essence = require("../essences/s12-1.json");
const secondEssence = require("../essences/s12-2.json");
const { checkForItem, openOneEssence, statsCheck } = require("../essences/essenceFunctions.js");
module.exports = {
    name: 'open',
    description: "opens an essence for ya ",
    execute: async (message, args, bot, MohiMoo, prefix) => {
        await newLP(message);

        const cooldownCheck = await findCooldown(message, "open");
        let randomItem = Math.floor(Math.random() * s12Essence.length);
        let secEssRandomItem = Math.floor(Math.random() * secondEssence.length);

        if (!cooldownCheck) {

            const LP = await logicPath.findOne({ UserID: message.author.id });

            var s10_cmd = "`s12-1` or `1`";
            var s10_2_cmd = "`s12-2` or `2`";
            var s10_3_cmd = "`s12-3` or `3`";

            var exmple = "`" + prefix + "open 1` to open a `s12-1` " + ess1 + " essence";
            var stats_cmd = "`" + prefix + "open stats <essenceID>`"
            let author = message.author.username;
            var open10 = "`" + prefix + "open s12-1 10`\n`" + prefix + "open s12-1 3`";

            const noargsEmbed = new RichEmbed()
                .setAuthor("Please provide one of the essences ID after the command", message.author.displayAvatarURL)
                .setColor("RANDOM")
                .setDescription(stripIndents`The current season's Essences are:
                        ${ess1} | **Essences s12-1** ─ ID ➜ ${s10_cmd}
                        ${ess2} | **Essence s12-2** ─ ID ➜ ${s10_2_cmd}
                        ${ess3} | **Essence s12-3** (__Unavailable__) ─ ID ➜ ${s10_3_cmd}

                        **Example**: ${exmple}

                        To check what items you have obtained from a specific essence, do
                        ${stats_cmd}

                        Wanna open more than one essence at once? Add up a number between 2 and 10 after providing the essence's ID
                        **Example:** 
                        ${open10}
                `)
                .setThumbnail("https://i.imgur.com/BXAjWou.png")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL);

            let emojiNumbers = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];


            let fragments = 0;

            async function checkForItem(variable, essence) {

                if (LP.Opened.includes(essence[variable].Item)) {
                    fragments = fragments + essence[variable].FragAmount;

                    await LP.save().catch(e => console.log(e));

                } else {
                    LP.Opened = [...LP.Opened, essence[variable].Item];
                    if (essence[variable].Item === "s12-2-1") LP.Sculptor = true;

                    if (essence[variable].Tier === "S") LP.S = LP.S + 1;
                    if (essence[variable].Tier === "A") LP.A = LP.A + 1;
                    if (essence[variable].Tier === "S") LP.B = LP.B + 1;
                    if (essence[variable].Tier === "C") LP.C = LP.C + 1;
                    if (essence[variable].Tier === "D") LP.D = LP.D + 1;

                    await LP.save().catch(e => console.log(e));

                }

            }

            try {

                if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

                if (!args[1]) return message.channel.send(noargsEmbed);

                if (["s12-1", "s121", "ess1", "12-1"].includes(args[1].toLowerCase()) || args[1] === "1") {
                    if (!args[2]) {
                        if (spamStopper.has(message.author)) return message.reply(`**Please wait for the previoused essences to be opened!**`);
                        if (LP.Ess1 === 0) return message.reply("**You don't have any " + ess1 + " `s12-1` essences!**\nTry rolling some dices or buy some from the shop!")

                        LP.Ess1 = LP.Ess1 - 1;
                        await LP.save().catch(err => console.log(err));

                        await addCooldown(message, 3000, "open");
                        await openOneEssence(message, bot, prefix, s12Essence, randomItem, "https://i.imgur.com/0SglSpn.png", ".png");

                    } else {

                        if (isNaN(args[2])) return message.channel.send(`**${author}** please provide me the amount of **s12-1** essences ${ess1} you want to open at once...`);
                        if (Number(args[2]) > 10) return message.channel.send(`**${author}** can't open more than 10 essences at once...`);
                        if (LP.Ess1 < Number(args[2])) return message.channel.send(`**You have less than ${Number(args[2])} s12-1 essences, ${message.author.username}**`);
                        if (Number(args[2]) < 1) return message.reply("**Can't open less than 1 essence >:/**");
                        if (["-"].includes(Number(args[2]))) return message.reply("**Can't open a negative amount of essences >:/**");
                        if (spamStopper.has(message.author)) return message.reply(`**Please wait for the previous essences to be opened!**`);

                        let itemNumber1 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber2 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber3 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber4 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber5 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber6 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber7 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber8 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber9 = Math.floor(Math.random() * s12Essence.length);
                        let itemNumber10 = Math.floor(Math.random() * s12Essence.length);

                        let description = `1 ] **${s12Essence[randomItem].Name}**`;

                        checkForItem(randomItem, s12Essence);

                        let Ess1TenEmbed = new RichEmbed()
                            .setTitle(`Here is what you got from your ${Number(args[2])} essences:`)
                            .setTimestamp()
                            .setImage(`https://i.imgur.com/${s12Essence[randomItem].LinkTag}.png`)
                            .setColor(s12Essence[randomItem].Color)
                            .setAuthor(`${Number(args[2])} s12-1 essences has been opened!`, "https://i.imgur.com/0SglSpn.png")
                            .setDescription(description);

                        spamStopper.add(message.author);
                        let msg = await message.channel.send(Ess1TenEmbed);

                        for (let i = 1; i < Number(args[2]); i++) {

                            let rndom;
                            if (i === 1) rndom = itemNumber1;
                            if (i === 2) rndom = itemNumber2;
                            if (i === 3) rndom = itemNumber3;
                            if (i === 4) rndom = itemNumber4;
                            if (i === 5) rndom = itemNumber5;
                            if (i === 6) rndom = itemNumber6;
                            if (i === 7) rndom = itemNumber7;
                            if (i === 8) rndom = itemNumber8;
                            if (i === 9) rndom = itemNumber9;
                            if (i === 10) rndom = itemNumber10;


                            setTimeout(async () => {

                                description = description + `\n\n${i + 1} ] **${s12Essence[rndom].Name}**`;

                                Ess1TenEmbed.setColor(s12Essence[rndom].Color);
                                Ess1TenEmbed.setImage(`https://i.imgur.com/${s12Essence[rndom].LinkTag}.png`)
                                Ess1TenEmbed.setDescription(description);

                                checkForItem(rndom, s12Essence);

                                await msg.edit(Ess1TenEmbed);
                            }, 2000 * i);

                        }

                        setTimeout(async () => {

                            description = description + `\n\nDuplicated items gave you: **${fragments}** <:frags:655840344725913600>`;

                            Ess1TenEmbed.setDescription(description);

                            LP.frags = LP.frags + fragments;
                            LP.Ess1 = LP.Ess1 - Number(args[2]);
                            spamStopper.delete(message.author);

                            LP.save().catch(err => console.log(err));
                            addCooldown(message, 1000 * Number(args[2]));
                            await msg.edit(Ess1TenEmbed);

                        }, 2000 * Number(args[2]));

                    }

                } else if (["s12-2", "ess2", "s122", "12-2"].includes(args[1].toLowerCase()) || args[1] === "2") {
                    if (!args[2]) {
                        if (spamStopper.has(message.author)) return message.reply(`**Please wait for the previous essences to be opened**`);
                        if (LP.Ess2 === 0) return message.reply("**You don't have any " + ess2 + " `s12-2` essences!**\nTry rolling some dices or buy some from the shop!")

                        LP.Ess2 = LP.Ess2 - 1;
                        await LP.save().catch(err => console.log(err));

                        await addCooldown(message, 3000, "open");
                        await openOneEssence(message, bot, prefix, secondEssence, secEssRandomItem, "https://i.imgur.com/JGu6jXE.png", ".jpg");

                    } else {
                        if (isNaN(args[2])) return message.channel.send(`**${author}** please provide me the amount of **s12-2** essences ${ess2} you want to open at once...`);
                        if (Number(args[2]) > 10) return message.channel.send(`**${author}** can't open more than 10 essences at once...`);
                        if (LP.Ess2 < Number(args[2])) return message.channel.send(`**You have less than ${Number(args[2])} s12-2 essences, ${message.author.username}**`);
                        if (Number(args[2]) < 1) return message.reply("**Can't open less than 1 essence >:/**");
                        if (["-"].includes(Number(args[2]))) return message.reply("**Can't open a negative amount of essences >:/**");
                        if (spamStopper.has(message.author)) return message.reply(`**Please wait for the previous essences to be opened!**`);

                        let itemNumber1 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber2 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber3 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber4 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber5 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber6 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber7 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber8 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber9 = Math.floor(Math.random() * secondEssence.length);
                        let itemNumber10 = Math.floor(Math.random() * secondEssence.length);

                        let description = `1 ] **${secondEssence[secEssRandomItem].Name}**`;

                        checkForItem(secEssRandomItem, secondEssence);

                        let Ess1TenEmbed = new RichEmbed()
                            .setTitle(`Here is what you got from your ${Number(args[2])} essences:`)
                            .setTimestamp()
                            .setImage(`https://i.imgur.com/${secondEssence[secEssRandomItem].LinkTag}.jpg`)
                            .setColor(secondEssence[secEssRandomItem].Color)
                            .setAuthor(`${Number(args[2])} s12-2 essences has been opened!`, "https://i.imgur.com/JGu6jXE.png")
                            .setDescription(description);

                        spamStopper.add(message.author);
                        let msg = await message.channel.send(Ess1TenEmbed);

                        for (let i = 1; i < Number(args[2]); i++) {

                            let rndom;
                            if (i === 1) rndom = itemNumber1;
                            if (i === 2) rndom = itemNumber2;
                            if (i === 3) rndom = itemNumber3;
                            if (i === 4) rndom = itemNumber4;
                            if (i === 5) rndom = itemNumber5;
                            if (i === 6) rndom = itemNumber6;
                            if (i === 7) rndom = itemNumber7;
                            if (i === 8) rndom = itemNumber8;
                            if (i === 9) rndom = itemNumber9;
                            if (i === 10) rndom = itemNumber10;


                            setTimeout(async () => {

                                description = description + `\n\n${i + 1} ] **${secondEssence[rndom].Name}**`;

                                Ess1TenEmbed.setColor(secondEssence[rndom].Color);
                                Ess1TenEmbed.setImage(`https://i.imgur.com/${secondEssence[rndom].LinkTag}.jpg`)
                                Ess1TenEmbed.setDescription(description);

                                checkForItem(rndom, secondEssence);

                                await msg.edit(Ess1TenEmbed);
                            }, 2000 * i);

                        }

                        setTimeout(async () => {

                            description = description + `\n\nDuplicated items gave you: **${fragments}** ${frags}`;

                            Ess1TenEmbed.setDescription(description);

                            LP.frags = LP.frags + fragments;
                            LP.Ess2 = LP.Ess2 - Number(args[2]);
                            spamStopper.delete(message.author);

                            LP.save().catch(err => console.log(err));
                            addCooldown(message, 1000 * Number(args[2]));

                            await msg.edit(Ess1TenEmbed);

                        }, 2000 * Number(args[2]));

                    }

                } else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                    if (!args[2]) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** (__Unavailable__) ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");

                    if (["s12-1", "s121", "ess1", "12-1"].includes(args[2].toLowerCase()) || args[2] === "1") {
                        await statsCheck(message, "s12-1", s12Essence, "https://i.imgur.com/0SglSpn.png")
                        await addCooldown(message, 3000, "open");

                    }
                    else if (["s12-2", "ess2", "s122", "12-2"].includes(args[2].toLowerCase()) || args[2] === "2") {
                        await statsCheck(message, "s12-2", secondEssence, "https://i.imgur.com/JGu6jXE.png")
                        await addCooldown(message, 3000, "open");

                    } else {
                        return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** (__Unavailable__) ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");
                    }

                } else {
                    message.channel.send(noargsEmbed);
                }

            } catch (err) {
                console.log(err);
                message.reply("sorry, hit an unfamiliar error!");

            }

        } else {
            coolEmbed(message, "Ooops! The cooldown is still on >:/", "Please wait **REMAINING** more seconds before being able to execute this command again :)\n\nKeep in mind that you now can open **10** essences at once by doing\n`" + prefix + "open <essenceID> 10`", cooldownCheck.timeRemaining, ["s"]);
        }

    }
}