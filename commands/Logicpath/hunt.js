const logicPath = require("../../models/logicpath.js");
const { ErrorMsg, newLP, coolEmbed, findCooldown } = require("../../src/functions.js");
const { quiz } = require("../../quizes/quiz.js");

module.exports = {
    name: ["hunt", "hunter", "huntas", "h", "huntermatch", "huntmatch"],
    description: "Play a match as a hunter to get dices :D\nYou can only play as Hunters you bought... Just like in-game, you can always play as Leo/Hellember\n\n**Usage:** `$prefixhunt <hunterName>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Logicpath",
    execute: async (message, args, bot, prefix, SpamSet) => {
        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        const cooldownCheck = await findCooldown(message, "hunt");
        if (SpamSet.has(message.author)) return;

        if (cooldownCheck) return coolEmbed(message, "You can't hunt just yet :(", "Please wait **REMAINING** before you can use the `hunt` command again...", cooldownCheck.timeRemaining, ["m", "s"]);

            let ownedHuntersFiles = ["leo"];

            let LPHuntervalues = [
                LP.Hunters.AxeBoi,
                LP.Hunters.GameKeeper,
                LP.Hunters.BloodyQueen,
                LP.Hunters.Pingu,
                LP.Hunters.Clown,
                LP.Hunters.DreamWitch,
                LP.Hunters.Feaster,
                LP.Hunters.Geisha,
                LP.Hunters.Lizard,
                LP.Hunters.MadEyes,
                LP.Hunters.PhotoGrapher,
                LP.Hunters.Ripper,
                LP.Hunters.Sister,
                LP.Hunters.SoulWeaver,
                LP.Hunters.WuChang,
                LP.Hunters.NewHunta, //violinist
                LP.Sculptor,
                LP.Percy
            ];

            let allHunterFiles = [
                "axeboy",
                "gamekeeper",
                "bloodyqueen",
                "bonbon",
                "clown",
                "dreamwitch",
                "feaster",
                "geisha",
                "lizard",
                "madeyes",
                "photographer",
                "ripper",
                "ann",
                "soulweaver",
                "wuchang",
                "violinist",
                "sculptor",
                "percy"
            ];

            for (i = 0; i < LPHuntervalues.length; i++) {
                if (LPHuntervalues[i] === true) ownedHuntersFiles.push(allHunterFiles[i]);
            }

            let ownedHunters = [];

            ownedHuntersFiles.forEach(x => {
                ownedHunters.push(x.charAt(0).toUpperCase() + x.slice(1));
            });

            let msgErr = "**Which hunter do you want to play as?**\n\nThe usage of this command should be: `" + prefix + "hunt <hunterName>`\n\n**Note**: You need to own the hunter you want to play as, and that's by bying them from the `" + prefix + "shop hunter`\n\nHunters you own are:\n**" + ownedHunters.join(", ") + "**";

            if (!args[1]) return ErrorMsg(bot, message, msgErr);

            let pickRandomly = Math.floor(Math.random() * ownedHuntersFiles.length);

            let randomHunterFile = `Hunters/${ownedHuntersFiles[pickRandomly]}`;

            let HuntersArray = [
                {
                    SearchArray: ["hellember", "leo", "hell-ember"],
                    LP_Path: true,
                    Path: "Hunters/leo",
                    CharacterName: "Hell Ember"
                },
                {
                    SearchArray: ["axeboy", "axeboi", "robbie"],
                    LP_Path: LP.Hunters.AxeBoi,
                    Path: "Hunters/axeboy",
                    CharacterName: "Axe booaaai"
                },
                {
                    SearchArray: ["bane", "gamekeeper", "gk", "game-keeper"],
                    LP_Path: LP.Hunters.GameKeeper,
                    Path: "Hunters/gamekeeper",
                    CharacterName: "Gamekeepa :v"
                },
                {
                    SearchArray: ["bloodyqueen", "bq", "mary", "queen", "bloody-queen"],
                    LP_Path: LP.Hunters.BloodyQueen,
                    Path: "Hunters/bloodyqueen",
                    CharacterName: "Mary UwU"
                },
                {
                    SearchArray: ["bonbon", "no.26", "pingu", "guard", "guard26"],
                    LP_Path: LP.Hunters.Pingu,
                    Path: "Hunters/bonbon",
                    CharacterName: "Pinguuu U~U"
                },
                {
                    SearchArray: ["clown", "smileyface", "joker"],
                    LP_Path: LP.Hunters.Clown,
                    Path: "Hunters/clown",
                    CharacterName: "Dish dashie boi"
                },
                {
                    SearchArray: ["dw", "dreamwitch", "yhidra", "dream-witch"],
                    LP_Path: LP.Hunters.DreamWitch,
                    Path: "Hunters/dreamwitch",
                    CharacterName: "The Dreamwitch"
                },
                {
                    SearchArray: ["feaster", "hastur", "feasta"],
                    LP_Path: LP.Hunters.Feaster,
                    Path: "Hunters/feaster",
                    CharacterName: "Feasta"
                },
                {
                    SearchArray: ["geisha", "gaysha", "michiko"],
                    LP_Path: LP.Hunters.Geisha,
                    Path: "Hunters/geisha",
                    CharacterName: "Gaysha >:v"
                },
                {
                    SearchArray: ["lizard", "luchino", "lizardo", "evilreptilian", "reptilian"],
                    LP_Path: LP.Hunters.Lizard,
                    Path: "Hunters/lizard",
                    CharacterName: "Lizzyboii >:3"
                },
                {
                    SearchArray: ["madeyes", "trump", "madeye", "burke"],
                    LP_Path: LP.Hunters.MadEyes,
                    Path: "Hunters/madeyes",
                    CharacterName: "Old man with a beer"
                },
                {
                    SearchArray: ["photographer", "photoboi", "joseph"],
                    LP_Path: LP.Hunters.PhotoGrapher,
                    Path: "Hunters/photographer",
                    CharacterName: "Photobooiiii :3"
                },
                {
                    SearchArray: ["ripper", "rippa", "jack"],
                    LP_Path: LP.Hunters.Ripper,
                    Path: "Hunters/ripper",
                    CharacterName: "Rippa :v"
                },
                {
                    SearchArray: ["sister", "nun", "disciple", "ann"],
                    LP_Path: LP.Hunters.Sister,
                    Path: "Hunters/ann",
                    CharacterName: "Long neck Ann"
                },
                {
                    SearchArray: ["sw", "spider", "soulweaver", "violetta"],
                    LP_Path: LP.Hunters.SoulWeaver,
                    Path: "Hunters/soulweaver",
                    CharacterName: "Soulweava :v"
                },
                {
                    SearchArray: ["wu", "wuchang", "wuchangus", "blackandwhite"],
                    LP_Path: LP.Hunters.WuChang,
                    Path: "Hunters/wuchang",
                    CharacterName: "Wu changus UwU"
                },
                {
                    SearchArray: ["violinist", "musician", "antonio"],
                    LP_Path: LP.Hunters.NewHunta,
                    Path: "Hunters/violinist",
                    CharacterName: "Stinky man with a violin"
                },
                {
                    SearchArray: ["sculptor", "galatea"],
                    LP_Path: LP.Sculptor,
                    Path: "Hunters/sculptor",
                    CharacterName: "The Sculptor"
                },
                {
                    SearchArray: ["percy", "undead", "theundead"],
                    LP_Path: LP.Percy,
                    Path: "Hunters/percy",
                    CharacterName: "Percy"
                },
                {
                    SearchArray: ["r", "randomize", "random", "random-hunter", "randomhunter"],
                    LP_Path: true,
                    Path: randomHunterFile,
                    CharacterName: ownedHuntersFiles[pickRandomly]

                }
            ];

            let boolean = false;

            HuntersArray.forEach(async (x) => {

                if (x.SearchArray.includes(args[1].toLowerCase())) {
                    if (x.LP_Path !== true) {
                        boolean = true;
                        return ErrorMsg(bot, message, "**You don't own that character!**\n\nYou need to buy that character by doing `" + prefix + "buy <characterName>`\nTo check the characters available do `" + prefix + "shop hunters`\n\nHere are the Hunters you own:\n**" + ownedHunters.join(", ") + "**\n\nTo let the bot randomly pick a survivor for you to play as, do `" + prefix + "hunt random`");

                    } else {
                        boolean = true;
                        return await quiz(bot, message, x.Path, x.CharacterName, SpamSet);

                    }

                }
            });

            if (boolean === false) return message.channel.send(`Make sure you spelled the name of the **hunter** correctly, **${message.author.username}**!`);

    }
}