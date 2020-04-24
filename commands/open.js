const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP, ErrorMsg } = require("../functions.js");


const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute: async (message, args, bot, MohiMoo) => {

        var s10_cmd = "`s10-1` or `1`";
        var s10_2_cmd = "`s10-2` or `2`";
        var s10_3_cmd = "`s10-3` or `3`";
        var exmple = "`>open 1` to open a `s10-1` <:ess1:655840713904488469> essence";
        var stats_cmd = "`>open stats <essenceID>`"

        const noargsEmbed = new RichEmbed()
            .setTitle("Please provide one of the essences ID after the command")
            .setColor("RANDOM")
            .setDescription(
                stripIndents`The current season's Essences are..

                        <:ess1:655840713904488469> | **Essences s10-1** ─ ID ➜ ${s10_cmd}

                        <:Ess1:655840571616919586> | **Essence s10-2** ─ ID ➜ ${s10_2_cmd}

                        <:ess2:655840643847028751> | **Essence s10-3** ─ ID ➜ ${s10_3_cmd}

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

            else if (["s10-1", "s101"].includes(args[1].toLowerCase()) || args[1] === "1") {

                let Rnumber = Math.floor(Math.random() * (49 - 1 + 1)) + 1;

                let item = "s10-" + Rnumber + ".jpg";

                const s9Embed = new RichEmbed()
                    .attachFiles(["./essences/s10-1/" + item])
                    .setImage('attachment://' + item);


                if (LP.Ess1 === 0) {
                    return ErrorMsg(bot, message, "You don't have any <:ess1:655840713904488469> `s10-1` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (item === "s10-1.jpg") {
                    s9Embed.setColor("0xfcba03");
                    s9Embed.setAuthor(`💛 Congrats ${message.author.username}! you got gravekeeper's S skin 💛`, message.author.avatarURL);
                    s9Embed.setFooter("You probably wish to have that ingame :'D");



                    if (LP.Opened.includes(item)) {

                        if (LP.Survivors.NewSurv === false) {
                            s9Embed.setDescription('Because you got thier S skin, you get the Gravekeeper as well UwU <:gravekeepa:683222933782790164>\nThat means you can play as him by doing `>quick gravekeeper`');
                            LP.Survivors.NewSurv = true;
                        } else {
                            s9Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                            LP.frags = LP.frags + 2000;
                        }
                    }
                    else {
                        s9Embed.setDescription('Because you got thier S skin, you get the Gravekeeper as well UwU <:gravekeepa:683222933782790164>\nThat means you can play as him by doing `>quick gravekeeper`');
                        LP.Survivors.NewSurv = true;
                        LP.S = LP.S + 1;
                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;

                }
                //A skin values
                else if (["s10-2.jpg", "s10-3.jpg"].includes(item)) {
                    s9Embed.setColor("0xbb2af5");
                    s9Embed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, message.author.avatarURL);
                    s9Embed.setFooter("Wat iz it wat iz it??!");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You already got that skin before so here takes these **1000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.A = LP.A + 1;
                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;


                }
                else if (["s10-4.jpg", "s10-5.jpg", "s10-6.jpg", "s10-7.jpg", "s10-8.jpg", "s10-9.jpg"].includes(item)) {
                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 Yaay a B skin for ${message.author.username}! 💙`, message.author.avatarURL);
                    s9Embed.setFooter("Ooo this skin looks adorable :3");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You already got that skin before! Here takes these **200** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 200;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["s10-21.jpg", "s10-22.jpg", "s10-23.jpg", "s10-24.jpg", "s10-25.jpg", "s10-26.jpg", "s10-27.jpg", "s10-28.jpg", "s10-29.jpg", "s10-30.jpg", "s10-32.jpg", "s10-33.jpg", "s10-34.jpg", "s10-35.jpg", "s10-36.jpg", "s10-38.jpg"].includes(item)) {
                    s9Embed.setColor("0x1BE926");
                    s9Embed.setAuthor(`💚 Here is yo C skin, ${message.author.username}! 💚`, message.author.avatarURL);
                    s9Embed.setFooter(":))");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {
                        LP.C = LP.C + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["s10-37.jpg", "s10-39.jpg", "s10-40.jpg", "s10-41.jpg", "s10-42.jpg", "s10-43.jpg", "s10-44.jpg", "s10-45.jpg", "s10-46.jpg", "s10-47.jpg", "s10-48.jpg", "s10-49.jpg", "s10-50.jpg", "s10-51.jpg", "s10-52.jpg", "s10-14.jpg", "s10-15.jpg", "s10-16.jpg"].includes(item)) {

                    s9Embed.setColor("0xffffff");
                    s9Embed.setAuthor(`🖤 Oo what did you get ${message.author.username}? a graffiti? 🖤`, message.author.avatarURL);
                    s9Embed.setFooter("Sad :/");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.D = LP.D + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                else if (["s10-10.jpg", "s10-11.jpg", "s10-12.jpg", "s10-13.jpg", "s10-31.jpg"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 And that's a standbymotion for ${message.author.username}! 💙`, message.author.avatarURL);
                    s9Embed.setFooter("lel");

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
                else if (["s10-17.jpg", "s10-18.jpg", "s10-19.jpg", "s10-20.jpg"].includes(item)) {

                    s9Embed.setColor("0x2e65b8");
                    s9Embed.setAuthor(`💙 ${message.author.username}, that's an emote 💙`, message.author.avatarURL);
                    s9Embed.setFooter("...");

                    if (LP.Opened.includes(item)) {
                        s9Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {
                        LP.B = LP.B + 1;

                        LP.Opened = [...LP.Opened, item];
                    }

                    LP.Ess1 = LP.Ess1 - 1;



                }
                LP.save().catch(err => console.log(err));


                message.channel.send(s9Embed);

            }
            else if (["s10-2", "s102"].includes(args[1].toLowerCase()) || args[1] === "2") {

                let number = Math.floor(Math.random() * (51 - 1 + 1)) + 1;

                let ess2Item = "ess2-" + number + ".jpg";

                const ess2Embed = new RichEmbed()
                    .attachFiles(["./essences/s10-2/" + ess2Item])
                    .setImage('attachment://' + ess2Item);

                if (LP.Ess2 === 0) {
                    return ErrorMsg(bot, message, "You don't have any <:ess2:655840643847028751> `s10-2` essences!\nTry rolling some dices or buy some from the shop!")

                }
                else if (ess2Item === "ess2-1.jpg") {
                    ess2Embed.setColor("0xfcba03");
                    ess2Embed.setAuthor(`💛 ${message.author.username} got prisoner's S skin 💛`, message.author.avatarURL);
                    ess2Embed.setFooter("What if... you get it ingame?");

                    if (LP.Opened.includes(ess2Item)) {
                        if (LP.Survivors.AnotherSurv === false) {

                            ess2Embed.setDescription('Because you got thier S skin, you get the "Prisoner" as well UwU <:prisoner:699693556176126063>\nThat means you can play as him by doing `>quick prisoner`');
                            LP.Survivors.AnotherSurv = true;
                        } else {
                            ess2Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                            LP.frags = LP.frags + 2000;
                        }
                    }
                    else {
                        ess2Embed.setDescription('Because you got thier S skin, you get the "Prisoner" as well UwU <:prisoner:699693556176126063>\nThat means you can play as him by doing `>quick prisoner`');
                        LP.Survivors.AnotherSurv = true;

                        LP.Opened = [...LP.Opened, ess2Item];
                        LP.S = LP.S + 1;

                    }



                    LP.Ess2 = LP.Ess2 - 1;

                }
                //A skin values
                else if (["ess2-2.jpg", "ess2-3.jpg"].includes(ess2Item)) {
                    ess2Embed.setColor("0xbb2af5");
                    ess2Embed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, message.author.avatarURL);
                    ess2Embed.setFooter('Is it Serpent or "Guide"? :3');

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You already got that skin before! here, take these **1000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.Opened = [...LP.Opened, ess2Item];
                        LP.A = LP.A + 1;

                    }



                    LP.Ess2 = LP.Ess2 - 1;


                }
                else if (["ess2-4.jpg", "ess2-5.jpg", "ess2-6.jpg", "ess2-7.jpg", "ess2-8.jpg", "ess2-9.jpg"].includes(ess2Item)) {
                    ess2Embed.setColor("0x2e65b8");
                    ess2Embed.setAuthor(`💙 It's a B skin, ${message.author.username}! 💙`, message.author.avatarURL);
                    ess2Embed.setFooter("B stands for Beautiful, just like you <3");

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You already got that skin before! Here takes these **200** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 200;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.B = LP.B + 1;

                    LP.Ess2 = LP.Ess2 - 1;



                }
                else if (["ess2-22.jpg", "ess2-23.jpg", "ess2-24.jpg", "ess2-25.jpg", "ess2-26.jpg", "ess2-27.jpg", "ess2-28.jpg"].includes(ess2Item)) {
                    ess2Embed.setColor("0x1BE926");
                    ess2Embed.setAuthor(`💚 Here is yo C skin, ${message.author.username}! 💚`, message.author.avatarURL);
                    ess2Embed.setFooter("UwU");

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.C = LP.C + 1;


                    LP.Ess2 = LP.Ess2 - 1;



                }
                else if (["ess2-29.jpg", "ess2-30.jpg", "ess2-31.jpg", "ess2-32.jpg", "ess2-33.jpg", "ess2-34.jpg", "ess2-35.jpg", "ess2-42.jpg", "ess2-43.jpg", "ess2-44.jpg", "ess2-45.jpg", "ess2-46.jpg", "ess2-47.jpg", "ess2-48.jpg", "ess2-49.jpg", "ess2-51.jpg", "ess2-50.jpg"].includes(ess2Item)) {

                    ess2Embed.setColor("0xffffff");
                    ess2Embed.setAuthor(`🖤 Lmao, that's a graffiti for ${message.author.username} :v 🖤`, message.author.avatarURL);
                    ess2Embed.setFooter("Look at the bright side these graffitis are cute :3");

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.D = LP.D + 1;

                    LP.Ess2 = LP.Ess2 - 1;



                }
                else if (["ess2-10.jpg", "ess2-11.jpg", "ess2-12.jpg", "ess2-13.jpg"].includes(ess2Item)) {

                    ess2Embed.setColor("0x2e65b8");
                    ess2Embed.setAuthor(`💙 That's a standbymotion for ${message.author.username}! 💙`, message.author.avatarURL);
                    ess2Embed.setFooter(":'D");

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.B = LP.B + 1;

                    LP.Ess2 = LP.Ess2 - 1;



                }
                else if (["ess2-36.jpg", "ess2-37.jpg", "ess2-38.jpg", "ess2-39.jpg", "ess2-40.jpg", "ess2-41.jpg"].includes(ess2Item)) {

                    ess2Embed.setColor("0x2e65b8");
                    ess2Embed.setAuthor(`💙 ${message.author.username}, that's an emote for ya 💙`, message.author.avatarURL);

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.B = LP.B + 1;


                    LP.Ess2 = LP.Ess2 - 1;



                }
                else if (["ess2-14.jpg", "ess2-15.jpg", "ess2-16.jpg", "ess2-17.jpg", "ess2-18.jpg", "ess2-19.jpg", "ess2-20.jpg", "ess2-21.jpg"].includes(ess2Item)) {

                    ess2Embed.setColor("0xffffff");
                    ess2Embed.setAuthor(`🖤 That's a portrait for ${message.author.username}! 🖤`, message.author.avatarURL);

                    if (LP.Opened.includes(ess2Item)) {
                        ess2Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess2Item];
                    }

                    LP.D = LP.D + 1;


                    LP.Ess2 = LP.Ess2 - 1;



                }
                LP.save().catch(err => console.log(err));


                message.channel.send(ess2Embed);

            } else if (["s10-3", "s103"].includes(args[1].toLowerCase()) || args[1] === "3") {

                let ess3_number = Math.floor(Math.random() * (51 - 1 + 1)) + 1;

                let ess3Item = "ess3-" + ess3_number;

                const ess3Embed = new RichEmbed()
                    .attachFiles(["./essences/s10-3/" + ess3Item + ".jpg"])
                    .setImage('attachment://' + ess3Item + ".jpg");

                if (LP.Ess3 === 0) {
                    return ErrorMsg(bot, message, "You don't have any <:ess3:655840571616919586> `s10-3` essences!\nTry rolling some dices or buy some from the shop!");

                }
                else if (ess3Item === "ess3-1") {
                    ess3Embed.setColor("0xfcba03");
                    ess3Embed.setAuthor(`💛 ${message.author.username} got prisoner's S skin 💛`, message.author.avatarURL);
                    ess3Embed.setFooter("What if... you get it ingame?");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 2000;
                    } else {
                        LP.Opened = [...LP.Opened, ess3Item];
                        LP.S = LP.S + 1;
                    }
                    LP.Ess3 = LP.Ess3 - 1;

                }
                //A skin values
                else if (["ess3-2", "ess3-3"].includes(ess3Item)) {
                    ess3Embed.setColor("0xbb2af5");
                    ess3Embed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, message.author.avatarURL);
                    ess3Embed.setFooter('Which one did you get? :3');

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You already got that skin before! here, take these **1000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 1000;
                    }
                    else {
                        LP.Opened = [...LP.Opened, ess3Item];
                        LP.A = LP.A + 1;

                    }

                    LP.Ess3 = LP.Ess3 - 1;


                }
                else if (["ess3-4", "ess3-5", "ess3-6", "ess3-7", "ess3-8", "ess3-9", "ess3-10"].includes(ess3Item)) {
                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`💙 It's a B skin, ${message.author.username}! 💙`, message.author.avatarURL);
                    ess3Embed.setFooter("B stands for Beautiful, just like you <3");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You already got that skin before! Here takes these **200** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 200;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.B = LP.B + 1;

                    LP.Ess3 = LP.Ess3 - 1;



                }
                else if (["ess3-15", "ess3-16", "ess3-17", "ess3-18", "ess3-19", "ess3-20", "ess3-21", "ess3-22", "ess3-23", "ess3-24", "ess3-25"].includes(ess3Item)) {
                    ess3Embed.setColor("0x1BE926");
                    ess3Embed.setAuthor(`💚 That's a C skin for ${message.author.username}! 💚`, message.author.avatarURL);
                    ess3Embed.setFooter("Cheer up! UwU");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.C = LP.C + 1;


                    LP.Ess3 = LP.Ess3 - 1;



                }
                else if (["ess3-35", "ess3-36", "ess3-37", "ess3-38", "ess3-43", "ess3-44", "ess3-45", "ess3-46", "ess3-47"].includes(ess3Item)) {

                    ess3Embed.setColor("0xffffff");
                    ess3Embed.setAuthor(`🖤 Lmao that's a graffiti for ${message.author.username} xD 🖤`, message.author.avatarURL);
                    ess3Embed.setFooter("Look at the bright side, these graffitis are cute :3");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.D = LP.D + 1;

                    LP.Ess3 = LP.Ess3 - 1;



                }
                else if (["ess3-13", "ess3-14", "ess3-30", "ess3-31", "ess3-32", "ess3-33", "ess3-34"].includes(ess3Item)) {

                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`🔹 That's a standbymotion for ${message.author.username}! 🔹`, message.author.avatarURL);
                    ess3Embed.setFooter("💙💙");

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 72;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.B = LP.B + 1;

                    LP.Ess3 = LP.Ess3 - 1;



                }
                else if (["ess3-11", "ess3-12", "ess3-26", "ess3-27", "ess3-28", "ess3-29"].includes(ess3Item)) {

                    ess3Embed.setColor("0x2e65b8");
                    ess3Embed.setAuthor(`🔹 ${message.author.username}, that's an emote for ya 🔹`, message.author.avatarURL);

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.B = LP.B + 1;


                    LP.Ess3 = LP.Ess3 - 1;



                }
                else if (["ess3-39", "ess3-40", "ess3-41", "ess3-48", "ess3-49", "ess3-50", "ess3-51"].includes(ess3Item)) {

                    ess3Embed.setColor("0xffffff");
                    ess3Embed.setAuthor(`⚫ That's a portrait for ${message.author.username}! ⚫`, message.author.avatarURL);

                    if (LP.Opened.includes(ess3Item)) {
                        ess3Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 36;
                    }
                    else {

                        LP.Opened = [...LP.Opened, ess3Item];
                    }

                    LP.D = LP.D + 1;


                    LP.Ess3 = LP.Ess3 - 1;



                }
                LP.save().catch(err => console.log(err));


                message.channel.send(ess3Embed);

            } else if (["stats", "status"].includes(args[1].toLowerCase())) {
                if (!args[2]) return ErrorMsg(bot, message, "Please provide one of the essence's ID\nThe current season's Essences are...\n<:ess1:655840713904488469> | **Essences s10-1** ─ ID ➜ " + s10_cmd + "\n<:Ess1:655840571616919586> | **Essence s10-2** ─ ID ➜ " + s10_2_cmd + "\n                <:ess2:655840643847028751> | **Essence s10-3** ─ ID ➜ " + s10_3_cmd + "\n\nExample: `>open stats s10-1`");




                let e = "▔ ▔ ▔ ▔ ▔ ";
                let x = 0;



                let embed = new RichEmbed()
                    .setColor("0xf0d911");

                function itemCheck(itemName, LP, path) {
                    if (LP.Opened.includes(path)) {
                        x = x + 1;
                        e = e + `\n✅ 》${itemName}`;
                    }

                    else {
                        e = e + `\n❌ 》${itemName}`;
                    }
                }

                if (["s10-1", "ess1"].includes(args[2].toLowerCase()) || args[2] === "1") {
                    itemCheck("[Costume] Grave Keeper - Desolate sand", LP, "s10-1.jpg");
                    itemCheck("[Costume] Guard 26 - Western Baron", LP, "s10-2.jpg");
                    itemCheck("[Costume] Barmaid - Black Rose", LP, "s10-3.jpg");
                    itemCheck("[Costume] Bloody Queen - Abandoned Dream", LP, "s10-4.jpg");
                    itemCheck("[Costume] Prospector - Gold Digger", LP, "s10-5.jpg");
                    itemCheck("[Costume] Cowboy - Wandering Musketeer", LP, "s10-6.jpg");
                    itemCheck("[Costume] Doctor - Events of the Past", LP, "s10-7.jpg");
                    itemCheck("[Costume] Enchantress - Fading", LP, "s10-8.jpg");
                    itemCheck("[Costume] Dancer - Western Infatuation", LP, "s10-9.jpg");
                    itemCheck("[Standby Motion] Evil Reptilian - Demonstrate", LP, "s10-10.jpg");
                    itemCheck("[Standby Motion] Dream Witch - Demonstrate", LP, "s10-11.jpg");
                    itemCheck("[Standby Motion] First Officer - Ready", LP, "s10-12.jpg");
                    itemCheck("[Standby Motion] Wildling - Ready", LP, "s10-13.jpg");
                    itemCheck("[Portrait] Explorer - Black-and-White", LP, "s10-14.jpg");
                    itemCheck("[Portrait] Magician - Black-and-White", LP, "s10-15.jpg");
                    itemCheck("[Portrait] Gardener - Black-and-White", LP, "s10-16.jpg");
                    itemCheck("[Emote] Magician - Cheer", LP, "s10-17.jpg");
                    itemCheck("[Emote] Explorer - Cheer", LP, "s10-18.jpg");
                    itemCheck("[Emote] Mechanic - Cheer", LP, "s10-19.jpg");
                    itemCheck("[Emote] Lawyer - Cheer", LP, "s10-20.jpg");
                    itemCheck("[Costume] Simley Face - Green Hat", LP, "s10-21.jpg");
                    itemCheck("[Costume] Gamekeeper - White Wax", LP, "s10-22.jpg");
                    itemCheck("[Costume] Lawyer - Coral Red", LP, "s10-23.jpg");
                    itemCheck("[Costume] Mercenary - Stealth", LP, "s10-24.jpg");
                    itemCheck("[Costume] Hell Ember - Black", LP, "s10-25.jpg");
                    itemCheck("[Costume] Mindseye - Autumn Green", LP, "s10-26.jpg");
                    itemCheck("[Costume] Soul Weaver - Golden Scarlet", LP, "s10-27.jpg");
                    itemCheck("[Costume] The Ripper - Leaf Knight", LP, "s10-28.jpg");
                    itemCheck("[Costume] Lawyer - Match Green", LP, "s10-29.jpg");
                    itemCheck("[Costume] Mechanic - Stylish Violet", LP, "s10-30.jpg");
                    itemCheck("[Standby Motion] Magician - Snooze", LP, "s10-31.jpg");
                    itemCheck("[Costume] The Ripper - Rose Knight", LP, "s10-32.jpg");
                    itemCheck("[Standby Motion] Thief - Ready", LP, "s10-33.jpg");
                    itemCheck("[Standby Motion] Coordinator - Snooze", LP, "s10-34.jpg");
                    itemCheck("[Standby Motion] Lawyer - Snooze", LP, "s10-35.jpg");
                    itemCheck("[Standby Motion] Magician - Wait", LP, "s10-36.jpg");
                    itemCheck("[Graffiti] Hell Ember's Shark Stick", LP, "s10-37.jpg");
                    //We skip s10-38.jpg cuz it's duplicated (Magician - Wait)
                    itemCheck("[Graffiti] The Feaster's Tentacles - Cartoon", LP, "s10-39.jpg");
                    itemCheck("[Graffiti] Soul Weaver's Dagger - Cartoon", LP, "s10-40.jpg");
                    itemCheck("[Graffiti] Thief's Flashlight - Cartoon", LP, "s10-41.jpg");
                    itemCheck("[Graffiti] Smiley Face - Gray Shadow", LP, "s10-42.jpg");
                    itemCheck("[Graffiti] Thief - Gray Shadow", LP, "s10-43.jpg");
                    itemCheck("[Graffiti] Explorer - Gray Shadow", LP, "s10-44.jpg");
                    itemCheck("[Graffiti] Priestess - Gray Shadow", LP, "s10-45.jpg");
                    itemCheck("[Graffiti] Dancer - Gray Shadow", LP, "s10-46.jpg");
                    itemCheck("[Graffiti] Lucky Guy - Gray Shadow", LP, "s10-47.jpg");
                    itemCheck("[Graffiti] Priestess - Grayed", LP, "s10-48.jpg");
                    itemCheck("[Portrait] Colorful Memory - Gamekeeper", LP, "s10-49.jpg");
                    itemCheck("[Portrait] Colorful Memory - Coordinator", LP, "s10-50.jpg");
                    itemCheck("[Portrait] Colorful Memory - Geisha", LP, "s10-51.jpg");
                    itemCheck("[Portrait] Colorful Memory - Lawyer", LP, "s10-52.jpg");


                    embed.setDescription(`${e}`)
                    embed.setAuthor(`s10-1 items claimed!`, "https://cdn.discordapp.com/emojis/655840713904488469.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);

                    message.channel.send(embed);


                } else if (["ess2", "s10-2"].includes(args[2].toLowerCase()) || args[2] === "2") {
                    itemCheck("[Costume] Prisoner - Viper", LP, "ess2-1.jpg");
                    itemCheck("[Costume] Dream Witch - Serpent", LP, "ess2-2.jpg");
                    itemCheck("[Costume] Enchantress - Guide", LP, "ess2-3.jpg");
                    itemCheck("[Costume] Mercenary - Hummingbird", LP, "ess2-4.jpg");
                    itemCheck("[Costume] Soul Weaver - Crab Spider", LP, "ess2-5.jpg");
                    itemCheck("[Costume] Photographer - Eris", LP, "ess2-6.jpg");
                    itemCheck("[Costume] Evil Repitilian - Japalure", LP, "ess2-7.jpg");
                    itemCheck("[Costume] First Officer - Bobolink", LP, "ess2-8.jpg");
                    itemCheck("[Costume] Barmaid - Swallowtail Butterfly", LP, "ess2-9.jpg");
                    itemCheck("[Standby Motion] Evil Repitilian - Visit", LP, "ess2-10.jpg");
                    itemCheck("[Standby Motion] Dream Witch - Visit", LP, "ess2-11.jpg");
                    itemCheck("[Standby Motion] First Officer - Look", LP, "ess2-12.jpg");
                    itemCheck("[Standby Motion] Wildling - Look", LP, "ess2-13.jpg");
                    itemCheck("[Portrait] Priestess - Dark Side", LP, "ess2-14.jpg");
                    itemCheck("[Portrait] Cowboy - Dark Side", LP, "ess2-15.jpg");
                    itemCheck("[Portrait] Perfumer - Dark Side", LP, "ess2-16.jpg");
                    itemCheck("[Portrait] Lucky Guy - Dark Side", LP, "ess2-17.jpg");
                    itemCheck("[Portrait] Geisha - Dark Side", LP, "ess2-18.jpg");
                    itemCheck("[Portrait] Soul Weaver - Dark Side", LP, "ess2-19.jpg");
                    itemCheck("[Portrait] Wu Chang - Dark Side", LP, "ess2-20.jpg");
                    itemCheck("[Portrait] The Feaster - Dark Side", LP, "ess2-21.jpg");
                    itemCheck("[Costume] Cowboy - Autumn Yellow", LP, "ess2-22.jpg");
                    itemCheck("[Costume] Prospector - Brownstone", LP, "ess2-23.jpg");
                    itemCheck("[Costume] Acrobat - Lilac", LP, "ess2-24.jpg");
                    itemCheck("[Costume] Barmaid - Barley Wine", LP, "ess2-25.jpg");
                    itemCheck("[Costume] Barmaid - Blue Curacao", LP, "ess2-26.jpg");
                    itemCheck("[Costume] Guard 26 - Turquoise Blue", LP, "ess2-27.jpg");
                    itemCheck("[Costume] Guard 26 - Purple Metal", LP, "ess2-28.jpg");
                    itemCheck("[Graffiti] Netherwalker", LP, "ess2-29.jpg");
                    itemCheck("[Graffiti] Mechanic - Puppeteer", LP, "ess2-30.jpg");
                    itemCheck("[Graffiti] Cowboy - Whiplash", LP, "ess2-31.jpg");
                    itemCheck("[Graffiti] Embalmer - Trickster", LP, "ess2-32.jpg");
                    itemCheck("[Graffiti] Dancer - Vile Blossom", LP, "ess2-33.jpg");
                    itemCheck("[Graffiti] Seer - Surveyor", LP, "ess2-34.jpg");
                    itemCheck("[Graffiti] Photographer - Auctioneer", LP, "ess2-35.jpg");
                    itemCheck("[Emote] Enchantress - Lie Down", LP, "ess2-36.jpg");
                    itemCheck("[Emote] Enchantress - Provoke", LP, "ess2-37.jpg");
                    itemCheck("[Emote] Prospector - Lie Down", LP, "ess2-38.jpg");
                    itemCheck("[Emote] Prospector - Provoke", LP, "ess2-39.jpg");
                    itemCheck("[Emote] Embalmer - Lie Down", LP, "ess2-40.jpg");
                    itemCheck("[Emote] Seer - Lie Down", LP, "ess2-41.jpg");
                    itemCheck("[Graffiti] Mechanic - Gray Shadow", LP, "ess2-42.jpg");
                    itemCheck("[Graffiti] Coordinator - Gray Shadow", LP, "ess2-43.jpg");
                    itemCheck("[Graffiti] Cowboy - Gray Shadow", LP, "ess2-44.jpg");
                    itemCheck("[Graffiti] Forward - Gray Shadow", LP, "ess2-45.jpg");
                    itemCheck("[Graffiti] Doctor - Gray Shadow", LP, "ess2-46.jpg");
                    itemCheck("[Graffiti] Gardener - Gray Shadow", LP, "ess2-47.jpg");
                    itemCheck("[Portrait] Colorful Memory - Magician", LP, "ess2-48.jpg");
                    itemCheck("[Portrait] Colorful Memory - Cowboy", LP, "ess2-49.jpg");
                    itemCheck("[Portrait] Colorful Memory - Gardener", LP, "ess2-50.jpg");
                    itemCheck("[Portrait] Colorful Memory - Forward", LP, "ess2-51.jpg");


                    embed.setDescription(`${e}`)
                    embed.setAuthor(`s10-2 items claimed!`, "https://cdn.discordapp.com/emojis/655840643847028751.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);

                    message.channel.send(embed);

                } else if (["ess3", "s10-3"].includes(args[2].toLowerCase()) || args[2] === "3") {
                    itemCheck("[Costume] Geisha - Lady Thirteen", LP, "ess3-1");
                    itemCheck("[Costume] Wu Chang - Flying Guillotine", LP, "ess3-2");
                    itemCheck("[Costume] Prospector - Sparrow", LP, "ess3-3");
                    itemCheck("[Costume] Doctor - Jade Dew", LP, "ess3-4");
                    itemCheck("[Costume] Acrobat - Bohea", LP, "ess3-5");
                    itemCheck("[Costume] Lawyer - Silver Steed", LP, "ess3-6");
                    itemCheck("[Costume] Priestess - Pu'er", LP, "ess3-7");
                    itemCheck("[Costume] Explorer - Mulberry Leaf", LP, "ess3-8");
                    itemCheck("[Costume] Forward - Blackthorn", LP, "ess3-9");
                    itemCheck("[Costume] Perfumer - Dantsing", LP, "ess3-10");
                    itemCheck("[Emote] Bloody Queen - Salute", LP, "ess3-11");
                    itemCheck("[Emote] Photographer - Salute", LP, "ess3-12");
                    itemCheck("[Standby Motion] Acrobat - Snooze", LP, "ess3-13");
                    itemCheck("[Standby Motion] Postman - Snooze", LP, "ess3-14");
                    itemCheck("[Costume] Smiley Face - Blue Freak", LP, "ess3-15");
                    itemCheck("[Costume] Coordinator - Ocean", LP, "ess3-16");
                    itemCheck("[Costume] Coordinator - Emerald", LP, "ess3-17");
                    itemCheck("[Costume] Mind's eye - Pinkish White", LP, "ess3-18");
                    itemCheck("[Costume] Mind's eye - Winter Blue", LP, "ess3-19");
                    itemCheck("[Costume] Thief - Green Jade", LP, "ess3-20");
                    itemCheck("[Costume] Mechanic - Smart Yellow", LP, "ess3-21");
                    itemCheck("[Costume] Coordinator - Gray", LP, "ess3-22");
                    itemCheck("[Costume] Mercenary - Gloom", LP, "ess3-23");
                    itemCheck("[Costume] Explorer - Turquiose", LP, "ess3-24");
                    itemCheck("[Costume] Smiley Face - Purple Eggplant", LP, "ess3-25");
                    itemCheck("[Emote] Priestess - Cheer", LP, "ess3-26");
                    itemCheck("[Emote] Coordinator - Cheer", LP, "ess3-27");
                    itemCheck("[Emote] The Mind's Eye - Cheer", LP, "ess3-28");
                    itemCheck("[Emote] Forward - Cheer", LP, "ess3-29");
                    itemCheck("[Standby Motion] The Mind's Eye - Wait", LP, "ess3-30");
                    itemCheck("[Standby Motion] Mechanic - Wait", LP, "ess3-31");
                    itemCheck("[Standby Motion] The Mind's Eye - Snooze", LP, "ess3-32");
                    itemCheck("[Standby Motion] Mechanic - Snooze", LP, "ess3-33");
                    itemCheck("[Standby Motion] Explorer - Snooze", LP, "ess3-34");
                    itemCheck("[Graffiti] Priestess - Cartoon", LP, "ess3-35");
                    itemCheck("[Graffiti] Wu Chang's Rusty Bells - Cartoon", LP, "ess3-36");
                    itemCheck("[Graffiti] Smiley Face's Rocket - Cartoon", LP, "ess3-37");
                    itemCheck("[Graffiti] Geisha's Fan - Cartoon", LP, "ess3-38");
                    itemCheck("[Portrait] Black-and-white - Lucky Guy", LP, "ess3-39");
                    itemCheck("[Portrait] Black-and-white - Coordinator", LP, "ess3-40");
                    itemCheck("[Portrait] Black-and-white - Priestess", LP, "ess3-41");
                    itemCheck("[Graffiti] Mechanic - Gray Shadow", LP, "ess3-42");
                    itemCheck("[Graffiti] Coordinator - Gray Shadow", LP, "ess3-43");
                    itemCheck("[Graffiti] Cowboy - Gray Shadow", LP, "ess3-44");
                    itemCheck("[Graffiti] Forward - Gray Shadow", LP, "ess3-45");
                    itemCheck("[Graffiti] Doctor - Gray Shadow", LP, "ess3-46");
                    itemCheck("[Graffiti] Gardener - Gray Shadow", LP, "ess3-47");
                    itemCheck("[Portrait] Colorful Memory - Magician", LP, "ess3-48");
                    itemCheck("[Portrait] Colorful Memory - Cowboy", LP, "ess3-49");
                    itemCheck("[Portrait] Colorful Memory - Gardener", LP, "ess3-50");
                    itemCheck("[Portrait] Colorful Memory - Forward", LP, "ess3-51");

                    embed.setDescription(`${e}`)
                    embed.setAuthor(`s10-3 items claimed!`, "https://cdn.discordapp.com/emojis/655840571616919586.png?v=1");
                    embed.setFooter(`Obtained ${x} items out of 51`);

                    message.channel.send(embed);
                } else {
                    message.channel.send(noargsEmbed);
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
