const { Util } = require('discord.js');


module.exports = {
    name: 'say',
    description: "repeats what you just said!",
    execute(message, args, MohiMoo) {

        const sayMessage = args.slice(1).join(" ");

        if (message.deletable) message.delete();

        if (!args[1]) return message.channel.send("Tell me what to say...");

        message.channel.send(Util.cleanContent(`**${message.author.tag}** says:\n${sayMessage}`, message));

    }
}