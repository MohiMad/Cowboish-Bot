const Guild = require("../models/guild.js");

const { ErrorMsg, checkForGuildDataExistance } = require("../functions.js");

module.exports = {
    name: 'setcowboishprefix',
    description: "Change my prefix!",
    execute: async (message, args, bot) => {
        await checkForGuildDataExistance(message);
        const guild = await Guild.findOne({ guildID: message.guild.id });


        if (!args[1]) return ErrorMsg(bot, message, "Please give me a new prefix for me!\nThe prefix's length may not be over 7 characters\n\n**Example**: `setcowboishprefix cb!`")

        if (args[1].length < 1) return message.reply("You didn't provide any prefix!");

        if (args[1].length > 7) return message.channel.send("The new prefix given is too long\nThe prefix's length may not be over 7 characters!")

        guild.prefix = args[1];
        guild.save().catch(err => console.log(err));

        message.channel.send(`**Succesfully changed my prefix in this guild to** __*${args[1]}*__\nFrom now on, i will only respond to my new prefix!`)

    }
}