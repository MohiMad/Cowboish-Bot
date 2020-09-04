const logicPath = require("../models/logicpath.js");
const { newLP, ErrorMsg } = require("../functions.js");
const spamStopper = new Set();
const { Skins, Portraits, Frames } = require("../essences/items.json");

const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'view',
    description: "Scroll between the items you own",
    execute: async (message, bot, args, prefix) => {

        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        async function ScrollThrough(array, item) {
            let pageI = 0;

            let embed = new RichEmbed()
                .setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                .setTitle(`${array[pageI].Name[0]}`)
                .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                .setURL("https://youtu.be/K3GuaZlyiVw")
                .setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL));

            if (!array.length) return message.reply(`**you don't have any ${item}s**`);
            if (array.length === 1) return message.channel.send(embed);


            spamStopper.add(message.author);
            let msg = await message.channel.send(embed);


            if (item === "Portrait" || item === "Frame") {

                ["⏪", "⏩", "📥", "❌"].forEach(async (x) => msg.react(x));

                let equipFilter = (reaction, user) => reaction.emoji.name === '📥' & user.id === message.author.id;

                let equip = msg.createReactionCollector(equipFilter, {
                    time: 300000
                });


                equip.on('collect', async r => {

                    msg.clearReactions().catch(error => console.log(error));
                    spamStopper.delete(message.author);

                    if (item === "Portrait") LP.Portrait = array[pageI].logicpathID;
                    else LP.frames.equipped = array[pageI].Item;

                    LP.save().catch(e => console.log(e));

                    embed.setFooter(`Equipped ${array[pageI].Name[0]}`);
                    await msg.edit(embed);

                });

            } else {
                ["⏪", "⏩", "❌"].forEach(async (x) => msg.react(x));
            }

            let backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;

            let forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;

            let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

            let end = msg.createReactionCollector(endFilter, {
                time: 300000
            });

            let back = msg.createReactionCollector(backFilter, {
                time: 300000
            });

            let forward = msg.createReactionCollector(forwardFilter, {
                time: 300000
            });

            back.on('collect', async r => {
                await r.remove(message.author);

                if (pageI === 0) pageI = array.length - 1;
                else pageI--;


                embed.setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL))
                    .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                    .setURL("https://youtu.be/K3GuaZlyiVw")
                    .setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                    .setTitle(`${array[pageI].Name[0]}`);

                await msg.edit(embed);
            });

            forward.on('collect', async r => {

                await r.remove(message.author);

                if (pageI === array.length - 1) pageI = 0;
                else pageI++;

                embed.setImage(array[pageI].linkTag.replace("pfp", message.author.displayAvatarURL))
                    .setFooter(`${item} ${pageI + 1} of ${array.length}`)
                    .setURL("https://youtu.be/K3GuaZlyiVw")
                    .setColor(array[pageI].Color ? array[pageI].Color : "RANDOM")
                    .setTitle(`${array[pageI].Name[0]}`)

                await msg.edit(embed);
            });

            end.on('collect', async r => {

                msg.clearReactions().catch(error => console.log(error));

                await end.stop();
                await forward.stop();
                await back.stop();
                spamStopper.delete(message.author);
                embed.setFooter(`This message is now inactive`);

                await msg.edit(embed);

            });

            end.on('end', async () => {
                spamStopper.delete(message.author);
                msg.clearReactions().catch(error => console.log(error));
                embed.setFooter(`This message is now inactive`);

                await msg.edit(embed);
            });

        }


        const array = [];

        if (spamStopper.has(message.author)) return message.reply("**Please react with ❌ on the previous embed before being able to start a new item scroller!**");

        let msggg = "Please provide me something to view/equip...\n\nTo view what skins you own, do `" + prefix + "view skins`\nTo view S or A skins separatedly, add `S` or `A` after 'skins'\n**Example:** `" + prefix + "view skins S`\n\nTo view/equip a **portrait**, do `" + prefix + "view portraits`\nYou can also equip the portrait immeditly by providing it's name...\n**Example:** `" + prefix + "equip portrait Black And White Magician`\n\nTo equip/view a frame, do `" + prefix + "equip frame`";
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
                    let setPortraitEmbed = new RichEmbed()
                        .setTitle("Succesfully changed your portrait!")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                        .setThumbnail(x.linkTag.replace("pfp", message.author.displayAvatarURL))
                        .setColor("0x952cdb")
                        .setDescription("Your portrait has been set to:\n**" + x.Name[0] + "**\n\nWanna see how it looks like? Do `" + prefix + "logicpath`")
                        .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                    LP.Portrait = x.logicpathID;
                    LP.save().catch(e => console.log(e));

                    message.channel.send(setPortraitEmbed);
                }
            });

            if (boolean === false) await ScrollThrough(array, "Portrait");
        } else if (["frame", "frames", "portraitframe", "portraitframes", "portrait-frame"].includes(args[1].toLowerCase())) {

            var booleaaaan = false;

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

                if (x.Name.includes(args[2].toLowerCase())) {
                    booleaaaan = true;

                    if (booleanedValue === "false") booleaaaan;

                    let embed = new RichEmbed()
                        .setTitle("Your frame is now equipped!")
                        .setColor("0x14abf7")
                        .setDescription("Wanna see how it looks like? go ahead and do `" + prefix + "logicpath`")
                        .setThumbnail(x.linkTag);

                    LP.frames.equipped = x.Item;
                    LP.save().catch(e => console.log(e));

                    message.channel.send(embed);
                }
            });


            if (booleaaaan === false) {
                array.push(Frames[6], Frames[7], Frames[8], Frames[9]);

                await ScrollThrough(array, "Frame");
            }

        } else {
            return ErrorMsg(bot, message, msggg);
        }
    }
}