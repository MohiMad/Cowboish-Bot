const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'random',
    description: "randomizes a surv",
    execute(message, args, bot) {


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
            "Prisoner"
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
            "Violinist"
        ];

        var hunter = Math.floor(Math.random() * hunters.length);

        var fact = Math.floor(Math.random() * facts.length);

        if (!args[1]) return ErrorMsg(bot, message, "**Too few arguments!**\nPlease provide me some values to randomly pick from them!\n**Example:** `>randomize cat fish dog`\n**Example respond:** I choose **dog**\nRemember to seperate the values with a space in between\n\nOr you can do `>randomize survivor` or `>randomize hunter` so i pick a random character for you!")

        else if (["surv", "survivor", "survivors"].includes(args[1].toLowerCase())) {

            message.channel.send(`I choose **${facts[fact]}**`);

        } else if (["hunter", "hunters"].includes(args[1].toLowerCase())) {
            message.channel.send(`I choose **${hunters[hunter]}**`);
        } else {
            let values = args.slice(1).join(" ").split(" ").length;
            rNumber = Math.floor(Math.random() * (values - 1 + 1)) + 1;

            message.channel.send(`I choose **${args[rNumber]}**`);
        }



    }
}