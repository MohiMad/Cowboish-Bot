const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js")
let cooldown = new Set();
module.exports = {
    name: 'essence',
    description: "opens an essence",
    execute(message, args, bot) {

        message.channel.send(`Hey **${message.author.username}**!\nThis command has been removed by the developer!\nBut you can still open the season's current essences with the ` + "`>open` command :3");

    }
}
