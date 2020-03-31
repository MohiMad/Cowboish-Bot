const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require('discord.js');

const { ErrorMsg, newLP } = require("../functions.js")

module.exports = {
    name: 'bio',
    description: "Set your info",
    execute: async (message, args, bot) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP) {
            return newLP(message);
        }
        else if (!args[1]) {
            if (LP.bio !== "0") {
                return message.channel.send(`Hey **${message.author.username}**!\nYour biography is set to: ${LP.bio}`);
            }
            return ErrorMsg(bot, message, "**Too few arguments!**\nPlease provide something to set as your biography!")
        }
        else if (args[1].length > 47) {
            return ErrorMsg(bot, message, `The description given is **${args[1].length - 47}** characters over the limit!\nPlease provide a biography that's less than 47 characters!`);
        }
        else {
            LP.bio = args.slice(1).join(" ");

            LP.save().catch(e => console.log(e));

            message.reply(`Succesfully set your biography to: ${args.slice(1).join(" ")}`);

        }


    }
}