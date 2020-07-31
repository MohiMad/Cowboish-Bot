const logicPath = require("../models/logicpath.js");
const { quiz, ErrorMsg, newLP, coolEmbed, addCooldown, findCooldown } = require("../functions.js");

module.exports = {
    name: 'hunt',
    description: "play a match as a hunter",
    execute: async (message, args, bot, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        const cooldownCheck = await findCooldown(message, "hunt");

        if (!cooldownCheck) {

            if (!LP) return newLP(message);

            if (!args[1]) return ErrorMsg(bot, message, "Which hunter do you want to play as?\nThe usage of this command should be: `" + prefix + "hunt <hunterName>`\n\n**Note**: You need to own the hunter you want to play as, and that's by bying them from the `" + prefix + "shop hunter`\n\nKeep in mind that you always can play as:\n**HellEmber**");

            if (["hellember", "leo"].includes(args[1].toLowerCase())) {

                let leoFile = require("../quizes/leo.json");

                let leoItem = leoFile[Math.floor(Math.random() * leoFile.length)];

                await quiz(message, leoItem.Question, leoItem.Answer, leoItem.Attachment, leoItem.Difficulty, "Hell Ember", leoItem.Artist);
                await addCooldown(message, 60000, "hunt");

            }
            else if (["axeboy", "axeboi", "robbie"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.AxeBoi === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let axeBoyFile = require("../quizes/axeboy.json");

                    let axeBoyItem = axeBoyFile[Math.floor(Math.random() * axeBoyFile.length)];

                    await quiz(message, axeBoyItem.Question, axeBoyItem.Answer, axeBoyItem.Attachment, axeBoyItem.Difficulty, "Axe booaaai", axeBoyItem.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["bane", "gamekeeper", "gk"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.GameKeeper === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let GK_File = require("../quizes/bane.json");

                    let GK_Item = GK_File[Math.floor(Math.random() * GK_File.length)];

                    await quiz(message, GK_Item.Question, GK_Item.Answer, GK_Item.Attachment, GK_Item.Difficulty, "Game keepa", GK_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["bloodyqueen", "bq", "mary", "queen"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.BloodyQueen === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let BQ_File = require("../quizes/bloodyqueen.json");

                    let BQ_Item = BQ_File[Math.floor(Math.random() * BQ_File.length)];

                    await quiz(message, BQ_Item.Question, BQ_Item.Answer, BQ_Item.Attachment, BQ_Item.Difficulty, "Queen Mary", BQ_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["bonbon", "no.26", "pingu", "guard", "guard26"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Pingu === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let BonBon_File = require("../quizes/bonbon.json");

                    let BonBon_Item = BonBon_File[Math.floor(Math.random() * BonBon_File.length)];

                    await quiz(message, BonBon_Item.Question, BonBon_Item.Answer, BonBon_Item.Attachment, BonBon_Item.Difficulty, "Pinguuuu :D", BonBon_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["clown", "smileyface", "joker"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Clown === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let clown_File = require("../quizes/clown.json");

                    let clown_Item = clown_File[Math.floor(Math.random() * clown_File.length)];

                    await quiz(message, clown_Item.Question, clown_Item.Answer, clown_Item.Attachment, clown_Item.Difficulty, "Dish dashy boi", clown_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["dw", "dreamwitch", "yhidra"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.DreamWitch === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let DW_File = require("../quizes/dreamwitch.json");

                    let DW_Item = DW_File[Math.floor(Math.random() * DW_File.length)];

                    await quiz(message, DW_Item.Question, DW_Item.Answer, DW_Item.Attachment, DW_Item.Difficulty, "DW aka dreambich :/", DW_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["feaster", "hastur"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Feaster === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let feaster_File = require("../quizes/feaster.json");

                    let feaster_Item = feaster_File[Math.floor(Math.random() * feaster_File.length)];

                    await quiz(message, feaster_Item.Question, feaster_Item.Answer, feaster_Item.Attachment, feaster_Item.Difficulty, "Lazy calamari king", feaster_Item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["geisha", "gaysha", "michiko"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Geisha === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let geisha_File = require("../quizes/geisha.json");

                    let geisha_item = geisha_File[Math.floor(Math.random() * geisha_File.length)];

                    await quiz(message, geisha_item.Question, geisha_item.Answer, geisha_item.Attachment, geisha_item.Difficulty, "Gaysha", geisha_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["lizard", "luchino", "lizardo", "evilreptilian", "reptilian"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Lizard === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let lizard_File = require("../quizes/lizard.json");

                    let lizard_item = lizard_File[Math.floor(Math.random() * lizard_File.length)];

                    await quiz(message, lizard_item.Question, lizard_item.Answer, lizard_item.Attachment, lizard_item.Difficulty, "Lizardo jumpy man", lizard_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["madeyes", "trump", "madeye", "burke"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.MadEyes === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let madeyes_File = require("../quizes/madeyes.json");

                    let madeyes_item = madeyes_File[Math.floor(Math.random() * madeyes_File.length)];

                    await quiz(message, madeyes_item.Question, madeyes_item.Answer, madeyes_item.Attachment, madeyes_item.Difficulty, "Trump's right hand, aka Madeyes", madeyes_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["photographer", "photoboi", "joseph"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.PhotoGrapher === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let PH_File = require("../quizes/photographer.json");

                    let PH_item = PH_File[Math.floor(Math.random() * PH_File.length)];

                    await quiz(message, PH_item.Question, PH_item.Answer, PH_item.Attachment, PH_item.Difficulty, "Lazy photoboaai", PH_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["ripper", "rippa", "jack"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Ripper === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let ripper_File = require("../quizes/ripper.json");

                    let ripper_item = ripper_File[Math.floor(Math.random() * ripper_File.length)];

                    await quiz(message, ripper_item.Question, ripper_item.Answer, ripper_item.Attachment, ripper_item.Difficulty, "Rippa", ripper_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["sister", "nun", "disciple", "ann"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.Sister === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let sister_File = require("../quizes/sister.json");

                    let sister_item = sister_File[Math.floor(Math.random() * sister_File.length)];

                    await quiz(message, sister_item.Question, sister_item.Answer, sister_item.Attachment, sister_item.Difficulty, "Da nun", sister_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["sw", "spider", "soulweaver", "violetta"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.SoulWeaver === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let SW_File = require("../quizes/soulweaver.json");

                    let SW_item = SW_File[Math.floor(Math.random() * SW_File.length)];

                    await quiz(message, SW_item.Question, SW_item.Answer, SW_item.Attachment, SW_item.Difficulty, "Nascar", SW_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            }
            else if (["wu", "wuchang", "wuchangus", "blackandwhite"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.WuChang === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let WU_File = require("../quizes/wuchang.json");

                    let WU_item = WU_File[Math.floor(Math.random() * WU_File.length)];

                    await quiz(message, WU_item.Question, WU_item.Answer, WU_item.Attachment, WU_item.Difficulty, "Wuu chaguussss", WU_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            } else if (["violinist", "musician", "antonio"].includes(args[1].toLowerCase())) {
                if (LP.Hunters.NewHunta === false) {
                    ErrorMsg(bot, message, "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

                } else {
                    let vio_File = require("../quizes/violinist.json");

                    let vio_item = vio_File[Math.floor(Math.random() * vio_File.length)];

                    await quiz(message, vio_item.Question, vio_item.Answer, vio_item.Attachment, vio_item.Difficulty, "Violinist", vio_item.Artist);
                    await addCooldown(message, 60000, "hunt");

                }
            } else {
                message.channel.send(`Make sure you spelled the name of the **hunter** correctly, **${message.author.username}**!`);
            }

        } else {
            coolEmbed(message, "You can't hunt just yet :(", "Please wait **REMAINING** before you can use the `hunt` command again...", cooldownCheck.timeRemaining, ["m", "s"]);

        }

    }
}