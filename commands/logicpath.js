const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');
const Canvas = require('canvas');
const Discord = require("discord.js");
const { ErrorMsg, coolEmbed, addCooldown, findCooldown, newLP, findMember } = require("../functions.js");
const { Portraits, Frames } = require("../essences/items.json");

module.exports = {
    name: 'logicpath',
    description: "logic info",
    execute: async (message, args, bot, prefix) => {

        await newLP(message);

        let cooldownCheck = await findCooldown(message, "logicpath");

        if (cooldownCheck) return coolEmbed(message, "Oops, the cooldown is still on!", "You know, it takes a while to generate and edit images, that's why there is a **30** seconds cooldown on this command!\nPlease wait **REMAINING** before running this command once again :3", cooldownCheck.timeRemaining, ["s"]);

        let LPuser = await findMember(message, args.slice(1).join(" "));

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        if (!args[1]) LPuser = message.author;
        else if (!LPuser) LPuser = message.author;
        else {
            try {
                const LP_1 = await logicPath.findOne({ UserID: LPuser.id ? LPuser.id : LPuser.user.id });

                if (!LP_1) LPuser = message.author;
                else LPuser = await findMember(message, args.slice(1).join(" "));

            } catch (e) {
                if (e.message === "Cannot read property 'id' of undefined") LPuser = message.author;
                else LPuser = message.author;
            }

        }


        const LP = await logicPath.findOne({ UserID: LPuser.id ? LPuser.id : LPuser.user.id });

        if (!LP) {
            const noLPEmbed = new Discord.MessageEmbed()
                .setTitle(`${LPuser.username}'s Identity V info`)
                .setDescription(
                    stripIndents` 🚶 | *LogicPath steps* ➜ **0**
                        <:dice:655384578499936257> | *Dices* ➜ **0**
                        <:clue:655384523735040000> | *Clues* ➜ **0**
                        <:inspirations:655840409674711060> | *Inspirations* ➜ **0**
                        <:frags:655840344725913600> | *Fragments* ➜ **0**
                        **Essences**
                        <:s121:735775380266549319> | Essence *s12-1* ➜ **0**
                        <:ess2:655840643847028751> | Essence *s12-2* ➜ **0**
                        <:ess3:655840571616919586> | Essence *s12-3* ➜ **0**
                        `)
                .addField("Skins", stripIndents`
                        S: **0**
                        A: **0**
                        Essences opened: **0**`)
                .setColor("GREEN")
                .setFooter("Damn look at all of this loot QwQ");

            message.channel.send("We turn it into an embed because no info were found :c", noLPEmbed);


        } else {
            if (LPuser != message.author) LPuser = LPuser.user;

            const canvas = Canvas.createCanvas(591, 427);

            const ctx = canvas.getContext('2d');

            for (const portrait of Portraits) {
                if (LP.Portrait === portrait.logicpathID) {
                    const portraitLoaded = await Canvas.loadImage(portrait.linkTag.replace("pfp", LPuser.displayAvatarURL({ format: 'png', dynamic: false })));
                    ctx.drawImage(portraitLoaded, portrait.x, portrait.y, portrait.Width, portrait.Height);
                }
            }

            const background = await Canvas.loadImage("https://i.imgur.com/vASgDu9.png");

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            for (const frame of Frames) {
                if (LP.frames.equipped === frame.Item) {
                    const FrameLoaded = await Canvas.loadImage(frame.linkTag);
                    ctx.drawImage(FrameLoaded, frame.x, frame.y, frame.Width, frame.Height);
                }
            }

            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#000000';
            ctx.fillText(LPuser.username, 160, 35);

            //We change font size
            ctx.font = '14px Arial';

            [
                {
                    printValue: LP.Ess1,
                    Width: 70,
                    Height: 267
                },
                {
                    printValue: LP.Ess2,
                    Width: 189,
                    Height: 267
                },
                {
                    printValue: LP.Ess3,
                    Width: 308,
                    Height: 267
                },
                {
                    printValue: LP.Dices,
                    Width: 409,
                    Height: 264
                },
                {
                    printValue: LP.Inspirations,
                    Width: 407,
                    Height: 343
                },
                {
                    printValue: LP.frags,
                    Width: 400,
                    Height: 410
                }
            ].forEach(x => ctx.fillText(x.printValue, x.Width, x.Height));


            ctx.font = 'bold 23px sitka-display';

            ctx.fillText(LP.S, 90, 405);

            ctx.fillText(LP.A, 246, 405);

            ctx.font = '15px sitka-display';
            ctx.fillStyle = '#ffffff';

            let ID = LP.ID || prefix + "set ID [ID]";

            if (ID === "0") {
                ID = prefix + "set ID [ID]";
                ctx.fillStyle = '#000000';
                ctx.fillRect(381, 16, 100, 21);
                ctx.fillStyle = '#ffffff';
                ctx.fillText(ID, 382, 32);
            } else {
                ID = LP.ID;
                ctx.fillStyle = '#000000';
                ctx.fillText(ID, 382, 32);
            }

            let region = LP.region || prefix + "set region [region]";
            if (LP.region === "0") {
                ctx.fillStyle = '#000000';
                ctx.fillRect(220, 48, 158, 18);
                ctx.fillStyle = '#ffffff';
                region = prefix + "set region [region]";
                ctx.fillText(region, 222, 62);
            } else {
                region = LP.region;
                ctx.fillStyle = '#000000';
                ctx.fillText(region, 222, 62);
            }

            ctx.font = 'italic 14px Courier';

            let bio = LP.bio || prefix + "set bio";
            if (LP.bio === "0") {
                ctx.fillStyle = '#000000';
                bio = "I'm very cowboiiiiiish >:3";
                ctx.fillText(bio, 200, 88, 575);
            }
            else {
                bio = LP.bio
                ctx.fillStyle = '#000000';
                ctx.fillText(bio, 200, 88, 571);
            }

            ctx.font = 'bold 15px sitka-display';
            ctx.fillStyle = '#ffffff';


            let opened = LP.S + LP.A + LP.B + LP.C + LP.D;
            [
                {
                    printValue: LP.logic,
                    Height: 230

                },
                {
                    printValue: opened,
                    Height: 291

                },
                {
                    printValue: LP.Echoes,
                    Height: 350

                },
                {
                    printValue: LP.Clues,
                    Height: 410

                }
            ].forEach(x => ctx.fillText(x.printValue, 500, x.Height, 570))


            let HunterNumber = 1;

            [LP.Hunters.WuChang, LP.Hunters.AxeBoi, LP.Hunters.Lizard,
            LP.Hunters.Clown, LP.Hunters.GameKeeper, LP.Hunters.Ripper,
            LP.Hunters.SoulWeaver, LP.Hunters.Geisha, LP.Hunters.PhotoGrapher,
            LP.Hunters.MadEyes, LP.Hunters.Feaster, LP.Hunters.DreamWitch,
            LP.Hunters.BloodyQueen, LP.Hunters.Pingu, LP.Hunters.Sister,
            LP.Hunters.NewHunta, LP.Hunters.AnotherHunta, LP.Sculptor].forEach(x => { if (x === true) HunterNumber++; });

            ctx.fillStyle = '#d73232';
            ctx.fillText(HunterNumber, 206, 130);

            let portraitAmount = 0;
            ["ess1-14", "ess1-15", "ess1-16",
                "ess1-48", "ess1-49", "ess1-50",
                "ess1-51", "ess3-38", "ess3-39",
                "ess3-40", "ess3-46", "ess3-47",
                "ess3-48", "ess3-49", "dangan-20",
                "dangan-21", "dangan-22", "dangan-23",
                "dangan-24", "dangan-25", "dangan-26",
                "dangan-27", "dangan-28", "dangan-29",
                "dangan-30", "dangan-31", "dangan-32",
                "dangan-33", "dangan-34", "dangan-35",
                "sword_fighting", "marathon_runner_victor", "long_jump_luchino",
                "s12-2-36", "s12-2-37", "s12-2-38",
                "s12-2-46", "s12-2-47", "s12-2-48", "s12-2-49",
                "s13-1-47", "s13-1-48", "s13-1-49", "s13-1-50"].forEach(x => {
                    if (LP.Opened.includes(x)) portraitAmount++;
                });

            ctx.fillStyle = '#000000';
            ctx.fillText(portraitAmount, 390, 130);

            let SurvivorNumber = 5;

            [LP.Survivors.Cowboy, LP.Survivors.Mercenary, LP.Survivors.Coordinator,
            LP.Survivors.Priestess, LP.Survivors.Mechanic, LP.Survivors.Mindseye,
            LP.Survivors.Prefumer, LP.Survivors.Dancer, LP.Survivors.Seer,
            LP.Survivors.Embalmer, LP.Survivors.Acrobat, LP.Survivors.Officer,
            LP.Survivors.Barmaid, LP.Survivors.Magician, LP.Survivors.Explorer,
            LP.Survivors.Forward, LP.Survivors.Prospector, LP.Survivors.Enchantress,
            LP.Survivors.Wilding, LP.Survivors.Postman, LP.Survivors.NewSurv,
            LP.Survivors.AnotherSurv, LP.Entomologist, LP.Painter].forEach(x => { if (x === true) SurvivorNumber++; });

            ctx.fillStyle = '#0a8fd0';
            ctx.fillText(SurvivorNumber, 292, 130);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'LP.png');

            await addCooldown(message, 30000, "logicpath");
            message.channel.send(attachment);


        }

    }
}