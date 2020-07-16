const { RichEmbed } = require('discord.js');
const logicPath = require("../models/logicpath.js");
const { quiz, ErrorMsg, coolEmbed, newLP } = require("../functions.js");

let cooldown = new Set();
module.exports = {
    name: 'quick',
    description: "play a quick match",
    execute: async (message, args, bot, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        let msgErr = "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop survivor`\nBut hey :) you can always play as:\n**Gardener**\n**LuckyGuy**\n**Doctor**\n**Thief**\n**Lawyer**";


        if (!LP) {
            newLP(message);
        }

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Which survivor do you want to play as?\nThe usage of this command should be: `" + prefix + "quick <survivorName>`\nNOTE: You need to own the survivor you want to play as and that's by bying them from the `" + prefix + "shop`\nKeep in mind that you always can play as:\n**Gardener**\n**LuckyGuy**\n**Doctor**\n**Thief**\n**Lawyer**");
        }

        else if (cooldown.has(message.author.id)) {
            if (message.deletable) message.delete();
            coolEmbed(message, "Ooof the cooldown is still on!", "The cooldown for the `quick` command is set to **60** seconds\nPlease wait 60 seconds")
        }

        else if (["lawyer", "freddy"].includes(args[1].toLowerCase())) {


            let lawyerfile = require("../quizes/lawyer.json");

            let lawyeritem = lawyerfile[Math.floor(Math.random() * lawyerfile.length)];

            quiz(message, lawyeritem.Question, lawyeritem.Answer, lawyeritem.Attachment, lawyeritem.Difficulty, "Lawyer").then(cooldown.add(message.author.id));
        }
        else if (["doctor", "doc", "emily"].includes(args[1].toLowerCase())) {

            let docfile = require("../quizes/doctor.json");

            let docitem = docfile[Math.floor(Math.random() * docfile.length)];

            quiz(message, docitem.Question, docitem.Answer, docitem.Attachment, docitem.Difficulty, "Doctor").then(cooldown.add(message.author.id));

        }
        else if (["luckyguy", "lucky", "lg"].includes(args[1].toLowerCase())) {

            let luckfile = require("../quizes/lucky.json");

            let luckitem = luckfile[Math.floor(Math.random() * luckfile.length)];

            quiz(message, luckitem.Question, luckitem.Answer, luckitem.Attachment, luckitem.Difficulty, "Lucky guy").then(cooldown.add(message.author.id));

        }
        else if (["gardener", "emma"].includes(args[1].toLowerCase())) {

            let gardenerfile = require("../quizes/gardener.json");

            let gardeneritem = gardenerfile[Math.floor(Math.random() * gardenerfile.length)];

            quiz(message, gardeneritem.Question, gardeneritem.Answer, gardeneritem.Attachment, gardeneritem.Difficulty, "Gardena :v").then(cooldown.add(message.author.id));

        }
        else if (["theif", "kreacher", "thief"].includes(args[1].toLowerCase())) {

            let theiffile = require("../quizes/theif.json");

            let theifitem = theiffile[Math.floor(Math.random() * theiffile.length)];

            quiz(message, theifitem.Question, theifitem.Answer, theifitem.Attachment, theifitem.Difficulty, "Theif").then(cooldown.add(message.author.id));

        }
        else if (["cowboy", "kevin"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Cowboy === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let cowboyfile = require("../quizes/cowboy.json");

                let cowboyitem = cowboyfile[Math.floor(Math.random() * cowboyfile.length)];

                quiz(message, cowboyitem.Question, cowboyitem.Answer, cowboyitem.Attachment, cowboyitem.Difficulty, "Cowboy").then(cooldown.add(message.author.id));
            }

        }
        else if (["naib", "mercenary", "merc"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Mercenary === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let mercfile = require("../quizes/mercenary.json");

                let mercitem = mercfile[Math.floor(Math.random() * mercfile.length)];

                quiz(message, mercitem.Question, mercitem.Answer, mercitem.Attachment, mercitem.Difficulty, "Naibu").then(cooldown.add(message.author.id));
            }

        }
        else if (["coordinator", "coord", "martha"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Coordinator === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let coordfile = require("../quizes/coordinator.json");

                let coorditem = coordfile[Math.floor(Math.random() * coordfile.length)];

                quiz(message, coorditem.Question, coorditem.Answer, coorditem.Attachment, coorditem.Difficulty, "Coordinator").then(cooldown.add(message.author.id));
            }

        }
        else if (["fiona", "priestess"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Priestess === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let priestessfile = require("../quizes/priestess.json");

                let priestessitem = priestessfile[Math.floor(Math.random() * priestessfile.length)];

                quiz(message, priestessitem.Question, priestessitem.Answer, priestessitem.Attachment, priestessitem.Difficulty, "Priestess").then(cooldown.add(message.author.id));
            }

        }
        else if (["tracy", "mec", "mechanic"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Mechanic === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let mecfile = require("../quizes/mechanic.json");

                let mecitem = mecfile[Math.floor(Math.random() * mecfile.length)];

                quiz(message, mecitem.Question, mecitem.Answer, mecitem.Attachment, mecitem.Difficulty, "Mechanic").then(cooldown.add(message.author.id));
            }

        }
        else if (["helena", "mindseye", "minds", "tme"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Mindseye === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let mindsfile = require("../quizes/mindseye.json");

                let mindsitem = mindsfile[Math.floor(Math.random() * mindsfile.length)];

                quiz(message, mindsitem.Question, mindsitem.Answer, mindsitem.Attachment, mindsitem.Difficulty, "Mindseye").then(cooldown.add(message.author.id));
            }

        }
        else if (["perfumer", "vera"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Prefumer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let perfumerfile = require("../quizes/perfumer.json");

                let perfumeritem = perfumerfile[Math.floor(Math.random() * perfumerfile.length)];

                quiz(message, perfumeritem.Question, perfumeritem.Answer, perfumeritem.Attachment, perfumeritem.Difficulty, "Perfumer").then(cooldown.add(message.author.id));
            }

        }
        else if (["dancer", "margaretha", "femaledancer"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Dancer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let dancerfile = require("../quizes/dancer.json");

                let danceritem = dancerfile[Math.floor(Math.random() * dancerfile.length)];

                quiz(message, danceritem.Question, danceritem.Answer, danceritem.Attachment, danceritem.Difficulty, "Female dancer").then(cooldown.add(message.author.id));
            }

        }
        else if (["eli", "seer"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Seer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let seerfile = require("../quizes/seer.json");

                let seeritem = seerfile[Math.floor(Math.random() * seerfile.length)];

                quiz(message, seeritem.Question, seeritem.Answer, seeritem.Attachment, seeritem.Difficulty, "Seer").then(cooldown.add(message.author.id));
            }

        }
        else if (["aesop", "embalmer"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Embalmer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let embalmerfile = require("../quizes/embalmer.json");

                let embalmeritem = embalmerfile[Math.floor(Math.random() * embalmerfile.length)];

                quiz(message, embalmeritem.Question, embalmeritem.Answer, embalmeritem.Attachment, embalmeritem.Difficulty, "Embalmer").then(cooldown.add(message.author.id));
            }

        }
        else if (["mike", "acrobat"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Acrobat === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let acrofile = require("../quizes/acrobat.json");

                let acroitem = acrofile[Math.floor(Math.random() * acrofile.length)];

                quiz(message, acroitem.Question, acroitem.Answer, acroitem.Attachment, acroitem.Difficulty, "Acrobat").then(cooldown.add(message.author.id));
            }

        }
        else if (["firstofficer", "officer", "1stofficer", "jose"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Officer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let officerfile = require("../quizes/officer.json");

                let officeritem = officerfile[Math.floor(Math.random() * officerfile.length)];

                quiz(message, officeritem.Question, officeritem.Answer, officeritem.Attachment, officeritem.Difficulty, "1st Offica :v").then(cooldown.add(message.author.id));
            }

        }
        else if (["demi", "barmaid"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Barmaid === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let barfile = require("../quizes/barmaid.json");

                let baritem = barfile[Math.floor(Math.random() * barfile.length)];

                quiz(message, baritem.Question, baritem.Answer, baritem.Attachment, baritem.Difficulty, "Barmaid").then(cooldown.add(message.author.id));
            }

        }
        else if (["servais", "magician"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Magician === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let magicianfile = require("../quizes/magician.json");

                let magicianitem = magicianfile[Math.floor(Math.random() * magicianfile.length)];

                quiz(message, magicianitem.Question, magicianitem.Answer, magicianitem.Attachment, magicianitem.Difficulty, "Magician").then(cooldown.add(message.author.id));
            }

        }
        else if (["kurt", "explorer"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Explorer === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let explorerfile = require("../quizes/explorer.json");

                let exploreritem = explorerfile[Math.floor(Math.random() * explorerfile.length)];

                quiz(message, exploreritem.Question, exploreritem.Answer, exploreritem.Attachment, exploreritem.Difficulty, "Explorer").then(cooldown.add(message.author.id));
            }

        }
        else if (["william", "forward"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Forward === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let forwardfile = require("../quizes/forward.json");

                let forwarditem = forwardfile[Math.floor(Math.random() * forwardfile.length)];

                quiz(message, forwarditem.Question, forwarditem.Answer, forwarditem.Attachment, forwarditem.Difficulty, "Forward").then(cooldown.add(message.author.id));
            }

        }
        else if (["norton", "prospector"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Prospector === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let prosfile = require("../quizes/prospector.json");

                let prositem = prosfile[Math.floor(Math.random() * prosfile.length)];

                quiz(message, prositem.Question, prositem.Answer, prositem.Attachment, prositem.Difficulty, "Prospector").then(cooldown.add(message.author.id));
            }

        }
        else if (["patricia", "enchantress"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Enchantress === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let enchantressfile = require("../quizes/enchantress.json");

                let enchantressitem = enchantressfile[Math.floor(Math.random() * enchantressfile.length)];

                quiz(message, enchantressitem.Question, enchantressitem.Answer, enchantressitem.Attachment, enchantressitem.Difficulty, "Enchantress").then(cooldown.add(message.author.id));
            }

        }
        else if (["wildling", "wilding", "murro"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Wilding === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let Wildingfile = require("../quizes/wilding.json");

                let Wildingitem = Wildingfile[Math.floor(Math.random() * Wildingfile.length)];

                quiz(message, Wildingitem.Question, Wildingitem.Answer, Wildingitem.Attachment, Wildingitem.Difficulty, "Wilding").then(cooldown.add(message.author.id));
            }

        }
        else if (["victor", "postman"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.Postman === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let Postmanfile = require("../quizes/postman.json");

                let Postmanitem = Postmanfile[Math.floor(Math.random() * Postmanfile.length)];

                quiz(message, Postmanitem.Question, Postmanitem.Answer, Postmanitem.Attachment, Postmanitem.Difficulty, "Postman").then(cooldown.add(message.author.id));
            }

        }
        else if (["gravedigger", "gravekeeper", "gk", "andrew"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.NewSurv === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let gravefile = require("../quizes/gravedigger.json");

                let graveitem = gravefile[Math.floor(Math.random() * gravefile.length)];

                quiz(message, graveitem.Question, graveitem.Answer, graveitem.Attachment, graveitem.Difficulty, "Grave keepa").then(cooldown.add(message.author.id));
            }

        }
        else if (["prisoner", '"prisoner"', "luca"].includes(args[1].toLowerCase())) {

            if (LP.Survivors.AnotherSurv === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let prisonerFile = require("../quizes/prisoner.json");

                let prisonerItem = prisonerFile[Math.floor(Math.random() * prisonerFile.length)];

                quiz(message, prisonerItem.Question, prisonerItem.Answer, prisonerItem.Attachment, prisonerItem.Difficulty, "Prisoner").then(cooldown.add(message.author.id));
            }

        }
        else if (["entomologist", "entomo", "ento", "melly"].includes(args[1].toLowerCase())) {

            if (LP.Entomologist === false) {
                ErrorMsg(this.bot, message, msgErr);
            }
            else {
                let EntomoFile = require("../quizes/entomologist.json");

                let EntomoItem = EntomoFile[Math.floor(Math.random() * EntomoFile.length)];

                quiz(message, EntomoItem.Question, EntomoItem.Answer, EntomoItem.Attachment, EntomoItem.Difficulty, "The Entomologist").then(cooldown.add(message.author.id));
            }

        }

        setTimeout(() => {
            cooldown.delete(message.author.id);

        }, 60000);

    }
}