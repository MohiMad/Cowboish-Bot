const { getServerCount } = require('../../src/functions.js');

module.exports = {
    name: ["guilds", "cbstats", "cowboishstats", "cowboishbotstats"],
    description: "Displays the amount of Servers Cowboish Bot have joined",
    permissions: ["SEND_MESSAGES"],
    category: "Config",
    execute: async (message, bot) => {

        const guilds = await getServerCount(bot);

        message.channel.send(`I'm in **${guilds}** Guilds :D`);
    }
}