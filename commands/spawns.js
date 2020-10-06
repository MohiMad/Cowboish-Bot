const { ErrorMsg } = require("../functions.js");
const { MessageEmbed } = require("discord.js");

let spamStopper = new Set();
module.exports = {
    name: 'spawns',
    description: "ehhhh check for cipher/surv/hunter/dungeon spawns in certain maps",
    execute: async (message, args, bot, prefix) => {

        let cipherNames = ["cipher", "gen", "ciphers", "gens", "ciphermachine", "ciphermachines", "generator", "generators"];
        let characterNames = ["survivor", "survivors", "surv", "survs", "characters", "character", "hunter", "hunters", "killer", "killers", "player", "players"];
        let dungeonNames = ["dungeon", "hatch", "dungeons", "hatches"];

        var msg = "**Too few arguments were given...**\nPlease provide me what map you want to check the spawns for... \n**Optional**: You can also provide what spawns you want to check for after providing the map name...\n\n**Map Names/Arguments (2nd):**\n\n**The Red Chruch** ➜ `church`\n**Sacred Heart Hospital** ➜ `hospital`\n**Arms Factory** ➜ `factory`\n**Leo's Memory** ➜ `memory`\n**Moonlit River Park** ➜ `moonlit`\n**Lakeside Village** ➜ `lakeside`\n**Eversleeping Town** ➜ `eversleeping`\n**White Sand Street Asylum** ➜ `asylum`\n\n**Spawn Arguments (3rd):**\n\n**Cipher Machines** ➜ `cipher`\n**Survivors/Hunter** ➜ `players`\n**Dungeon Location** ➜ `dungeon` Duuuh on this one xD\n\n**Examples:**\n`" + prefix + "spawns <mapName> <spawnType(optional)>`\n`" + prefix + "spawns church ciphermachines`";

        async function pageScroller(message, imageArray, title) {

            if (spamStopper.has(message.author)) return message.reply("**Please react with ❌ on the previous embed before being able to start a new spawn scroller!**");

            let Pages = imageArray;
            let pageI = 0;

            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(title, message.author.displayAvatarURL(), imageArray[pageI].replace(".jpg", ""));

            embed.setFooter(`Spawn 1 of ${imageArray.length}`);
            embed.setImage(imageArray[pageI]);

            spamStopper.add(message.author);
            let msg = await message.channel.send(embed);

            await msg.react('⏪');

            await msg.react('⏩');

            await msg.react('❌');


            let backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;

            let forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;


            let back = msg.createReactionCollector(backFilter, {
                time: 300000
            });

            let forward = msg.createReactionCollector(forwardFilter, {
                time: 300000
            });

            back.on('collect', async r => {
                await r.users.remove(message.author);

                if (pageI === 0) {
                    pageI = Pages.length - 1;
                } else {
                    pageI--;
                }

                embed.setImage(imageArray[pageI]);
                embed.setFooter(`Spawn ${pageI + 1} of ${imageArray.length}`);

                await msg.edit(embed);
            });

            forward.on('collect', async r => {

                await r.users.remove(message.author);

                if (pageI === Pages.length - 1) {

                    pageI = 0;
                } else {
                    pageI++;
                }
                embed.setImage(imageArray[pageI]);
                embed.setFooter(`Spawn ${pageI + 1} of ${imageArray.length}`);

                await msg.edit(embed);
            });

            let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

            let end = msg.createReactionCollector(endFilter, {
                time: 300000
            });

            end.on('collect', async r => {

                msg.reactions.removeAll().catch(error => console.log(error));

                await end.stop();
                await forward.stop();
                await back.stop();
                spamStopper.delete(message.author);

            });

            end.on('end', async () => {
                spamStopper.delete(message.author);
                msg.reactions.removeAll().catch(error => console.log(error));
            });

        };

        if (!args[1]) {
            return ErrorMsg(bot, message, msg);

        } else if (["theredchurch", "church", "redchruch"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/B4qHzVO.jpg", "https://i.imgur.com/TDsjLFM.jpg", "https://i.imgur.com/te4Ya8o.jpg", "https://i.imgur.com/hb3pY7p.jpg", "https://i.imgur.com/BD3LM3g.jpg", "https://i.imgur.com/oiwu5pm.jpg", "https://i.imgur.com/0HyGZbZ.jpg", "https://i.imgur.com/J6GkKxi.jpg", "https://i.imgur.com/bi1DHWQ.jpg", "https://i.imgur.com/XqHYIwT.jpg", "https://i.imgur.com/pvn3yKX.jpg", "https://i.imgur.com/E36pyXl.jpg", "https://i.imgur.com/q7ALtO3.jpg", "https://i.imgur.com/B7iflNd.jpg", "https://i.imgur.com/bjuXBL7.jpg"], "The Red Chruch's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/B4qHzVO.jpg", "https://i.imgur.com/TDsjLFM.jpg", "https://i.imgur.com/te4Ya8o.jpg", "https://i.imgur.com/hb3pY7p.jpg", "https://i.imgur.com/BD3LM3g.jpg"], "The Red Church's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/oiwu5pm.jpg", "https://i.imgur.com/0HyGZbZ.jpg", "https://i.imgur.com/J6GkKxi.jpg", "https://i.imgur.com/bi1DHWQ.jpg", "https://i.imgur.com/XqHYIwT.jpg", "https://i.imgur.com/pvn3yKX.jpg", "https://i.imgur.com/E36pyXl.jpg"], "The Red Chruch's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/q7ALtO3.jpg", "https://i.imgur.com/B7iflNd.jpg", "https://i.imgur.com/bjuXBL7.jpg"], "The Red Church's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/B4qHzVO.jpg", "https://i.imgur.com/TDsjLFM.jpg", "https://i.imgur.com/te4Ya8o.jpg", "https://i.imgur.com/hb3pY7p.jpg", "https://i.imgur.com/BD3LM3g.jpg", "https://i.imgur.com/oiwu5pm.jpg", "https://i.imgur.com/0HyGZbZ.jpg", "https://i.imgur.com/J6GkKxi.jpg", "https://i.imgur.com/bi1DHWQ.jpg", "https://i.imgur.com/XqHYIwT.jpg", "https://i.imgur.com/pvn3yKX.jpg", "https://i.imgur.com/E36pyXl.jpg", "https://i.imgur.com/q7ALtO3.jpg", "https://i.imgur.com/B7iflNd.jpg", "https://i.imgur.com/bjuXBL7.jpg"], "The Red Chruch's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["armsfactory", "factory", "arms"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/Mf4z43o.jpg", "https://i.imgur.com/Cpw8usc.jpg", "https://i.imgur.com/5kvGLIy.jpg", "https://i.imgur.com/WqP473w.jpg", "https://i.imgur.com/whB5Lor.jpg", "https://i.imgur.com/QSXHWpZ.jpg", "https://i.imgur.com/0QenO16.jpg", "https://i.imgur.com/Zbtb3W6.jpg", "https://i.imgur.com/8aYJGMS.jpg", "https://i.imgur.com/l33B6h2.jpg", "https://i.imgur.com/FLNoTSE.jpg", "https://i.imgur.com/fmkgFrP.jpg", "https://i.imgur.com/DLYAJMO.jpg", "https://i.imgur.com/FNiOwwh.jpg"], "Arms Factory's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/0QenO16.jpg", "https://i.imgur.com/Zbtb3W6.jpg", "https://i.imgur.com/8aYJGMS.jpg", "https://i.imgur.com/l33B6h2.jpg", "https://i.imgur.com/FLNoTSE.jpg"], "Arms Factory's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/Mf4z43o.jpg", "https://i.imgur.com/Cpw8usc.jpg", "https://i.imgur.com/5kvGLIy.jpg", "https://i.imgur.com/WqP473w.jpg", "https://i.imgur.com/whB5Lor.jpg", "https://i.imgur.com/QSXHWpZ.jpg"], "Arms Factory's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/fmkgFrP.jpg", "https://i.imgur.com/DLYAJMO.jpg", "https://i.imgur.com/FNiOwwh.jpg"], "Arms Factory's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/Mf4z43o.jpg", "https://i.imgur.com/Cpw8usc.jpg", "https://i.imgur.com/5kvGLIy.jpg", "https://i.imgur.com/WqP473w.jpg", "https://i.imgur.com/whB5Lor.jpg", "https://i.imgur.com/QSXHWpZ.jpg", "https://i.imgur.com/0QenO16.jpg", "https://i.imgur.com/Zbtb3W6.jpg", "https://i.imgur.com/8aYJGMS.jpg", "https://i.imgur.com/l33B6h2.jpg", "https://i.imgur.com/FLNoTSE.jpg", "https://i.imgur.com/fmkgFrP.jpg", "https://i.imgur.com/DLYAJMO.jpg", "https://i.imgur.com/FNiOwwh.jpg"], "Arms Factory's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["hospital", "sacredhospital", "sacred"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/aw2pJ2x.jpg", "https://i.imgur.com/fGIolSc.jpg", "https://i.imgur.com/tX6ZO8P.jpg", "https://i.imgur.com/NF17ZHm.jpg", "https://i.imgur.com/IThKZGY.jpg", "https://i.imgur.com/Dd9PysX.jpg", "https://i.imgur.com/93fwpEA.jpg", "https://i.imgur.com/U4DTltL.jpg", "https://i.imgur.com/KDRQVhe.jpg", "https://i.imgur.com/89SHDS1.jpg", "https://i.imgur.com/e9AO5MQ.jpg", "https://i.imgur.com/DDjISk8.jpg", "https://i.imgur.com/yIiWXWX.jpg", "https://i.imgur.com/7Js0Ah8.jpg"], "The Sacred Hospital's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/89SHDS1.jpg", "https://i.imgur.com/e9AO5MQ.jpg", "https://i.imgur.com/DDjISk8.jpg", "https://i.imgur.com/yIiWXWX.jpg", "https://i.imgur.com/7Js0Ah8.jpg"], "The Sacred Hospital's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/aw2pJ2x.jpg", "https://i.imgur.com/fGIolSc.jpg", "https://i.imgur.com/tX6ZO8P.jpg", "https://i.imgur.com/NF17ZHm.jpg", "https://i.imgur.com/IThKZGY.jpg", "https://i.imgur.com/Dd9PysX.jpg"], "The Sacred Hospital's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/93fwpEA.jpg", "https://i.imgur.com/U4DTltL.jpg", "https://i.imgur.com/KDRQVhe.jpg"], "The Sacred Hospital's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/aw2pJ2x.jpg", "https://i.imgur.com/fGIolSc.jpg", "https://i.imgur.com/tX6ZO8P.jpg", "https://i.imgur.com/NF17ZHm.jpg", "https://i.imgur.com/IThKZGY.jpg", "https://i.imgur.com/Dd9PysX.jpg", "https://i.imgur.com/93fwpEA.jpg", "https://i.imgur.com/U4DTltL.jpg", "https://i.imgur.com/KDRQVhe.jpg", "https://i.imgur.com/89SHDS1.jpg", "https://i.imgur.com/e9AO5MQ.jpg", "https://i.imgur.com/DDjISk8.jpg", "https://i.imgur.com/yIiWXWX.jpg", "https://i.imgur.com/7Js0Ah8.jpg"], "The Sacred Hospital's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["leo", "leos", "leosmemory", "leo'smemory", "leo's", "memory"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/Zn75stR.jpg", "https://i.imgur.com/6oyzHqh.jpg", "https://i.imgur.com/HSf1Vyf.jpg", "https://i.imgur.com/3oeUnRm.jpg", "https://i.imgur.com/thVy7YN.jpg", "https://i.imgur.com/CiPv2w6.jpg", "https://i.imgur.com/lVvkcvT.jpg", "https://i.imgur.com/DEAWlyV.jpg", "https://i.imgur.com/qgoR1Mm.jpg", "https://i.imgur.com/w6tbe2o.jpg", "https://i.imgur.com/Nu1xjLh.jpg", "https://i.imgur.com/LbjBvY6.jpg", "https://i.imgur.com/Wlb4aCt.jpg", "https://i.imgur.com/73daCi0.jpg", "https://i.imgur.com/NxtgxtP.jpg", "https://i.imgur.com/PgKFzcA.jpg", "https://i.imgur.com/VIPNp8r.jpg", "https://i.imgur.com/hlw9yTh.jpg", "https://i.imgur.com/TYo5Dpn.jpg"], "Leo's Memory's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/Zn75stR.jpg", "https://i.imgur.com/6oyzHqh.jpg", "https://i.imgur.com/HSf1Vyf.jpg", "https://i.imgur.com/3oeUnRm.jpg", "https://i.imgur.com/thVy7YN.jpg"], "Leo's Memory's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/CiPv2w6.jpg", "https://i.imgur.com/lVvkcvT.jpg", "https://i.imgur.com/DEAWlyV.jpg", "https://i.imgur.com/qgoR1Mm.jpg", "https://i.imgur.com/w6tbe2o.jpg", "https://i.imgur.com/Nu1xjLh.jpg", "https://i.imgur.com/LbjBvY6.jpg", "https://i.imgur.com/Wlb4aCt.jpg", "https://i.imgur.com/73daCi0.jpg"], "Leo's Memory's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/NxtgxtP.jpg", "https://i.imgur.com/PgKFzcA.jpg", "https://i.imgur.com/VIPNp8r.jpg", "https://i.imgur.com/hlw9yTh.jpg", "https://i.imgur.com/TYo5Dpn.jpg"], "Leo's Memory's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/Zn75stR.jpg", "https://i.imgur.com/6oyzHqh.jpg", "https://i.imgur.com/HSf1Vyf.jpg", "https://i.imgur.com/3oeUnRm.jpg", "https://i.imgur.com/thVy7YN.jpg", "https://i.imgur.com/CiPv2w6.jpg", "https://i.imgur.com/lVvkcvT.jpg", "https://i.imgur.com/DEAWlyV.jpg", "https://i.imgur.com/qgoR1Mm.jpg", "https://i.imgur.com/w6tbe2o.jpg", "https://i.imgur.com/Nu1xjLh.jpg", "https://i.imgur.com/LbjBvY6.jpg", "https://i.imgur.com/Wlb4aCt.jpg", "https://i.imgur.com/73daCi0.jpg", "https://i.imgur.com/NxtgxtP.jpg", "https://i.imgur.com/PgKFzcA.jpg", "https://i.imgur.com/VIPNp8r.jpg", "https://i.imgur.com/hlw9yTh.jpg", "https://i.imgur.com/TYo5Dpn.jpg"], "Leo's Memory's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["lakeside", "lake", "lakesidevillage", "village"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/oSjNJ1c.jpg", "https://i.imgur.com/54kRoWT.jpg", "https://i.imgur.com/MnVFOlG.jpg", "https://i.imgur.com/XwkMcUu.jpg", "https://i.imgur.com/eWXkG3v.jpg", "https://i.imgur.com/8J94F8R.jpg", "https://i.imgur.com/AZ3My3F.jpg", "https://i.imgur.com/mtHQmel.jpg", "https://i.imgur.com/kZTpdJK.jpg", "https://i.imgur.com/2LXvtF5.jpg", "https://i.imgur.com/l7IDf4T.jpg", "https://i.imgur.com/D47ndCW.jpg", "https://i.imgur.com/wzNe7YB.jpg", "https://i.imgur.com/pu1q7CY.jpg", "https://i.imgur.com/XDfaatm.jpg", "https://i.imgur.com/bCfXLEl.jpg", "https://i.imgur.com/GebPpRX.jpg"], "Lakeside Village's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/mtHQmel.jpg", "https://i.imgur.com/kZTpdJK.jpg", "https://i.imgur.com/2LXvtF5.jpg", "https://i.imgur.com/l7IDf4T.jpg", "https://i.imgur.com/D47ndCW.jpg"], "Lakeside Village's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/oSjNJ1c.jpg", "https://i.imgur.com/54kRoWT.jpg", "https://i.imgur.com/MnVFOlG.jpg", "https://i.imgur.com/XwkMcUu.jpg", "https://i.imgur.com/eWXkG3v.jpg", "https://i.imgur.com/8J94F8R.jpg", "https://i.imgur.com/AZ3My3F.jpg"], "Lakeside Village's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/wzNe7YB.jpg", "https://i.imgur.com/pu1q7CY.jpg", "https://i.imgur.com/XDfaatm.jpg", "https://i.imgur.com/bCfXLEl.jpg", "https://i.imgur.com/GebPpRX.jpg"], "Lakeside Village's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/oSjNJ1c.jpg", "https://i.imgur.com/54kRoWT.jpg", "https://i.imgur.com/MnVFOlG.jpg", "https://i.imgur.com/XwkMcUu.jpg", "https://i.imgur.com/eWXkG3v.jpg", "https://i.imgur.com/8J94F8R.jpg", "https://i.imgur.com/AZ3My3F.jpg", "https://i.imgur.com/mtHQmel.jpg", "https://i.imgur.com/kZTpdJK.jpg", "https://i.imgur.com/2LXvtF5.jpg", "https://i.imgur.com/l7IDf4T.jpg", "https://i.imgur.com/D47ndCW.jpg", "https://i.imgur.com/wzNe7YB.jpg", "https://i.imgur.com/pu1q7CY.jpg", "https://i.imgur.com/XDfaatm.jpg", "https://i.imgur.com/bCfXLEl.jpg", "https://i.imgur.com/GebPpRX.jpg"], "Lakeside Village's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["moonlit", "moonlitriverpark", "riverpark", "moonlitriver"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/YgN8X0d.jpg", "https://i.imgur.com/9EXtkgd.jpg", "https://i.imgur.com/2QJI9FK.jpg", "https://i.imgur.com/aRRojOj.jpg", "https://i.imgur.com/dRW5U85.jpg", "https://i.imgur.com/aKLTc2K.jpg", "https://i.imgur.com/jpsO9pg.jpg", "https://i.imgur.com/sAUEzu3.jpg", "https://i.imgur.com/AZw7xlp.jpg", "https://i.imgur.com/pP6Ad1C.jpg", "https://i.imgur.com/20WakzB.jpg", "https://i.imgur.com/DTOskId.jpg", "https://i.imgur.com/aVtA2Zx.jpg", "https://i.imgur.com/ss9dZ6D.jpg", "https://i.imgur.com/2saBURn.jpg", "https://i.imgur.com/dPVGjtq.jpg", "https://i.imgur.com/gFve2uC.jpg", "https://i.imgur.com/dA01uUb.jpg"], "Moonlit River Park's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/AZw7xlp.jpg", "https://i.imgur.com/pP6Ad1C.jpg", "https://i.imgur.com/20WakzB.jpg", "https://i.imgur.com/DTOskId.jpg", "https://i.imgur.com/aVtA2Zx.jpg"], "Moonlit River Park's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/YgN8X0d.jpg", "https://i.imgur.com/9EXtkgd.jpg", "https://i.imgur.com/2QJI9FK.jpg", "https://i.imgur.com/aRRojOj.jpg", "https://i.imgur.com/dRW5U85.jpg", "https://i.imgur.com/aKLTc2K.jpg", "https://i.imgur.com/jpsO9pg.jpg", "https://i.imgur.com/sAUEzu3.jpg"], "Moonlit River Park's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/ss9dZ6D.jpg", "https://i.imgur.com/2saBURn.jpg", "https://i.imgur.com/dPVGjtq.jpg", "https://i.imgur.com/gFve2uC.jpg", "https://i.imgur.com/dA01uUb.jpg"], "Moonlit River Park's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/YgN8X0d.jpg", "https://i.imgur.com/9EXtkgd.jpg", "https://i.imgur.com/2QJI9FK.jpg", "https://i.imgur.com/aRRojOj.jpg", "https://i.imgur.com/dRW5U85.jpg", "https://i.imgur.com/aKLTc2K.jpg", "https://i.imgur.com/jpsO9pg.jpg", "https://i.imgur.com/sAUEzu3.jpg", "https://i.imgur.com/AZw7xlp.jpg", "https://i.imgur.com/pP6Ad1C.jpg", "https://i.imgur.com/20WakzB.jpg", "https://i.imgur.com/DTOskId.jpg", "https://i.imgur.com/aVtA2Zx.jpg", "https://i.imgur.com/ss9dZ6D.jpg", "https://i.imgur.com/2saBURn.jpg", "https://i.imgur.com/dPVGjtq.jpg", "https://i.imgur.com/gFve2uC.jpg", "https://i.imgur.com/dA01uUb.jpg"], "Moonlit River Park's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["eversleeping", "eversleep", "eversleepingtown"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/FPge1Ej.jpg", "https://i.imgur.com/WbCfJKF.jpg", "https://i.imgur.com/u0A9f4C.jpg", "https://i.imgur.com/Jr3iCdQ.jpg", "https://i.imgur.com/MRoQiVi.jpg", "https://i.imgur.com/KFDpp4U.jpg", "https://i.imgur.com/Wt8ZGX4.jpg", "https://i.imgur.com/OsZqqJj.jpg", "https://i.imgur.com/2d8hepq.jpg", "https://i.imgur.com/A0CkmA1.jpg", "https://i.imgur.com/VhAAlBR.jpg", "https://i.imgur.com/24MC78U.jpg", "https://i.imgur.com/KJw7nvf.jpg", "https://i.imgur.com/uIF8Z38.jpg", "https://i.imgur.com/GRhAm6O.jpg"], "Eversleeping Town's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/VhAAlBR.jpg", "https://i.imgur.com/24MC78U.jpg", "https://i.imgur.com/KJw7nvf.jpg", "https://i.imgur.com/uIF8Z38.jpg", "https://i.imgur.com/GRhAm6O.jpg"], "Eversleeping Town's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/FPge1Ej.jpg", "https://i.imgur.com/WbCfJKF.jpg", "https://i.imgur.com/u0A9f4C.jpg", "https://i.imgur.com/Jr3iCdQ.jpg", "https://i.imgur.com/MRoQiVi.jpg", "https://i.imgur.com/KFDpp4U.jpg", "https://i.imgur.com/Wt8ZGX4.jpg"], "Eversleeping Town's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/OsZqqJj.jpg", "https://i.imgur.com/2d8hepq.jpg", "https://i.imgur.com/A0CkmA1.jpg"], "Eversleeping Town's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/FPge1Ej.jpg", "https://i.imgur.com/WbCfJKF.jpg", "https://i.imgur.com/u0A9f4C.jpg", "https://i.imgur.com/Jr3iCdQ.jpg", "https://i.imgur.com/MRoQiVi.jpg", "https://i.imgur.com/KFDpp4U.jpg", "https://i.imgur.com/Wt8ZGX4.jpg", "https://i.imgur.com/OsZqqJj.jpg", "https://i.imgur.com/2d8hepq.jpg", "https://i.imgur.com/A0CkmA1.jpg", "https://i.imgur.com/VhAAlBR.jpg", "https://i.imgur.com/24MC78U.jpg", "https://i.imgur.com/KJw7nvf.jpg", "https://i.imgur.com/uIF8Z38.jpg", "https://i.imgur.com/GRhAm6O.jpg"], "Eversleeping Town's Cipher/Players/Dungeon Spawn Locations");
            }
        } else if (["asylum", "asylm", "whitesandstreetasylum"].includes(args[1].toLowerCase())) {
            if (!args[2]) {
                await pageScroller(message, ["https://i.imgur.com/nIbTQPv.jpg", "https://i.imgur.com/O2NqU8S.jpg", "https://i.imgur.com/FLHqzDo.jpg", "https://i.imgur.com/1VL3Cvg.jpg", "https://i.imgur.com/A4cRX8l.jpg", "https://i.imgur.com/yd08ixc.jpg", "https://i.imgur.com/TsQfxYu.jpg", "https://i.imgur.com/2NNA5Fh.jpg", "https://i.imgur.com/uZM3dyA.jpg", "https://i.imgur.com/rg5TYRg.jpg", "https://i.imgur.com/nIbTQPv.jpg", "https://i.imgur.com/O2NqU8S.jpg", "https://i.imgur.com/FLHqzDo.jpg", "https://i.imgur.com/1VL3Cvg.jpg", "https://i.imgur.com/A4cRX8l.jpg", "https://i.imgur.com/yd08ixc.jpg", "https://i.imgur.com/TsQfxYu.jpg", "https://i.imgur.com/2NNA5Fh.jpg", "https://i.imgur.com/uZM3dyA.jpg", "https://i.imgur.com/rg5TYRg.jpg"], "White Sand Street Asylum's Cipher/Players/Dungeon Spawn Locations");
            } else if (cipherNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/yd08ixc.jpg", "https://i.imgur.com/TsQfxYu.jpg", "https://i.imgur.com/2NNA5Fh.jpg", "https://i.imgur.com/uZM3dyA.jpg", "https://i.imgur.com/rg5TYRg.jpg"], "White Sand Street Asylum's Cipher Spawn Locations");
            } else if (characterNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/nIbTQPv.jpg", "https://i.imgur.com/O2NqU8S.jpg", "https://i.imgur.com/FLHqzDo.jpg", "https://i.imgur.com/1VL3Cvg.jpg", "https://i.imgur.com/A4cRX8l.jpg"], "White Sand Street Asylum's Survivors/Hunter Spawn Locations");
            } else if (dungeonNames.includes(args[2].toLowerCase())) {
                await pageScroller(message, ["https://i.imgur.com/PKaY8MW.jpg", "https://i.imgur.com/EwgIENt.jpg", "https://i.imgur.com/j2KqSWF.jpg", "https://i.imgur.com/PFDzGgn.jpg", "https://i.imgur.com/5OLdqo0.jpg"], "White Sand Street Asylum's Dungeon Spawn Locations");
            } else {
                await pageScroller(message, ["https://i.imgur.com/nIbTQPv.jpg", "https://i.imgur.com/O2NqU8S.jpg", "https://i.imgur.com/FLHqzDo.jpg", "https://i.imgur.com/1VL3Cvg.jpg", "https://i.imgur.com/A4cRX8l.jpg", "https://i.imgur.com/yd08ixc.jpg", "https://i.imgur.com/TsQfxYu.jpg", "https://i.imgur.com/2NNA5Fh.jpg", "https://i.imgur.com/uZM3dyA.jpg", "https://i.imgur.com/rg5TYRg.jpg", "https://i.imgur.com/nIbTQPv.jpg", "https://i.imgur.com/O2NqU8S.jpg", "https://i.imgur.com/FLHqzDo.jpg", "https://i.imgur.com/1VL3Cvg.jpg", "https://i.imgur.com/A4cRX8l.jpg", "https://i.imgur.com/yd08ixc.jpg", "https://i.imgur.com/TsQfxYu.jpg", "https://i.imgur.com/2NNA5Fh.jpg", "https://i.imgur.com/uZM3dyA.jpg", "https://i.imgur.com/rg5TYRg.jpg"], "White Sand Street Asylum's Cipher/Players/Dungeon Spawn Locations");
            }
        } else {
            return ErrorMsg(bot, message, msg);
        }

    }

}   