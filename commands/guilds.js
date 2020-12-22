module.exports = {
    name: ["guilds", "cbstats", "cowboishstats", "cowboishbotstats"],
    description: "Displays the amount of Servers Cowboish Bot have joined",
    permissions: ["SEND_MESSAGES"],
    category: "Config",
    execute: (message, bot) => {
        message.channel.send(`I'm in **${bot.guilds.cache.size}** Guilds :D`);
    }
}