
const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const Canvas = require('canvas');

const Discord = require("discord.js");

const { ErrorMsg, coolEmbed, addCooldown, findCooldown, newLP, findMember } = require("../functions.js");

module.exports = {
    name: 'logicpath',
    description: "logic info",
    execute: async (message, args, bot, prefix) => {

        await newLP(message);

        let cooldownCheck = await findCooldown(message, "logicpath");

        if (cooldownCheck) return coolEmbed(message, "Oops, the cooldown is still on!", "You know, it takes a while to generate and edit images, that's why there is a **30** seconds cooldown on this command!\nPlease wait **REMAINING** before running this command once again :3", cooldownCheck.timeRemaining, ["s"]);

        let LPuser = message.author || await findMember(message, args.slice(1).join(" "));

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        if (!args[1]) {
            LPuser = message.author;
        } else if (!args[1].startsWith("<")) {
            LPuser = message.author;
        }
        else if (!LPuser) {
            LPuser = message.author;
        }
        else {

            LPuser = await findMember(message, args.slice(1).join(" "));

            if (!LPuser) {
                LPuser = message.author;
            }
            try {
                const LP_1 = await logicPath.findOne({ UserID: LPuser.id });

                if (!LP_1) {
                    LPuser = message.author;
                }

                else {
                    LPuser = message.mentions.users.first()
                }
            } catch (e) {
                if (e.message === "Cannot read property 'id' of undefined") {
                    LPuser = message.author;
                } else {
                    message.author;
                }

            }

        }


        const LP = await logicPath.findOne({ UserID: LPuser.id });

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

            const canvas = Canvas.createCanvas(591, 427);

            const ctx = canvas.getContext('2d');

            if (LP.Portrait != "0") {
                if (LP.Portrait === "colorful_memory_forward") {
                    const colorful_memory_forward = await Canvas.loadImage("https://i.imgur.com/hTQNDEr.png");

                    ctx.drawImage(colorful_memory_forward, 14, 13, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_prospector") {
                    const colorful_memory_prospector = await Canvas.loadImage("https://i.imgur.com/jYhlLjL.png");

                    ctx.drawImage(colorful_memory_prospector, 16, 10, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_enchantress") {
                    const colorful_memory_enchantress = await Canvas.loadImage("https://i.imgur.com/MqLkHoP.png");

                    ctx.drawImage(colorful_memory_enchantress, 16, 10, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_bonbon") {
                    const colorful_memory_bonbon = await Canvas.loadImage("https://i.imgur.com/qHcEiJH.png");

                    ctx.drawImage(colorful_memory_bonbon, 16, 10, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_bloodyqueen") {
                    const colorful_memory_bloodyqueen = await Canvas.loadImage("https://i.imgur.com/tsLS63D.png");

                    ctx.drawImage(colorful_memory_bloodyqueen, 16, 10, 140, 140);
                }

                if (LP.Portrait === "colorful_memory_geisha") {
                    const colorful_memory_geisha = await Canvas.loadImage("https://i.imgur.com/yeKjyts.png");

                    ctx.drawImage(colorful_memory_geisha, 3, 1, 160, 160);
                }
                if (LP.Portrait === "colorful_memory_gamekeeper") {
                    const colorful_memory_gamekeeper = await Canvas.loadImage("https://i.imgur.com/h4T2Ccs.png");

                    ctx.drawImage(colorful_memory_gamekeeper, 3, 1, 160, 160);
                }
                if (LP.Portrait === "colorful_memory_lawyer") {
                    const colorful_memory_lawyer = await Canvas.loadImage("https://i.imgur.com/YAZ1O3R.png");

                    ctx.drawImage(colorful_memory_lawyer, 12, 6, 150, 150);
                }
                if (LP.Portrait === "colorful_memory_coordinator") {
                    const colorful_memory_coordinator = await Canvas.loadImage("https://i.imgur.com/OJLkBJc.png");

                    ctx.drawImage(colorful_memory_coordinator, 9, 1, 160, 160);
                }
                if (LP.Portrait === "colorful_memory_magician") {
                    const colorful_memory_magician = await Canvas.loadImage("https://i.imgur.com/l2qy9S5.png");

                    ctx.drawImage(colorful_memory_magician, 9, 1, 160, 160);
                }
                if (LP.Portrait === "colorful_memory_cowboy") {
                    const colorful_memory_cowboy = await Canvas.loadImage("https://i.imgur.com/NGzUkth.png");

                    ctx.drawImage(colorful_memory_cowboy, 9, 1, 155, 155);
                }
                if (LP.Portrait === "colorful_memory_gardener") {
                    const colorful_memory_gardener = await Canvas.loadImage("https://i.imgur.com/DLc9pZ9.png");

                    ctx.drawImage(colorful_memory_gardener, 7, 2, 157, 157);
                }
                if (LP.Portrait === "colorful_memory_explorer") {
                    const colorful_memory_explorer = await Canvas.loadImage("https://i.imgur.com/JLhZRQU.png");

                    ctx.drawImage(colorful_memory_explorer, 15, 11, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_dancer") {
                    const colorful_memory_dancer = await Canvas.loadImage("https://i.imgur.com/TzLPj6L.png");

                    ctx.drawImage(colorful_memory_dancer, 15, 11, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_clown") {
                    const colorful_memory_clown = await Canvas.loadImage("https://i.imgur.com/4icq6vm.png");

                    ctx.drawImage(colorful_memory_clown, 15, 11, 140, 140);
                }
                if (LP.Portrait === "colorful_memory_spider") {
                    const colorful_memory_spider = await Canvas.loadImage("https://i.imgur.com/v0FyqYb.png");

                    ctx.drawImage(colorful_memory_spider, 15, 11, 140, 140);
                }
                if (LP.Portrait === "chihiro_fujisaki") {
                    const chihiro_fujisaki = await Canvas.loadImage("https://i.imgur.com/0baTSbV.png");

                    ctx.drawImage(chihiro_fujisaki, 6, -1, 160, 160);
                }
                if (LP.Portrait === "sakura_ogami") {
                    const sakura_ogami = await Canvas.loadImage("https://i.imgur.com/Izz5ClC.png");

                    ctx.drawImage(sakura_ogami, 2, -1, 160, 160);
                }
                if (LP.Portrait === "yasuhiro_hagakure") {
                    const yasuhiro_hagakure = await Canvas.loadImage("https://i.imgur.com/CuaqAYa.png");

                    ctx.drawImage(yasuhiro_hagakure, 3.5, 0, 160, 160);
                }
                if (LP.Portrait === "celestia_ludenberg") {
                    const celestia_ludenberg = await Canvas.loadImage("https://i.imgur.com/jG3Tjg2.png");

                    ctx.drawImage(celestia_ludenberg, 5, -1, 160, 160);
                }
                if (LP.Portrait === "kyoko_kirigiri") {
                    const kyoko_kirigiri = await Canvas.loadImage("https://i.imgur.com/MogqrFr.png");

                    ctx.drawImage(kyoko_kirigiri, 1, -3, 170, 170);
                }
                if (LP.Portrait === "mondo_owada") {
                    const mondo_owada = await Canvas.loadImage("https://i.imgur.com/AM0yZ4O.png");

                    ctx.drawImage(mondo_owada, 4, -3, 160, 160);
                }
                if (LP.Portrait === "byakuya_togami") {
                    const byakuya_togami = await Canvas.loadImage("https://i.imgur.com/c7thNQY.png");

                    ctx.drawImage(byakuya_togami, 4, -3, 160, 160);
                }
                if (LP.Portrait === "makoto_naegi") {
                    const makoto_naegi = await Canvas.loadImage("https://i.imgur.com/zMWoxXV.png");

                    ctx.drawImage(makoto_naegi, 5, -1, 160, 160);
                }

                if (LP.Portrait === "hifumi_yamada") {
                    const hifumi_yamada = await Canvas.loadImage("https://i.imgur.com/57J4TlV.png");

                    ctx.drawImage(hifumi_yamada, 5, -1, 160, 160);
                }

                if (LP.Portrait === "mukuro_ikusaba") {
                    const mukuro_ikusaba = await Canvas.loadImage("https://i.imgur.com/8P5SLl1.png");

                    ctx.drawImage(mukuro_ikusaba, 4, 0, 160, 160);
                }
                if (LP.Portrait === "kiyotaka_ishimaru") {
                    const kiyotaka_ishimaru = await Canvas.loadImage("https://i.imgur.com/iNqPCr1.png");

                    ctx.drawImage(kiyotaka_ishimaru, 5, -1, 160, 160);
                }

                if (LP.Portrait === "enoshima_junko") {
                    const enoshima_junko = await Canvas.loadImage("https://i.imgur.com/Rgd09om.png");

                    ctx.drawImage(enoshima_junko, 7, 1, 155, 155);
                }

                if (LP.Portrait === "aoi_asahina") {
                    const aoi_asahina = await Canvas.loadImage("https://i.imgur.com/pNfqRds.png");

                    ctx.drawImage(aoi_asahina, 7, 1, 157, 157);
                }
                if (LP.Portrait === "leon_kuwata") {
                    const leon_kuwata = await Canvas.loadImage("https://i.imgur.com/aFwjS8m.png");

                    ctx.drawImage(leon_kuwata, 7, 0, 157, 157);
                }

                if (LP.Portrait === "sayaka_maizono") {
                    const sayaka_maizono = await Canvas.loadImage("https://i.imgur.com/G72TEzB.png");

                    ctx.drawImage(sayaka_maizono, 7, 2, 157, 157);
                }
                if (LP.Portrait === "toko_fukawa") {
                    const toko_fukawa = await Canvas.loadImage("https://i.imgur.com/sd5bfEF.png");

                    ctx.drawImage(toko_fukawa, 3.5, -1, 158, 158);
                }

                if (LP.Portrait === "BnW_magician") {
                    const BnW_magician = await Canvas.loadImage("https://i.imgur.com/eqNDXyd.png");

                    ctx.drawImage(BnW_magician, 3, -1, 165, 165);
                }
                if (LP.Portrait === "BnW_explorer") {
                    const BnW_explorer = await Canvas.loadImage("https://i.imgur.com/LITUs77.png");

                    ctx.drawImage(BnW_explorer, 3, -1, 165, 165);
                }
                if (LP.Portrait === "BnW_gardener") {
                    const BnW_gardener = await Canvas.loadImage("https://i.imgur.com/JYWV8vm.png");

                    ctx.drawImage(BnW_gardener, 3, -1, 165, 165);
                }
                if (LP.Portrait === "BnW_priestess") {
                    const BnW_priestess = await Canvas.loadImage("https://i.imgur.com/v3jGMNc.png");

                    ctx.drawImage(BnW_priestess, 6, 3, 155, 155);
                }
                if (LP.Portrait === "BnW_luckyguy") {
                    const BnW_luckyguy = await Canvas.loadImage("https://i.imgur.com/GxlS2nq.png");

                    ctx.drawImage(BnW_luckyguy, 6, 3, 155, 155);
                }
                if (LP.Portrait === "BnW_coordinator") {
                    const BnW_coordinator = await Canvas.loadImage("https://i.imgur.com/g2aLYd8.png");

                    ctx.drawImage(BnW_coordinator, 6, 3, 155, 155);
                }
                if (LP.Portrait === "BnW_mechanic") {
                    const BnW_mechanic = await Canvas.loadImage("https://i.imgur.com/Tat0FFm.png");

                    ctx.drawImage(BnW_mechanic, 18, 12, 140, 140);
                }
                if (LP.Portrait === "BnW_lawyer") {
                    const BnW_lawyer = await Canvas.loadImage("https://i.imgur.com/WAmWpJk.png");

                    ctx.drawImage(BnW_lawyer, 15, 11, 140, 140);
                }
                if (LP.Portrait === "BnW_doctor") {
                    const BnW_doctor = await Canvas.loadImage("https://i.imgur.com/lPtyzye.png");

                    ctx.drawImage(BnW_doctor, 16, 12, 140, 140);
                }

                if (LP.Portrait === "long_jump_luchino") {
                    const long_jump_luchino = await Canvas.loadImage("https://i.imgur.com/2NeJXqy.png");

                    ctx.drawImage(long_jump_luchino, 25, 15, 135, 135);
                }
                if (LP.Portrait === "marathon_runner_victor") {
                    const marathon_runner_victor = await Canvas.loadImage("https://i.imgur.com/KzxmHgx.png");

                    ctx.drawImage(marathon_runner_victor, 30, 25, 115, 115);
                }
                if (LP.Portrait === "sword_fighting") {
                    const sword_fighting = await Canvas.loadImage("https://i.imgur.com/mRE6j40.png");

                    ctx.drawImage(sword_fighting, 25, 15, 135, 135);
                }
            } else {
                const avatar = await Canvas.loadImage(LPuser.displayAvatarURL({ format: 'png', dynamic: false }));

                ctx.drawImage(avatar, 32, 26, 108, 113);
            }

            const background = await Canvas.loadImage('./pics/LP.png');

            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            if (LP.frames.equipped === "frame1") {

                let frame1 = await Canvas.loadImage("./pics/frame1.png");

                ctx.drawImage(frame1, 15, 11, 150, 147);

            } else if (LP.frames.equipped === "frame2") {

                let frame2 = await Canvas.loadImage("./pics/frame2.png");

                ctx.drawImage(frame2, 13, 9, 150, 147);

            } else if (LP.frames.equipped === "frame3") {

                let frame3 = await Canvas.loadImage("./pics/frame3.png");

                ctx.drawImage(frame3, 10, 4, 157, 154);

            } else if (LP.frames.equipped === "frame4") {

                let frame4 = await Canvas.loadImage("./pics/frame4.png");

                ctx.drawImage(frame4, 10, 4, 157, 154);

            } else if (LP.frames.equipped === "frame5") {

                let frame5 = await Canvas.loadImage("./pics/frame5.png");

                ctx.drawImage(frame5, 10, 4, 157, 162);

            } else if (LP.frames.equipped === "frame6") {

                let frame6 = await Canvas.loadImage("./pics/frame6.png");

                ctx.drawImage(frame6, 10, 4, 157, 162);

            } else if (LP.frames.equipped === "frame7") {
                let frame7 = await Canvas.loadImage("./pics/frame7.png");

                ctx.drawImage(frame7, 9, 4, 165, 162);

            } else if (LP.frames.equipped === "frame8") {

                let frame8 = await Canvas.loadImage("./pics/frame8.png");

                ctx.drawImage(frame8, 9, 4, 165, 161);
            } else if (LP.frames.equipped === "frame9") {

                let frame9 = await Canvas.loadImage("./pics/frame9.png");

                ctx.drawImage(frame9, 4, 1, 165, 170);
            } else if (LP.frames.equipped === "frame10") {

                let frame10 = await Canvas.loadImage("./pics/frame10.png");

                ctx.drawImage(frame10, 4, 1, 165, 170);
            } else if (LP.frames.equipped === "1kcowboish") {

                let cowboish = await Canvas.loadImage("./pics/cowboish.png");

                ctx.drawImage(cowboish, 4, -7, 185, 185);
            }


            ctx.font = 'bold 16px Arial';

            ctx.fillStyle = '#000000';

            ctx.fillText(LPuser.username, 160, 35);

            ctx.font = '14px Arial';
            ctx.fillStyle = '#000000';

            ctx.fillText(LP.Ess1, 70, 267);

            ctx.fillText(LP.Ess2, 189, 267);

            ctx.fillText(LP.Ess3, 308, 267);

            ctx.fillText(LP.Dices, 409, 264);

            ctx.fillText(LP.Inspirations, 407, 343);

            ctx.fillText(LP.frags, 400, 410);

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

            ctx.fillText(LP.logic, 500, 230, 570);

            let opened = LP.S + LP.A + LP.B + LP.C + LP.D;

            ctx.fillText(opened, 500, 291, 570);

            ctx.fillText(LP.Echoes, 500, 350, 570);

            ctx.fillText(LP.Clues, 500, 410, 570);

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
                "s13-1-47", "s13-1-48", "s13-1-49", "s13-1-50"].forEach(x => { if (LP.Opened.includes(x)) portraitAmount++; });

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