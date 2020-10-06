const { MessageEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'struggle',
    description: "Bongo cat struggling :3",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args.slice(1).join(" "));

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        if (!args[1]) persona = message.author;
        else if (!persona) persona = message.author;
        else persona = await findMember(message, args.slice(1).join(" "));


        var facts = [
            `${persona.username} struggles...`,
            `${persona.username} is struggling >:3`,
        ];

        var fact = Math.floor(Math.random() * facts.length);


        const struggleEmbed = new MessageEmbed()
            .setAuthor((facts[fact]), (persona.displayAvatarURL() || persona.user.displayAvatarURL()))
            .setImage("https://media.giphy.com/media/fUjs0DifJYe2dgHuoe/giphy.gif")
            .setFooter(`Credits to @chrysalisobel on giphy <3`)
            .setColor("RANDOM");



        message.channel.send(struggleEmbed);

    }
}