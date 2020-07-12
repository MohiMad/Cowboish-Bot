const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP, ErrorMsg } = require("../functions.js");

const { ess1, ess2, ess3, frags } = require("../emojis.json");

const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'open',
    description: "opens an essence for ya ",
    execute: async (message, args, bot, MohiMoo, prefix) => {

        var s10_cmd = "`s11-1` or `1`";
        var s10_3_cmd = "`s11-3` or `3`";
        var exmple = "`" + prefix + "open 1` to open a `s11-1` " + ess1 + " essence";
        var stats_cmd = "`" + prefix + "open stats <essenceID>`"
        let author = message.author.username;

        const noargsEmbed = new RichEmbed()
            .setTitle("Please provide one of the essences ID after the command")
            .setColor("RANDOM")
            .setDescription(
                stripIndents`The current season's Essences are..
                        ${ess1} | **Essences s11-1** ─ ID ➜ ${s10_cmd}
                        ${ess3} | **Essence s11-3** ─ ID ➜ ${s10_3_cmd}
                        Example: ${exmple}
                        To check what items you have obtained from a specific essence, do
                        ${stats_cmd}
                `)

        try {

            const LP = await logicPath.findOne({ UserID: message.author.id });

            if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

            else if (!LP) { newLP(message) }

            else if (!args[1]) {

                message.channel.send(noargsEmbed);

            }

            else if (["s11-1", "s111", "ess1"].includes(args[1].toLowerCase()) || args[1] === "1") {

                let Rnumber = Math.floor(Math.random() * (51 - 1 + 1)) + 1;

                let item = "ess1-" + Rnumber;

                const s9Embed = new RichEmbed()
                    .attachFiles(["./essences/s11-1/" + item + ".jpg"])
                    .setImage('attachment://' + item + ".jpg");


                if (LP.Ess1 === 0) {
                    return ErrorMsg(bot, message, "You don't have any " + ess1 + " `s11-1` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (item === "ess1-1") {
                    s9Embed.setColor("0xfcba03");
                    s9Embed.setAuthor(`💛 Congrats ${author}! You get Violinist's S skin 💛`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("You probably wish to have that ingame :'))");

                    if (LP.Opened.includes(item)) {

                        if (LP.Hunters.NewHunta === false) {
                            s9Embed.setDescription('Because you got thier S skin, you get the Violinist as well UwU\nThat means you can play as him by doing `>hunt violinist`');
                            LP.Hunters.NewHunta = true;
                        } else {
                            s9Embed.setDescription(`And because you somehow got that before, you get **2000** ${frags} instead!`);
                            LP.frags = LP.frags + 2000;
                        }
                    }
                    else {
                        s9Embed.setDescription('Because you got thier S skin, you get the Violinist as well UwU\nThat means you can play as him by doing `>hunt violinist`');
                        LP.Hunters.NewHunta = true;
                        LP.S = LP.S + 1;
                        LP.Opened = [...LP.Opened, item];
                    }

                }
                //A skin values
                else if (["ess1-2", "ess1-3"].includes(item)) {
                    s9Embed.setColor("0xbb2af5");
                    s9Embed.setAuthor(`💜 ${author} gets an A skin 💜`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("You're lucky if it's Luchino's :3");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You already got that skin before! Here, take these **1000** ${frags} instead!`);
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.A = LP.A + 1;
                        LP.Opened = [...LP.Opened, item];
                    }


                }
                else if (["ess1-4", "ess1-5", "ess1-6", "ess1-7", "ess1-8", "ess1-9"].includes(item)) {
                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 Yaay! A B skin for ${author}! 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("So adorable! Just like you >.<");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You already got that skin before! Here, take these **200** ${frags} instead!`);
                        LP.frags = LP.frags + 200;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }



                }
                else if (["ess1-21", "ess1-22", "ess1-23", "ess1-24", "ess1-25", "ess1-26", "ess1-27", "ess1-28", "ess1-29", "ess1-30", "ess1-30", "ess1-31"].includes(item)) {
                    s9Embed.setColor("0x1BE926");
                    s9Embed.setAuthor(`💚 You get a C skin, ${author}! 💚`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter(":))");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You have this item already! Here, take these **72** ${frags} instead!`);
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.C = LP.C + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                }
                else if (["ess1-37", "ess1-38", "ess1-39", "ess1-40", "ess1-41", "ess1-42", "ess1-43", "ess1-44", "ess1-45", "ess1-46", "ess1-47"].includes(item)) {

                    s9Embed.setColor("0xffffff");
                    s9Embed.setAuthor(`🖤 Poor ${author}, they got a graffiti 🖤`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter(":'D");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You have this item already! Here, take these **36** ${frags} instead!`);
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                }
                else if (["ess1-11", "ess1-12", "ess1-13", "ess1-32", "ess1-33", "ess1-34", "ess1-35", "ess1-36"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 That's a standbymotion for ${author}! 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("Please stand by :v");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You have this item already! here, take these **72** ${frags} instead!`);
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                }
                else if (["ess1-10", "ess1-17", "ess1-18", "ess1-19", "ess1-20"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 You get an emote, ${author} 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("Please don't emote while kiting >:v");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You have this item already! Here, take these **36** ${frags} instead!`);
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }


                } else if (["ess1-14", "ess1-15", "ess1-16", "ess1-48", "ess1-49", "ess1-50", "ess1-51"].includes(item)) {

                    s9Embed.setColor("0xffffff");
                    s9Embed.setAuthor(`🖤 You get a portrait, ${author} 🖤`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription(`You have this item already! Here, take these **36** ${frags} instead!`);
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        let ess1_portrait_message = "0";

                        if (item === "ess1-14") {
                            ess1_portrait_message = "Black and White Explorer";

                        } else if (item === "ess1-15") {
                            ess1_portrait_message = "Black and White Magician";

                        } else if (item === "ess1-16") {
                            ess1_portrait_message = "Black and White Gardener";

                        } else if (item === "ess1-48") {
                            ess1_portrait_message = "Colorful Memory GameKeeper";

                        } else if (item === "ess1-49") {
                            ess1_portrait_message = "Colorful Memory Coordinator";

                        } else if (item === "ess1-50") {
                            ess1_portrait_message = "Colorful Memory Geisha";
                        }
                        else if (item === "ess1-51") {
                            ess1_portrait_message = "Colorful Memory Lawyer";
                        }

                        s9Embed.setDescription("Yaaay! You got a new portrait, you can equip it by doing\n`" + prefix + "equip " + ess1_portrait_message + "`\nBy equipping the portrait, it will be visable in the `" + prefix + "logicpath` command");

                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                }

                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));
                message.channel.send(s9Embed);


            }
            else if (["s11-3", "s113", "ess3"].includes(args[1].toLowerCase()) || args[1] === "3") {

                let random_number = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

                let ess3Item = "ess3-" + random_number;

                const ess3Embed = new RichEmbed()
                    .attachFiles(["./essences/s11-3/" + ess3Item + ".jpg"])
                    .setImage('attachment://' + ess3Item + ".jpg");


                if (LP.Ess3 === 0) {
                    return ErrorMsg(bot, message, "You don't have any `s11-3` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (ess3Item === "ess3-1") {
                    ess3Embed.setColor("0xfcba03");
                    ess3Embed.setAuthor(`💛 ${author} got Entomologist's S skin 💛`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("(/◕ヮ◕)/");

                    if (LP.Opened.includes(ess3Item)) {

                        if (LP.Entomologist === false) {
                            ess3Embed.setDescription('Because you got thier S skin, you get the Entomologist as well U-U\nThat means you can play as her by doing `' + prefix + 'quick entomologist`');
                            LP.Entomologist = true;
                        } else {
                            ess3Embed.setDescription(`And because you somehow got that before, you get **2000** ${frags} instead!`);
                            LP.frags = LP.frags + 2000;
                        }
                    }
                    else {
                        ess3Embed.setDescription('Because you got thier S skin, you get the Entomologist as well U-U\nThat means you can play as her by doing `' + prefix + 'quick entomologist`');
                        LP.Entomologist = true;
                        LP.S = LP.S + 1;
                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                }
                //A skin values
                else if (["ess3-2", "ess3-3"].includes(ess3Item)) {
                    ess3Embed.setColor("0xbb2af5");
                    ess3Embed.setAuthor(`💜 Ouu ${author} got an A skin 💜`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("Hehe (＾ｖ＾)");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You already got that skin before! Here, take these **1000** ${frags} instead!`);
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.A = LP.A + 1;
                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                }
                else if (["ess3-4", "ess3-5", "ess3-6", "ess3-7", "ess3-8", "ess3-9"].includes(ess3Item)) {
                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`💙 Yaay! A B skin for ${author}! 💙`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("(´･ω･`)");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You already got that skin before! Here, take these **200** ${frags} instead!`);
                        LP.frags = LP.frags + 200;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }
                }
                else if (["ess3-14", "ess3-15", "ess3-16", "ess3-17", "ess3-18", "ess3-19", "ess3-20", "ess3-21", "ess3-22", "ess3-23", "ess3-24"].includes(ess3Item)) {
                    ess3Embed.setColor("0x1BE926");
                    ess3Embed.setAuthor(`💚 ${author} gets a C skin :D 💚`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("(@ _ @)");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You have this Item already! Here, take these **72** ${frags} instead!`);
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.C = LP.C + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                }
                else if (["ess3-34", "ess3-35", "ess3-36", "ess3-37", "ess3-41", "ess3-42", "ess3-43", "ess3-44", "ess3-45"].includes(ess3Item)) {

                    ess3Embed.setColor("0xffffff");
                    ess3Embed.setAuthor(`🖤 LMAO ${author} got a graffiti 🖤`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("Your luck, not mine ヽ(´ー｀)┌");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You have this graffiti already! Here, take these **6** ${frags} instead!`);
                        LP.frags = LP.frags + 6;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                }
                else if (["ess3-10", "ess3-11", "ess3-12", "ess3-13", "ess3-29", "ess3-30", "ess3-31", "ess3-32", "ess3-33"].includes(ess3Item)) {

                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`💙 ${author} gets a standby motion 💙`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("(＾ｖ＾)");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You have this standby motion already! Here, take these **72** ${frags} instead!`);
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }



                }
                else if (["ess3-25", "ess3-26", "ess3-27", "ess3-28"].includes(ess3Item)) {

                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`💙 You get an emote, ${author} 💙`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("Heh! You better not emote at the exit gate ._.");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You have this emote already! Here, take these **36** ${frags} instead!`);
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                } else if (["ess3-38", "ess3-39", "ess3-40", "ess3-46", "ess3-47", "ess3-48", "ess3-49"].includes(ess3Item)) {

                    ess3Embed.setColor("0xffffff");
                    ess3Embed.setAuthor(`🖤 You get a portrait, ${author} 🖤`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    ess3Embed.setFooter("Yeee portraits will be added soon to >logicpath :)");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription(`You have this portrait already! Here, take these **36** ${frags} instead!`);
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        let ess3_portrait_message = "0";

                        if (ess3Item === "ess3-38") {
                            ess3_portrait_message = "Black and White Lucky Guy";

                        } else if (ess3Item === "ess3-39") {
                            ess3_portrait_message = "Black and White Coordinator";

                        } else if (ess3Item === "ess3-40") {
                            ess3_portrait_message = "Black and White Priestess";

                        } else if (ess3Item === "ess3-46") {
                            ess3_portrait_message = "Colorful Memory Magician";

                        } else if (ess3Item === "ess3-47") {
                            ess3_portrait_message = "Colorful Memory Cowboy";

                        } else if (ess3Item === "ess3-48") {
                            ess3_portrait_message = "Colorful Memory Gardener";
                        }
                        else if (ess3Item === "ess3-49") {
                            ess3_portrait_message = "Colorful Memory Forward";
                        }

                        ess3Embed.setDescription("Yaaay! You got a new portrait, you can equip it by doing\n`" + prefix + "equip " + ess3_portrait_message + "`\nBy equipping the portrait, it will be visable in the `" + prefix + "logicpath` command");

                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                }

                LP.Ess3 = LP.Ess3 - 1;

                LP.save().catch(err => console.log(err));

                message.channel.send(ess3Embed);


            } else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                if (!args[2]) return ErrorMsg(bot, message, "Please provide one of the essence's ID\nThe current season's Essences are...\n" + ess1 + " | **Essences s11-1** ─ ID ➜ " + s10_cmd + "\n" + ess3 + " | **Essence s11-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s11-1`");

                let e = "▔ ▔ ▔ ▔ ▔ ";
                let x = 0;

                let embed = new RichEmbed()
                    .setColor("0xf0d911");

                function itemCheck(itemName, LP, path) {
                    if (LP.Opened.includes(path)) {
                        x = x + 1;
                        e = e + `\n✅ | ${itemName}`;
                    }
                    else {
                        e = e + `\n❌ | ${itemName}`;
                    }
                }

                if (["s11-1", "ess1"].includes(args[2].toLowerCase()) || args[2] === "1") {

                    itemCheck("[Costume] Violinist - Inferno Sonata", LP, "ess1-1");
                    itemCheck("[Costume] Postman - Keyboard", LP, "ess1-2");
                    itemCheck("[Costume] Evil Reptilian - Bone Flute", LP, "ess1-3");
                    itemCheck("[Costume] Guard 26 - Jukebox", LP, "ess1-4");
                    itemCheck("[Costume] Bloody Queen - Fiery Diva", LP, "ess1-5");
                    itemCheck("[Costume] Priestess - Key to Hell", LP, "ess1-6");
                    itemCheck("[Costume] Barmaid - Bar Wine", LP, "ess1-7");
                    itemCheck("[Costume] Dream Witch - Heart Wave", LP, "ess1-8");
                    itemCheck("[Costume] Explorer - Spiritless Conductor", LP, "ess1-9");
                    itemCheck("[Emote] Barmaid - Dance", LP, "ess1-10");
                    itemCheck("[Stanby Motion] Perfumer - Snooze", LP, "ess1-11");
                    itemCheck("[Stanby Motion] Acrobat - Stand", LP, "ess1-12");
                    itemCheck("[Stanby Motion] Evil Reptilian - Snooze", LP, "ess1-13");
                    itemCheck("[Portrait] Black-and-White - Explorer", LP, "ess1-14");
                    itemCheck("[Portrait] Black-and-White - Magician", LP, "ess1-15");
                    itemCheck("[Portrait] Black-and-White - Gardener", LP, "ess1-16");
                    itemCheck("[Emote] Magician - Cheer", LP, "ess1-17");
                    itemCheck("[Emote] Explorer - Cheer", LP, "ess1-18");
                    itemCheck("[Emote] Mechanic - Cheer", LP, "ess1-19");
                    itemCheck("[Emote] Lawyer - Cheer", LP, "ess1-20");
                    itemCheck("[Costume] The Ripper - Black Baron", LP, "ess1-21");
                    itemCheck("[Costume] Doctor - Quiet Blue", LP, "ess1-22");
                    itemCheck("[Costume] Magician - Wine", LP, "ess1-23");
                    itemCheck("[Costume] Mechanic - Ink Black", LP, "ess1-24");
                    itemCheck("[Costume] The Feaster - Moss", LP, "ess1-25");
                    itemCheck("[Costume] Embalmer - Casual Yellow", LP, "ess1-26");
                    itemCheck("[Costume] Axe Boy - White Sugar", LP, "ess1-27");
                    itemCheck("[Costume] Bloody Queen - Sunset Yellow", LP, "ess1-28");
                    itemCheck("[Costume] Evil Reptilian - Purple Aconite", LP, "ess1-29");
                    itemCheck("[Costume] Acrobat - Scarlet", LP, "ess1-30");
                    itemCheck("[Costume] Postman - Grace Pink", LP, "ess1-31");
                    itemCheck("[Standby Motion] Magician - Snooze", LP, "ess1-32");
                    itemCheck("[Standby Motion] Theif - Ready", LP, "ess1-33");
                    itemCheck("[Standby Motion] Coordinator - Snooze", LP, "ess1-34");
                    itemCheck("[Standby Motion] Lawyer - Snooze", LP, "ess1-35");
                    itemCheck("[Standby Motion] Magician - Wait", LP, "ess1-36");
                    itemCheck("[Graffiti] Hell Ember's Shark Stick - Cartoon", LP, "ess1-37");
                    itemCheck("[Graffiti] The Feaster's Tentacles - Cartoon", LP, "ess1-38");
                    itemCheck("[Graffiti] The Soul Weaver's Dagger - Cartoon", LP, "ess1-39");
                    itemCheck("[Graffiti] Theif's Flashlight - Cartoon", LP, "ess1-40");
                    itemCheck("[Graffiti] Smiley Face - Gray Shadow", LP, "ess1-41");
                    itemCheck("[Graffiti] Theif - Gray Shadow", LP, "ess1-42");
                    itemCheck("[Graffiti] Priestess - Gray Shadow", LP, "ess1-43");
                    itemCheck("[Graffiti] Explorer - Gray Shadow", LP, "ess1-44");
                    itemCheck("[Graffiti] Dancer - Gray Shadow", LP, "ess1-45");
                    itemCheck("[Graffiti] Lucky Guy - Gray Shadow", LP, "ess1-46");
                    itemCheck("[Graffiti] Priestess - Grayed", LP, "ess1-47");
                    itemCheck("[Portrait] Colorful Memory - GameKeeper", LP, "ess1-48");
                    itemCheck("[Portrait] Colorful Memory - Coordinator", LP, "ess1-49");
                    itemCheck("[Portrait] Colorful Memory - Geisha", LP, "ess1-50");
                    itemCheck("[Portrait] Colorful Memory - Lawyer", LP, "ess1-51");

                    embed.setDescription(`${e}`)
                    embed.setAuthor(`s11-1 items claimed!`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);

                    message.channel.send(embed);

                } else if (["ess3", "s11-3"].includes(args[2].toLowerCase()) || args[2] === "3") {
                    itemCheck("[Costume] Entomologist - Sophia", LP, "ess3-1");
                    itemCheck("[Costume] Grave Keeper - Train Conductor", LP, "ess3-2");
                    itemCheck("[Costume] Axe Boy - Ivan", LP, "ess3-3");
                    itemCheck("[Costume] Smiley Face - Train Driver", LP, "ess3-4");
                    itemCheck("[Costume] Coordinator - Compartment Maid", LP, "ess3-5");
                    itemCheck("[Costume] Perfumer - Lady's Companion", LP, "ess3-6");
                    itemCheck('[Costume] Photographer - "Ambassador"', LP, "ess3-7");
                    itemCheck("[Costume] Postman - Sheriff", LP, "ess3-8");
                    itemCheck('[Costume] "Theif" - Signalman', LP, "ess3-9");
                    itemCheck("[Stanby Motion] Guard 26 - Snooze", LP, "ess3-10");
                    itemCheck("[Stanby Motion] Acrobat - Ready", LP, "ess3-11");
                    itemCheck("[Stanby Motion] Perfumer - Ready", LP, "ess3-12");
                    itemCheck("[Stanby Motion] Postman - Ready", LP, "ess3-13");
                    itemCheck("[Costume] Lucky Guy - Plain Gray", LP, "ess3-14");
                    itemCheck("[Costume] Gardener - Violet", LP, "ess3-15");
                    itemCheck("[Costume] Mechanic - Focus White", LP, "ess3-16");
                    itemCheck("[Costume] The Mind's eye - Peaceful Blue", LP, "ess3-17");
                    itemCheck("[Costume] Cowboy - Sky Blue", LP, "ess3-18");
                    itemCheck("[Costume] Enchantress - White Hound", LP, "ess3-19");
                    itemCheck("[Costume] Bloody Queen - Banquet Gray", LP, "ess3-20");
                    itemCheck("[Costume] Evil Reptilian - Red Algae", LP, "ess3-21");
                    itemCheck("[Costume] Wildling - Green Apple", LP, "ess3-22");
                    itemCheck("[Costume] Postamn - Grave Blue", LP, "ess3-23");
                    itemCheck('[Costume] "Herald" - Wilderness White', LP, "ess3-24");
                    itemCheck("[Emote] Priestess - Cheer", LP, "ess3-25");
                    itemCheck("[Emote] Coordinator - Cheer", LP, "ess3-26");
                    itemCheck("[Emote] The Mind's Eye - Cheer", LP, "ess3-27");
                    itemCheck("[Emote] Forward - Cheer", LP, "ess3-28");
                    itemCheck("[Standby Motion] The Mind's Eye - Wait", LP, "ess3-29");
                    itemCheck("[Standby Motion] Mechanic - Wait", LP, "ess3-30");
                    itemCheck("[Standby Motion] The Mind's Eye - Snooze", LP, "ess3-31");
                    itemCheck("[Standby Motion] Mechanic - Snooze", LP, "ess3-32");
                    itemCheck("[Standby Motion] Explorer - Snooze", LP, "ess3-33");
                    itemCheck("[Graffiti] Priestess' Holy Key - Cartoon", LP, "ess3-34");
                    itemCheck("[Graffiti] Wu Chang's Rusty Bells - Cartoon", LP, "ess3-35");
                    itemCheck("[Graffiti] Smiley Face's Rocket - Cartoon", LP, "ess3-36");
                    itemCheck("[Graffiti] Geisha's Fan - Cartoon", LP, "ess3-37");
                    itemCheck("[Portrait] Black-And-White - Lucky Guy", LP, "ess3-38");
                    itemCheck("[Portrait] Black-And-White - Coordinator", LP, "ess3-39");
                    itemCheck("[Portrait] Black-And-White - Priestess", LP, "ess3-40");
                    itemCheck("[Graffiti] Mechanic - Gray Shadow", LP, "ess3-41");
                    itemCheck("[Graffiti] Coordinator - Gray Shadow", LP, "ess3-42");
                    itemCheck("[Graffiti] Forward - Gray Shadow", LP, "ess3-43");
                    itemCheck("[Graffiti] Doctor - Gray Shadow", LP, "ess3-44");
                    itemCheck("[Graffiti] Gardener - Gray Shadow", LP, "ess3-45");

                    itemCheck("[Portrait] Colorful Memory - Magician", LP, "ess3-46");
                    itemCheck("[Portrait] Colorful Memory - Cowboy", LP, "ess3-47");
                    itemCheck("[Portrait] Colorful Memory - Gardener", LP, "ess3-48");
                    itemCheck("[Portrait] Colorful Memory - Forward", LP, "ess3-49");
                    itemCheck("[Graffiti] Cowboy - Gray Shadow", LP, "ess3-50");

                    embed.setDescription(`${e}`);
                    embed.setAuthor(`s11-3 items claimed!`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 50`);

                    message.channel.send(embed);

                } else {
                    return ErrorMsg(bot, message, "Please provide one of the essence's ID\nThe current season's Essences are...\n<:ess1:655840713904488469> | **Essences s11-1** ─ ID ➜ " + s10_cmd + "\n" + ess3 + " | **Essence s11-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `" + prefix + "open stats s11-1`");
                }

            }


            else {

                message.channel.send(noargsEmbed);
            }



        } catch (err) {
            console.log(err);
            MohiMoo.send("````" + err + "````");
            message.reply("sorry, hit an unfamiliar error!");

        }

    }
}