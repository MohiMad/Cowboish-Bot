const Guild = require("../models/guild.js");

const { ErrorMsg, checkForGuildDataExistance } = require("../assets/functions.js");

module.exports = {
    name: ["setcowboishprefix", "cowboishprefix", "setcowboishbotprefix"],
    description: "Change the prefix for Cowboish Bot\nThe prefix can't includes whitespaces and it's length should be between 1 and 7 characters\nMy current prefix is: `$prefix`\n\n**Usage:** `$prefixsetcowboishprefix <newPrefix>`\n\nThis command works even without using a prefix, you just gotta type `setcowboishprefix` in the chat",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Config",
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