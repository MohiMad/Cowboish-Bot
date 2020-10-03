const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require("discord.js");

const { findMember, newLP, ErrorMsg } = require("../functions.js");

const { frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, cowboish_frame } = require("../emojis.json");

module.exports = {
    name: 'equip',
    description: "Equip the frame you bought!",
    execute: async (message, args, bot, prefix) => {

        let LP = await logicPath.findOne({ UserID: message.author.id });

        await newLP(message);

        function freeToUse(message, fram) {

            let freeToUseEmbed = new RichEmbed()
                .setTitle("Your frame is now equipped!")
                .setColor("0x14abf7")
                .setDescription("Wanna see how it looks like? go ahead and do `" + prefix + "logicpath`")
                .attachFiles([`./pics/${fram}.png`])
                .setThumbnail("attachment://" + fram + ".png");

            message.channel.send(freeToUseEmbed);

        }


        function frameFunction(message, frames, eFrame) {
            if (eFrame === false) {
                return ErrorMsg(bot, message, "You don't have that frame!\nYou need to buy that frame to be able to equip it!\n\nTo buy the frame, do `" + prefix + "buy " + frames + "`\nTo check what frames exists, do `" + prefix + "shop frames`");
            }

            let embed = new RichEmbed()
                .setTitle("Your frame is now equipped!")
                .setColor("0x14abf7")
                .setDescription("Wanna see how it looks like? go ahead and do `" + prefix + "logicpath`")
                .attachFiles([`./pics/${frames}.png`])
                .setThumbnail("attachment://" + frames + ".png");

            LP.frames.equipped = frames;
            LP.save().catch(e => console.log(e));

            message.channel.send(embed);
        }
        if (!args[1]) {
            return ErrorMsg(bot, message, "**Missing Arguments!**\nPlease provide me what you want to equip after the command...\nAre you trying to equip a **frame** or a **portrait**?\n\nTo equip a specific *portrait-frame*, do `" + prefix + "equip frame <frameID>`\nAre you trying to equip a *portrait*? Do `" + prefix + "equip portrait <portrait name>`\n\nTo check what frames exist, do `" + prefix + "shop frames`\nTo check what portraits you have, do `" + prefix + "shop portraits`");
        } else {

            if (["frame", "portrait-frame", "frames", "portrait-frames"].includes(args[1].toLowerCase())) {

                let description = ":";

                if (LP.frames.frame1 === true) {
                    description = description + " " + frame1;

                }
                if (LP.frames.frame2 === true) {
                    description = description + " " + frame2;

                }
                if (LP.frames.frame3 === true) {
                    description = description + " " + frame3;

                }
                if (LP.frames.frame4 === true) {
                    description = description + " " + frame4;

                }
                if (LP.frames.frame5 === true) {
                    description = description + " " + frame5;

                }
                if (LP.frames.frame6 === true) {
                    description = description + " " + frame6;

                }
                if (LP.Opened.includes("1kcowboish")) {
                    description = description + " " + cowboish_frame;

                }
                description = description + ` ${frame7} ${frame8} ${frame9} ${frame10}`

                let equipped;

                if (LP.frames.equipped === "frame1") {
                    equipped = frame1;
                }
                else if (LP.frames.equipped === "frame2") {
                    equipped = frame2;
                }
                else if (LP.frames.equipped === "frame3") {
                    equipped = frame3;
                }
                else if (LP.frames.equipped === "frame4") {
                    equipped = frame4;
                }
                else if (LP.frames.equipped === "frame5") {
                    equipped = frame5;
                }
                else if (LP.frames.equipped === "frame6") {
                    equipped = frame6;
                }
                else if (LP.frames.equipped === "frame7") {
                    equipped = frame7;
                }
                else if (LP.frames.equipped === "frame8") {
                    equipped = frame8;
                }
                else if (LP.frames.equipped === "frame9") {
                    equipped = frame9;
                }
                else if (LP.frames.equipped === "frame10") {
                    equipped = frame10;
                }
                else if (LP.frames.equipped === "1kcowboish") {
                    equipped = cowboish_frame;
                }
                else {
                    equipped = "None!";
                }

                let framEmbed = new RichEmbed()
                    .setAuthor(bot.user.username, bot.user.displayAvatarURL)
                    .setColor("RANDOM")
                    .setDescription("Please provide the frame's ID you want to equip!\nCorrect usage: `" + prefix + "equip frame <frameID>`\n\n**Frames you already own**" + description + "\n▔ ▔ ▔ ▔ ▔\n**Equipped frame**: " + equipped + "\n▔ ▔ ▔ ▔ ▔\nDunno what to equip? do `" + prefix + "shop frames` to see what's in the shop\nWanna unequip your frame? do `" + prefix + "equip frame none`")
                    .setFooter(message.author.tag, message.author.displayAvatarURL)
                    .setTimestamp();

                if (!args[2]) {

                    message.channel.send(framEmbed);

                } else if (["frame1", "detective", "1"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame1", LP.frames.frame1);
                }
                else if (["frame2", "valentine", "2"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame2", LP.frames.frame2);
                }
                else if (["frame3", "allstar", "3"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame3", LP.frames.frame3);
                }
                else if (["frame4", "tree", "4"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame4", LP.frames.frame4);
                }
                else if (["frame5", "5"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame5", LP.frames.frame5);
                }
                else if (["frame6", "6"].includes(args[2].toLowerCase())) {
                    return frameFunction(message, "frame6", LP.frames.frame6);
                }
                else if (["frame7", "7"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "frame7";
                    LP.save().catch(e => console.log(e));

                    freeToUse(message, "frame7");

                }
                else if (["frame8", "8"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "frame8";
                    LP.save().catch(e => console.log(e));

                    freeToUse(message, "frame8");

                }
                else if (["frame9", "9"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "frame9";
                    LP.save().catch(e => console.log(e));

                    freeToUse(message, "frame9");

                }
                else if (["frame10", "10"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "frame10";
                    LP.save().catch(e => console.log(e));

                    freeToUse(message, "frame10");

                }
                else if (["cowboish", "1kcowboish"].includes(args[2].toLowerCase())) {
                    if (!LP.Opened.includes("1kcowboish")) return message.channel.send(`**You can't equip this frame...**`);

                    LP.frames.equipped = "1kcowboish";
                    LP.save().catch(e => console.log(e));

                    freeToUse(message, "cowboish");

                }
                else if (["none", "no", "unequip"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "0";
                    LP.save().catch(e => console.log(e));
                    return message.reply("**Unequipped your portraitframe!**");

                } else {
                    message.channel.send(framEmbed);
                }
            } else if (["portrait", "portraits"].includes(args[1].toLowerCase())) {

                let ownedPortraits = ":";
                let portraitString = args.slice(2).join(" ");

                function equipThePortrait(portraitName, portraitItem, portraitAttachment) {
                    if (!LP.Opened.includes(portraitItem)) {
                        return message.channel.send(`**${message.author.username}**, you don't own that portrait...\nYou need to obtain it from an essence in order for you to be able to equip it...`);
                    } else {

                        let setPortraitEmbed = new RichEmbed()
                            .setTitle("Succesfully changed your portrait!")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL)
                            .setThumbnail(portraitAttachment)
                            .setColor("0x952cdb")
                            .setDescription("Your portrait has been set to:\n**" + portraitString + "**\n\nWanna see how it looks like? Do `" + prefix + "logicpath`")
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                        LP.Portrait = portraitName;
                        LP.save().catch(e => console.log(e));

                        message.channel.send(setPortraitEmbed);
                    }

                }

                async function paidPortraits(stringName, link) {
                    if (!LP.Opened.includes(stringName)) return ErrorMsg(bot, message, "**You don't own this portrait!**\nYou need to buy it from the shop by doing `" + prefix + "buy " + portraitString.toLowerCase() + "`");

                    LP.Portrait = stringName;
                    await LP.save().catch(e => console.log(e));

                    let PaidPortraitEmbed = new RichEmbed()
                        .setTitle("Succesfully changed your portrait!")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL)
                        .setThumbnail(link)
                        .setColor("0x952cdb")
                        .setDescription("Your portrait has been set to:\n**" + portraitString + "**\n\nWanna see how it looks like? Do `" + prefix + "logicpath`")
                        .setFooter(bot.user.tag, bot.user.displayAvatarURL);

                    message.channel.send(PaidPortraitEmbed);
                }

                if (!args[2]) {

                    function checkForPortrait(itemName, portraitName) {
                        if (LP.Opened.includes(itemName)) {
                            ownedPortraits = ownedPortraits + `\n__**${portraitName}**__`;
                        }
                    }//end of the function

                    checkForPortrait("ess1-14", "Black and White Explorer");
                    checkForPortrait("ess1-15", "Black and White Magician");
                    checkForPortrait("ess1-16", "Black and White Gardener");
                    checkForPortrait("ess1-48", "Colorful Memory GameKeeper");
                    checkForPortrait("ess1-49", "Colorful Memory Coordinator");
                    checkForPortrait("ess1-50", "Colorful Memory Geisha");
                    checkForPortrait("ess1-51", "Colorful Memory Lawyer");
                    //ess 1



                    // _____________ don't ask why this exist____________
                    checkForPortrait("ess3-38", "Black And White Lucky Guy");
                    checkForPortrait("ess3-39", "Black And White Coordinator");
                    checkForPortrait("ess3-40", "Black And White Priestess");
                    checkForPortrait("ess3-46", "Colorful Memory Magician");
                    checkForPortrait("ess3-47", "Colorful Memory Cowboy");
                    checkForPortrait("ess3-48", "Colorful Memory Gardener");
                    checkForPortrait("ess3-49", "Colorful Memory Forward");
                    //ess 3

                    //Danganronpa
                    checkForPortrait("dangan-20", "Makoto Naegi");
                    checkForPortrait("dangan-21", "Kyoko Kirigiri");
                    checkForPortrait("dangan-22", "Sayaka Maizono");
                    checkForPortrait("dangan-23", "Leon Kuwata");
                    checkForPortrait("dangan-24", "Mondo Owada");
                    checkForPortrait("dangan-25", "Celestia Ludenberg");
                    checkForPortrait("dangan-26", "Toko Fukawa");
                    checkForPortrait("dangan-27", "Aoi Asahina");
                    checkForPortrait("dangan-28", "Byakuya Togami");
                    checkForPortrait("dangan-29", "Hifumi Yamada");
                    checkForPortrait("dangan-30", "Enoshima Junko");
                    checkForPortrait("dangan-31", "Chihiro Fujisaki");
                    checkForPortrait("dangan-32", "Sakura Ogami");
                    checkForPortrait("dangan-33", "Kiyotaka Ishimaru");
                    checkForPortrait("dangan-34", "Mukuro Ikusaba");
                    checkForPortrait("dangan-35", "Yasuhiro Hagakure");

                    //s12-2 essence
                    checkForPortrait("s12-2-36", "Black and White Mechanic");
                    checkForPortrait("s12-2-37", "Black and White Lawyer");
                    checkForPortrait("s12-2-38", "Black and White Doctor");
                    checkForPortrait("s12-2-46", "Colorful Memory Explorer");
                    checkForPortrait("s12-2-47", "Colorful Memory Dancer");
                    checkForPortrait("s12-2-48", "Colorful Memory Smiley Face");
                    checkForPortrait("s12-2-49", "Colorful Memory Soul Weaver");

                    checkForPortrait("s13-2-47", "Colorful Memory Prospector");
                    checkForPortrait("s13-2-48", "Colorful Memory Enchantress");
                    checkForPortrait("s13-2-49", "Colorful Memory Guard 26");
                    checkForPortrait("s13-2-50", "Colorful Memory Bloody Queen");

                    let ownedPortraitEmbed = new RichEmbed()
                        .setAuthor(message.author.username, message.author.displayAvatarURL)
                        .setTitle("Pfff you're missing some arguments friend >:3")
                        .setColor("0x6714f7")
                        .setFooter("Keep in mind that you can't equip a portrait you haven't obtained from an essence...", bot.user.displayAvatarURL)
                        .setDescription("Please provide me what portrait you want to equip, to do that, do`" + prefix + "equip portrait <portrait name>`\n\nDunno what portraits you have? Here are they" + ownedPortraits + "\n\n**Example Usage**:\n`" + prefix + "equip portrait Black And White Priestess`\n\nWanna set your portrait back to your profile-picture? do `" + prefix + "equip portrait default`");

                    message.channel.send(ownedPortraitEmbed);

                }//no args[2] bracket
                else if (["black and white priestess", "(black and white priestess)", "bnw priestess", "black-and-white priestess"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_priestess", "ess3-40", "https://i.imgur.com/v3jGMNc.png");
                }
                else if (["black and white lucky guy", "(black and white lucky guy)", "bnw lucky guy", "black-and-white lucky guy"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_luckyguy", "ess3-38", "https://i.imgur.com/GxlS2nq.png");
                }
                else if (["black and white coordinator", "(black and white coordinator)", "bnw coordinator", "black-and-white coordinator"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_coordinator", "ess3-39", "https://i.imgur.com/g2aLYd8.png");
                }
                else if (["colorful memory magician", "(colorful memory magician)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_magician", "ess3-46", "https://i.imgur.com/l2qy9S5.png");

                } else if (["colorful memory cowboy", "(colorful memory cowboy)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_cowboy", "ess3-47", "https://i.imgur.com/NGzUkth.png");

                } else if (["colorful memory gardener", "(colorful memory gardener)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_gardener", "ess3-48", "https://i.imgur.com/DLc9pZ9.png");

                } else if (["colorful memory forward", "(colorful memory forward)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_forward", "ess3-48", "https://i.imgur.com/hTQNDEr.png");

                } else if (["black and white explorer", "(black and white explorer)", "bnw explorer", "black-and-white explorer"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_explorer", "ess1-14", "https://i.imgur.com/LITUs77.png");

                } else if (["black and white magician", "(black and white magician)", "bnw magician", "black-and-white magician"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_magician", "ess1-15", "https://i.imgur.com/eqNDXyd.png");

                } else if (["black and white gardener", "(black and white gardener)", "bnw gardener", "black-and-white gardener"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_gardener", "ess1-16", "https://i.imgur.com/JYWV8vm.png");

                } else if (["black and white mechanic", "(black and white mechanic)", "bnw mechanic", "black-and-white mechanic"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_mechanic", "s12-2-36", "https://i.imgur.com/Tat0FFm.png");

                } else if (["black and white lawyer", "(black and white lawyer)", "bnw lawyer", "black-and-white lawyer"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_lawyer", "s12-2-37", "https://i.imgur.com/WAmWpJk.png");

                } else if (["black and white doctor", "(black and white doctor)", "bnw doctor", "black-and-white doctor"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("BnW_doctor", "s12-2-38", "https://i.imgur.com/lPtyzye.png");

                } else if (["colorful memory gamekeeper", "(colorful memory gamekeeper)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_gamekeeper", "ess1-48", "https://i.imgur.com/h4T2Ccs.png");

                } else if (["colorful memory coordinator", "(colorful memory coordinator)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_coordinator", "ess1-49", "https://i.imgur.com/OJLkBJc.png");

                } else if (["colorful memory geisha", "(colorful memory geisha)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_geisha", "ess1-50", "https://i.imgur.com/yeKjyts.png");

                } else if (["colorful memory lawyer", "(colorful memory lawyer)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_lawyer", "ess1-51", "https://i.imgur.com/YAZ1O3R.png");

                } else if (["colorful memory explorer", "(colorful memory explorer)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_explorer", "s12-2-46", "https://i.imgur.com/JLhZRQU.png");

                } else if (["colorful memory dancer", "(colorful memory dancer)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_dancer", "s12-2-47", "https://i.imgur.com/TzLPj6L.png");

                } else if (["colorful memory smiley face", "(colorful memory smiley face)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_clown", "s12-2-48", "https://i.imgur.com/4icq6vm.png");

                } else if (["colorful memory soul weaver", "(colorful memory soul weaver)"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_spider", "s12-2-49", "https://i.imgur.com/v0FyqYb.png");

                }else if (["colorful memory prospector"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_prospector", "s13-1-47", "https://i.imgur.com/jYhlLjL.png");

                } else if (["colorful memory enchantress"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_enchantress", "s13-1-48", "https://i.imgur.com/MqLkHoP.png");

                }else if (["colorful memory bonbon", "colorful memory guard 26"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_bonbon", "s13-1-49", "https://i.imgur.com/qHcEiJH.png");

                }else if (["colorful memory bloodyqueen", "colorful memory bloody queen", "colorful memory mary"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("colorful_memory_bloodyqueen", "s13-1-50", "https://i.imgur.com/tsLS63D.png");

                } else if (["makoto naegi", "makoto"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("makoto_naegi", "dangan-20", "https://i.imgur.com/zMWoxXV.png");

                } else if (["kyoko kirigiri", "kyoko"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("kyoko_kirigiri", "dangan-21", "https://i.imgur.com/MogqrFr.png");

                } else if (["sayaka maizono", "sayaka"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("sayaka_maizono", "dangan-22", "https://i.imgur.com/G72TEzB.png");

                } else if (["leon kuwata", "leon"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("leon_kuwata", "dangan-23", "https://i.imgur.com/aFwjS8m.png");

                } else if (["mondo owada", "mondo"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("mondo_owada", "dangan-24", "https://i.imgur.com/AM0yZ4O.png");

                } else if (["celestia ludenberg", "celestia"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("celestia_ludenberg", "dangan-25", "https://i.imgur.com/jG3Tjg2.png");

                } else if (["toko fukawa", "toko"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("toko_fukawa", "dangan-26", "https://i.imgur.com/sd5bfEF.png");

                } else if (["aoi asahina", "aoi"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("aoi_asahina", "dangan-27", "https://i.imgur.com/pNfqRds.png");

                } else if (["byakuya togami", "byakuya"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("byakuya_togami", "dangan-28", "https://i.imgur.com/c7thNQY.png");

                } else if (["hifumi yamada", "hifumi"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("hifumi_yamada", "dangan-29", "https://i.imgur.com/57J4TlV.png");

                } else if (["enoshima junko", "enoshima", "junko", "junko enoshima"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("enoshima_junko", "dangan-30", "https://i.imgur.com/Rgd09om.png");

                } else if (["chihiro fujisaki", "chihiro"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("chihiro_fujisaki", "dangan-31", "https://i.imgur.com/0baTSbV.png");

                } else if (["sakura ogami", "sakura"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("sakura_ogami", "dangan-32", "https://i.imgur.com/Izz5ClC.png");

                } else if (["kiyotaka ishimaru", "kiyotaka"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("kiyotaka_ishimaru", "dangan-33", "https://i.imgur.com/iNqPCr1.png");

                } else if (["mukuro ikusaba", "mukuro"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("mukuro_ikusaba", "dangan-34", "https://i.imgur.com/8P5SLl1.png");

                } else if (["yasuhiro hagakure", "yasuhiro"].includes(portraitString.toLowerCase())) {
                    equipThePortrait("yasuhiro_hagakure", "dangan-35", "https://i.imgur.com/CuaqAYa.png");

                } else if (["long jump luchino", "longjumpluchino", "long jump", "longjumpluchino"].includes(portraitString.toLowerCase())) {
                    paidPortraits("long_jump_luchino", "https://i.imgur.com/2NeJXqy.png");

                } else if (["marathon runner victor", "marathon runner", "marathon victor", "marathonrunnervictor"].includes(portraitString.toLowerCase())) {
                    paidPortraits("marathon_runner_victor", "https://i.imgur.com/KzxmHgx.png");

                } else if (["sword fighting joseph", "sword fighting", "sword fight", "swordfightingjoseph"].includes(portraitString.toLowerCase())) {
                    paidPortraits("sword_fighting", "https://i.imgur.com/mRE6j40.png");

                } else if (["none", "unequip", "no", "default", "pfp", "profilepicture", "profilepic"]) {

                    LP.Portrait = "0";
                    LP.save().catch(e => console.log(e));

                    return message.reply("**Your portrait has been set to your profile-picture!**");
                } else {
                    ErrorMsg(bot, message, "**Ooops, looks like you provided a nonexistent portrait...**\nAre you sure it exists? Make sure you typed it correctly...\n\nTo check what portraits you actually own, do `" + prefix + "shop portrait` or `" + prefix + "equip portrait`\n\n**Example of Usage:**`" + prefix + "equip portrait colorful memory forward`\n\nWanna set your portrait back to your profile-picture? do `" + prefix + "equip portrait default`")
                }

            } else {
                return ErrorMsg(bot, message, "**Seems like you messed up with your first arguments**\nTo equip a specific *portrait-frame*, do `" + prefix + "equip frame <frameID>`\nAre you trying to equip a *portrait*? Do `" + prefix + "equip portrait <portrait name>`\n\nTo check what frames exist, do `" + prefix + "shop frames`\nTo check what portraits you have, do `" + prefix + "shop portraits`")
            }


        }//the else bracket!



    }
}