const { MessageEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");
const { newLP, ErrorMsg, addCooldown, findCooldown, coolEmbed } = require("../../src/functions.js");
const { ess1, ess2, ess3, frags } = require("../../src/emojis.json");
const logicPath = require("../../models/logicpath.js");
const { firstEssence } = require("../../src/essences.json");

const { statsCheck } = require("../../src/essenceFunctions.js");

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

        var s10_cmd = "`ess1`, `s15-1`, or `1`";
        s10_2_cmd = "`ess2`, `s15-2`, or `2`",
            s10_3_cmd = "`ess3`, `s15-3` or `3`",

            exmple = "`" + prefix + "open 1` to open a `Promised neverland` " + ess1 + " essence",
            stats_cmd = "`" + prefix + "open stats <essenceID>`",
            author = message.author.username,
            open10 = "`" + prefix + "open s15-1 10`\n`" + prefix + "open s15-1 3`",
            boolean = false;

        const noargsEmbed = new MessageEmbed()
            .setAuthor("Please provide one of the essences ID after the command", message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setDescription(stripIndents`The current season's Essences are:
                        ${ess1} | **The Promised Neverland Essence** ─ ID ➜ ${s10_cmd}
                        ${ess2} | ~~**Essence s15-2**~~ ─ ID ➜ ${s10_2_cmd}
                        ${ess3} | ~~**Essence s15-3**~~ ─ ID ➜ ${s10_3_cmd}

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

            if (!args[1]) return message.channel.send(noargsEmbed);

            for (var i = 0; i < 1; i++) {

                let essence;
                if (i === 0) essence = firstEssence;

                let randomItem = Math.floor(Math.random() * essence.slice(1).length);

                if (essence[0].Shortcuts.includes(args[1].toLowerCase())) {
                    const EssenceONLY = essence.slice(1);

                    if (!args[2] || args[2] === "1") {
                        boolean = true;
                        if (LP[essence[0].WhichEss] === 0) return message.reply("**You don't have any " + essence[0].Emoji + " `" + essence[0].WhichEss + "` essences!**\nTry rolling some dices or buy some from the shop!");

                        let oneEssLink = EssenceONLY[randomItem].LinkTag;
                        if (!oneEssLink.includes("https://")) oneEssLink = `https://i.imgur.com/${EssenceONLY[randomItem].LinkTag}${essence[0].Format}`;

                        const embed = new MessageEmbed()
                            .setAuthor(EssenceONLY[randomItem].Title.replace("author", message.author.username), essence[0].LinkOfIt)
                            .setImage(oneEssLink)
                            .setColor(EssenceONLY[randomItem].Color)
                            .setFooter(EssenceONLY[randomItem].Footer, bot.user.displayAvatarURL())

                        if (LP.Opened.includes(EssenceONLY[randomItem].Item)) {

                            embed.setDescription(`You have this item already! You get **${EssenceONLY[randomItem].FragAmount}** ${frags} instead :D`);
                            LP.frags = LP.frags + EssenceONLY[randomItem].FragAmount;

                        } else {
                            LP.Opened = [...LP.Opened, EssenceONLY[randomItem].Item];
                            LP[EssenceONLY[randomItem].Tier] = LP[EssenceONLY[randomItem].Tier] + 1;


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

                            let tenEssLink = EssenceONLY[rndom].LinkTag;
                            if (!tenEssLink.includes("https://")) tenEssLink = `https://i.imgur.com/${EssenceONLY[rndom].LinkTag}${essence[0].Format}`;

                            if (s + 1 === EssenceNumber) {
                                lastEssenceColor = EssenceONLY[rndom].Color;
                                lastEssenceImage = tenEssLink;
                            }

                            if (LP.Opened.includes(EssenceONLY[rndom].Item)) {


                                fragments += EssenceONLY[rndom].FragAmount;
                                description += `\n\n[${s + 1} 】](${tenEssLink}) **${EssenceONLY[rndom].Name}**`;

                            } else {
                                LP.Opened = [...LP.Opened, EssenceONLY[rndom].Item];
                                LP[EssenceONLY[rndom].Tier] = LP[EssenceONLY[rndom].Tier] + 1;

                                description = description + `\n\n[${s + 1} 】](${tenEssLink}) ${EssenceONLY[rndom].Name}`;
                            }
                        }


                        description = description.replace("\n", `Duplicated items gave you: **${fragments}** <:frags:655840344725913600>`);

                        const Ess1TenEmbed = new MessageEmbed()
                            .setTitle(`Here is what you got from your ${EssenceNumber} essences:`)
                            .setTimestamp()
                            .setColor(lastEssenceColor)
                            .setThumbnail(essence[0].LinkOfIt)
                            .setImage(lastEssenceImage)
                            .setAuthor(`${EssenceNumber} s15-${essence[0].WhichEss.replace("Ess", "")} essences has been opened!`, essence[0].LinkOfIt)
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

                    if (!args[2]) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Call Of The Abyss 3** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " **Call Of The Abyss 4** ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s15-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats COAIII`");

                    if (essence[0].Shortcuts.includes(args[2].toLowerCase())) {
                        await addCooldown(message, 3000, "open");
                        return await statsCheck(message, `s15-${essence[0].WhichEss.replace("Ess", "")}`, essence, essence[0].LinkOfIt);
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