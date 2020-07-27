const logicPath = require("../models/logicpath.js");
const { quiz, ErrorMsg, coolEmbed, newLP, addCooldown, findCooldown } = require("../functions.js");

module.exports = {
    name: 'quick',
    description: "play a quick match",
    execute: async (message, args, bot, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        let msgErr = "You don't own that character!\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop survivor`\nBut hey :) you can always play as:\n**Gardener**\n**LuckyGuy**\n**Doctor**\n**Thief**\n**Lawyer**";


        const cooldownCheck = await findCooldown(message, "test");

        if (!cooldownCheck) {

            if (!LP) return newLP(message);

            if (!args[1]) return ErrorMsg(bot, message, "Which survivor do you want to play as?\nThe usage of this command should be: `" + prefix + "quick <survivorName>`\nNOTE: You need to own the survivor you want to play as and that's by bying them from the `" + prefix + "shop`\nKeep in mind that you always can play as:\n**Gardener**\n**LuckyGuy**\n**Doctor**\n**Thief**\n**Lawyer**");

            if (["lawyer", "freddy"].includes(args[1].toLowerCase())) {

                let lawyerfile = require("../quizes/lawyer.json");

                let lawyeritem = lawyerfile[Math.floor(Math.random() * lawyerfile.length)];

                await quiz(message, lawyeritem.Question, lawyeritem.Answer, lawyeritem.Attachment, lawyeritem.Difficulty, "Lawyer", lawyeritem.Artist);
                await addCooldown(message, 60 * 1000, "test");
            }
            else if (["doctor", "doc", "emily"].includes(args[1].toLowerCase())) {

                let docfile = require("../quizes/doctor.json");

                let docitem = docfile[Math.floor(Math.random() * docfile.length)];

                await quiz(message, docitem.Question, docitem.Answer, docitem.Attachment, docitem.Difficulty, "Doctor", docitem.Artist);
                await addCooldown(message, 60 * 1000, "test");

            }
            else if (["luckyguy", "lucky", "lg"].includes(args[1].toLowerCase())) {

                let luckfile = require("../quizes/lucky.json");

                let luckitem = luckfile[Math.floor(Math.random() * luckfile.length)];

                await quiz(message, luckitem.Question, luckitem.Answer, luckitem.Attachment, luckitem.Difficulty, "Lucky guy", luckitem.Artist);
                await addCooldown(message, 60 * 1000, "test");

            }
            else if (["gardener", "emma"].includes(args[1].toLowerCase())) {

                let gardenerfile = require("../quizes/gardener.json");

                let gardeneritem = gardenerfile[Math.floor(Math.random() * gardenerfile.length)];

                await quiz(message, gardeneritem.Question, gardeneritem.Answer, gardeneritem.Attachment, gardeneritem.Difficulty, "Gardena :v", gardeneritem.Artist);
                await addCooldown(message, 60 * 1000, "test");

            }
            else if (["theif", "kreacher", "thief"].includes(args[1].toLowerCase())) {

                let theiffile = require("../quizes/theif.json");

                let theifitem = theiffile[Math.floor(Math.random() * theiffile.length)];

                await quiz(message, theifitem.Question, theifitem.Answer, theifitem.Attachment, theifitem.Difficulty, "Theif", theifitem.Artist);
                await addCooldown(message, 60 * 1000, "test");

            }
            else if (["cowboy", "kevin"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Cowboy === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let cowboyfile = require("../quizes/cowboy.json");

                    let cowboyitem = cowboyfile[Math.floor(Math.random() * cowboyfile.length)];

                    await quiz(message, cowboyitem.Question, cowboyitem.Answer, cowboyitem.Attachment, cowboyitem.Difficulty, "Cowboy", cowboyitem.Artist);

                    await addCooldown(message, 60 * 1000, "test");
                }

            }
            else if (["naib", "mercenary", "merc"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Mercenary === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let mercfile = require("../quizes/mercenary.json");

                    let mercitem = mercfile[Math.floor(Math.random() * mercfile.length)];

                    await quiz(message, mercitem.Question, mercitem.Answer, mercitem.Attachment, mercitem.Difficulty, "Naibu", mercitem.Artist);

                    await addCooldown(message, 60 * 1000, "test");
                }

            }
            else if (["coordinator", "coord", "martha"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Coordinator === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let coordfile = require("../quizes/coordinator.json");

                    let coorditem = coordfile[Math.floor(Math.random() * coordfile.length)];

                    await quiz(message, coorditem.Question, coorditem.Answer, coorditem.Attachment, coorditem.Difficulty, "Coordinator", coorditem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["fiona", "priestess"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Priestess === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let priestessfile = require("../quizes/priestess.json");

                    let priestessitem = priestessfile[Math.floor(Math.random() * priestessfile.length)];

                    await quiz(message, priestessitem.Question, priestessitem.Answer, priestessitem.Attachment, priestessitem.Difficulty, "Priestess", priestessitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["tracy", "mec", "mechanic"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Mechanic === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let mecfile = require("../quizes/mechanic.json");

                    let mecitem = mecfile[Math.floor(Math.random() * mecfile.length)];

                    await quiz(message, mecitem.Question, mecitem.Answer, mecitem.Attachment, mecitem.Difficulty, "Mechanic", mecitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["helena", "mindseye", "minds", "tme"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Mindseye === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let mindsfile = require("../quizes/mindseye.json");

                    let mindsitem = mindsfile[Math.floor(Math.random() * mindsfile.length)];

                    await quiz(message, mindsitem.Question, mindsitem.Answer, mindsitem.Attachment, mindsitem.Difficulty, "Mindseye", mindsitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["perfumer", "vera"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Prefumer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let perfumerfile = require("../quizes/perfumer.json");

                    let perfumeritem = perfumerfile[Math.floor(Math.random() * perfumerfile.length)];

                    await quiz(message, perfumeritem.Question, perfumeritem.Answer, perfumeritem.Attachment, perfumeritem.Difficulty, "Perfumer", perfumeritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["dancer", "margaretha", "femaledancer"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Dancer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let dancerfile = require("../quizes/dancer.json");

                    let danceritem = dancerfile[Math.floor(Math.random() * dancerfile.length)];

                    await quiz(message, danceritem.Question, danceritem.Answer, danceritem.Attachment, danceritem.Difficulty, "Female dancer", danceritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["eli", "seer"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Seer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let seerfile = require("../quizes/seer.json");

                    let seeritem = seerfile[Math.floor(Math.random() * seerfile.length)];

                    await quiz(message, seeritem.Question, seeritem.Answer, seeritem.Attachment, seeritem.Difficulty, "Seer", seeritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["aesop", "embalmer"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Embalmer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let embalmerfile = require("../quizes/embalmer.json");

                    let embalmeritem = embalmerfile[Math.floor(Math.random() * embalmerfile.length)];

                    await quiz(message, embalmeritem.Question, embalmeritem.Answer, embalmeritem.Attachment, embalmeritem.Difficulty, "Embalmer", embalmeritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["mike", "acrobat"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Acrobat === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let acrofile = require("../quizes/acrobat.json");

                    let acroitem = acrofile[Math.floor(Math.random() * acrofile.length)];

                    await quiz(message, acroitem.Question, acroitem.Answer, acroitem.Attachment, acroitem.Difficulty, "Acrobat", acroitem.Artist, acroitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["firstofficer", "officer", "1stofficer", "jose"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Officer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let officerfile = require("../quizes/officer.json");

                    let officeritem = officerfile[Math.floor(Math.random() * officerfile.length)];

                    await quiz(message, officeritem.Question, officeritem.Answer, officeritem.Attachment, officeritem.Difficulty, "1st Offica :v", officeritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["demi", "barmaid"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Barmaid === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let barfile = require("../quizes/barmaid.json");

                    let baritem = barfile[Math.floor(Math.random() * barfile.length)];

                    await quiz(message, baritem.Question, baritem.Answer, baritem.Attachment, baritem.Difficulty, "Barmaid".baritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["servais", "magician"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Magician === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let magicianfile = require("../quizes/magician.json");

                    let magicianitem = magicianfile[Math.floor(Math.random() * magicianfile.length)];

                    await quiz(message, magicianitem.Question, magicianitem.Answer, magicianitem.Attachment, magicianitem.Difficulty, "Magician", magicianitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["kurt", "explorer"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Explorer === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let explorerfile = require("../quizes/explorer.json");

                    let exploreritem = explorerfile[Math.floor(Math.random() * explorerfile.length)];

                    await quiz(message, exploreritem.Question, exploreritem.Answer, exploreritem.Attachment, exploreritem.Difficulty, "Explorer", exploreritem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["william", "forward"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Forward === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let forwardfile = require("../quizes/forward.json");

                    let forwarditem = forwardfile[Math.floor(Math.random() * forwardfile.length)];

                    await quiz(message, forwarditem.Question, forwarditem.Answer, forwarditem.Attachment, forwarditem.Difficulty, "Forward", forwarditem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["norton", "prospector"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Prospector === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let prosfile = require("../quizes/prospector.json");

                    let prositem = prosfile[Math.floor(Math.random() * prosfile.length)];

                    await quiz(message, prositem.Question, prositem.Answer, prositem.Attachment, prositem.Difficulty, "Prospector", prositem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["patricia", "enchantress"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Enchantress === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let enchantressfile = require("../quizes/enchantress.json");

                    let enchantressitem = enchantressfile[Math.floor(Math.random() * enchantressfile.length)];

                    await quiz(message, enchantressitem.Question, enchantressitem.Answer, enchantressitem.Attachment, enchantressitem.Difficulty, "Enchantress", enchantressitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["wildling", "wilding", "murro"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Wilding === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let Wildingfile = require("../quizes/wilding.json");

                    let Wildingitem = Wildingfile[Math.floor(Math.random() * Wildingfile.length)];

                    await quiz(message, Wildingitem.Question, Wildingitem.Answer, Wildingitem.Attachment, Wildingitem.Difficulty, "Wilding", Wildingitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["victor", "postman"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.Postman === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let Postmanfile = require("../quizes/postman.json");

                    let Postmanitem = Postmanfile[Math.floor(Math.random() * Postmanfile.length)];

                    await quiz(message, Postmanitem.Question, Postmanitem.Answer, Postmanitem.Attachment, Postmanitem.Difficulty, "Postman", Postmanitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["gravedigger", "gravekeeper", "gk", "andrew"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.NewSurv === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let gravefile = require("../quizes/gravedigger.json");

                    let graveitem = gravefile[Math.floor(Math.random() * gravefile.length)];

                    await quiz(message, graveitem.Question, graveitem.Answer, graveitem.Attachment, graveitem.Difficulty, "Grave keepa", graveitem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["prisoner", '"prisoner"', "luca"].includes(args[1].toLowerCase())) {

                if (LP.Survivors.AnotherSurv === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let prisonerFile = require("../quizes/prisoner.json");

                    let prisonerItem = prisonerFile[Math.floor(Math.random() * prisonerFile.length)];

                    await quiz(message, prisonerItem.Question, prisonerItem.Answer, prisonerItem.Attachment, prisonerItem.Difficulty, "Prisoner", prisonerItem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }

            }
            else if (["entomologist", "entomo", "ento", "melly"].includes(args[1].toLowerCase())) {

                if (LP.Entomologist === false) {
                    ErrorMsg(this.bot, message, msgErr);
                }
                else {
                    let EntomoFile = require("../quizes/entomologist.json");

                    let EntomoItem = EntomoFile[Math.floor(Math.random() * EntomoFile.length)];


                    await quiz(message, EntomoItem.Question, EntomoItem.Answer, EntomoItem.Attachment, EntomoItem.Difficulty, "The Entomologist", EntomoItem.Artist);
                    await addCooldown(message, 60 * 1000, "test");

                }
            } else {
                message.channel.send(`Make sure you spelled the name of the **survivor** correctly, **${message.author.username}**!`);
            }

        } else {
            coolEmbed(message, "The cooldown is still on...", "Please wait **REMAINING** before you can play a match again...", cooldownCheck.timeRemaining, ["m", "s"]);
        }

    }
}