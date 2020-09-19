const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const e = require("../emojis.json");

const { RichEmbed } = require('discord.js');
const { newLP } = require("../functions.js");

const { Portraits } = require("../essences/items.json");

module.exports = {
    name: 'shop',
    description: "shop list for ya",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        //___________Main shop list_________________
        const shopEmbed = new RichEmbed()
            .setTitle("<:cowboy:649130677253439508> Cowboish shop list")
            .setColor("RANDOM")
            .setDescription("Here is a list of the lists available in the shop! do `" + prefix + "shop <listID>`\n\n" + stripIndents`
            ${e.ess1} | **Essences shop!** ─ ID ➜  __*essence*__
            Too unlucky to get essences? well buy some...
    
            ${e.luckyguy} | **Survivors list!** ─ ID ➜  __*survivors*__
            I swear to god if you buy Enchantress...
    
            ${e.uwuchang} | **Hunters list!** ─ ID ➜ __*hunters*__
            Nothing to say here tbh... 
            
            ${e.frame5} | **Portrait-frames list!** - ID ➜ __*frames*__
            Make your __${prefix}logicpath__ look more colorful :D
    
            ${e.portrait} | **Portraits list!** - ID ➜ __*portraits*__
            Change your portrait to the one you prefer to be shown in __${prefix}logicpath__

            ${e.S_Card} | **Skins list!** - ID ➜ __*skins*__
            Finally a usage of your fragments${e.frags} huh?
    
            `)
            .setFooter("Cowboish shop list ─ page 1 of 1");

        //___________Essence embed here_______________
        const EssEmbed = new RichEmbed()
            .setTitle("<:cowboy:649130677253439508> Cowboish Essence Shop!")
            .setDescription("Are you low on essences? no essences at all?\nIt's all fine, you can buy yourself some by doing:\n`" + prefix + "buy <essenceID> [optional(Amount)]`\n\n" + stripIndents`
            ${e.ess1} | **Essence s12-1** - Price : *96* ${e.insp} - ID: __*s12-1*__
            ${e.ess2} | **Essence s12-2** - Price : *96* ${e.insp} - ID: __*s12-2*__
            ${e.ess3} | **Essence s12-3** - Price : *96* ${e.insp} - ID: __*s12-3*__
            `)
            .setColor("RANDOM")
            .setThumbnail("https://i.imgur.com/BXAjWou.png")
            .setFooter("Cowboish essence shop ─ page 1 of 1");

        if (!args[1]) return message.channel.send(shopEmbed);

        if (["ess", "essence", "essences"].includes(args[1].toLowerCase())) return message.channel.send(EssEmbed);

        if (["survivor", "surv", "survivors"].includes(args[1].toLowerCase())) {

            let SurvivorsArray = [

                {
                    LP_Path: LP.Survivors.Cowboy,
                    CharacterName: "Cowboy",
                    Emoji: e.cowboy

                },
                {
                    LP_Path: LP.Survivors.Mercenary,
                    Price: 3048,
                    CharacterName: "Mercenary",
                    Emoji: e.mercenary

                },
                {
                    LP_Path: LP.Survivors.Coordinator,
                    CharacterName: "Coordinator",
                    Emoji: e.coordinator

                },
                {
                    LP_Path: LP.Survivors.Priestess,
                    CharacterName: "Priestess",
                    Emoji: e.priestess

                },
                {
                    LP_Path: LP.Survivors.Mechanic,
                    CharacterName: "Mechanic",
                    Emoji: e.mechanic

                },
                {
                    LP_Path: LP.Survivors.Mindseye,
                    CharacterName: "Mindseye",
                    Emoji: e.mindseye

                },
                {
                    LP_Path: LP.Survivors.Prefumer,
                    CharacterName: "Perfumer",
                    Emoji: e.perfumer

                },
                {
                    LP_Path: LP.Survivors.Dancer,
                    CharacterName: "Dancer",
                    Emoji: e.dancer

                },
                {
                    LP_Path: LP.Survivors.Seer,
                    CharacterName: "Seer",
                    Emoji: e.seer

                },
                {
                    LP_Path: LP.Survivors.Embalmer,
                    CharacterName: "Embalmer",
                    Emoji: e.embalmer

                },
                {
                    LP_Path: LP.Survivors.Acrobat,
                    CharacterName: "Acrobat",
                    Emoji: e.acrobat

                },
                {
                    LP_Path: LP.Survivors.Officer,
                    CharacterName: "1st Officer",
                    Emoji: e.officer

                },
                {
                    LP_Path: LP.Survivors.Barmaid,
                    CharacterName: "Barmaid",
                    Emoji: e.barmaid

                },
                {
                    LP_Path: LP.Survivors.Magician,
                    Price: 1988,
                    CharacterName: "Magician",
                    Emoji: e.magician

                },
                {
                    LP_Path: LP.Survivors.Explorer,
                    Price: 1468,
                    CharacterName: "Explorer",
                    Emoji: e.explorer

                },
                {
                    LP_Path: LP.Survivors.Forward,
                    CharacterName: "Forward",
                    Emoji: e.forward

                },
                {
                    LP_Path: LP.Survivors.Prospector,
                    CharacterName: "Prospector",
                    Emoji: e.prospector

                },
                {
                    LP_Path: LP.Survivors.Enchantress,
                    CharacterName: "Enchantress",
                    Emoji: e.enchantress

                },
                {
                    LP_Path: LP.Survivors.Wilding,
                    CharacterName: "Wildling",
                    Emoji: e.wildling_boar

                },
                {
                    LP_Path: LP.Survivors.Postman,
                    CharacterName: "Postman",
                    Emoji: e.postman

                },
                {
                    LP_Path: LP.Survivors.NewSurv,
                    CharacterName: "Gravekeeper",
                    Emoji: e.gravekeeper

                },
                {
                    LP_Path: LP.Survivors.AnotherSurv,
                    CharacterName: "Prisoner",
                    Emoji: e.prisoner

                },
                {
                    LP_Path: LP.Entomologist,
                    CharacterName: "Entomologist",
                    Emoji: e.entomologist

                }
            ];

            let ownedSurvivors = "**Owned Survivors:**",
                nonOwnedSurvivors = "**Non Owned Survivors:**"

            SurvivorsArray.forEach(x => {
                if (x.LP_Path === true) ownedSurvivors = ownedSurvivors + `\n${x.Emoji} | **${x.CharacterName}**`;
                else nonOwnedSurvivors = nonOwnedSurvivors + `\n${x.Emoji} | **${x.CharacterName}** ➜ __${x.Price ? x.Price : 3568}__ ${e.clues}`
            });

            if (ownedSurvivors === "**Survivors owned:**") ownedSurvivors = "None other than the default ones...";
            if (nonOwnedSurvivors === "**Non Owned Survivors:**") nonOwnedSurvivors = "None... you bought em' all :v";

            const survEmbed = new RichEmbed()
                .setTitle("Survivors shop list!")
                .setDescription("To buy the survivor you want, do `" + prefix + "buy <survivorName>`\n" + `${ownedSurvivors}\n\n${nonOwnedSurvivors}`)
                .setFooter("Remember to type the Survivor's name without spacings")
                .setColor("RANDOM");

            return message.channel.send(survEmbed);


        }//survivor bracket

        else if (["hunter", "hunters"].includes(args[1].toLowerCase())) {

            let ownedHunters = "**Owned Hunters:**",
                nonOwnedHunter = "**Non Owned Hunters:**",
                hunterArray = [
                    {
                        LP_Path: LP.Hunters.AxeBoi,
                        CharacterName: "Axeboy",
                        Emoji: e.axeboy
                    },
                    {
                        LP_Path: LP.Hunters.GameKeeper,
                        CharacterName: "Gamekeeper",
                        Price: 3988,
                        Emoji: e.gamekeeper
                    },
                    {
                        LP_Path: LP.Hunters.BloodyQueen,
                        CharacterName: "Bloodyqueen",
                        Emoji: e.bloodyqueen
                    },
                    {
                        LP_Path: LP.Hunters.Pingu,
                        CharacterName: "Guard 26",
                        Emoji: e.bonbon
                    },
                    {
                        LP_Path: LP.Hunters.Clown,
                        CharacterName: "Smiley Face",
                        Price: 1888,
                        Emoji: e.smileyface
                    },
                    {
                        LP_Path: LP.Hunters.DreamWitch,
                        CharacterName: "Dreamwitch",
                        Emoji: e.dreamwitch
                    },
                    {
                        LP_Path: LP.Hunters.Feaster,
                        CharacterName: "Feaster",
                        Emoji: e.feaster
                    },
                    {
                        LP_Path: LP.Hunters.Geisha,
                        CharacterName: "Geisha",
                        Emoji: e.geisha
                    },
                    {
                        LP_Path: LP.Hunters.Lizard,
                        CharacterName: "Evil Reptilian",
                        Emoji: e.lizard
                    },
                    {
                        LP_Path: LP.Hunters.MadEyes,
                        CharacterName: "Madeyes",
                        Emoji: e.madeyes
                    },
                    {
                        LP_Path: LP.Hunters.PhotoGrapher,
                        CharacterName: "Photographer",
                        Emoji: e.photographer
                    },
                    {
                        LP_Path: LP.Hunters.Ripper,
                        CharacterName: "Ripper",
                        Emoji: e.ripper
                    },
                    {
                        LP_Path: LP.Hunters.Sister,
                        CharacterName: "Ann",
                        Emoji: e.ann
                    },
                    {
                        LP_Path: LP.Hunters.SoulWeaver,
                        CharacterName: "Soulweaver",
                        Emoji: e.spider
                    },
                    {
                        LP_Path: LP.Hunters.WuChang,
                        CharacterName: "Wuchang",
                        Emoji: e.uwuchang
                    },
                    {
                        LP_Path: LP.Hunters.NewHunta,
                        CharacterName: "Violinist",
                        Emoji: e.violinist
                    },
                    {
                        LP_Path: LP.Sculptor,
                        CharacterName: "Sculptor",
                        Emoji: e.sculptor
                    }
                ];

            hunterArray.forEach(x => {
                if (x.LP_Path === true) ownedHunters = ownedHunters + `\n${x.Emoji} | **${x.CharacterName}**`;
                else nonOwnedHunter = nonOwnedHunter + `\n${x.Emoji} | **${x.CharacterName}** ➜ __${x.Price ? x.Price : 3568}__ ${e.clues}`
            });

            if (ownedHunters === "**Owned Hunters:**") ownedHunters = ownedHunters + "\nNone other than Hellember :v";
            if (nonOwnedHunter === "**Non Owned Hunters:**") nonOwnedHunter = nonOwnedHunter + "\nNone... you bought em' all :v";


            const huntaEmbed = new RichEmbed()
                .setTitle("Cowboish Hunter shop!")
                .setColor("RANDOM")
                .setDescription("To buy the hunter of your choice, do `" + prefix + "buy <HunterName>`\n\n" + `${ownedHunters}\n\n${nonOwnedHunter}`)
                .setFooter("Keep in mind to type the hunter's name without spacings :)");

            message.channel.send(huntaEmbed);


        }//if hunter bracket

        else if (["frame", "frames"].includes(args[1].toLowerCase())) {

            let frameArray = [
                {
                    Shortcuts: ["frame1", "detective"],
                    LP_Path: LP.frames.frame1,
                    Price: 2888,
                    Emoji: e.frame1
                },
                {
                    Shortcuts: ["frame2", "valentine"],
                    LP_Path: LP.frames.frame2,
                    Price: 2888,
                    Emoji: e.frame2
                },
                {
                    Shortcuts: ["frame3", "allstar"],
                    LP_Path: LP.frames.frame3,
                    Price: 2888,
                    Emoji: e.frame3
                },
                {
                    Shortcuts: ["frame4", "tree"],
                    LP_Path: LP.frames.frame4,
                    Price: 2888,
                    Emoji: e.frame4
                },
                {
                    Shortcuts: ["frame5"],
                    LP_Path: LP.frames.frame5,
                    Price: 28888,
                    Emoji: e.frame5
                },
                {
                    Shortcuts: ["frame6"],
                    LP_Path: LP.frames.frame6,
                    Price: 2888,
                    Emoji: e.frame6
                },
                {
                    Shortcuts: ["frame7"],
                    Emoji: e.frame7
                },
                {
                    Shortcuts: ["frame8"],
                    Emoji: e.frame8
                },
                {
                    Shortcuts: ["frame9"],
                    Emoji: e.frame9
                },
                {
                    Shortcuts: ["frame10"],
                    Emoji: e.frame10
                },
                {
                    Shortcuts: ["1kcowboish", "cowboish"],
                    Emoji: e.cowboish_frame,
                    Opened_Path: "1kcowboish"
                }
            ];
            let equippedFrame = "None!",
                ownedFrames = "\n",
                nonOwnedFrame = "\n"

            frameArray.forEach(frame => {
                if (LP.frames.equipped === frame.Shortcuts[0]) equippedFrame = `${frame.Emoji} | ` + "`" + frame.Shortcuts[0] + "`";

                if (frame.LP_Path === undefined) {

                    if (!frame.Opened_Path) {

                        ownedFrames = ownedFrames + `${frame.Emoji} | **${frame.Shortcuts[0]}**\n`;

                    } else {

                        if (LP.Opened.includes(frame.Opened_Path)) {
                            ownedFrames = ownedFrames + `${frame.Emoji} | **${frame.Shortcuts[0]}**\n`;
                        }

                    }
                } else {
                    if (frame.LP_Path === true) ownedFrames = ownedFrames + `${frame.Emoji} | **${frame.Shortcuts[0]}**\n`;
                    if (frame.LP_Path === false) nonOwnedFrame = nonOwnedFrame + `${frame.Emoji} | ` + "**`" + frame.Shortcuts[0] + "`**" + `  ─ **${frame.Price}** ${e.frags}\n`;
                }

            });

            if (ownedFrames === "\n") ownedFrames = "\nNone!";
            if (nonOwnedFrame === "\n") nonOwnedFrame = "\nNone!";

            let framEmbed = new RichEmbed()
                .setAuthor("Portrait-frame shop!", message.author.displayAvatarURL)
                .setColor("0xeb34c9")
                .setThumbnail("https://i.imgur.com/sqrVkq7.png")
                .setDescription("To buy the frame of your choice, do `" + prefix + "buy <frameID>`\n\n" + `**Equipped frame:**\n${equippedFrame}\n\n__**Frames you own:**__${ownedFrames}\n__**Frames in the shop:**__${nonOwnedFrame}`)
                .setFooter("Cowboish Frame Shop ─ Mohi says yeehaw", bot.user.displayAvatarURL)

            message.channel.send(framEmbed);


        } else if (["portraits", "portrait"].includes(args[1].toLowerCase())) {

            let ownedPortraits = "\n";

            let NotOwnedPortraits = "\n";

            Portraits.forEach(x => {
                if (Portraits.indexOf(x) === 0) return;
                if (LP.Opened.includes(x.Item)) ownedPortraits = ownedPortraits + `__${x.Name[0]}__\n`;
                else NotOwnedPortraits = NotOwnedPortraits + `${x.Name[0]}\n`;
            });

            if (ownedPortraits === "\n") ownedPortraits = "\nLMAO none cause you broke :v\nYou can obtain portraits by opening essence tho ;)";
            if (NotOwnedPortraits === "\n") NotOwnedPortraits = "\nYou got them all OwO";

            let ownedPortraitEmbed = new RichEmbed()
                .setAuthor("Cowboish Portrait Shop >:3", bot.user.displayAvatarURL)
                .setColor("0x6714f7")
                .setThumbnail("https://i.imgur.com/NGzUkth.png")
                .setFooter("Keep in mind that you can't equip a portrait you haven't obtained from an essence...", message.author.displayAvatarURL)
                .setDescription("An equipped Portrait will display in `" + prefix + "logicpath` instead of your actual profile-picture\nTo equip the portrait of your choice, do\n`" + prefix + "equip portrait <portrait name>`\n\n**You can also navigate between the portrait smoothly by doing\n**`" + prefix + "view portraits`\n\n**Dunno what portraits you have? Here are they:**" + ownedPortraits + "\n\n**Here are the portraits you don't own**" + NotOwnedPortraits + "\n\n**《 Purchasable Portraits 》**\nTo buy one of these portraits, do `" + prefix + "buy <portrait name>`\n\n🦎 | __**Long Jump Luchino**__ ➜ Price __1888__ " + e.frags + "\n📧 | __**Marathon Runner Victor**__ ➜ Price __1888__ " + e.frags + "\n⚔️ | __**Sword fighting Joseph**__ ➜ Price __1888__ " + e.frags + "\n\n**Example Usage**:\n`" + prefix + "equip portrait Black And White Priestess`");

            message.channel.send(ownedPortraitEmbed);

        } else if (["skins", "skin"].includes(args[1].toLowerCase())) {


            let skinPages = [
                {
                    link: "https://i.imgur.com/5DUpUat.png",
                    des: `[***《 TIME LIMITED 》***](https://youtu.be/qh_0YACMxyo)\nEnds at: *3rd October*\n\n:zero: | **[Costume] Acrobat - ACE**\n***Price: *** __6888__${e.frags}\n***Description:***\nTie-breaker. Are you going to win this round?`
                },
                {
                    link: "https://i.imgur.com/Oy4Cs7O.png",
                    des: `:one: | **Forward - Ricardo Milos** ─ __86888__${e.frags}\n\n:two: | **Smiley Face - King** ─ __16888__${e.frags}\n\n:three: | **Mechanic - Red Riding Hood** ─ __16888__${e.frags}\n\n:four: | **Priestess - Guide** ─ __16888__${e.frags}\n\n:five: | **Geisha - The Bride** ─ __16888__${e.frags}\n\n:six: | **Gardener - Ghost Girl** ─ __16888__${e.frags}\n\n:seven: **Photogarpher - Azrael** ─ __16888__${e.frags}\n\n:eight: | **The Mind's Eye - Dark Cake** ─ __16888__${e.frags}`
                },
                {
                    link: "https://i.imgur.com/NpwrCQb.png",
                    des: `:nine: | **Magician - Treasure Hunter** ─ __16888__${e.frags}\n\n:one: :zero: | **Dancer - Valkyrie** ─ __16888__${e.frags}\n\n:one: :one: | **Lucky Guy - Maid Outfit** ─ __6888__${e.frags}\n\n:one: :two: | **Ripper - Svengali** ─ __6888__${e.frags}\n\n:one: :three: | **Gardener - Boudoir Dream** ─ __6888__${e.frags}\n\n:one: :four: | **Coordinator - Iron Lady**  ─ __6888__${e.frags}\n\n:one: :five: | **Wu chang - Broken Blossoms** ─ __6888__${e.frags}\n\n:one: :six: | **Priestess - Samara** ─ __6888__${e.frags}`
                },
                {
                    link: "https://i.imgur.com/7toytbk.png",
                    des: `:one: :seven: | **Doctor - Rythm Of The Rain** ─ __6888__${e.frags}\n\n:one: :eight: | **Seer - Reculse** ─ __6888__${e.frags}\n\n:one: :nine: | **Perfumer - Fatal Affection** ─ __6888__${e.frags}\n\n:two: :zero: | **Doctor - Holy Angel** ─ __6888__${e.frags}\n\n:two: :one: | **Mercenary - Parasite** ─ __6888__${e.frags}\n\n:two: :two: | **Forward - Bull Power** ─ __6888__${e.frags}\n\n:two: :three: | **Feaster - Nepenthes** ─ __6888__${e.frags}\n\n:two: :four: | **Geisha - White Peacock** ─ __6888__${e.frags}`
                }

            ];

            var page;
            if (!args[2]) page = 0;
            else if (isNaN(args[2])) page = 0;
            else if (Number(args[2]) > skinPages.length) return message.channel.send(`Um- there are only ${skinPages.length} skin pages... **${message.author.username}**`)
            else page = Number(args[2] - 1);

            let skinsEmbed = new RichEmbed()
                .setAuthor("Cowboish Skins Shop ヽ(´･ω･`)丿", message.author.displayAvatarURL)
                .setColor("0xFBFF00")
                .setThumbnail("https://i.imgur.com/b0brEsj.png")
                .setDescription("To buy a specific skin, do\n`" + prefix + "buy skin [skinNumberHere]`\nThe skin number is displayed on the left side of the skin in the image attached to this embed...\nTo go to the next skin page, do `" + prefix + "shop skins [pageNumber]`\n\n" + skinPages[page].des)
                .setFooter(`Cowboish Skin Shop ─ Page ${page + 1} of ${skinPages.length}`)
                .setImage(skinPages[page].link);

            message.channel.send(skinsEmbed);

        } else {
            message.channel.send(shopEmbed);
        }


    }
}
