//_______________Modules_____________
const Discord = require('discord.js');
const bot = new Discord.Client({
    disableMentions: 'everyone',
    messageCacheMaxSize: 1,
    fetchAllMembers: false
});
const config = require("./config.json");

const mongoose = require("mongoose");

mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const botGuildCount = bot.guilds.cache.size;

bot.setMaxListeners(0);

["event", "command"].forEach(x => require(`./handlers/${x}`)(bot, botGuildCount));


bot.login(config.token);

