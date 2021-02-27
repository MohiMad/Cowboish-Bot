const logicPath = require("../../models/logicpath.js");
const { stripIndents } = require('common-tags');
const Canvas = require('canvas');
const Discord = require("discord.js");
const { coolEmbed, addCooldown, findCooldown, newLP, findMember, findCooldownByCommand } = require("../../src/functions.js");
const { Portraits, Frames, Skins } = require("../../src/items.json");

module.exports = {
    name: ["logicpath", "lp", "profile", "inv", "inventory"],
    description: "Displays your Logicpath items in an Identity V Profile format\n\n`$prefixLP [user]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Logicpath",
    execute: async (message, args, prefix) => {

        await newLP(message);

        let cooldownCheck = await findCooldown(message, "logicpath");
        if (cooldownCheck) return coolEmbed(message, "Oops, the cooldown is still on!", "You know, it takes a while to generate and edit images, that's why there is a **30** seconds cooldown on this command!\nPlease wait **REMAINING** before running this command once again :3", cooldownCheck.timeRemaining, ["s"]);

        let LPuser = await findMember(message, args.slice(1).join(" "));

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
                        <:ess1:655840713904488469> | Essence *s15-1* ➜ **0**
                        <:ess2:655840643847028751> | Essence *s15-2* ➜ **0**
                        <:ess3:655840571616919586> | Essence *s15-3* ➜ **0**
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

            const background = await Canvas.loadImage("https://i.imgur.com/axbRKl3.png");

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            for (const frame of Frames) {
                if (LP.frames.equipped === frame.Item) {
                    const FrameLoaded = await Canvas.loadImage(frame.linkTag);
                    ctx.drawImage(FrameLoaded, frame.x, frame.y, frame.Width, frame.Height);
                }
            }
            ctx.font = 'bold 20px Aria';
            ctx.fillStyle = '#000000';

            ctx.fillText(LPuser.username, 160, 50);

            ctx.font = 'bold 16px Arial';
            ctx.fillStyle = '#FFFFFF';

            //We change font size
            ctx.font = '14px Arial';

            function positionChange(value, Width) {
                if (value > 100) Width -= 10;
                else if (value > 1000) Width -= 20;

                return Width;
            }

            [
                {
                    printValue: LP.Ess1,
                    Width: 58,
                    Height: 243
                },
                {
                    printValue: LP.Ess2,
                    Width: 58,
                    Height: 328
                },
                {
                    printValue: LP.Ess3,
                    Width: 58,
                    Height: 408
                },
                {
                    printValue: LP.Inspirations,
                    Width: 150,
                    Height: 243
                },
                {
                    printValue: LP.Dices,
                    Width: 150,
                    Height: 328
                },
                {
                    printValue: LP.Echoes,
                    Width: 150,
                    Height: 408
                }
            ].forEach(x => ctx.fillText(x.printValue, positionChange(x.printValue, x.Width), x.Height));


            ctx.font = 'bold 20px sitka-display';
            ctx.fillStyle = '#000000';

            let A = 0, S = 0;
            for (const Askin of Skins.filter(s => s.Color == "0xbb2af5")) {
                if (LP.Opened.includes(Askin.Item)) A++;
            }
            for (const Sskin of Skins.filter(s => s.Color == "0xfcba03")) {
                if (LP.Opened.includes(Sskin.Item)) S++;
            }

            ctx.fillText(S, 247, 345);
            ctx.fillText(A, 363, 342);

            ctx.font = '15px sitka-display';
            ctx.fillStyle = '#ffffff';

            let ID = LP.ID || prefix + "set ID [ID]";

            if (ID === "0") {
                ID = prefix + "set ID [ID]";
                ctx.fillStyle = '#000000';
                ctx.fillRect(190, 85, 95, 23);
                ctx.fillStyle = '#ffffff';
                ctx.fillText(ID, 193, 102);
            } else {
                ID = LP.ID;
                ctx.fillStyle = '#000000';
                ctx.fillText(ID, 193, 102);
            }

            let region = LP.region || prefix + "set region [region]";
            if (LP.region === "0") {
                ctx.fillStyle = '#000000';
                ctx.fillRect(225, 60, 155, 20);
                ctx.fillStyle = '#ffffff';
                region = prefix + "set region [region]";
                ctx.fillText(region, 228, 75);
            } else {
                region = LP.region;
                ctx.fillStyle = '#000000';
                ctx.fillText(region, 228, 75);
            }

            ctx.font = 'italic 14px Courier';

            let bio = LP.bio || prefix + "set bio";
            if (LP.bio === "0") {
                ctx.fillStyle = '#000000';
                bio = "I'm very cowboiiiiiish >:3";
                ctx.fillText(bio, 197, 128, 575);
            }
            else {
                bio = LP.bio
                ctx.fillStyle = '#000000';
                ctx.fillText(bio, 197, 128, 571);
            }

            ctx.font = 'bold 20px sitka-display';
            ctx.fillStyle = '#000000';


            [

                {
                    printValue: LP.frags,
                    Height: 291

                },
                {
                    printValue: LP.Clues,
                    Height: 350

                },
                {
                    printValue: LP.logic,
                    Height: 410

                }

            ].forEach(x => ctx.fillText(x.printValue, positionChange(x.printValue, 500), x.Height, 570))

            const findMud = await findCooldownByCommand(`Mud[${LP.UserID}]`);
            if (findMud) {
                const blackMud = await Canvas.loadImage("https://i.imgur.com/ROSKcV7.png");
                ctx.drawImage(blackMud, 0, 50);
            }

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'LP.png');

            await addCooldown(message, 30000, "logicpath");
            message.channel.send("Season 15 has begun! Everyone's logicpath steps have been reset.", attachment);


        }

    }
}