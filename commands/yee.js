module.exports = {
    name: 'yee',
    description: "haaaw",
    execute: async (message, bot) => {
        
        const m = await message.channel.send("Yee?");
        m.edit(`<:peepo_haw:699667884833636352> Haw!\nLatency is **${m.createdTimestamp - message.createdTimestamp}ms**.\nAPI Latency is **${Math.round(bot.ws.ping)}ms**`);  
    }
}