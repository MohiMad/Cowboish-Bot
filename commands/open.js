const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP, ErrorMsg } = require("../functions.js");


const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute: async (message, args, bot, MohiMoo) => {

        var s10_cmd = "`s11-1` or `1`";
        var s10_2_cmd = "`s11-2` or `2`";
        var s10_3_cmd = "`s11-3` or `3`";
        var exmple = "`>open 1` to open a `s11-1` <:ess1:655840713904488469> essence";
        var stats_cmd = "`>open stats <essenceID>`"

        var dangan_cmsd = "`danganronpa` or `dangan`";

        const noargsEmbed = new RichEmbed()
            .setTitle("Please provide one of the essences ID after the command")
            .setColor("RANDOM")
            .setDescription(
                stripIndents`The current season's Essences are..

                        <:ess1:655840713904488469> | **Essences s11-1** ─ ID ➜ ${s10_cmd}

                        <:ess2:655840643847028751> | **Essence s11-2** ─ ID ➜ ${s10_2_cmd}

                        <:ess3:655840571616919586> | **Essence s11-3** ─ ID ➜ ${s10_3_cmd}

                        **〘 TIME LIMITED! 〙**

                        <:danganronpa_ess:715502686891540520> | **Danganronpa Essence** - ID ➜ ${dangan_cmsd}

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
                    return ErrorMsg(bot, message, "You don't have any <:ess1:655840713904488469> `s11-1` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (item === "ess1-1") {
                    s9Embed.setColor("0xfcba03");
                    s9Embed.setAuthor(`💛 Congrats ${message.author.username}! You get Violinist's S skin 💛`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("You probably wish to have that ingame :'))");



                    if (LP.Opened.includes(item)) {

                        if (LP.Hunters.NewHunta === false) {
                            s9Embed.setDescription('Because you got thier S skin, you get the Violinist as well UwU\nThat means you can play as him by doing `>hunt violinist`');
                            LP.Hunters.NewHunta = true;
                        } else {
                            s9Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                            LP.frags = LP.frags + 2000;
                        }
                    }
                    else {
                        s9Embed.setDescription('Because you got thier S skin, you get the Violinist as well UwU\nThat means you can play as him by doing `>hunt violinist`');
                        LP.Hunters.NewHunta = true;
                        LP.S = LP.S + 1;
                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;

                }
                //A skin values
                else if (["ess1-2", "ess1-3"].includes(item)) {
                    s9Embed.setColor("0xbb2af5");
                    s9Embed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("You're lucky if it's Luchino's :3");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You already got that skin before! Here, take these **1000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.A = LP.A + 1;
                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;


                }
                else if (["ess1-4", "ess1-5", "ess1-6", "ess1-7", "ess1-8", "ess1-9"].includes(item)) {
                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 Yaay! A B skin for ${message.author.username}! 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("So adorable! Just like you >.<");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You already got that skin before! Here, take these **200** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 200;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["ess1-21", "ess1-22", "ess1-23", "ess1-24", "ess1-25", "ess1-26", "ess1-27", "ess1-28", "ess1-29", "ess1-30", "ess1-30", "ess1-31"].includes(item)) {
                    s9Embed.setColor("0x1BE926");
                    s9Embed.setAuthor(`💚 You get a C skin, ${message.author.username}! 💚`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter(":))");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! Here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.C = LP.C + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;

                }
                else if (["ess1-37", "ess1-38", "ess1-39", "ess1-40", "ess1-41", "ess1-42", "ess1-43", "ess1-44", "ess1-45", "ess1-46", "ess1-47"].includes(item)) {

                    s9Embed.setColor("0xffffff");
                    s9Embed.setAuthor(`🖤 Poor ${message.author.username}, they got a graffiti 🖤`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter(":'D");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["ess1-11", "ess1-12", "ess1-13", "ess1-32", "ess1-33", "ess1-34", "ess1-35", "ess1-36"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 That's a standbymotion for ${message.author.username}! 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("Please stand by :v");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["ess1-10", "ess1-17", "ess1-18", "ess1-19", "ess1-20"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 You get an emote, ${message.author.username} 💙`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("Please don't emote while kiting >:v");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                } else if (["ess1-14", "ess1-15", "ess1-16", "ess1-48", "ess1-49", "ess1-50", "ess1-51"].includes(item)) {

                    s9Embed.setColor("0xffffff");
                    s9Embed.setAuthor(`🖤 You get a portrait, ${message.author.username} 🖤`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    s9Embed.setFooter("Maybe i should add portraits to >logicpath 🤷‍♂️");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                LP.save().catch(err => console.log(err));


                message.channel.send(s9Embed);

            } else if (["danganronpa", "dangan"].includes(args[1].toLowerCase())) {

                let rNyumber = Math.floor(Math.random() * (35 - 1 + 1)) + 1;

                let danganItem = "dangan-" + rNyumber;

                const danganEmbed = new RichEmbed()
                    .attachFiles(["./essences/danganronpa/" + danganItem + ".jpg"])
                    .setImage('attachment://' + danganItem + ".jpg");


                if (LP.dangan === 0) {
                    return ErrorMsg(bot, message, "You don't have any <:danganronpa_ess:715502686891540520> `danganronpa` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (danganItem === "dangan-1") {
                    danganEmbed.setColor("0xfcba03");
                    danganEmbed.setAuthor(`💛 ${message.author.username} gets Monokuma 💛`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter("Sooo cute i caaaan't >u<");

                    LP.S = LP.S + 1;
                    LP.Opened = [...LP.Opened, danganItem];


                    LP.dangan = LP.dangan - 1;

                }
                //A skin values
                else if (["dangan-2", "dangan-3", "dangan-4"].includes(danganItem)) {
                    danganEmbed.setColor("0xbb2af5");
                    danganEmbed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter("Imagine me transfering that to your real Identity V acc :3");

                    if (LP.Opened.includes(danganItem)) {
                        danganEmbed.setDescription("You already got that skin before! Here, take these **1000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.A = LP.A + 1;
                        LP.Opened = [...LP.Opened, danganItem];
                    }

                    LP.dangan = LP.dangan - 1;

                } else if (["dangan-14", "dangan-15", "dangan-16", "dangan-17", "dangan-18", "dangan-19", ""].includes(danganItem)) {

                    danganEmbed.setColor("0xffffff");
                    danganEmbed.setAuthor(`🖤 ${message.author.username} got a graffiti 🖤`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter("Poor you :'D");

                    if (LP.Opened.includes(danganItem)) {
                        danganEmbed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, danganItem];
                    }

                    LP.dangan = LP.dangan - 1;



                }
                else if (["dangan-5", "dangan-6", "dangan-7", "dangan-8"].includes(danganItem)) {

                    danganEmbed.setColor("0x2e65b8");
                    danganEmbed.setAuthor(`💙 Yee a standbymotion for ${message.author.username}! 💙`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter(".-.");

                    if (LP.Opened.includes(danganItem)) {
                        danganEmbed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, danganItem];
                    }

                    LP.dangan = LP.dangan - 1;

                }
                else if (["dangan-9", "dangan-10", "dangan-11", "dangan-12", "dangan-13"].includes(danganItem)) {

                    danganEmbed.setColor("0x2e65b8");
                    danganEmbed.setAuthor(`💙 You get an emote, ${message.author.username} 💙`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter("Cute >.<");

                    if (LP.Opened.includes(danganItem)) {
                        danganEmbed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, danganItem];
                    }

                    LP.dangan = LP.dangan - 1;



                } else if (["dangan-20", "dangan-21", "dangan-22", "dangan-23", "dangan-24", "dangan-25", "dangan-26", "dangan-27", "dangan-28", "dangan-29", "dangan-30", "dangan-31", "dangan-32", "dangan-33", "dangan-34", "dangan-35"].includes(danganItem)) {

                    danganEmbed.setColor("0xffffff");
                    danganEmbed.setAuthor(`🖤 You get a portrait, ${message.author.username} 🖤`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    danganEmbed.setFooter("._.");

                    if (LP.Opened.includes(danganItem)) {
                        danganEmbed.setDescription("You have this item already! Here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, danganItem];
                    }

                    LP.dangan = LP.dangan - 1;

                }
                LP.save().catch(err => console.log(err));

                message.channel.send(danganEmbed);

            } else if (["stats", "status", "opened"].includes(args[1].toLowerCase())) {
                if (!args[2]) return ErrorMsg(bot, message, "Please provide one of the essence's ID\nThe current season's Essences are...\n<:ess1:655840713904488469> | **Essences s11-1** ─ ID ➜ " + s10_cmd + "\n<:ess2:655840643847028751> | **Essence s11-2** ─ ID ➜ " + s10_2_cmd + "\n<:ess3:655840571616919586> | **Essence s11-3** ─ ID ➜ " + s10_3_cmd + "\n<:danganronpa_ess:715502686891540520> | **Danganronpa Essence** - ID ➜ " + dangan_cmsd + "\n\nExample: `>open stats s11-1`");


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


                } else if (["dangan", "danganronpa"].includes(args[2].toLowerCase())) {

                    itemCheck("[Costume] Guard 26 - Monokuma", LP, "dangan-1");
                    itemCheck("[Costume] Barmaid - Enoshima Junko", LP, "dangan-2");
                    itemCheck("[Costume] Coordinator - Kyoko Kirigiri", LP, "dangan-3");
                    itemCheck("[Costume] Lucky Guy - Makoto Naegi", LP, "dangan-4");
                    itemCheck("[Standby Motion] Barmaid - Say Hello", LP, "dangan-5");
                    itemCheck("[Standby Motion] Lucky Guy - Say Hello", LP, "dangan-6");
                    itemCheck("[Standby Motion] Coordinator - Pondo", LP, "dangan-7");
                    itemCheck("[Standby Motion] Guard 26 - Sober up", LP, "dangan-8");
                    itemCheck(`[Emote] Guard 26 - Ultimate "Dance"`, LP, "dangan-9");
                    itemCheck(`[Emote] Guard 26 - Ultimate "Salute"`, LP, "dangan-10");
                    itemCheck(`[Emote] Coordinator - Ultimate "Lie Down"`, LP, "dangan-11");
                    itemCheck(`[Emote] Barmaid - Ultimate "Juggle"`, LP, "dangan-12");
                    itemCheck(`[Emote] Lucky Guy - Ultimate "Forward"`, LP, "dangan-13");
                    itemCheck(`[Graffiti] Hope's Peak Academy's School Insignia`, LP, "dangan-14");
                    itemCheck(`[Graffiti] Guard 26 - Monokuma`, LP, "dangan-15");
                    itemCheck(`[Graffiti] Barmaid - Ultimate Analytical Prowess`, LP, "dangan-16");
                    itemCheck(`[Graffiti] Lucky Guy - Refrence Book`, LP, "dangan-17");
                    itemCheck(`[Graffiti] Coordinator - Refrence Book`, LP, "dangan-18");
                    itemCheck(`[Graffiti] Guard 26 - Mondo Butter`, LP, "dangan-19");
                    itemCheck(`[Portrait] Makoto Naegi`, LP, "dangan-20");
                    itemCheck(`[Portrait] Kyoko Kirigiri`, LP, "dangan-21");
                    itemCheck(`[Portrait] Sayaka Maizono`, LP, "dangan-22");
                    itemCheck(`[Portrait] Leon Kuwata`, LP, "dangan-23");
                    itemCheck(`[Portrait] Mondo Owada`, LP, "dangan-24");
                    itemCheck(`[Portrait] Celesta Ludenberg`, LP, "dangan-25");
                    itemCheck(`[Portrait] Toko Fukawa`, LP, "dangan-26");
                    itemCheck(`[Portrait] Aoi Asahina`, LP, "dangan-27");
                    itemCheck(`[Portrait] Byakuya Togami`, LP, "dangan-28");
                    itemCheck(`[Portrait] Hifumi Yamada`, LP, "dangan-29");
                    itemCheck(`[Portrait] Enoshima Junko`, LP, "dangan-30");
                    itemCheck(`[Portrait] Chihiro Fujisaki`, LP, "dangan-31");
                    itemCheck(`[Portrait] Sakura Ogami`, LP, "dangan-32");
                    itemCheck(`[Portrait] Kiyotaka Ishimaru`, LP, "dangan-33");
                    itemCheck(`[Portrait] Mukuro Ikusaba`, LP, "dangan-34");
                    itemCheck(`[Portrait] Yasuhiro Hagakure`, LP, "dangan-35");

                    embed.setDescription(`${e}`)
                    embed.setAuthor(`Danganronpa Essence items claimed!`, "https://cdn.discordapp.com/emojis/715502686891540520.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 35`);
                    
                    message.channel.send(embed);
                    
                } else if (["ess2", "s11-2"].includes(args[2].toLowerCase()) || args[2] === "2") {

                    /*embed.setDescription(`${e}`)
                    embed.setAuthor(`s11-2 items claimed!`, "https://cdn.discordapp.com/emojis/655840643847028751.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);
                    */

                    message.channel.send("**This essence isn't out yet!**\nCan't view");

                } else if (["ess3", "s11-3"].includes(args[2].toLowerCase()) || args[2] === "3") {

                    /*embed.setDescription(`${e}`)
                    embed.setAuthor(`s11-3 items claimed!`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);
                    */

                    message.channel.send("**This essence isn't out yet!**\nCan't view");
                }  else {
                    return ErrorMsg(bot, message, "Please provide one of the essence's ID\nThe current season's Essences are...\n<:ess1:655840713904488469> | **Essences s11-1** ─ ID ➜ " + s10_cmd + "\n<:ess2:655840643847028751> | **Essence s11-2** ─ ID ➜ " + s10_2_cmd + "\n<:ess3:655840571616919586> | **Essence s11-3** ─ ID ➜ " + s10_3_cmd + "\n<:danganronpa_ess:715502686891540520> | **Danganronpa Essence** - ID ➜ " + dangan_cmsd + "\n\nExample: `>open stats s11-1`");
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
