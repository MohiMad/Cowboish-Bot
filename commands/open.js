const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const { newLP } = require("../functions.js");


const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute: async (message, args, MohiMoo) => {




        const SEmbed = new RichEmbed()
            .setAuthor(`Congrats ${message.author.username}! you got Postman's limited skin 👏`, message.author.avatarURL)
            .attachFiles(["./s9-1/s9-1.PNG"])
            .setImage('attachment://s9-1.PNG')
            .setColor("0xfcba03")
            .setFooter("1 S skin was added to your collection!");
        //For S skins
        var Askins = ["s9-2.PNG", "s9-3.PNG"];
        var Askin = Math.floor(Math.random() * Askins.length);
        const AEmbed = new RichEmbed()
            .setAuthor(`Eyy! ${message.author.username}, you got an A skin 🤗`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Askins[Askin])])
            .setImage('attachment://' + (Askins[Askin]))
            .setColor("0xbb2af5")
            .setFooter("1A skin is now in your inventory :)");
        //for A skins
        var Bskins = ["s9-4.PNG", "s9-5.PNG", "s9-6.PNG", "s9-7.PNG", "s9-8.PNG", "s9-9.PNG", "s9-10.PNG", "s9-11.PNG", "s9-12.PNG", "s9-13.PNG"];
        var Bskin = Math.floor(Math.random() * Bskins.length);
        const BEmbed = new RichEmbed()
            .setAuthor(`Ah, you get a B skin ${message.author.username}`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Bskins[Bskin])])
            .setImage('attachment://' + (Bskins[Bskin]))
            .setColor("0x2a3ef5")
            .setFooter("1 B skin is now in your pocket :v");
        //For B skins
        var Cskins = ["s9-14.PNG", "s9-15.PNG", "s9-16.PNG", "s9-17.PNG", "s9-18.PNG", "s9-19.PNG", "s9-20.PNG", "s9-21.PNG", "s9-22.PNG", "s9-23.PNG", "s9-24.PNG", "s9-25.PNG", "s9-26.PNG", "s9-27.PNG", "s9-28.PNG", "s9-29.PNG", "s9-30.PNG", "s9-31.PNG", "s9-32.PNG", "s9-33.PNG", "s9-34.PNG"];
        var Cskin = Math.floor(Math.random() * Cskins.length);
        const CEmbed = new RichEmbed()
            .setAuthor(`R.I.P ${message.author.username} you get a C skin, sad day for you`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Cskins[Cskin])])
            .setImage('attachment://' + (Cskins[Cskin]))
            .setColor("0x14de3c")
            .setFooter("It's alright, you will get something better next time :D");
        //for C skins
        var Dskins = ["s9-35.PNG", "s9-36.PNG", "s9-37.PNG", "s9-38.PNG", "s9-39.PNG", "s9-40.PNG", "s9-41.PNG", "s9-42.PNG"];
        var Dskin = Math.floor(Math.random() * Dskins.length);
        const DEmbed = new RichEmbed()
            .setAuthor(`Lmao ${message.author.username} got a graffiti `, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Dskins[Dskin])])
            .setImage('attachment://' + (Dskins[Dskin]))
            .setColor("0xffffff")
            .setFooter("Graffitis are fine :p");
        var randomEmbeds = [
            SEmbed,
            AEmbed, AEmbed, AEmbed,
            BEmbed, BEmbed, BEmbed, BEmbed, BEmbed, BEmbed,
            CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed,
            DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed
        ];
        var REmbed = Math.floor(Math.random() * randomEmbeds.length);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP){ newLP(message) }
        else if (LP.Ess1 === null) {
            MohiMoo.send(`User with the name ${message.author.username}/${message.author.id} has the Essence s9-1 set to null smh`);
        }

        if (!args[1]) {

            const noargsEmbed = new RichEmbed()
                .setTitle("Please provide one of the essences ID after the command")
                .setColor("0xfc2403")
                .setDescription(
                    stripIndents`Essences available are..
                        <:ess1:655840713904488469> | **Essences s9-1** ─ ID ➜  __*s9-1*__

                        <:ess3:655840571616919586> | **COA III essence** ─ ID: __*coa*__

                        <:ess2:655840643847028751> | **Essence s9-2** ─ ID: __*s9-2*__
                `)
                .setFooter("Example - >open s9-1");

            message.channel.send(noargsEmbed);
        }

        else if ((args[1]) === "s9-1") {

            if (LP.Ess1 === 0) {
                return message.reply("you don't have any ``s9-1`` essences to open, try rolling some dices or buy some from the shop");

            }


            else if ((randomEmbeds[REmbed]) === (SEmbed)) {
                message.channel.send(SEmbed);

                LP.S = LP.S + 1;
                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));

            }

            else if ((randomEmbeds[REmbed]) === (AEmbed)) {
                message.channel.send(AEmbed);


                LP.A = LP.A + 1;

                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));

            }

            else if ((randomEmbeds[REmbed]) === (BEmbed)) {
                message.channel.send(BEmbed);

                LP.B = LP.B + 1;
                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));

            }

            else if ((randomEmbeds[REmbed]) === (CEmbed)) {
                message.channel.send(CEmbed);


                LP.C = LP.C + 1;

                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));

            }


            //for D values

            else {
                message.channel.send(DEmbed);


                LP.Ess1 = LP.Ess1 - 1;

                LP.save().catch(err => console.log(err));

            }

        }//for the s9-1 essence
        else if ((args[1]) === "coa") {

            const ScaoEmbed = new RichEmbed()
                .setAuthor(`Eyy congrats ${message.author.username} you got an S skin!`, message.author.avatarURL)
                .attachFiles(["./caoIII/cao-1.jpg"])
                .setImage('attachment://cao-1.jpg')
                .setColor("0xfcba03")
                .setFooter("1S skin is now in you pocket ;D");
            //___________CAO S SKIN_______________

            var CaoAskins = ["cao-2.jpg", "cao-3.jpg", "cao-4.jpg", "cao-5.jpg"];
            var CaoAskin = Math.floor(Math.random() * CaoAskins.length);

            const AcaoEmbed = new RichEmbed()
                .setAuthor(`Eyy! ${message.author.username}, you got an A skin 🤗`, message.author.avatarURL)
                .attachFiles(["./caoIII/" + (CaoAskins[CaoAskin])])
                .setImage('attachment://' + (CaoAskins[CaoAskin]))
                .setColor("0xbb2af5")
                .setFooter("1A skin is now in your inventory :)");
            //-_________________CAO A skin______________

            var CaoBskins = ["cao-6.jpg", "cao-7.jpg", "cao-8.jpg", "cao-9.jpg", "cao-10.jpg"];
            var CaoBskin = Math.floor(Math.random() * CaoBskins.length);

            const CaoBEmbed = new RichEmbed()
                .setAuthor(`Here is your B skin ${message.author.username}`, message.author.avatarURL)
                .attachFiles(["./caoIII/" + (CaoBskins[CaoBskin])])
                .setImage('attachment://' + (CaoBskins[CaoBskin]))
                .setColor("0x2a3ef5")
                .setFooter("1B skin is now in your pocket :v");
            //___________________FOR B skin________________

            var CaoCskins = ["cao-22.jpg", "cao-23.jpg", "cao-24.jpg", "cao-25.jpg", "cao-26.jpg", "cao-27.jpg", "cao-28.jpg", "cao-29.jpg"];
            var CaoCskin = Math.floor(Math.random() * CaoCskins.length);
            const CaoCEmbed = new RichEmbed()
                .setAuthor(`R.I.P ${message.author.username} you get a C skin, sad day for you`, message.author.avatarURL)
                .attachFiles(["./caoIII/" + (CaoCskins[CaoCskin])])
                .setImage('attachment://' + (CaoCskins[CaoCskin]))
                .setColor("0x14de3c")
                .setFooter("You should get used to your unluck :/");

            //________________C valur stff______________________
            var CaoDskins = ["cao-11.jpg", "cao-12.jpg", "cao-13.jpg", "cao-14.jpg", "cao-15.jpg", "cao-16.jpg", "cao-17.jpg", "cao-18.jpg", "cao-19.jpg", "cao-20.jpg", "cao-21.jpg", "cao-30.jpg", "cao-31.jpg", "cao-32.jpg", "cao-33.jpg", "cao-34.jpg", "cao-35.jpg", "cao-36.jpg", "cao-37.jpg", "cao-38.jpg", "cao-39.jpg", "cao-40.jpg", "cao-41.jpg", "cao-42.jpg"];
            var CaoDskin = Math.floor(Math.random() * CaoDskins.length);

            const CaoDEmbed = new RichEmbed()
                .setAuthor(`You get some useless stuff ma friend!`, message.author.avatarURL)
                .attachFiles(["./caoIII/" + (CaoDskins[CaoDskin])])
                .setImage('attachment://' + (CaoDskins[CaoDskin]))
                .setColor("0xffffff")
                .setFooter("Graffitis are fine :p");
            //_________________D value for CAOIII__________________

            var randomCaoEmbeds = [ScaoEmbed,
                AcaoEmbed, AcaoEmbed, AcaoEmbed, AcaoEmbed, AcaoEmbed,
                CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed,
                CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed,
                CaoDEmbed, CaoDEmbed, CaoDEmbed, CaoDEmbed, CaoDEmbed,
            ];
            var CaoREmbed = Math.floor(Math.random() * randomCaoEmbeds.length);

            if (LP.Ess2 === 0) {
                return message.reply(`you have 0 CAOII essences <:ess3:655840571616919586> , try rolling some dices or buy some from the shop!`);

            }

            else if ((randomCaoEmbeds[CaoREmbed]) === ScaoEmbed) {
                message.channel.send(ScaoEmbed);

                LP.Ess2 = LP.Ess2 - 1;
                LP.S = LP.S + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === AcaoEmbed) {
                message.channel.send(AcaoEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.A = LP.A + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === CaoBEmbed) {
                message.channel.send(CaoBEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.B = LP.B + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === CaoCEmbed) {
                message.channel.send(CaoCEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.C = LP.C + 1;
                LP.save().catch(err => console.log(err));
            }
            else {
                message.channel.send(CaoDEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.D = LP.D + 1;
                LP.save().catch(e => console.log(e));
            }

        }//__________if args === cao___________-

        else if ((args[1]) === "s9-2") {

            let number = 49;
            let Rnumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;

            let item = "s9-" + Rnumber + ".jpg";

            const s9Embed = new RichEmbed()
                .setImage('attachment://' + item)
                .attachFiles(["./s9-2/" + item]);

            if (LP.Ess3 === 0) {
                return message.reply(`you have 0 s9-2 essences <:ess2:655840643847028751>, try rolling some dices or buy some from the shop!`);
            }

            else if (item === "s9-1.jpg") {
                s9Embed.setColor("0xfcba03");
                s9Embed.setAuthor(`💛 ${message.author.username} got the Sister's S skin! 💛`, message.author.avatarURL);
                s9Embed.setFooter("Too many S's in the title :'D");

                if (LP.Opened.includes(item)) {
                    s9Embed.setDescription("And because you somehow got that before, you get **2000** <:frags:655840344725913600> instead!");
                    LP.frags = LP.frags + 2000;
                }
                else {
                    LP.S = LP.S + 1;
                    LP.Opened = [...LP.Opened, item];
                }

                LP.Ess3 = LP.Ess3 - 1;
                LP.save().catch(err => console.log(err));

            }

            else if (["s9-2.jpg", "s9-3.jpg"].includes(item)) {
                s9Embed.setColor("0xbb2af5");
                s9Embed.setAuthor(`💜 ${message.author.username} gets an A skin 💜`, message.author.avatarURL);
                s9Embed.setFooter("You probably wish you could get that ingame xD");

                if (LP.Opened.includes(item)) {
                    s9Embed.setDescription("You already got that skin before so here takes these **1000** <:frags:655840344725913600> instead!");
                    LP.frags = LP.frags + 1000;
                }
                else {
                    LP.A = LP.A + 1;
                    LP.Opened = [...LP.Opened, item];
                }

                LP.Ess3 = LP.Ess3 - 1;

                LP.save().catch(err => console.log(err));

            }
            else if (["s9-4.jpg", "s9-5.jpg", "s9-6.jpg", "s9-7.jpg", "s9-8.jpg", "s9-9.jpg"].includes(item)) {
                s9Embed.setColor("0x2e65b8");
                s9Embed.setAuthor(`💙 That's a B skin for ya, ${message.author.username} 💙`, message.author.avatarURL);
                s9Embed.setFooter("I don't wanna hear compliments a B skin is better than a graffiti");

                if (LP.Opened.includes(item)) {
                    s9Embed.setDescription("You already got that skin before! Here takes these **200** <:frags:655840344725913600> instead!");
                    LP.frags = LP.frags + 200;
                }
                else {
                    LP.B = LP.B + 1;

                    LP.Opened = [...LP.Opened, item];
                }

                LP.Ess3 = LP.Ess3 - 1;

                LP.save().catch(err => console.log(err));


            }
            else if (["s9-21.jpg", "s9-22.jpg", "s9-23.jpg", "s9-24.jpg", "s9-25.jpg", "s9-26.jpg", "s9-27.jpg", "s9-28.jpg", "s9-29.jpg", "s9-30.jpg"].includes(item)) {
                s9Embed.setColor("0x1BE926");
                s9Embed.setAuthor(`💚 I'm sorry ${message.author.username}, but that's what you got 💚`, message.author.avatarURL);
                s9Embed.setFooter(":))");

                if (LP.Opened.includes(item)) {
                    s9Embed.setDescription("You have this item already! here, take these **72** <:frags:655840344725913600> instead!");
                    LP.frags = LP.frags + 72;
                }
                else {
                    LP.C = LP.C + 1;

                    LP.Opened = [...LP.Opened, item];
                }

                LP.Ess3 = LP.Ess3 - 1;

                LP.save().catch(err => console.log(err));


            }
            else if (["s9-10.jpg", "s9-11.jpg", "s9-12.jpg", "s9-13.jpg", "s9-14.jpg", "s9-15.jpg", "s9-16.jpg", "s9-17.jpg", "s9-18.jpg", "s9-19.jpg", "s9-20.jpg", "s9-31.jpg", "s9-32.jpg", "s9-33.jpg", "s9-34.jpg", "s9-35.jpg", "s9-36.jpg", "s9-37.jpg", "s9-38.jpg", "s9-39.jpg", "s9-40.jpg", "s9-41.jpg", "s9-42.jpg", "s9-43.jpg", "s9-44.jpg", "s9-45.jpg", "s9-46.jpg", "s9-47.jpg", "s9-48.jpg", "s9-49.jpg"].includes(item)) {

                s9Embed.setColor("0xffffff");
                s9Embed.setAuthor(`🖤 You get some useless stuff, ${message.author.username} 🖤`, message.author.avatarURL);
                s9Embed.setFooter("It might not be a graffiti... i'm a bot after all :)");

                if (LP.Opened.includes(item)) {
                    s9Embed.setDescription("You have this item already! here, take these **36** <:frags:655840344725913600> instead!");
                    LP.frags = LP.frags + 36;
                }
                else {
                    LP.D = LP.D + 1;

                    LP.Opened = [...LP.Opened, item];
                }

                LP.Ess3 = LP.Ess3 - 1;

                LP.save().catch(err => console.log(err));


            }

            message.channel.send(s9Embed);

        }//s9-2 essence bracket

    }
}
