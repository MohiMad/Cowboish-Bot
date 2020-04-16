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

        const noargsEmbed = new RichEmbed()
            .setTitle("Please provide one of the essences ID after the command")
            .setColor("RANDOM")
            .setDescription(
                stripIndents`The current season's Essences are..

                        <:ess1:655840713904488469> | **Essences s10-1** ─ ID ➜ ${s10_cmd}

                        <:Ess1:655840571616919586> | **Essence s10-2** ─ ID ➜ ${s10_2_cmd}

                        <:ess2:655840643847028751> | **Essence s10-3** (__Unavailable__) ─ ID ➜ ${s10_3_cmd}

                        Example: ${exmple}
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
                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


                }

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
                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


                }

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
                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));

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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


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

                    LP.save().catch(err => console.log(err));


                }
                else if (["ess3-39", "ess3-40", "ess3-41", "ess3-48", "ess3-49", "ess3-50", "ess3-51" ].includes(ess3Item)) {

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

                    LP.save().catch(err => console.log(err));


                }

                message.channel.send(ess3Embed);

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
