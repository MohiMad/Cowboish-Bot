const logicPath = require("../models/logicpath.js");
const { ErrorMsg, coolEmbed, newLP, addCooldown, findCooldown } = require("../functions.js");

const { quiz } = require("../quizes/quiz.js");

module.exports = {
    name: 'quick',
    description: "play a quick match",
    execute: async (message, args, bot, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });
        const cooldownCheck = await findCooldown(message, "quick");

        if (!cooldownCheck) {

            if (!LP) return newLP(message);

            let ownedSurvivorsFiles = ["doctor", "luckyguy", "gardener", "lawyer", "thief"];

            let LPSurvivorvalues = [
                LP.Survivors.Cowboy,
                LP.Survivors.Mercenary,
                LP.Survivors.Coordinator,
                LP.Survivors.Priestess,
                LP.Survivors.Mechanic,
                LP.Survivors.Mindseye,
                LP.Survivors.Prefumer,
                LP.Survivors.Dancer,
                LP.Survivors.Seer,
                LP.Survivors.Embalmer,
                LP.Survivors.Acrobat,
                LP.Survivors.Officer,
                LP.Survivors.Barmaid,
                LP.Survivors.Magician,
                LP.Survivors.Explorer,
                LP.Survivors.Forward,
                LP.Survivors.Prospector,
                LP.Survivors.Enchantress,
                LP.Survivors.Wilding,
                LP.Survivors.Postman,
                LP.Survivors.NewSurv,
                LP.Survivors.AnotherSurv,
                LP.Entomologist
            ];

            let allSurvFiles = [
                "cowboy",
                "mercenary",
                "coordinator",
                "priestess",
                "mechanic",
                "mindseye",
                "perfumer",
                "dancer",
                "seer",
                "embalmer",
                "acrobat",
                "officer",
                "barmaid",
                "magician",
                "explorer",
                "forward",
                "prospector",
                "enchantress",
                "wildling",
                "postman",
                "gravekeeper",
                "prisoner",
                "entomologist"
            ];

            for (i = 0; i < LPSurvivorvalues.length; i++) {
                if (LPSurvivorvalues[i] === true) ownedSurvivorsFiles.push(allSurvFiles[i]);

            }

            let ownedSurvivors = [];

            ownedSurvivorsFiles.forEach(x => {
                ownedSurvivors.push(x.charAt(0).toUpperCase() + x.slice(1));
            });

            let msgErr = "**You don't own that character!**\n\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop survivor`\n\nHere are the Survivors you own:\n**" + ownedSurvivors.join(", ").replace("Officer", "1stOfficer") + "**\n\nTo let the bot randomly pick a survivor for you to play as, do `" + prefix + "quick random`";

            let pickRandomly = Math.floor(Math.random() * ownedSurvivorsFiles.length);

            let randomSurvFile = `Survivors/${ownedSurvivorsFiles[pickRandomly]}`;

            if (!args[1]) return ErrorMsg(bot, message, "Which survivor do you want to play as?\nThe usage of this command should be: `" + prefix + "quick <survivorName>`\n\n**NOTE**: You need to own the survivor you want to play as and that's by buying them from the `" + prefix + "shop survivor`\n\nSurvivors you own are:\n**" + ownedSurvivors.join(", ").replace("officer", "1stOfficer") + "**\n\nTo let the bot randomly pick a survivor for you to play as, do `" + prefix + "quick random`");

            let SurvivorsArray = [
                {
                    SearchArray: ["lawyer", "freddy"],
                    LP_Path: true,
                    Path: "Survivors/lawyer",
                    CharacterName: "The Lawyer"

                },
                {
                    SearchArray: ["doctor", "doc", "emily"],
                    LP_Path: true,
                    Path: "Survivors/doctor",
                    CharacterName: "The Doctor"

                },
                {
                    SearchArray: ["luckyguy", "lucky", "lg"],
                    LP_Path: true,
                    Path: "Survivors/luckyguy",
                    CharacterName: "The Lucky Guy"

                },
                {
                    SearchArray: ["gardener", "emma"],
                    LP_Path: true,
                    Path: "Survivors/gardener",
                    CharacterName: "Gardena :v"

                },
                {
                    SearchArray: ["kreacher", "thief"],
                    LP_Path: true,
                    Path: "Survivors/thief",
                    CharacterName: "Thief"

                },
                {
                    SearchArray: ["cowboy", "kevin"],
                    LP_Path: LP.Survivors.Cowboy,
                    Path: "Survivors/cowboy",
                    CharacterName: "Yeehaw boi"

                },
                {
                    SearchArray: ["naib", "mercenary", "merc"],
                    LP_Path: LP.Survivors.Mercenary,
                    Path: "Survivors/mercenary",
                    CharacterName: "The Mercenary"

                },
                {
                    SearchArray: ["coordinator", "coord", "martha"],
                    LP_Path: LP.Survivors.Coordinator,
                    Path: "Survivors/coordinator",
                    CharacterName: "The Coordinator"

                },
                {
                    SearchArray: ["fiona", "priestess"],
                    LP_Path: LP.Survivors.Priestess,
                    Path: "Survivors/priestess",
                    CharacterName: "The Priestess"

                },
                {
                    SearchArray: ["tracy", "mec", "mechanic"],
                    LP_Path: LP.Survivors.Mechanic,
                    Path: "Survivors/mechanic",
                    CharacterName: "The Mechanic"

                },
                {
                    SearchArray: ["helena", "mindseye", "minds", "tme"],
                    LP_Path: LP.Survivors.Mindseye,
                    Path: "Survivors/mindseye",
                    CharacterName: "The Mindseye"

                },
                {
                    SearchArray: ["perfumer", "vera"],
                    LP_Path: LP.Survivors.Prefumer,
                    Path: "Survivors/perfumer",
                    CharacterName: "The Perfumer"

                },
                {
                    SearchArray: ["dancer", "margaretha", "femaledancer"],
                    LP_Path: LP.Survivors.Dancer,
                    Path: "Survivors/dancer",
                    CharacterName: "The Dancer"

                },
                {
                    SearchArray: ["eli", "seer"],
                    LP_Path: LP.Survivors.Seer,
                    Path: "Survivors/seer",
                    CharacterName: "The Seer"

                },
                {
                    SearchArray: ["aesop", "embalmer"],
                    LP_Path: LP.Survivors.Embalmer,
                    Path: "Survivors/embalmer",
                    CharacterName: "The Embalmer"

                },
                {
                    SearchArray: ["mike", "acrobat"],
                    LP_Path: LP.Survivors.Acrobat,
                    Path: "Survivors/acrobat",
                    CharacterName: "The Acrobat"

                },
                {
                    SearchArray: ["firstofficer", "officer", "1stofficer", "jose"],
                    LP_Path: LP.Survivors.Officer,
                    Path: "Survivors/officer",
                    CharacterName: "The 1st Officer"

                },
                {
                    SearchArray: ["demi", "barmaid"],
                    LP_Path: LP.Survivors.Barmaid,
                    Path: "Survivors/barmaid",
                    CharacterName: "The Barmid"

                },
                {
                    SearchArray: ["servais", "magician"],
                    LP_Path: LP.Survivors.Magician,
                    Path: "Survivors/magician",
                    CharacterName: "The Magician"

                },
                {
                    SearchArray: ["kurt", "explorer"],
                    LP_Path: LP.Survivors.Explorer,
                    Path: "Survivors/explorer",
                    CharacterName: "The Explorer"

                },
                {
                    SearchArray: ["william", "forward"],
                    LP_Path: LP.Survivors.Forward,
                    Path: "Survivors/forward",
                    CharacterName: "The Forward"

                },
                {
                    SearchArray: ["norton", "prospector"],
                    LP_Path: LP.Survivors.Prospector,
                    Path: "Survivors/prospector",
                    CharacterName: "The Prospector"

                },
                {
                    SearchArray: ["patricia", "enchantress"],
                    LP_Path: LP.Survivors.Enchantress,
                    Path: "Survivors/enchantress",
                    CharacterName: "The Enchantress"

                },
                {
                    SearchArray: ["wildling", "wilding", "murro"],
                    LP_Path: LP.Survivors.Wilding,
                    Path: "Survivors/wildling",
                    CharacterName: "The Wilding"

                },
                {
                    SearchArray: ["victor", "postman"],
                    LP_Path: LP.Survivors.Postman,
                    Path: "Survivors/postman",
                    CharacterName: "The Postman"

                },
                {
                    SearchArray: ["gravedigger", "gravekeeper", "gk", "andrew"],
                    LP_Path: LP.Survivors.NewSurv,
                    Path: "Survivors/gravekeeper",
                    CharacterName: "The Gravekeeper"

                },
                {
                    SearchArray: ["prisoner", '"prisoner"', "luca"],
                    LP_Path: LP.Survivors.AnotherSurv,
                    Path: "Survivors/prisoner",
                    CharacterName: "The Prisoner"

                },
                {
                    SearchArray: ["entomologist", "entomo", "ento", "melly"],
                    LP_Path: LP.Entomologist,
                    Path: "Survivors/entomologist",
                    CharacterName: "The Entomologist"

                },
                {
                    SearchArray: ["r", "randomize", "random", "random-survivor", "randomsurvivor", "randomsurv", "random-surv"],
                    LP_Path: true,
                    Path: randomSurvFile,
                    CharacterName: ownedSurvivorsFiles[pickRandomly]

                }
            ];

            let boolean = false;

            SurvivorsArray.forEach(async (x) => {

                if (x.SearchArray.includes(args[1].toLowerCase())) {
                    if (x.LP_Path === false) {
                        boolean = true;
                        return ErrorMsg(bot, message, msgErr);

                    } else {
                        boolean = true;
                        return await quiz(bot, message, x.Path, x.CharacterName);

                    }

                }
            });

            if (boolean === false) return message.channel.send(`Make sure you spelled the name of the **survivor** correctly, ${message.author.username}!`)

        } else {
            coolEmbed(message, "The cooldown is still on...", "Please wait **REMAINING** before you can play a match again...", cooldownCheck.timeRemaining, ["m", "s"]);
        }


    }
}
