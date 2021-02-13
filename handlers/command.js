const fs = require('fs');

const { Collection } = require("discord.js");

module.exports = (bot) => {
    bot.commands = new Collection();

    const categories = fs.readdirSync('./commands/');

    for (const category of categories) {
        const commandFiles = fs.readdirSync(`./commands/${category}`).filter(File => File.endsWith('.js'));

        for (const file of commandFiles) {
            const command = require(`../commands/${category}/${file}`);

            let name = command.name[0];
            if (name.length === 1) name = command.name;

            bot.commands.set(name, command);
        }
    }
};