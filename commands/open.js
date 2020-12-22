const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { newLP, ErrorMsg, addCooldown, findCooldown, coolEmbed } = require("../functions.js");
const { ess1, ess2, ess3, frags } = require("../emojis.json");
const logicPath = require("../models/logicpath.js");
const { firstEssence, secondEssence } = require("../essences/essences.json");

const { statsCheck } = require("../essences/essenceFunctions.js");

module.exports = {
    name: ["open", "essence", "ess", "e"],
    description: "Open this season's current essences in Discord ヽ(´･ω･`)丿\n\n**Usage:** `$prefixopen <essenceID> [amount]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Logicpath",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        const cooldownCheck = await findCooldown(message, "open");

        if (cooldownCheck) return coolEmbed(message, "Ooops! The cooldown is still on >:/", "Please wait **REMAINING** before being able to execute this command again :)", cooldownCheck.timeRemaining, ["s"]);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        var s10_cmd = "`dangan`, `dr`, or `1`";
        s10_2_cmd = "`dangan2`, `dr2`, or `2`",
            s10_3_cmd = "`s14-3`, `ess3` or `3`",

            exmple = "`" + prefix + "open 1` to open a `Danganronpa1` " + ess1 + " essence",
            stats_cmd = "`" + prefix + "open stats <essenceID>`",
            author = message.author.username,
            open10 = "`" + prefix + "open s14-1 10`\n`" + prefix + "open s14-1 3`",
            boolean = false;

        const noargsEmbed = new MessageEmbed()
            .setAuthor("Please provide one of the essences ID after the command", message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setDescription(stripIndents`The current season's Essences are:
                        ${ess1} | **Danganronpa Essence 1** ─ ID ➜ ${s10_cmd}
                        ${ess2} | **Danganronpa Essence 2** ─ ID ➜ ${s10_2_cmd}
                        ${ess3} | ~~**Essence s14-3**~~ ─ ID ➜ ${s10_3_cmd}

                        **Example**: ${exmple}

                        To check what items you have obtained from a specific essence, do
                        ${stats_cmd}

                        Wanna open more than one essence at once? Add up a number between 2 and 10 after providing the essence's ID
                        **Example:** 
                        ${open10}
                `)
            .setThumbnail("https://i.imgur.com/y5K6iNN.png")
            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

        let fragments = 0;

        try {

            if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

            if (!args[1]) return message.channel.send(noargsEmbed);

            
            for (var i = 0; i < 2; i++) {

                let essence;

                if (i === 0) essence = firstEssence;
                if (i === 1) essence = secondEssence;                

                let randomItem = Math.floor(Math.random() * essence.slice(1).length);

                if (essence[0].Shortcuts.includes(args[1].toLowerCase())) {

                    let EssenceONLY = essence.slice(1);

                    if (!args[2] || args[2] === "1") {
                        boolean = true;
                        if (LP[essence[0].WhichEss] === 0) return message.reply("**You don't have any " + essence[0].Emoji + " `" + essence[0].WhichEss + "` essences!**\nTry rolling some dices or buy some from the shop!");


                        const embed = new MessageEmbed()
                            .setAuthor(EssenceONLY[randomItem].Title.replace("author", message.author.username), essence[0].LinkOfIt)
                            .setImage(`https://i.imgur.com/${EssenceONLY[randomItem].LinkTag}${essence[0].Format}`)
                            .setColor(EssenceONLY[randomItem].Color)
                            .setFooter(EssenceONLY[randomItem].Footer, bot.user.displayAvatarURL())

                        if (LP.Opened.includes(EssenceONLY[randomItem].Item)) {
                            embed.setDescription(`You have this item already! You get **${EssenceONLY[randomItem].FragAmount}** ${frags} instead :D`);
                            LP.frags = LP.frags + EssenceONLY[randomItem].FragAmount;

                        } else {
                            LP.Opened = [...LP.Opened, EssenceONLY[randomItem].Item];

                            LP[EssenceONLY[randomItem].Tier] = LP[EssenceONLY[randomItem].Tier] + 1;

                            if (["ess1-14", "ess1-15", "ess1-16", "ess1-48", "ess1-49", "ess1-50", "ess1-51", "s12-2-36", "s12-2-37", "s12-2-38", "s12-2-46", "s12-2-47", "s12-2-48", "s12-2-49", "s14-1-47", "s14-1-48", "s14-1-49", "s14-1-50", "s14-2-46", "s14-2-47", "s14-2-48", "s14-2-49"].includes(EssenceONLY[randomItem].Item)) embed.setDescription(`Yaay you got a new portrait! You can equip it by doing` + "`" + prefix + `equip portrait ${EssenceONLY[randomItem].PortraitName}` + "`");
                        }

                        LP[essence[0].WhichEss] = LP[essence[0].WhichEss] - 1;

                        await LP.save().catch(err => console.log(err));
                        await addCooldown(message, 3000, "open");

                        return message.channel.send(embed);

                    } else {
                        boolean = true;
                        let EssenceNumber = Number(args[2]);

                        if (isNaN(args[2])) return message.channel.send(`**${author}** please provide me the amount of **${essence[0].WhichEss}** essences ${essence[0].Emoji} you want to open...`);
                        if (EssenceNumber > 10) return message.channel.send(`**${author}** can't open more than 10 essences...`);
                        if (LP[essence[0].WhichEss] < EssenceNumber) return message.channel.send(`**You have less than ${EssenceNumber} ${essence[0].WhichEss} essences, ${message.author.username}**`);
                        if (EssenceNumber < 1) return message.reply("**Can't open less than 1 essence >:/**");
                        if (["-"].includes(EssenceNumber)) return message.reply("**Can't open a negative amount of essences >:/**");

                        let itemNumber1 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber2 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber3 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber4 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber5 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber6 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber7 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber8 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber9 = Math.floor(Math.random() * essence.slice(1).length);
                        let itemNumber10 = Math.floor(Math.random() * essence.slice(1).length);

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
                                lastEssenceColor = EssenceONLY[rndom].Color;
                                lastEssenceImage = `https://i.imgur.com/${EssenceONLY[rndom].LinkTag}${essence[0].Format}`;

                            }

                            if (LP.Opened.includes(EssenceONLY[rndom].Item)) {
                                fragments = fragments + (EssenceONLY[rndom].FragAmount);
                                description = description + `\n\n[${s + 1} 】](https://i.imgur.com/${EssenceONLY[rndom].LinkTag}${essence[0].Format}) **${EssenceONLY[rndom].Name}**`;

                            } else {
                                LP.Opened = [...LP.Opened, EssenceONLY[rndom].Item];
                                LP[EssenceONLY[rndom].Tier] = LP[EssenceONLY[rndom].Tier] + 1;

                                description = description + `\n\n[${s + 1} 】](https://i.imgur.com/${EssenceONLY[rndom].LinkTag}${essence[0].Format}) ${EssenceONLY[rndom].Name}`;
                            }

                        }


                        description = description.replace("\n", `Duplicated items gave you: **${fragments}** <:frags:655840344725913600>`);

                        let Ess1TenEmbed = new MessageEmbed()
                            .setTitle(`Here is what you got from your ${EssenceNumber} essences:`)
                            .setTimestamp()
                            .setColor(lastEssenceColor)
                            .setThumbnail(essence[0].LinkOfIt)
                            .setImage(lastEssenceImage)
                            .setAuthor(`${EssenceNumber} s14-${essence[0].WhichEss.replace("Ess", "")} essences has been opened!`, essence[0].LinkOfIt)
                            .setDescription(description);

                        LP.frags = LP.frags + fragments;

                        LP[essence[0].WhichEss] = LP[essence[0].WhichEss] - EssenceNumber;

                        LP.save().catch(err => console.log(err));
                        await addCooldown(message, 1000 * EssenceNumber, "open");
                        message.channel.send(Ess1TenEmbed);

                    }
                }

                else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                    boolean = true;

                    if (!args[2]) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s14-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " **Essence s14-2** ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s14-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s14-1`");

                    if (essence[0].Shortcuts.includes(args[2].toLowerCase())) {
                        await statsCheck(message, `s14-${essence[0].WhichEss.replace("Ess", "")}`, essence, essence[0].LinkOfIt);
                        await addCooldown(message, 3000, "open");

                    }

                }
            }
            

            if (boolean === false) return message.channel.send(noargsEmbed);

        } catch (err) {
            console.log(err);
            message.reply("**Sorry, hit an unfamiliar error!**");

        }
        
    }
}