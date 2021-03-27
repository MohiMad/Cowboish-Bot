const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const mongoose = require("mongoose");

//const { shardManager } = require("./index.js");

mongoose.connect(process.env.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log("once");

bot.setMaxListeners(0);

setTimeout(() => {
    ["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));
}, 60000);


bot.login(process.env.token);

