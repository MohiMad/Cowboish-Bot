const { RichEmbed } = require('discord.js');
const { ErrorMsg, findMember } = require("../functions.js");

module.exports = {
    name: 'terrorshock',
    description: "terrorshocks you",
    execute: async (message, args, bot) => {


        let persona = await findMember(message, args[1]);

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        else if (!args[1]) {
            return ErrorMsg(bot, message, "Who do you want to terrorshock? Mention them right after the command | example: >crash @Cowboish Bot . wait... don't do that to me plz :v")

        }
        else if (!persona) {
            ErrorMsg(bot, message, "Couldn't find that member!\nPlease provide their id, tag or mention em after the command\nUsage: `>blink <MentionHere>`")

        }
        else if (persona.id === message.author.id) {
            message.channel.send("U... wanna terrorshock yourself?,** " + message.author.username + '** is that even possible??!');

        }
        else {

            nube = 8;

            imagaNumbe = Math.floor(Math.random() * (nube - 1 + 1)) + 1;

            var facts = [
                'Oof ' + message.author.username + ' got ' + persona.user.username + ' terrorshocked :C',
                persona.user.username + " got terrorshocked by " + message.author.username,
                "Oh daaang " + persona.user.username + " got terrorshocked by " + message.author.username + ", that's hurts :("
            ];
            var fact = Math.floor(Math.random() * facts.length);

            let gifs = [
                "https://media.giphy.com/media/QC1qkRoP4he8LSTHiI/giphy.gif",
                "https://media.giphy.com/media/iFCDucgxIIZq23D6sG/giphy.gif",
                "https://media.giphy.com/media/cOQJujA64jVBkafOq2/giphy.gif",
                "https://media.giphy.com/media/KH8QLADr9qs0WVlOWa/giphy.gif",
                "https://media.giphy.com/media/iGGTa8sDxbcPGzt72r/giphy.gif",
                "https://media.giphy.com/media/RgtsXVT3DWDrK9QxQ9/giphy.gif",
                "https://media.giphy.com/media/Q9AfGunQCw8qNcB8Np/giphy.gif",
                "https://media.giphy.com/media/KGMmuXvQf9hPS8PlSu/giphy.gif",
                "https://media.giphy.com/media/gGqpuYDk708BiQf4VQ/giphy.gif"
            ];

            let gif = Math.floor(Math.random() * gifs.length);

            const bullyembed = new RichEmbed()
                .setAuthor((facts[fact]), message.author.avatarURL)
                .setImage(gifs[gif])
                .setColor("RANDOM");


            message.channel.send(bullyembed);

        }
    }
}