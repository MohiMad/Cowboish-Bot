const logicPath = require("../models/logicpath.js");
const { MessageEmbed } = require("discord.js");
const { findMember, newLP, ErrorMsg } = require("../functions.js");
const e = require("../emojis.json");
const { Skins } = require("../essences/items.json");

module.exports = {
    name: 'gift',
    description: "Gift yo friends yo items :D",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        let LP = await logicPath.findOne({ UserID: message.author.id });
        let gifted = await findMember(message, args[1]);

        if (!args[1] || !args[2] || !args[3]) return ErrorMsg(bot, message, "**Too few arguments**\nPlease provide someone to gift, how much you want to gift and what you want to gift.\nLol did i get you confused?\nHere is the correct usage: `" + prefix + "gift <@tagSomeone> <amount(NUMBER)> <item>`\n\nGiftable items are: `inspirations`, `fragments`, `clues`, `ess1`, `ess2`, `ess3`\n\nWanna gift someone a **skin** using your" + e.frags + "?\nYou can now do that by doing:\n`" + prefix + "gift <@tagSomeone> skin <skinName/Number>`\n\nTo check what skins are purchasable, check the `" + prefix + "shop skins` ;)");
        if (args[2].includes("-")) return message.channel.send(`**${message.author.username}** can't gift a negative number >:/`);
        if (Number(args[2]) < 1) return message.channel.send(`**${message.author}**, LMAO you troll! Are you tryna gift your friends nothing? D:<`);
        if (!gifted) return ErrorMsg(bot, message, "Couldn't find that user!\nPlease make sure that you mention them right after the command execution!\nExample: `" + prefix + "gift`" + ` ${message.author} ` + "`10 fragments`");
        if (gifted.user.id === bot.user.id) return message.reply("I don't want your gift... Keep it for yourself -v-");
        if (gifted.user.bot) return message.reply(`Are you for real?\nare you trying to gift a bot??! Why? .-.`);
        if (gifted.id === message.author.id) return message.reply("Are you serious??\n**Y-you wanna gift yourself??!**\nSorry friend but that's not how life works :/");

        let giftedLP = await logicPath.findOne({ UserID: gifted.id });

        if (!giftedLP) return ErrorMsg(bot, message, "This user doesn't have any data saved!\nPlease ask them to execute one of the commands below so i can create an account for em :)\n\n`quick`, `hunt`, `roll` or other `" + prefix + "help logicpath` commands");


        let giftableItems = [
            {
                searchArray: ["fragment(s)", "frags", "frag", "fragments", "fragment"],
                item: "frags",
                link: "s3YZNDR",
                emoji: e.frags,
                hex: "0xC718EA"


            },
            {
                searchArray: ["inspiration(s)", "inspirations", "insp", "inspiration"],
                item: "Inspirations",
                link: "WCeWjEz",
                emoji: e.insp,
                hex: "0xE1EB15"

            },
            {
                searchArray: ["clue(s)", "clues", "clue"],
                item: "Clues",
                link: "dBx5Kux",
                emoji: e.clues,
                hex: "0xE5EC56"

            },
            {
                searchArray: ["s13-1 essences", "ess1", "s13-1", "1"],
                item: "Ess1",
                link: "0SglSpn",
                emoji: e.ess1,
                hex: "0x1994F4"

            },
            {
                searchArray: ["13-2 essences", "ess2", "s13-2", "2"],
                item: "Ess2",
                link: "JGu6jXE",
                emoji: e.ess2,
                hex: "0xEA0CD6"
            },
            {
                searchArray: ["13-2 essences", "ess3", "s13-3", "3"],
                item: "Ess3",
                link: "QQxyNKu",
                emoji: e.ess3,
                hex: "0xEA600C"
            }
        ];

        if (["skins", "skin"].includes(args[2].toLowerCase())) {
            let toSearchString = args.slice(3).join("").toLowerCase().replace("-", "").replace("[Costume]", "")

            for (const skin of Skins) {
                if (skin.Name.includes(toSearchString)) {
                    let skinNAME = skin.Name[0].slice(skin.Name[0].indexOf("- ")).replace("- ", "");

                    if (giftedLP.Opened.includes(skin.Item)) return message.channel.send(`**${gifted.user.username}** already has **__${skinNAME}__**, ${message.author}`);
                    if (LP.frags < skin.Price) return message.channel.send(`**You don't have enough fragments${frags}...**\nYou disappointed me and **${gifted.user.username}**`);

                    let boughtSkinEmbed = new MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: "png", dynamic: true }))
                        .setDescription(`**${message.author.username}** gifted **${gifted.user.username}** __${skinNAME}__!\nWorth ${skin.Price} ${e.frags} :3`)
                        .setColor(skin.Color)
                        .setThumbnail(skin.linkTag)
                        .setFooter(gifted.user.username, gifted.user.displayAvatarURL({ format: "png", dynamic: true }))
                        .setTimestamp();


                    giftedLP.Opened = [...giftedLP.Opened, skin.Item];
                    LP.frags = LP.frags - skin.Price;
                    if (skin.Color === "0xfcba03") giftedLP.S = giftedLP.S + 1;
                    else giftedLP.A = giftedLP.A + 1;
                    [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));

                    return message.channel.send(boughtSkinEmbed);

                }

            }
        }

        for (const x of giftableItems) {

            if (x.searchArray.includes(args[3].toLowerCase())) {
                if (isNaN(args[2]) === true) return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `" + prefix + "gift`" + ` ${message.author}` + "` 10 " + x.searchArray[1] + "`");

                if (LP[x.item] < args[2]) return ErrorMsg(bot, message, `You don't have enough ${x.searchArray[0]}!\nYou have **${LP[x.item]}** ${x.searchArray[0]}!`);

                giftedLP[x.item] = giftedLP[x.item] + Number(args[2]);

                LP[x.item] = LP[x.item] - Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));

                let giftedEmbed = new MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setDescription(`**${message.author.username}** gifted **${gifted.user.username}** ${args[2]}${x.emoji}`)
                    .setColor(x.hex)
                    .setThumbnail(`https://i.imgur.com/${x.link}.png`)
                    .setFooter(`${message.author.username} made ${gifted.user.username}'s day ヽ(^ 0 ^)丿 `, gifted.user.displayAvatarURL());

                return message.channel.send(giftedEmbed);

            }
        }

        return ErrorMsg(bot, message, "Looks like you're having trouble with the items you want to gift\n**Here is a list of giftable items**:\n<:frags:655840344725913600> | Shortcuts: `frags`, `fragment`, `fragments`\n<:inspirations:655840409674711060> | Shortcuts: `insp`, `inspirations`, `inspiration`\n<:clue:655384523735040000> | Shortcuts: `clue`, `clues`\n" + e.ess1 + " | Shortcuts: `ess1`, `s13-1`, `1`\n<:ess2:655840643847028751> | Shortcuts: `ess2`, `s13-2`, `2`\n<:ess3:655840571616919586> | Shortcuts: `ess3`, `s13-3`, `3`\n**Example**: `" + prefix + "gift`" + ` ${message.author}` + "` 10 fragments`\n\nYou can also gift your friends **skins** by doing\n`" + prefix + "gift <@tagSomeone> skin <skinName/Number>`");

    }
}