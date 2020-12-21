const { Util } = require('discord.js');


module.exports = {
    name: ["say", "repeat"],
    description: "Repeats what you say\n\n**Usage:** `$prefixsay <what to say? say it here -v->`",
    permissions: ["SEND_MESSAGES"],
    execute(message, args) {

        const sayMessage = args.slice(1).join(" ");

        if (message.deletable) message.delete();

        if (!args[1]) return message.channel.send("Tell me what to say...");

        message.channel.send(Util.cleanContent(`**${message.author.tag}** says:\n${sayMessage}`, message));

    }
}