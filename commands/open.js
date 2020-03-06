const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP, guildAdd, ErrorMsg } = require("../functions.js");


const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute: async (message, args, bot) => {

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

                        <:Ess1:655840571616919586> | **Essence s10-2** (__Unvailable__) ─ ID ➜ ${s10_2_cmd}

                        <:ess2:655840643847028751> | **Essence s10-3** (__Unvailable__) ─ ID ➜ ${s10_3_cmd}

                        Example: ${exmple}
                `)

        try {

            const LP = await logicPath.findOne({ UserID: message.author.id });

            if (!LP) { newLP(message) }

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
                        s9Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                        LP.frags = LP.frags + 2000;
                    }
                    else {
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
                else if (["s10-21.jpg", "s10-22.jpg", "s10-23.jpg", "s10-24.jpg", "s10-25.jpg", "s10-26.jpg", "s10-27.jpg", "s10-28.jpg", "s10-29.jpg", "s10-30.jpg", "s10-32.jpg", "s10-31.jpg", "s10-33.jpg", "s10-34.jpg", "s10-35.jpg", "s10-36.jpg", "s10-38.jpg"].includes(item)) {
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
                else if (["s10-10.jpg", "s10-11.jpg", "s10-12.jpg", "s10-13.jpg"].includes(item)) {

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

            else {

                message.channel.send(noargsEmbed);
            }

            guildAdd(message);


        } catch (err) {
            console.log(err);
            MohiMoo.send("````" + err + "````");
            message.reply("sorry, hit an unfamiliar error!");

        }

    }
}
