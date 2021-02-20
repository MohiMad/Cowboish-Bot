const logicPath = require("../../models/logicpath.js");
const { newLP, ErrorMsg } = require("../../assets/functions.js");
const spamStopper = new Set();
const { Skins, Portraits, Frames, Characters } = require("../../assets/items.json");

const { MessageEmbed } = require("discord.js");

module.exports = {
    name: ["view", "display"],
    description: "Scroll between the Logicpath Items you own...\nCowboish will react with ◀ ▶ and reacting with them allows you to go forward/back in the list of items\n\n**Usage:** `$prefixview <item> [filter/itemName]`\nThe `<item>` tag can be: Portraits, Frames, Characters, or Skins",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "ADD_REACTIONS", "MANAGE_MESSAGES"],
    category: "Logicpath",
    execute: async (message, bot, args, prefix) => {

        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        async function ScrollThrough(array, item) {
            let pageI = 0;
            if (!array.length) return message.reply(`**you don't have any ${item}s**`);

            const embed = new MessageEmbed()
                .setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                .setTitle(`${array[pageI].Name[0]}`)
                .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                .setURL(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL()))
                .setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL()));

            if (item === "Skin") embed.setDescription(array[pageI].Des ? array[pageI].Des : "Unknown Description...");
            if (array.length === 1) return message.channel.send(embed);

            spamStopper.add(message.author);
            const msg = await message.channel.send(embed);

            const emojis = ["⏪", "⏩", "❌"];

            if (item === "Portrait" || item === "Frame") emojis.push("📥");


            for (const emoji of emojis) {
                await msg.react(emoji);
            }

            const Filter = (reaction, user) => emojis.includes(reaction.emoji.name) & user.id === message.author.id;

            const collector = msg.createReactionCollector(Filter, {
                time: 300000
            });

            collector.on('collect', async (r) => {
                if (r.emoji.name == "❌") {
                    await collector.stop();

                    spamStopper.delete(message.author);
                    await msg.reactions.removeAll().catch(error => console.log(error));
                    embed.setFooter(`This message is now inactive`);


                } else if (r.emoji.name == "⏩") {
                    await r.users.remove(message.author);

                    if (pageI === array.length - 1) pageI = 0;
                    else pageI++;

                    embed.setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL()))
                        .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                        .setURL(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL())).setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                        .setTitle(`${array[pageI].Name[0]}`)

                    if (item === "Skin") embed.setDescription(array[pageI].Des ? array[pageI].Des : "Unknown Description...");

                    await msg.edit(embed);
                } else if (r.emoji.name == "⏪") {
                    await r.users.remove(message.author);

                    if (pageI === 0) pageI = array.length - 1;
                    else pageI--;

                    embed.setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL()))
                        .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                        .setURL(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL()))
                        .setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                        .setTitle(`${array[pageI].Name[0]}`);

                    if (item === "Skin") embed.setDescription(array[pageI].Des ? array[pageI].Des : "Unknown Description...");

                } else if (r.emoji.name == "📥") {
                    spamStopper.delete(message.author);
                    await msg.reactions.removeAll().catch(error => console.log(error));
                    await collector.stop();

                    if (item === "Portrait") LP.Portrait = array[pageI].logicpathID;
                    else LP.frames.equipped = array[pageI].Item;

                    await LP.save().catch(e => console.log(e));

                    embed.setFooter(`Equipped ${array[pageI].Name[0]}`);
                }

                await msg.edit(embed);
            });


            collector.on('end', async (r) => {
                if (msg.deleted === true || !r || r === null || r === undefined || !msg) {
                    spamStopper.delete(message.author);
                    return collector.stop();
                }

                spamStopper.delete(message.author);
                await msg.reactions.removeAll().catch(error => console.log(error));
                embed.setFooter(`This message is now inactive`);

                await msg.edit(embed);
            });

        }


        const array = [];

        if (spamStopper.has(message.author)) return message.reply("**Please react with ❌ on the previous embed before being able to start a new item scroller!**");

        let msggg = "Please provide me something to **view**...\n\nTo view what **skins** you own, do `" + prefix + "view skins`\nTo view **S** or **A** skins separatedly, add `S` or `A` after 'skins'\n**Example:** `" + prefix + "view skins S`\n\nTo view a **portrait**, do `" + prefix + "view portraits`\nYou can also equip the portrait immediately by providing it's **name**...\n**Example:** `" + prefix + "view portrait Black And White Magician`\n\nTo view frames, do `" + prefix + "view frames`\n\nYou can also view what **characters** you own by doing\n`" + prefix + "view characters`\n\nTo view **Hunters** separatedly from **Survivors** or vice versa, add the __faction name__ after `characters`\n**Example:** `" + prefix + "view characters survivors`";
        if (!args[1]) return ErrorMsg(bot, message, msggg);

        if (["skin", "skins"].includes(args[1].toLowerCase())) {
            let skinFiltered;

            if (!args[2]) skinFiltered = Skins;
            else if (["s", "sskins", "sskin", "s-skins"].includes(args[2].toLowerCase())) skinFiltered = Skins.filter(x => x.Color === "0xfcba03");
            else if (["a", "askins", "askin", "a-skins"].includes(args[2].toLowerCase())) skinFiltered = Skins.filter(x => x.Color !== "0xfcba03");
            else skinFiltered = Skins;

            skinFiltered.forEach(x => {
                if (LP.Opened.includes(x.Item)) array.push(x);
            });

            await ScrollThrough(array, "Skin");


        } else if (["portraits", "portrait"].includes(args[1].toLowerCase())) {

            let boolean = false;

            array.push(Portraits[0]);
            Portraits.forEach(x => {
                if (LP.Opened.includes(x.Item)) array.push(x);
            });

            array.forEach(x => {
                if (x.Name.includes(args.slice(2).join(" ").toLowerCase())) {
                    if (boolean === true) return;

                    boolean = true;
                    const setPortraitEmbed = new MessageEmbed()
                        .setTitle("Succesfully changed your portrait!")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                        .setURL(x.linkTag.replace("pfp", message.author.displayAvatarURL()))
                        .setThumbnail(x.linkTag.replace("pfp", message.author.displayAvatarURL()))
                        .setColor("0x952cdb")
                        .setDescription("Your portrait has been set to:\n**" + x.Name[0] + "**\n\nWanna see how it looks like? Do `" + prefix + "logicpath`")
                        .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                    LP.Portrait = x.logicpathID;
                    LP.save().catch(e => console.log(e));

                    message.channel.send(setPortraitEmbed);
                }
            });

            if (boolean === false) await ScrollThrough(array, "Portrait");
        } else if (["frame", "frames", "portraitframe", "portraitframes", "portrait-frame"].includes(args[1].toLowerCase())) {

            Frames.forEach(x => {

                let booleanedValue;
                if (x.purchasableFrame) {

                    booleanedValue = x.purchasableFrame
                        .replace("frame1", LP.frames.frame1)
                        .replace("frame2", LP.frames.frame2)
                        .replace("frame3", LP.frames.frame3)
                        .replace("frame4", LP.frames.frame4)
                        .replace("frame5", LP.frames.frame5)
                        .replace("frame6", LP.frames.frame6);

                    if (booleanedValue === "true") array.push(x);

                } else {
                    if (LP.Opened.includes(x.Item)) array.push(x);
                }
            });

            array.push(Frames[6], Frames[7], Frames[8], Frames[9]);
            await ScrollThrough(array, "Frame");


        } else if (["character", "characters", "chars", "char", "c"].includes(args[1].toLowerCase())) {

            let Chars = Characters;
            if (args[2]) {
                if (["survivors", "survivor", "surv", "s"].includes(args[2].toLowerCase())) Chars = Characters.filter(charac => charac.Price === (3568 || 1988 || 1468))
                if (["hunters", "hunter", "hunta", "h"].includes(args[2].toLowerCase())) Chars = Characters.filter(charac => charac.Price === (4508 || 3988 || 1888))
            }

            for (const x of Chars) {
                if (x.LP_Value.includes("Survivors")) {
                    if (LP.Survivors[x.LP_Value.replace("Survivors.", "")] === true) array.push(x);
                } else if (x.LP_Value.includes("Hunters")) {
                    if (LP.Hunters[x.LP_Value.replace("Hunters.", "")] === true) array.push(x);
                } else {
                    if (LP[x.LP_Value] === true) array.push(x);
                }
            }

            await ScrollThrough(array, "Character");
        }
        else {
            return ErrorMsg(bot, message, msggg);
        }
    }
}