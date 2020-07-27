const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP, ErrorMsg } = require("../functions.js");

const { ess1, ess2, ess3, frags } = require("../emojis.json");

const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'open',
    description: "opens an essence for ya ",
    execute: async (message, args, bot, MohiMoo, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        var s10_cmd = "`s12-1` or `1`";
        var s10_2_cmd = "`s12-2` or `2`";
        var s10_3_cmd = "`s12-3` or `3`";

        var exmple = "`" + prefix + "open 1` to open a `s12-1` " + ess1 + " essence";
        var stats_cmd = "`" + prefix + "open stats <essenceID>`"
        let author = message.author.username;
        var open10 = "`" + prefix + "open s12-1 10`";

        const noargsEmbed = new RichEmbed()
            .setTitle("Please provide one of the essences ID after the command")
            .setColor("RANDOM")
            .setDescription(
                stripIndents`The current season's Essences are:
                        ${ess1} | **Essences s12-1** ─ ID ➜ ${s10_cmd}
                        ${ess2} | **Essence s12-2** (__Unavailable__) ─ ID ➜ ${s10_2_cmd}
                        ${ess3} | **Essence s12-3** (__Unavailable__) ─ ID ➜ ${s10_3_cmd}

                        **Example**: ${exmple}

                        To check what items you have obtained from a specific essence, do
                        ${stats_cmd}

                        Wanna open **10** essences at once? Add __10__ in your second argument:
                        **Example:** ${open10}
                `);



        //functions for making opening 10 easier to make---
        let color;

        function changeColor(variable) {
            if (variable === 0) color = "0xe3ca0e"; //gold
            else if ([1, 2].includes(variable)) color = "0xae0ee3"; //A
            else if ([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19].includes(variable)) color = "0x0e98e3"; // blue
            else if ([13, 14, 15, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50].includes(variable)) color = "0x000000"; //black
            else {
                color = "0x15e30e";
            }
        }

        let fragments = 0;

        function checkForItem(variable, essence) {

            if (LP.Opened.includes(`${essence}-${variable + 1}`)) {
                if (variable === 0) fragments = fragments + 2000;
                else if ([1, 2].includes(variable)) fragments = fragments + 1000;
                else if ([4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(variable)) fragments = fragments + 200;
                else if ([16, 17, 18, 19]) fragments = fragments + 72;
                else fragments = fragments + 36;
            } else {
                LP.Opened = [...LP.Opened, `${essence}-${variable + 1}`];

                if (variable === 0) {
                    LP.S = LP.S + 1;
                }
                else if ([1, 2].includes(variable)) LP.A = LP.A + 1;
                else if ([4, 5, 6, 7, 8, 9, 10, 11, 12, 13].includes(variable)) LP.B = LP.B + 1;
                else if ([21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36].includes(variable)) LP.C = LP.C + 1;
                else LP.D = LP.D + 1;
            }

        }

        try {


            if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

            else if (!LP) {
                newLP(message);
            }

            else if (!args[1]) {

                message.channel.send(noargsEmbed);

            }

            else if (["s12-1", "s121", "ess1"].includes(args[1].toLowerCase()) || args[1] === "1") {

                if (!args[2]) {
                    let Rnumber = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

                    let item = "s12-1-" + Rnumber;

                    const s9Embed = new RichEmbed()
                        .attachFiles(["./essences/s12-1/" + item + ".jpg"])
                        .setImage('attachment://' + item + ".jpg");


                    if (LP.Ess1 === 0) {
                        return ErrorMsg(bot, message, "You don't have any " + ess1 + " `s12-1` essences!\nTry rolling some dices or buy some from the shop!")

                    }
                    else if (item === "s12-1-1") {
                        s9Embed.setColor("0xfcba03");
                        s9Embed.setAuthor(`💛 Yaaay you got Kroto, ${author} 💛`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter("S stands for Super-Lucky :v");

                        if (LP.Opened.includes(item)) {

                            s9Embed.setDescription(`And because you somehow got that before, you get **2000** ${frags} instead!`);
                            LP.frags = LP.frags + 2000;

                        }
                        else {
                            LP.S = LP.S + 1;
                            LP.Opened = [...LP.Opened, item];
                        }

                    }
                    //A skin values
                    else if (["s12-1-2", "s12-1-3"].includes(item)) {
                        s9Embed.setColor("0xbb2af5");
                        s9Embed.setAuthor(`💜 Yeee ${author} got an A skin 💜`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter("A stands for Adorable... Reminds me of someone ;)");

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`You already got that skin before! Here, take these **1000** ${frags} instead!`);
                            LP.frags = LP.frags + 1000;
                        }
                        else {
                            LP.A = LP.A + 1;
                            LP.Opened = [...LP.Opened, item];
                        }


                    }
                    else if (["s12-1-4", "s12-1-5", "s12-1-6", "s12-1-7", "s12-1-8"].includes(item)) {
                        s9Embed.setColor("0x2e65b8");
                        s9Embed.setAuthor(`💙 Yaay! A B skin for ${author}! 💙`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter("B is for Beatiful-Human-Beings :3");

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`You already got that skin before! Here, take these **200** ${frags} instead!`);
                            LP.frags = LP.frags + 200;
                        }
                        else {
                            LP.B = LP.B + 1;
                            LP.Opened = [...LP.Opened, item];
                        }



                    }
                    else if (["s12-1-20", "s12-1-21", "s12-1-22", "s12-1-23", "s12-1-24", "s12-1-25", "s12-1-26", "s12-1-27", "s12-1-28", "s12-1-29", "s12-1-30"].includes(item)) {
                        s9Embed.setColor("0x1BE926");
                        s9Embed.setAuthor(`💚 You get a C skin, ${author}! 💚`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter(`${author} says yeehaw •w•`);

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`You have this C skin already! Here, take these **72** ${frags} instead!`);
                            LP.frags = LP.frags + 72;
                        }
                        else {
                            LP.C = LP.C + 1;

                            LP.Opened = [...LP.Opened, item];
                        }

                    }
                    else if (["s12-1-36", "s12-1-37", "s12-1-38", "s12-1-39", "s12-1-40", "s12-1-41", "s12-1-42", "s12-1-43", "s12-1-44", "s12-1-45", "s12-1-46"].includes(item)) {

                        s9Embed.setColor("0xffffff");
                        s9Embed.setAuthor(`🖤 LMAO ${author} got a graffiti 🖤`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter(`Bots can have feelings. I feel bad for you, ${author} :v`);

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`LMAO even worse, you already have this graffiti! Here, take these **36** ${frags} instead!`);
                            LP.frags = LP.frags + 36;
                        }
                        else {
                            LP.D = LP.D + 1;

                            LP.Opened = [...LP.Opened, item];
                        }

                    }
                    else if (["s12-1-12", "s12-1-31", "s12-1-32", "s12-1-33", "s12-1-34", "s12-1-35"].includes(item)) {

                        s9Embed.setColor("0x2e65b8");
                        s9Embed.setAuthor(`💙 Yeeet, a standby motion for ${author}! 💙`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter(`*pets ${author}...* >:3`);

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`You have this item already! Here, take these **72** ${frags} instead!`);
                            LP.frags = LP.frags + 72;
                        }
                        else {
                            LP.B = LP.B + 1;

                            LP.Opened = [...LP.Opened, item];
                        }

                    }
                    else if (["s12-1-9", "s12-1-10", "s12-1-11", "s12-1-16", "s12-1-17", "s12-1-18", "s12-1-19"].includes(item)) {

                        s9Embed.setColor("0x2e65b8");
                        s9Embed.setAuthor(`💙 You get an emote, ${author} 💙`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter("Emoting while kiting is bad for your helth :v");

                        if (LP.Opened.includes(item)) {
                            s9Embed.setDescription(`You have this emote already! Here, take these **36** ${frags} instead!`);
                            LP.frags = LP.frags + 36;
                        }
                        else {
                            LP.B = LP.B + 1;

                            LP.Opened = [...LP.Opened, item];
                        }


                    } else if (["s12-1-13", "s12-1-14", "s12-1-15", "s12-1-47", "s12-1-48", "s12-1-49", "s12-1-50"].includes(item)) {

                        s9Embed.setColor("0xffffff");
                        s9Embed.setAuthor(`🖤 You get a portrait, ${author} 🖤`, "https://i.imgur.com/0SglSpn.png");
                        s9Embed.setFooter("Cheer up! At least they have an actual usage now :'D");


                        let ess1_portrait_message = "0";

                        let oldPortraitItem = "0";

                        if (item === "s12-1-13") {
                            ess1_portrait_message = "Black and White Explorer";
                            oldPortraitItem = "ess1-14";

                        } else if (item === "s12-1-14") {
                            ess1_portrait_message = "Black and White Magician";
                            oldPortraitItem = "ess1-15";

                        } else if (item === "s12-1-15") {
                            ess1_portrait_message = "Black and White Gardener";
                            oldPortraitItem = "ess1-16";

                        } else if (item === "s12-1-47") {
                            ess1_portrait_message = "Colorful Memory GameKeeper";
                            oldPortraitItem = "ess1-48";

                        } else if (item === "s12-1-48") {
                            ess1_portrait_message = "Colorful Memory Coordinator";
                            oldPortraitItem = "ess1-49";

                        } else if (item === "s12-1-49") {
                            oldPortraitItem = "ess1-50";

                            ess1_portrait_message = "Colorful Memory Geisha";
                        }
                        else if (item === "s12-1-50") {
                            oldPortraitItem = "ess1-51";

                            ess1_portrait_message = "Colorful Memory Lawyer";
                        }
                        if (LP.Opened.includes(oldPortraitItem)) {
                            s9Embed.setDescription(`You have this portrait already! Here, take these **36** ${frags} instead!`);
                            LP.frags = LP.frags + 36;
                        }
                        else {
                            s9Embed.setDescription("Yaaay! You got a new portrait, you can equip it by doing\n`" + prefix + "equip portrait " + ess1_portrait_message + "`\nBy equipping the portrait, it will be visable in the \n`" + prefix + "logicpath` command");

                            LP.D = LP.D + 1;

                            LP.Opened = [...LP.Opened, oldPortraitItem];
                        }

                    }

                    LP.Ess1 = LP.Ess1 - 1;

                    await LP.save().catch(err => console.log(err));
                    message.channel.send(s9Embed);
                }
                else if (["10", "ten"].includes(args[2].toLowerCase())) {

                    return message.channel.send(`Sorry, **${author}**!\nThis function is temporarily disabled due to small bugs and errors...`)

                    if (LP.Ess1 < 10) return message.channel.send(`**You have less than 10 s12-1 essences, ${message.author.username}**`);

                    let itemArray = [
                        "[Costume] ",

                        "[Costume] ",
                        "[Costume] ",

                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",

                        "[Emote] ",
                        "[Standby Motion] ",
                        "[Standby Motion] ",
                        "[Standby Motion] ",

                        "[Portrait] ",
                        "[Portrait] ",
                        "[Portrait] ",

                        "[Emote] ",
                        "[Emote] ",
                        "[Emote] ",
                        "[Emote] ",

                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",
                        "[Costume] ",

                        "[Standby Motion] ",
                        "[Standby Motion] ",
                        "[Standby Motion] ",
                        "[Standby Motion] ",
                        "[Standby Motion] ",

                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",

                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Graffiti] ",
                        "[Portrait] ",
                        "[Portrait] ",
                        "[Portrait] ",
                        "[Portrait] ",
                    ];

                    let attachmentLinks = [

                    ];



                    let itemNumber1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber2 = Math.floor(Math.random() * 50);
                    let itemNumber3 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber4 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber5 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber6 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber7 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
                    let itemNumber8 = Math.floor(Math.random() * 50);
                    let itemNumber9 = Math.floor(Math.random() * 50);
                    let itemNumber10 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;



                    let description = `\n1️⃣ **${itemArray[itemNumber1]}**`;

                    changeColor(itemNumber1);
                    checkForItem(itemNumber1, "s12-1");


                    let Ess1TenEmbed = new RichEmbed()
                        .setTitle("Here is what you got from your 10 essences:")
                        .setTimestamp()
                        .setImage(attachmentLinks[itemNumber1])
                        .setAuthor("10 s12-1 essences has been opened!", "https://i.imgur.com/0SglSpn.png")
                        .setDescription(description);

                    Ess1TenEmbed.setColor(color);


                    let msg = await message.channel.send(Ess1TenEmbed);

                    setTimeout(async () => {

                        description = description + "\n\n2️⃣ **" + itemArray[itemNumber2] + "**";
                        changeColor(itemNumber2);
                        checkForItem(itemNumber2, "s12-1");

                        Ess1TenEmbed.setColor(color);

                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber2])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 1);

                    setTimeout(async () => {

                        description = description + "\n\n3️⃣ **" + itemArray[itemNumber3] + "**";
                        changeColor(itemNumber3);
                        checkForItem(itemNumber3, "s12-1");


                        Ess1TenEmbed.setColor(color);

                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber3])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);

                    }, 2000 * 2);

                    setTimeout(async () => {

                        description = description + "\n\n4️⃣ **" + itemArray[itemNumber4] + "**";
                        changeColor(itemNumber4);
                        checkForItem(itemNumber4, "s12-1");


                        Ess1TenEmbed.setColor(color);

                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber4])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 3);

                    setTimeout(async () => {

                        description = description + "\n\n5️⃣ **" + itemArray[itemNumber5] + "**";
                        changeColor(itemNumber5);
                        checkForItem(itemNumber5, "s12-1");


                        Ess1TenEmbed.setColor(color);
                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber5])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 4);

                    setTimeout(async () => {

                        description = description + "\n\n6️⃣ **" + itemArray[itemNumber6] + "**";
                        changeColor(itemNumber6);
                        checkForItem(itemNumber6, "s12-1");


                        Ess1TenEmbed.setColor(color);

                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber6])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 5);

                    setTimeout(async () => {

                        description = description + "\n\n7️⃣ **" + itemArray[itemNumber7] + "**";
                        changeColor(itemNumber7);
                        checkForItem(itemNumber7, "s12-1");


                        Ess1TenEmbed.setColor(color);
                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber7])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 6);

                    setTimeout(async () => {

                        description = description + "\n\n8️⃣ **" + itemArray[itemNumber8] + "**";
                        changeColor(itemNumber8);
                        checkForItem(itemNumber8, "s12-1");

                        Ess1TenEmbed.setColor(color);
                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber8])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 7);


                    setTimeout(async () => {

                        description = description + "\n\n9️⃣ **" + itemArray[itemNumber9] + "**";
                        changeColor(itemNumber9);
                        checkForItem(itemNumber9, "s12-1");


                        Ess1TenEmbed.setColor(color);
                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber9])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 8);


                    setTimeout(async () => {

                        description = description + "\n\n🔟 **" + itemArray[itemNumber10] + "**";
                        changeColor(itemNumber10);
                        checkForItem(itemNumber10, "s12-1");


                        Ess1TenEmbed.setColor(color);
                        Ess1TenEmbed.setImage(attachmentLinks[itemNumber10])
                        Ess1TenEmbed.setDescription(description);

                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 9);

                    setTimeout(async () => {

                        description = description + `\n\nDuplicated items gave you: **${fragments}** <:frags:655840344725913600>`;

                        Ess1TenEmbed.setDescription(description);

                        LP.frags = LP.frags + fragments;
                        LP.Ess1 = LP.Ess1 - 10;

                        LP.save().catch(err => console.log(err));
                        await msg.edit(Ess1TenEmbed);
                    }, 2000 * 10);

                } else {
                    message.channel.send(noargsEmbed);
                }

            } else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                if (!args[2]) return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** (__Unavailable__) ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** (__Unavailable__) ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");

                let e = "s12-1 items:";
                let x = 0;

                let embed = new RichEmbed()
                    .setColor("0xf0d911");

                function itemCheck(itemName, LP, path) {
                    if (LP.Opened.includes(path)) {
                        x = x + 1;
                        e = e + `\n✅ ${itemName}`;
                    }
                    else {
                        e = e + `\n❌ ${itemName}`;
                    }
                }

                if (["s12-1", "ess1"].includes(args[2].toLowerCase()) || args[2] === "1") {

                    itemCheck("[Costume] Dancer - Kroto", LP, "s12-1-1");
                    itemCheck("[Costume] Prospector - Ronald Of Ness", LP, "s12-1-2");
                    itemCheck('[Costume] Mad Eyes - "Scrooge"', LP, "s12-1-3");
                    itemCheck("[Costume] Priestess - Encore", LP, "s12-1-4");
                    itemCheck("[Costume] The Ripper - Golden Scissors", LP, "s12-1-5");
                    itemCheck("[Costume] Gardener - Commander", LP, "s12-1-6");
                    itemCheck("[Costume] Mechanic - Smarty Pants", LP, "s12-1-7");
                    itemCheck("[Costume] Perfumer - Fragrance Queen", LP, "s12-1-8");
                    itemCheck("[Emote] Dream Witch - Threaten", LP, "s12-1-9");
                    itemCheck("[Emote] Soul Weaver - Threaten", LP, "s12-1-10");
                    itemCheck("[Emote] Wu Chang - Threaten", LP, "s12-1-11");
                    itemCheck("[Standby Motion] Axe boy - Demonstrate", LP, "s12-1-12");

                    itemCheck("[Portrait] Black-and-White - Explorer", LP, "ess1-14");
                    itemCheck("[Portrait] Black-and-White - Magician", LP, "ess1-15");
                    itemCheck("[Portrait] Black-and-White - Gardener", LP, "ess1-16");

                    itemCheck("[Emote] Magician - Cheer", LP, "s12-1-16");
                    itemCheck("[Emote] Explorer - Cheer", LP, "s12-1-17");
                    itemCheck("[Emote] Mechanic - Cheer", LP, "s12-1-18");
                    itemCheck("[Emote] Lawyer - Cheer", LP, "s12-1-19");

                    itemCheck("[Costume] The Ripper - Black Baron", LP, "s12-1-20");
                    itemCheck("[Costume] Doctor - Quiet Blue", LP, "s12-1-21");
                    itemCheck("[Costume] Magician - Wine", LP, "s12-1-22");
                    itemCheck("[Costume] Mechanic - Ink Black", LP, "s12-1-23");
                    itemCheck("[Costume] The Feaster - Moss", LP, "s12-1-24");
                    itemCheck("[Costume] Embalmer - Casual Yellow", LP, "s12-1-25");
                    itemCheck("[Costume] Axe Boy - White Sugar", LP, "s12-1-26");
                    itemCheck("[Costume] Bloody Queen - Sunset Yellow", LP, "s12-1-27");
                    itemCheck("[Costume] Evil Reptilian - Purple Aconite", LP, "s12-1-28");
                    itemCheck("[Costume] Acrobat - Scarlet", LP, "s12-1-29");
                    itemCheck("[Costume] Postman - Grace Pink", LP, "s12-1-30");

                    itemCheck("[Standby Motion] Magician - Snooze", LP, "s12-1-31");
                    itemCheck("[Standby Motion] Theif - Ready", LP, "s12-1-32");
                    itemCheck("[Standby Motion] Coordinator - Snooze", LP, "s12-1-33");
                    itemCheck("[Standby Motion] Lawyer - Snooze", LP, "s12-1-34");
                    itemCheck("[Standby Motion] Magician - Wait", LP, "s12-1-35");

                    itemCheck("[Graffiti] Hell Ember's Shark Stick - Cartoon", LP, "s12-1-36");
                    itemCheck("[Graffiti] The Feaster's Tentacles - Cartoon", LP, "s12-1-37");
                    itemCheck("[Graffiti] The Soul Weaver's Dagger - Cartoon", LP, "s12-1-38");
                    itemCheck("[Graffiti] Theif's Flashlight - Cartoon", LP, "s12-1-39");
                    itemCheck("[Graffiti] Smiley Face - Gray Shadow", LP, "s12-1-40");
                    itemCheck("[Graffiti] Theif - Gray Shadow", LP, "s12-1-41");

                    itemCheck("[Graffiti] Priestess - Gray Shadow", LP, "s12-1-42");
                    itemCheck("[Graffiti] Explorer - Gray Shadow", LP, "s12-1-43");
                    itemCheck("[Graffiti] Dancer - Gray Shadow", LP, "s12-1-44");
                    itemCheck("[Graffiti] Lucky Guy - Gray Shadow", LP, "s12-1-45");
                    itemCheck("[Graffiti] Priestess - Grayed", LP, "s12-1-46");
                    itemCheck("[Portrait] Colorful Memory - GameKeeper", LP, "ess1-48");
                    itemCheck("[Portrait] Colorful Memory - Coordinator", LP, "ess1-49");
                    itemCheck("[Portrait] Colorful Memory - Geisha", LP, "ess1-50");
                    itemCheck("[Portrait] Colorful Memory - Lawyer", LP, "ess1-51");

                    embed.setDescription(`${e}`)
                    embed.setAuthor(`s12-1 items claimed!`, "https://i.imgur.com/0SglSpn.png");
                    embed.setFooter(`Obtained ${x} items out of 50`);

                    message.channel.send(embed);

                } else {
                    return ErrorMsg(bot, message, "**Please provide one of the essence's ID**\n\nThe current season's Essences are...\n" + ess1 + " | **Essences s12-1** ─ ID ➜ " + s10_cmd + "\n" + ess2 + " | **Essence s12-2** (__Unavailable__) ─ ID ➜ " + s10_2_cmd + "\n" + ess3 + " | **Essence s12-3** (__Unavailable__) ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s12-1`");
                }

            } else {
                message.channel.send(noargsEmbed);
            }

        } catch (err) {
            console.log(err);
            message.reply("sorry, hit an unfamiliar error!");

        }

    }
}