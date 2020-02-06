const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { RichEmbed } = require('discord.js');
const { newLP } = require("../functions.js");


module.exports = {
    name: 'shop',
    description: "shop list for ya",
    execute: async (message, args) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });


        if (!LP) { newLP(message) }


        //___________Main shop list_________________
        const shopEmbed = new RichEmbed()
            .setTitle("<:cowboy:649130677253439508> Cowboish shop list")
            .setColor("RANDOM")
            .setDescription("Here is a list of the lists available in the shop! do `>shop <listID>`")
            .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents` 
        <:ess1:655840713904488469> | **Essences shop!** ─ ID ➜  __*essence*__
        Too unlucky to get essences? well buy some...
        <:luckyguy:649120786312855563> | **Survivors list!** ─ ID ➜  __*survivor*__
        I swear to god if you buy Enchantress...
        <:uwuchang:659147931592687616> | **Hunters List!** ─ ID ➜ __*hunter*__
        Nothing to say here tbh... `)
            .setFooter("Cowboish shop list ─ page 1 of 1");

        //___________Essence embed here_______________
        const EssEmbed = new RichEmbed()
            .setTitle("<:cowboy:649130677253439508> Cowboish Essence Shop!")
            .setDescription("Are you low on essences? no essences at all? it's all fine, you can buy yourself some by doing `>buy <itemID>`")
            .setColor("RANDOM")
            .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents`
        <:ess1:655840713904488469> | **essence s9-1** - Price : *96* <:inspirations:655840409674711060> - ID: __*s9-1*__
        <:ess3:655840571616919586> | **COA III essence** - Price : *96* <:inspirations:655840409674711060> - ID: __*coa*__
        <:ess2:655840643847028751>  | **Essence s9-2** - Price : *96* <:inspirations:655840409674711060> - ID: __*s9-2*__
        `)
            .setFooter("Cowboish essence shop ─ page 1 of 1");

        if (!args[1]) {
            message.channel.send(shopEmbed);
        }

        else if ((args[1]) === "essence") {
            message.channel.send(EssEmbed);

        }

        else if ((args[1]) === "survivor") {

            const roleEmbed = new RichEmbed()
                .setTitle("Survivors shop list!")
                .setDescription("To buy the survivor you want, do `>buy <survivorName>`\n")
                .setFooter("Remember to type the survivor's name without spacing or capitalization")
                .setColor("RANDOM");



            if (LP.Survivors.Officer === true) {
                roleEmbed.addField("⏰ 1st Officer", "~~1st Officer - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("⏰ 1st Officer", "1st Officer - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Acrobat === true) {
                roleEmbed.addField("<:acrobat:664447949509623828> Acrobat", "~~Acrobat - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:acrobat:664447949509623828> Acrobat", "Acrobat - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Barmaid === true) {
                roleEmbed.addField("<:barmaid:664448019495649291> Barmaid", "~~Barmaid - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:barmaid:664448019495649291> Barmaid", "Barmaid - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Postman === true) {
                roleEmbed.addField("<:postman:648981954787672123> Postman", "~~Postman - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:postman:648981954787672123> Postman", "Postman - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Coordinator === true) {
                roleEmbed.addField("<:coordinator:649121091276636180> Coordinator", "~~Coordinator - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:coordinator:649121091276636180> Coordinator", "Coordinator - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Dancer === true) {
                roleEmbed.addField("<:dancer:648850426992525312> Dancer", "~~Dancer - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:dancer:648850426992525312> Dancer", "Dancer - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Embalmer === true) {
                roleEmbed.addField("<:embalmer:648852775786119168> Embalmer", "~~Embalmer - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:embalmer:648852775786119168> Embalmer", "Embalmer - Price __*3568*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Enchantress === true) {
                roleEmbed.addField("<:enchantress:648834319409872897> Enchantress", "~~Enchantress - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:enchantress:648834319409872897> Enchantress", "Enchantress - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Explorer === true) {
                roleEmbed.addField("<:explorer:648850510639529986> Explorer", "~~Explorer - Price __*1468*__~~", true);
            } else {
                roleEmbed.addField("<:explorer:648850510639529986> Explorer", "Explorer - Price __*1468*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Forward === true) {
                roleEmbed.addField("<:forward:648853296399908865> Forward", "~~Forward - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:forward:648853296399908865> Forward", "Forward - Price __*3568*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Magician === true) {
                roleEmbed.addField("<:magician:648852040470102018> Magician", "~~Magician - Price __*1988*__~~", true);
            } else {
                roleEmbed.addField("<:magician:648852040470102018> Magician", "Magician - Price __*1988*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Mechanic === true) {
                roleEmbed.addField("<:mechanic:649120887492182016> Mechanic", "~~Mechanic - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:mechanic:649120887492182016> Mechanic", "Mechanic - Price __*3568*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Mercenary === true) {
                roleEmbed.addField("<:merc:648834272190267402> Mercenary", "~~Mercenary: Price __*3048*__~~", true);
            } else {
                roleEmbed.addField("<:merc:648834272190267402> Mercenary", "Mercenary: Price __*3048*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Mindseye === true) {
                roleEmbed.addField("<:mindseye:648852851061293056> Mindseye", "~~Mindseye - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:mindseye:648852851061293056> Mindseye", "Mindseye - Price __*3568*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Cowboy === true) {
                roleEmbed.addField("<:cowboy:649130677253439508> Cowboy", "~~Cowboy - Price __*3568*__~~", true);
            } else {
                roleEmbed.addField("<:cowboy:649130677253439508> Cowboy", "Cowboy - Price __*3568*__ <:clue:655384523735040000>", true);
            }

            if (LP.Survivors.Wilding === true) {
                roleEmbed.addField("<:wilding:648981862429097994> Wilding", "~~Wilding - Price __*3568*__~~", true);
            }
            else {
                roleEmbed.addField("<:wilding:648981862429097994> Wilding", "Wilding - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Seer === true) {
                roleEmbed.addField("<:seer:648851989702377473> Seer", "~~Seer - Price __*3568*__~~", true);
            }
            else {
                roleEmbed.addField("<:seer:648851989702377473> Seer", "Seer - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Prospector === true) {
                roleEmbed.addField("<:prospector:648834388171423744> Prospector", "~~Prospector - Price __*3568*__~~", true);
            }
            else {
                roleEmbed.addField("<:prospector:648834388171423744> Prospector", "Prospector - Price __*3568*__ <:clue:655384523735040000>", true);
            }
            if (LP.Survivors.Prefumer === true) {
                roleEmbed.addField("<:perfumer:648850313411035136> Perfumer", "~~Perfumer - Price __*3568*__~~", true);
            }
            else {
                roleEmbed.addField("<:perfumer:648850313411035136> Perfumer", "Perfumer - Price __*3568*__ <:clue:655384523735040000>", true);
            }


            message.channel.send(roleEmbed);


        }//survivor bracket

        else if ((args[1]) === "hunter") {
            const huntaEmbed = new RichEmbed()
                .setTitle("Cowboish Hunter shop!")
                .setColor("RANDOM")
                .setDescription("To buy the hunter of your choice, do `>buy <HunterName>`")
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
                huntaEmbed.addField("🦎 Lizard", "Lizard - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("🦎 Lizard", "~~Lizard - Price __*4508*__~~");
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
                huntaEmbed.addField("👩 Sister", "Sister - Price __*4508*__ <:clue:655384523735040000>");
            }
            else {
                huntaEmbed.addField("👩 Sister", "~~Sister - Price __*4508*__~~");
            }

            message.channel.send(huntaEmbed);


        }//if hunter bracket

        else {
            message.reply("what are you dooooiing! this list doesn't exist");
        }


    }
}
