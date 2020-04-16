//_______________Modules_____________
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const mongoose = require("mongoose");

mongoose.connect(config.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

bot.setMaxListeners(0);

["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));


bot.login(config.token);

