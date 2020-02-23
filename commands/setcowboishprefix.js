const Guild = require("../models/guild.js");

const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'setcowboishprefix',
    description: "Change my prefix!",
    execute: async (message, args, bot) => {

        const guild = await Guild.findOne({ guildID: message.guild.id });

        if (!guild) {
            const newGuild = new Guild({

                guildID: message.guild.id,

                leave: {
                    enabled: false,

                    channel: null,

                    message: null,
                },
                welcome: {

                    enabled: false,

                    channel: null,

                    message: null,
                },

                prefix: ">",

                autoroles: [],

            })
            newGuild.save().catch(err => console.log(err))
                .then(message.reply("It seems like your guild didn't have any data saved, but now it does ;D\nPlease try to run the command again!"));
        }

        else if (!args[1]) {
            ErrorMsg(bot, message, "Please give me a new prefix for me!\nThe prefix's length may not be over 7 characters\n\n**Example**: `setcowboishprefix cb!`")
        }
        else if(args[1].length < 1){
            ErrorMsg(bot, message, "You didn't provide any prefix!")
        }
        else if (args[1].length > 7) {
            ErrorMsg(bot, message, "The new prefix given is too long\nThe prefix's length may not be over 7 characters!")
        }
        else {
            guild.prefix = args[1];
            guild.save().catch(err => console.log(err));

            message.channel.send(`**Succesfully changed my prefix in this guild to** __*${args[1]}*__\nFrom now on, i will only respond to my new prefix!`)
        }

    }
}