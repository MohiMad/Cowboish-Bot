const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: ["randomize", "random", "pickrandomly"],
    description: "Picks you a random Item, Survivor or Hunter... You choose which ;)\nTo randomize between Survivors, add `survivors` as your 1st arguments and same goes for Hunters...\n\nIf you want Cowboish to pick something from a list your provide, add the list of your items you want Cowboih to pick between separated with a whitespace\n\n**Usage:** `$prefixrandomize <survivors/hunters>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    execute(message, args, bot, prefix) {

        var facts = [
            "1st Officer",
            "Enchantress",
            "Mechanic",
            "Wilding",
            "Barmaid",
            "Acrobat",
            "Prospector",
            "Seer",
            "Forward",
            "Embalmer",
            "Dancer",
            "Coordinator",
            "Explorer",
            "Magician",
            "Perfumer",
            "Priestess",
            "Minds eye",
            "Mercenary",
            "Gardener",
            "Lucky guy",
            "Doctor",
            "Thief",
            "Lawyer",
            "Cowboy",
            "Postman",
            "Gravekeeper",
            "Prisoner",
            "Entomologist",
            "Painter"
        ];

        var hunters = [
            "Geisha",
            "Smiley Face",
            "Feaster",
            "Axe Boy",
            "Dream Witch",
            "Soul Weaver",
            "Hell Ember",
            "Gamekeeper",
            "Mad eyes",
            "Wu chang",
            "The Ripper",
            "Evil Reptilian",
            "Bloody queen",
            "No. 26",
            "Ann",
            "Violinist",
            "Sculptor",
            "Percy"
        ];

        var hunter = Math.floor(Math.random() * hunters.length);

        var fact = Math.floor(Math.random() * facts.length);

        if (!args[1]) return ErrorMsg(bot, message, "**Too few arguments!**\nPlease provide me some values to randomly pick from them!\n**Example:** `" + prefix + "randomize cat fish dog`\n**Example respond:** I choose **dog**\nRemember to seperate the values with a space in between\n\nOr you can do `" + prefix + "randomize survivor` or `" + prefix + "randomize hunter` so i pick a random character for you!")

        if (["surv", "survivor", "survivors"].includes(args[1].toLowerCase())) return message.channel.send(`I choose **${facts[fact]}**`);

        if (["hunter", "hunters"].includes(args[1].toLowerCase())) return message.channel.send(`I choose **${hunters[hunter]}**`);
        
        let values = args.slice(1).join(" ").split(" ").length;
        let rNumber = Math.floor(Math.random() * (values - 1 + 1)) + 1;

        return message.channel.send(`I choose **${args[rNumber]}**`);



    }
}