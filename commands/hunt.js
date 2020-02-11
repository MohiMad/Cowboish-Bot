const { Client, RichEmbed, Attachment, Collection } = require('discord.js');
let cooldown = new Set();

const logicPath = require("../models/logicpath.js");
const { quiz, ErrorMsg, coolEmbed, newLP } = require("../functions.js");

module.exports = {
    name: 'hunt',
    description: "play a match as a hunter",
    execute: async (message, args, bot) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP) {
            newLP(message)
        }

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Which survivor do you want to play as?\nThe usage of this command should be: `>hunt <hunterName>`\nNOTE: You need to own the hunter you want to play as and that's by bying them from the `>shop`\nKeep in mind that you always can play as:\n**HellEmber**");
        }

        else if (cooldown.has(message.author.id)) {
            if (message.deletable) message.delete();
            coolEmbed(message, "Ooof the cooldown is still on!", "The cooldown for the `hunt` command is set to **60** seconds\nPlease wait 60 seconds")
        }
        else if (["hellember", "leo", "HellEmber"].includes(args[1].toLowerCase())) {

            let leoFile = require("../quizes/leo.json");

            let leoItem = leoFile[Math.floor(Math.random() * leoFile.length)];
            
            quiz(message, leoItem.Question, leoItem.Answer, leoItem.Attachment, leoItem.Difficulty, "Hell Ember").then(cooldown.add(message.author.id));
        }
        else if (["axeboy", "axeboi"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.AxeBoi === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let axeBoyFile = require("../quizes/axeboy.json");

                let axeBoyItem = axeBoyFile[Math.floor(Math.random() * axeBoyFile.length)];

                quiz(message, axeBoyItem.Question, axeBoyItem.Answer, axeBoyItem.Attachment, axeBoyItem.Difficulty, "Axe booaaai").then(cooldown.add(message.author.id));
            }
        }
        else if (["bane", "gamekeeper"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.GameKeeper === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let GK_File = require("../quizes/bane.json");

                let GK_Item = GK_File[Math.floor(Math.random() * GK_File.length)];

                quiz(message, GK_Item.Question, GK_Item.Answer, GK_Item.Attachment, GK_Item.Difficulty, "Game keepa").then(cooldown.add(message.author.id));
            }
        }
        else if (["bloodyqueen", "bq", "mary", "queen"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.BloodyQueen === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let BQ_File = require("../quizes/bloodyqueen.json");

                let BQ_Item = BQ_File[Math.floor(Math.random() * BQ_File.length)];

                quiz(message, BQ_Item.Question, BQ_Item.Answer, BQ_Item.Attachment, BQ_Item.Difficulty, "Queen Mary").then(cooldown.add(message.author.id));
            }
        }
        else if (["bonbon", "no.26", "pingu"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Pingu === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let BonBon_File = require("../quizes/bonbon.json");

                let BonBon_Item = BonBon_File[Math.floor(Math.random() * BonBon_File.length)];

                quiz(message, BonBon_Item.Question, BonBon_Item.Answer, BonBon_Item.Attachment, BonBon_Item.Difficulty, "Pinguuuu :D").then(cooldown.add(message.author.id));
            }
        }
        else if (["clown", "smileyface", "joker"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Clown === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let clown_File = require("../quizes/clown.json");

                let clown_Item = clown_File[Math.floor(Math.random() * clown_File.length)];

                quiz(message, clown_Item.Question, clown_Item.Answer, clown_Item.Attachment, clown_Item.Difficulty, "Dish dashy").then(cooldown.add(message.author.id));
            }
        }
        else if (["dw", "dreamwitch", "yhidra"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.DreamWitch === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let DW_File = require("../quizes/dreamwitch.json");

                let DW_Item = DW_File[Math.floor(Math.random() * DW_File.length)];

                quiz(message, DW_Item.Question, DW_Item.Answer, DW_Item.Attachment, DW_Item.Difficulty, "DW aka dreambich :/").then(cooldown.add(message.author.id));
            }
        }
        else if (["feaster"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Feaster === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let feaster_File = require("../quizes/feaster.json");

                let feaster_Item = feaster_File[Math.floor(Math.random() * feaster_File.length)];

                quiz(message, feaster_Item.Question, feaster_Item.Answer, feaster_Item.Attachment, feaster_Item.Difficulty, "Lazy calamari king").then(cooldown.add(message.author.id));
            }
        }
        else if (["geisha", "gaysha"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Geisha === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let geisha_File = require("../quizes/geisha.json");

                let geisha_item = geisha_File[Math.floor(Math.random() * geisha_File.length)];

                quiz(message, geisha_item.Question, geisha_item.Answer, geisha_item.Attachment, geisha_item.Difficulty, "Gaysha").then(cooldown.add(message.author.id));
            }
        }
        else if (["lizard", "luchino", "lizardo"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Lizard === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let lizard_File = require("../quizes/lizard.json");

                let lizard_item = lizard_File[Math.floor(Math.random() * lizard_File.length)];

                quiz(message, lizard_item.Question, lizard_item.Answer, lizard_item.Attachment, lizard_item.Difficulty, "Lizardo jumpy man").then(cooldown.add(message.author.id));
            }
        }
        else if (["madeyes", "trump", "madeye"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.MadEyes === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let madeyes_File = require("../quizes/madeyes.json");

                let madeyes_item = madeyes_File[Math.floor(Math.random() * madeyes_File.length)];

                quiz(message, madeyes_item.Question, madeyes_item.Answer, madeyes_item.Attachment, madeyes_item.Difficulty, "Trump's right hand, aka Madeyes").then(cooldown.add(message.author.id));
            }
        }
        else if (["photographer", "photoboi"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.PhotoGrapher === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let PH_File = require("../quizes/photographer.json");

                let PH_item = PH_File[Math.floor(Math.random() * PH_File.length)];

                quiz(message, PH_item.Question, PH_item.Answer, PH_item.Attachment, PH_item.Difficulty, "Lazy photoboaai").then(cooldown.add(message.author.id));
            }
        }
        else if (["ripper", "rippa"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Ripper === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let ripper_File = require("../quizes/ripper.json");

                let ripper_item = ripper_File[Math.floor(Math.random() * ripper_File.length)];

                quiz(message, ripper_item.Question, ripper_item.Answer, ripper_item.Attachment, ripper_item.Difficulty, "Rippa").then(cooldown.add(message.author.id));
            }
        }
        else if (["sister", "nun", "disciple"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.Sister === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let sister_File = require("../quizes/sister.json");

                let sister_item = sister_File[Math.floor(Math.random() * sister_File.length)];

                quiz(message, sister_item.Question, sister_item.Answer, sister_item.Attachment, sister_item.Difficulty, "Da nun").then(cooldown.add(message.author.id));
            }
        }
        else if (["sw", "spider", "soulweaver"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.SoulWeaver === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let SW_File = require("../quizes/soulweaver.json");

                let SW_item = SW_File[Math.floor(Math.random() * SW_File.length)];

                quiz(message, SW_item.Question, SW_item.Answer, SW_item.Attachment, SW_item.Difficulty, "Nascar").then(cooldown.add(message.author.id));
            }
        }
        else if (["wu", "wuchang", "wuchangus"].includes(args[1].toLowerCase())) {
            if (LP.Hunters.WuChang === false) {
                ErrorMsg(this.bot, message, "You don't own that character!\nYou need to buy that character by doing `>buy <characterName>`\nTo check the characters available do `>shop hunter`\nBut hey :) you can always play as:\n`hellember`/`leo`");

            } else {
                let WU_File = require("../quizes/wuchang.json");

                let WU_item = WU_File[Math.floor(Math.random() * WU_File.length)];

                quiz(message, WU_item.Question, WU_item.Answer, WU_item.Attachment, WU_item.Difficulty, "Wuu chaguussss").then(cooldown.add(message.author.id));
            }
        }


        setTimeout(() => {
            cooldown.delete(message.author.id)

        }, 60000);

    }
}