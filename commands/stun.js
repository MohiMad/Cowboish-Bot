const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../assets/functions.js");

module.exports = {
    name: ["stun", "palletstun"],
    description: "Stun your friends with a pallet >:D\n\n**Usage:** `$prefixstun <user>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Actions",
    execute: async (message, args, bot, prefix) => {


        let persona = await findMember(message, args.slice(1).join(" "));

        if (!args[1]) return ErrorMsg(bot, message, "Who do you want to shut the pallet on? Mention them right after the command | example: `" + prefix + "stun @Cowboish Bot`")


        if (!persona) return ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `" + prefix + "stun <MentionHere>`")


        if (persona.id === message.author.id) return message.channel.send(`I won't do that for you, **${message.author.username}**`);

        var facts = [
            'Oof ' + message.author.username + ' stunned ' + persona.user.username + ' with a pallet :C',
            message.author.username + ' shut the pallet down in front of ' + persona.user.username + "'s face"];

        var fact = Math.floor(Math.random() * facts.length);

        let gifs = [
            "https://media.giphy.com/media/kZimQCtfhr6KAWxtKY/giphy.gif",
            "https://media.giphy.com/media/Kebl8fwR139CLl1eqM/giphy.gif",
            "https://media.giphy.com/media/fTmk1jxRn2XIsKIf3C/giphy.gif",
            "https://media.giphy.com/media/W6X01hvGL5jWdjHRfh/giphy.gif",
            "https://media.giphy.com/media/W2Ky2hBaPh7dOo8q4F/giphy.gif",
            "https://media.giphy.com/media/iFURGcpqoWtHG1FKxE/giphy.gif",
            "https://media.giphy.com/media/Q7XBrJ6DiQFCV3Eigu/giphy.gif",
            "https://media.giphy.com/media/cj2rsH7TJqEap220aI/giphy.gif"
        ];

        let gif = Math.floor(Math.random() * gifs.length);

        const stunEmbed = new MessageEmbed()
            .setAuthor((facts[fact]), message.author.avatarURL())
            .setImage(gifs[gif])
            .setColor("RANDOM");


        message.channel.send(stunEmbed);

    }
}