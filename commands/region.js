const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require('discord.js');

const { ErrorMsg, newLP } = require("../functions.js")

module.exports = {
    name: 'region',
    description: "Set your region ingame",
    execute: async (message, args, bot) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        function region(message, bot) {
            ErrorMsg(bot, message, "You need to provide something for me so i can set your region!\n\nTo set your region to: **NA/EU** type `1`\nTo set your region to: **Asia** type `2`\n\nYou have **60** seconds type one of these numbers!");

            const filter = m => m.author.id === message.author.id;

            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {

                let num = collected.first();

                if (num.content === '1') {
                    message.channel.send(`Succesfully set **${message.author.username}**'s region to ` + "`NA/EU`");

                    LP.region = "NA/EU";
                    LP.save().catch(e => console.log(e));
                }
                else if (num.content === "2") {
                    message.channel.send(`Succesfully set **${message.author.username}**'s region to ` + "`Asia`");

                    LP.region = "Asia";
                    LP.save().catch(e => console.log(e));

                }

            }).catch(collected => {
                return message.reply(`**Time is over!** try again!`);
            });


        }

        if (!LP) {
            return newLP(message);
        }

        else if (!args[1]) {
            region(message, bot);

        }
        else if (["na/eu", "na", "eu"].includes(args[1].toLowerCase())) {
            message.channel.send(`Succesfully set **${message.author.username}**'s region to ` + "`NA/EU`");

            LP.region = "NA/EU";
            LP.save().catch(e => console.log(e));

        }
        else if (["asia", "china"].includes(args[1].toLowerCase())) {
            message.channel.send(`Succesfully set **${message.author.username}**'s region to ` + "`Asia`");

            LP.region = "Asia";
            LP.save().catch(e => console.log(e));
        }
        else {
            region(message, bot);
        }

    }
}