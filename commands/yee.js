module.exports = {
    name: ["yee", "yeee"],
    description: "Haw 🤠\nBasically displays Cowboish's ping (Speed of response)",
    permissions: ["SEND_MESSAGES", "USE_EXTERNAL_EMOJIS"],
    execute: async (message, bot) => {
        
        const m = await message.channel.send("Yee?");
        m.edit(`<:peepo_haw:699667884833636352> Haw!\nLatency is **${m.createdTimestamp - message.createdTimestamp}ms**.\nAPI Latency is **${Math.round(bot.ws.ping)}ms**`);  
    }
}