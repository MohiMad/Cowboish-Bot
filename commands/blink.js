const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'blink',
    description: "This command allows you to blink your friends >:D\nAll you gotta do is mentioning them in your 1st arguments...\n\n**Usage:** `$prefixblink <userMention>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args, bot, prefix) => {

        let persona = await findMember(message, args.slice(1).join(" "));
        let person = message.author.username;

        let blinks = [
            "https://media.giphy.com/media/YOpwZ3jr5K6NNR2Zvo/giphy.gif",
            "https://media.giphy.com/media/RGRPnKttJ8qvlW49bI/giphy.gif",
            "https://media.giphy.com/media/WqLmLFHyxCaNamvv95/giphy.gif",
            "https://media.giphy.com/media/U4LCFb2WlqvHd7VHDi/giphy.gif",
            "https://media.giphy.com/media/LM1n0ETdcqJEnrhSqD/giphy.gif",
            "https://media.giphy.com/media/H1YLMr6ZYNq9mUfUgH/giphy.gif",
            "https://media.giphy.com/media/S9oeNa2E63gKP4k75y/giphy.gif",
            "https://media.giphy.com/media/IbNsqcUpLKDsyZfSpx/giphy.gif",
            "https://media.giphy.com/media/SXO8CtYraR35V5E0lk/giphy.gif",
            "https://media.giphy.com/media/jnoDjfkhShvhplArpk/giphy.gif",
            "https://media.giphy.com/media/ghOIJSu55J73TjL6xk/giphy.gif"

        ];

        let blink = Math.floor(Math.random() * blinks.length);

        if (!args[1]) return ErrorMsg(bot, message, 'Who do you want to blink? Mention them right after the command | example: `' + prefix + 'blink @Cowboish Bot`. heh try to blink me >:D');

        if (!persona) ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "blink <MentionHere>`")

        if (persona.id === message.author.id) return message.channel.send("Nah don't waste the blink on yourself, **" + message.author.username + "**");


        var facts = [
            `${persona.user.username} got blinked by ${person}`,
            `${person} blinked ${persona.user.username} >:D`
        ];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.displayAvatarURL())
            .setImage(blinks[blink])
            .setColor("RANDOM")
            .setFooter(`That poor poor ${persona.user.username} :C`, persona.user.displayAvatarURL());


        message.channel.send(lassoembed);

    }
}