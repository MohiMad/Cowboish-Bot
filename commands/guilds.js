module.exports = {
    name: ["guilds", "cbstats", "cowboishstats", "cowboishbotstats"],
    description: "Displays the amount of Servers Cowboish Bot have joined",
    permissions: ["SEND_MESSAGES"],
    execute: (message) => {
        message.channel.send(`Cowboish bot is in:\n**${bot.guilds.cache.size}** Guilds :D`);
    }
}