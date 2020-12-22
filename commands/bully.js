const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'bully',
    description: "Hahah you can bully your friends using this command, just don't take the bully too far ;w;\n\n**Usage:** `$prefixbully <user>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args, bot, prefix) => {

        let persona = await findMember(message, args.slice(1).join(" "));

        if (!args[1]) return ErrorMsg(bot, message, "Who do you want to bully? Mention them right after the command | example: `" + prefix + "bully @Cowboish Bot` . oh no... plz don't bully me :(");
        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "blink <MentionHere>`");
        if (persona.id === message.author.id) return message.channel.send(`Nah cmon, **${message.author.username}** why would you bully yourself? :C`);

        var facts = [
            'Oof ' + persona.user.username + ' is getting bullied by ' + message.author.username,
            'cmon ' + message.author.username + ' dont do ' + persona.user.username + ' like dat!',
            'Omg ' + message.author.username + ' stop bullying ' + persona.user.username + '!'
        ];

        var fact = Math.floor(Math.random() * facts.length);

        var bullies = [
            "https://media.giphy.com/media/VI3JhvSjNbGrrj2D8r/giphy.gif",
            "https://media.giphy.com/media/fVyJPV8fILb69tulwG/giphy.gif",
            "https://media.giphy.com/media/VgTGeLnEpppAKOMjWS/giphy.gif",
            "https://media.giphy.com/media/ZZTwBZifNdTxqiQcJ5/giphy.gif",
            "https://media.giphy.com/media/Ketwl53yVpflR6wNeD/giphy.gif",
            "https://media.giphy.com/media/dX3T6yjJHWktn7JXJ5/giphy.gif",
            "https://media.giphy.com/media/if5PYQvmb8sOr5jIMj/giphy.gif",
            "https://media.giphy.com/media/JQGZeB4vqRiZgooE98/giphy.gif",
            "https://media.giphy.com/media/kBfNq3EvN5eeyX29rJ/giphy.gif",
            "https://media.giphy.com/media/tduZB3mCBJRjrw0vwG/giphy.gif"

        ];

        var bully = Math.floor(Math.random() * bullies.length);

        const bullyembed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.displayAvatarURL())
            .setImage(bullies[bully])
            .setColor("RANDOM");

        message.channel.send(bullyembed);

    }
}