const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const mongoose = require("mongoose");

mongoose.connect(process.env.mongoose_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

bot.setMaxListeners(0);

setTimeout(() => {
    ["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));
}, 60000);


bot.login(process.env.token);

