const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10, cowboish_frame, clues, frags, ess1, ess2, ess3, insp } = require("../emojis.json");

const { RichEmbed } = require('discord.js');
const { newLP } = require("../functions.js");


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
            .setDescription("Here is a list of the lists available in the shop! do `" + prefix + "shop <listID>`")
            .addField("▔ ▔ ▔ ▔ ▔", stripIndents` 
        ${ess1} | **Essences shop!** ─ ID ➜  __*essence*__
        Too unlucky to get essences? well buy some...

        <:luckyguy:649120786312855563> | **Survivors list!** ─ ID ➜  __*survivor*__
        I swear to god if you buy Enchantress...

        <:uwuchang:659147931592687616> | **Hunters list!** ─ ID ➜ __*hunter*__
        Nothing to say here tbh... 
        
        <:frame5:693526158830075955> | **Portrait-frames list!** - ID ➜ __*frame*__
        Make your __${prefix}logicpath__ look more colorful :D

        <:koboi_portrait:734343902592630874> | **Portraits list!** - ID ➜ __*portrait*__
        Change your portrait to the one you prefer to be shown in __${prefix}logicpath__

        `)
            .setFooter("Cowboish shop list ─ page 1 of 1");

        //___________Essence embed here_______________
        const EssEmbed = new RichEmbed()
            .setTitle("<:cowboy:649130677253439508> Cowboish Essence Shop!")
            .setDescription("Are you low on essences? no essences at all? it's all fine, you can buy yourself some by doing `" + prefix + "buy <essenceID> [optional(Amount)]`")
            .setColor("RANDOM")
            .setThumbnail("https://i.imgur.com/BXAjWou.png")
            .addField("▔ ▔ ▔ ▔ ▔ ", stripIndents`
        ${ess1} | **Essence s12-1** - Price : *96* ${insp} - ID: __*s12-1*__
        ${ess2} | **Essence s12-2** - Price : *96* ${insp} - ID: __*s12-2*__
        ${ess3} | **Essence s12-3** (__Unavailable__) - Price : *96* ${insp} - ID: __*s12-3*__
        `)
            .setFooter("Cowboish essence shop ─ page 1 of 1");

        if (!args[1]) {
            return message.channel.send(shopEmbed);
        }
        else if (["ess", "essence", "essences"].includes(args[1].toLowerCase())) {
            message.channel.send(EssEmbed);

        }

        else if (["survivor", "surv", "survivors"].includes(args[1].toLowerCase())) {

            const roleEmbed = new RichEmbed()
                .setTitle("Survivors shop list!")
                .setDescription("To buy the survivor you want, do `" + prefix + "buy <survivorName>`\n")
                .setFooter("Remember to type the survivor's name without spacing or capitalization")
                .setColor("RANDOM");

            if (LP.Survivors.Officer === true) {
                roleEmbed.addField("⏰ 1st Officer", "~~1st Officer - Price __*3568*__~~");
            } else {
                roleEmbed.addField("⏰ 1st Officer", "1st Officer - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Acrobat === true) {
                roleEmbed.addField("<:acrobat:664447949509623828> Acrobat", "~~Acrobat - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:acrobat:664447949509623828> Acrobat", "Acrobat - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Barmaid === true) {
                roleEmbed.addField("<:barmaid:664448019495649291> Barmaid", "~~Barmaid - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:barmaid:664448019495649291> Barmaid", "Barmaid - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Postman === true) {
                roleEmbed.addField("<:postman:648981954787672123> Postman", "~~Postman - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:postman:648981954787672123> Postman", "Postman - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Coordinator === true) {
                roleEmbed.addField("<:coordinator:649121091276636180> Coordinator", "~~Coordinator - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:coordinator:649121091276636180> Coordinator", "Coordinator - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Dancer === true) {
                roleEmbed.addField("<:dancer:648850426992525312> Dancer", "~~Dancer - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:dancer:648850426992525312> Dancer", "Dancer - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Embalmer === true) {
                roleEmbed.addField("<:embalmer:648852775786119168> Embalmer", "~~Embalmer - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:embalmer:648852775786119168> Embalmer", "Embalmer - Price __*3568*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Enchantress === true) {
                roleEmbed.addField("<:enchantress:648834319409872897> Enchantress", "~~Enchantress - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:enchantress:648834319409872897> Enchantress", "Enchantress - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Explorer === true) {
                roleEmbed.addField("<:explorer:648850510639529986> Explorer", "~~Explorer - Price __*1468*__~~");
            } else {
                roleEmbed.addField("<:explorer:648850510639529986> Explorer", "Explorer - Price __*1468*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Forward === true) {
                roleEmbed.addField("<:forward:648853296399908865> Forward", "~~Forward - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:forward:648853296399908865> Forward", "Forward - Price __*3568*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Magician === true) {
                roleEmbed.addField("<:magician:648852040470102018> Magician", "~~Magician - Price __*1988*__~~");
            } else {
                roleEmbed.addField("<:magician:648852040470102018> Magician", "Magician - Price __*1988*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Mechanic === true) {
                roleEmbed.addField("<:mechanic:649120887492182016> Mechanic", "~~Mechanic - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:mechanic:649120887492182016> Mechanic", "Mechanic - Price __*3568*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Mercenary === true) {
                roleEmbed.addField("<:merc:648834272190267402> Mercenary", "~~Mercenary: Price __*3048*__~~");
            } else {
                roleEmbed.addField("<:merc:648834272190267402> Mercenary", "Mercenary: Price __*3048*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Mindseye === true) {
                roleEmbed.addField("<:mindseye:648852851061293056> Mindseye", "~~Mindseye - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:mindseye:648852851061293056> Mindseye", "Mindseye - Price __*3568*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Cowboy === true) {
                roleEmbed.addField("<:cowboy:649130677253439508> Cowboy", "~~Cowboy - Price __*3568*__~~");
            } else {
                roleEmbed.addField("<:cowboy:649130677253439508> Cowboy", "Cowboy - Price __*3568*__ <:clue:655384523735040000>");
            }

            if (LP.Survivors.Wilding === true) {
                roleEmbed.addField("<:wilding:648981862429097994> Wilding", "~~Wilding - Price __*3568*__~~");
            }
            else {
                roleEmbed.addField("<:wilding:648981862429097994> Wilding", "Wilding - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Seer === true) {
                roleEmbed.addField("<:seer:648851989702377473> Seer", "~~Seer - Price __*3568*__~~");
            }
            else {
                roleEmbed.addField("<:seer:648851989702377473> Seer", "Seer - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Prospector === true) {
                roleEmbed.addField("<:prospector:648834388171423744> Prospector", "~~Prospector - Price __*3568*__~~");
            }
            else {
                roleEmbed.addField("<:prospector:648834388171423744> Prospector", "Prospector - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.Prefumer === true) {
                roleEmbed.addField("<:perfumer:648850313411035136> Perfumer", "~~Perfumer - Price __*3568*__~~");
            }
            else {
                roleEmbed.addField("<:perfumer:648850313411035136> Perfumer", "Perfumer - Price __*3568*__ <:clue:655384523735040000>");
            }
            if (LP.Survivors.NewSurv === true) {
                roleEmbed.addField("<:gravekeepa:683222933782790164> GraveKeeper", "~~GraveKeeper - Price __*3568*__~~")
            } else {
                roleEmbed.addField("<:gravekeepa:683222933782790164> GraveKeeper", "GraveKeeper - Price __*3568*__ <:clue:655384523735040000>")
            }
            if (LP.Survivors.AnotherSurv === true) {
                roleEmbed.addField("<:prisoner:699693556176126063> Prisoner", "~~Prisoner - Price __*3568*__~~")
            } else {
                roleEmbed.addField("<:prisoner:699693556176126063> Prisoner", "Prisoner - Price __*3568*__ <:clue:655384523735040000>")
            }
            if (LP.Survivors.Priestess === true) {
                roleEmbed.addField("<:priestess_yaay:726735570469912577> Priestess", "~~Priestess - Price __*3568*__~~")
            } else {
                roleEmbed.addField("<:priestess_yaay:726735570469912577> Priestess", "Priestess - Price __*3568*__ <:clue:655384523735040000>")
            }
            if (LP.Entomologist === true) {
                roleEmbed.addField("<:entomologist:727249332562034718> Entomologist", "~~Entomologist - Price __*3568*__~~")
            } else {
                roleEmbed.addField("<:entomologist:727249332562034718> Entomologist", "Entomologist - Price __*3568*__ <:clue:655384523735040000>")
            }


            message.channel.send(roleEmbed);


        }//survivor bracket

        else if (["hunter", "hunters"].includes(args[1].toLowerCase())) {
            const huntaEmbed = new RichEmbed()
                .setTitle("Cowboish Hunter shop!")
                .setColor("RANDOM")
                .setDescription("To buy the hunter of your choice, do `" + prefix + "buy <HunterName>`")
                .setFooter("Keep in mind to type the hunter's name without spacing or capitalization!");

            if (LP.Hunters.WuChang === false) {
                huntaEmbed.addField("<:wuchang:664443393589379115> Wu chang", "Wu chang - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:wuchang:664443393589379115> Wu chang", "~~Wu chang - Price __*4508*__~~");
            }
            if (LP.Hunters.AxeBoi === false) {
                huntaEmbed.addField("<:axeboi:664443613622698005> Axe boi", "Axe boi - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:axeboi:664443613622698005> Axe boi", "~~Axe boi - Price __*4508*__~~");
            }
            if (LP.Hunters.Lizard === false) {
                huntaEmbed.addField("<:depressed_lizzyboi:731913416096088117> Lizard", "Lizard - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:depressed_lizzyboi:731913416096088117> Lizard", "~~Lizard - Price __*4508*__~~");
            }
            if (LP.Hunters.Clown === false) {
                huntaEmbed.addField("<:dishdashy:664448163750608896> Clown", "Clown - Price __*1888*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:dishdashy:664448163750608896>  Clown", "~~Clown - Price __*1888*__~~");
            }
            if (LP.Hunters.GameKeeper === false) {
                huntaEmbed.addField("<:gamekeepa:667718369658667068>  GameKeeper", "GameKeeper - Price __*3988*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:gamekeepa:667718369658667068>  GameKeeper", "~~GameKeeper - Price __*3988*__~~");
            }
            if (LP.Hunters.Ripper === false) {
                huntaEmbed.addField("<:ripper:664448107546673153> Ripper", "Ripper - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:ripper:664448107546673153> Ripper", "~~Ripper - Price __*4508*__~~");
            }
            if (LP.Hunters.SoulWeaver === false) {
                huntaEmbed.addField("<:pepsispida:664449022735548426> SoulWeaver", "SoulWeaver - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:pepsispida:664449022735548426> SoulWeaver", "~~SoulWeaver - Price __*4508*__~~");
            }
            if (LP.Hunters.Geisha === false) {
                huntaEmbed.addField("<:gaysha:664443677048832000> Geisha", "Geisha - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:gaysha:664443677048832000> Geisha", "~~Geisha - Price __*4508*__~~");
            }
            if (LP.Hunters.PhotoGrapher === false) {
                huntaEmbed.addField("<:photoboi:664443510358933508> Photographer", "Photographer - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:photoboi:664443510358933508> Photographer", "~~Photographer - Price __*4508*__~~");
            }
            if (LP.Hunters.MadEyes === false) {
                huntaEmbed.addField("<:madeyes:667725237881667594> Madeyes", "Madeyes - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:madeyes:667725237881667594> Madeyes", "~~Madeyes - Price __*4508*__~~");
            }
            if (LP.Hunters.Feaster === false) {
                huntaEmbed.addField("<:hasturi:664447850272391199> Feaster", "Feaster - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:hasturi:664447850272391199> Feaster", "~~Feaster - Price __*4508*__~~");
            }
            if (LP.Hunters.DreamWitch === false) {
                huntaEmbed.addField("<:yhidra:664448230066618369> Dreamwitch", "Dreamwitch - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("<:yhidra:664448230066618369> Dreamwitch", "~~Dreamwitch - Price __*4508*__~~");
            }
            if (LP.Hunters.BloodyQueen === false) {
                huntaEmbed.addField("👑 BloodyQueen", "BloodyQueen - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("👑 BloodyQueen", "~~BloodyQueen - Price __*4508*__~~");
            }
            if (LP.Hunters.Pingu === false) {
                huntaEmbed.addField("💣 No.26", "No.26 - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("💣 No.26", "~~No.26 - Price __*4508*__~~");
            }
            if (LP.Hunters.Sister === false) {
                huntaEmbed.addField("🐈 Ann", "Ann - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("🐈 Ann", "~~Ann - Price __*4508*__~~");
            }
            if (LP.Hunters.NewHunta === false) {
                huntaEmbed.addField("🎻 Violinist", "Violinist - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("🎻 Violinist", "~~Violinist - Price __*4508*__~~");
            }
            if (LP.Sculptor === false) {
                huntaEmbed.addField("🗿 Sculptor", "Sculptor - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("🗿 Sculptor", "~~Sculptor - Price __*4508*__~~");
            }

            message.channel.send(huntaEmbed);


        }//if hunter bracket

        else if (["frame", "frames"].includes(args[1].toLowerCase())) {

            let description = ":";

            if (LP.frames.frame1 === true) {
                description = description + " <:frame1:693410346005954580>";

            }
            if (LP.frames.frame2 === true) {
                description = description + " <:frame2:693410403283370045>";

            }
            if (LP.frames.frame3 === true) {
                description = description + " <:frame3:693410506643472385>";

            }
            if (LP.frames.frame4 === true) {
                description = description + " <:frame4:693526158830075955>";

            }
            if (LP.frames.frame5 === true) {
                description = description + " <:frame5:693526250647715892>";

            }
            if (LP.frames.frame6 === true) {
                description = description + " <:frame6:694820135306919977>";

            }
            if (LP.Opened.includes("1kcowboish")) {
                description = description + cowboish_frame;

            }

            description = description + `${frame7} ${frame8} ${frame9} ${frame10}`

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
                .setAuthor("Portrait-frame shop!", bot.user.displayAvatarURL)
                .setColor("0xeb34c9")
                .setDescription("To buy the frame of your choice, do `" + prefix + "buy <frameID>`\n**Frames you already own**" + description + "\n▔ ▔ ▔ ▔ ▔\n**Equipped frame**: " + equipped + "\n▔ ▔ ▔ ▔ ▔\n**Frames available in shop**:\n<:frame1:693410346005954580> ➜ Price __2888__<:frags:655840344725913600> - ID: `frame1` or `detective`\n\n<:frame2:693410403283370045> ➜ Price __2888__<:frags:655840344725913600> - ID: `frame2` or `valentine`\n\n<:frame3:693410506643472385> ➜ Price __2888__<:frags:655840344725913600> - ID: `frame3` or `allstar`\n\n<:frame4:693526250647715892> ➜ Price __2888__<:frags:655840344725913600> - ID: `frame4` or `tree`\n\n<:frame5:693526158830075955> ➜ Price __28888__<:frags:655840344725913600> - ID: `frame5`\n\n<:frame6:694820135306919977> ➜ Price __2888__<:frags:655840344725913600> - ID: `frame6`\n\n**Free to use frames:**\nYou can equip them directly :D\n<:frame7:697804971227349103> | **FREE!** `" + prefix + "equip frame frame7`\n<:frame8:706555854513766490> | **FREE!** `" + prefix + "equip frame frame8`\n" + frame9 + " | **FREE!** `" + prefix + "equip frame frame9`\n" + frame10 + " | **FREE!** `" + prefix + "equip frame frame10`")
                .setTimestamp();

            message.channel.send(framEmbed);


        } else if (["portraits", "portrait"].includes(args[1].toLowerCase())) {

            let ownedPortraits = ":";

            let NotOwnedPortraits = ":";


            function checkForPortrait(itemName, portraitName) {
                if (LP.Opened.includes(itemName)) {
                    ownedPortraits = ownedPortraits + `\n__**${portraitName}**__`;
                }
            }//end of the function

            function checkForNonPortrait(itemName, portraitName) {
                if (!LP.Opened.includes(itemName)) {
                    NotOwnedPortraits = NotOwnedPortraits + `\n__${portraitName}__`;
                }
            }

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


            checkForNonPortrait("ess1-14", "Black and White Explorer");
            checkForNonPortrait("ess1-15", "Black and White Magician");
            checkForNonPortrait("ess1-16", "Black and White Gardener");
            checkForNonPortrait("ess1-48", "Colorful Memory GameKeeper");
            checkForNonPortrait("ess1-49", "Colorful Memory Coordinator");
            checkForNonPortrait("ess1-50", "Colorful Memory Geisha");
            checkForNonPortrait("ess1-51", "Colorful Memory Lawyer");
            //ess 1

            // _____________ don't ask why this exist____________
            checkForNonPortrait("ess3-38", "Black And White Lucky Guy");
            checkForNonPortrait("ess3-39", "Black And White Coordinator");
            checkForNonPortrait("ess3-40", "Black And White Priestess");
            checkForNonPortrait("ess3-46", "Colorful Memory Magician");
            checkForNonPortrait("ess3-47", "Colorful Memory Cowboy");
            checkForNonPortrait("ess3-48", "Colorful Memory Gardener");
            checkForNonPortrait("ess3-49", "Colorful Memory Forward");
            //ess 3

            //Danganronpa
            checkForNonPortrait("dangan-20", "Makoto Naegi");
            checkForNonPortrait("dangan-21", "Kyoko Kirigiri");
            checkForNonPortrait("dangan-22", "Sayaka Maizono");
            checkForNonPortrait("dangan-23", "Leon Kuwata");
            checkForNonPortrait("dangan-24", "Mondo Owada");
            checkForNonPortrait("dangan-25", "Celestia Ludenberg");
            checkForNonPortrait("dangan-26", "Toko Fukawa");
            checkForNonPortrait("dangan-27", "Aoi Asahina");
            checkForNonPortrait("dangan-28", "Byakuya Togami");
            checkForNonPortrait("dangan-29", "Hifumi Yamada");
            checkForNonPortrait("dangan-30", "Enoshima Junko");
            checkForNonPortrait("dangan-31", "Chihiro Fujisaki");
            checkForNonPortrait("dangan-32", "Sakura Ogami");
            checkForNonPortrait("dangan-33", "Kiyotaka Ishimaru");
            checkForNonPortrait("dangan-34", "Mukuro Ikusaba");
            checkForNonPortrait("dangan-35", "Yasuhiro Hagakure");

            checkForNonPortrait("s12-2-36", "Black and White Mechanic");
            checkForNonPortrait("s12-2-37", "Black and White Lawyer");
            checkForNonPortrait("s12-2-38", "Black and White Doctor");
            checkForNonPortrait("s12-2-46", "Colorful Memory Explorer");
            checkForNonPortrait("s12-2-47", "Colorful Memory Dancer");
            checkForNonPortrait("s12-2-48", "Colorful Memory Smiley Face");
            checkForNonPortrait("s12-2-49", "Colorful Memory Soul Weaver");

            let ownedPortraitEmbed = new RichEmbed()
                .setAuthor("Cowboish Portrait Shop >:3", bot.user.displayAvatarURL)
                .setColor("0x6714f7")
                .setThumbnail("https://i.imgur.com/NGzUkth.png")
                .setFooter("Keep in mind that you can't equip a portrait you haven't obtained from an essence...", message.author.displayAvatarURL)
                .setDescription("An equipped Portrait will display in `" + prefix + "logicpath` instead of your actual profile-picture\nTo equip the portrait of your choice, do `" + prefix + "equip portrait <portrait name>`\n\nDunno what portraits you have? Here are they" + ownedPortraits + "\n\n**Here are the portraits you don't own**" + NotOwnedPortraits + "\n\n**《 Purchasable Portraits 》**\nTo buy one of these portraits, do `" + prefix + "buy <portrait name>`\n\n🦎 | __**Long Jump Luchino**__ ➜ Price __1888__ " + frags + "\n📧 | __**Marathon Runner Victor**__ ➜ Price __1888__ " + frags + "\n⚔️ | __**Sword fighting Joseph**__ ➜ Price __1888__ " + frags + "\n\n**Example Usage**:\n`" + prefix + "equip portrait Black And White Priestess`");

            message.channel.send(ownedPortraitEmbed);

        } else {
            message.channel.send(shopEmbed);
        }


    }
}
