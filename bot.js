const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const mongoose = require("mongoose");



setTimeout(() => {
    mongoose.connect(process.env.mongoose_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    ["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));
}, 30000);


bot.setMaxListeners(0);

bot.login(process.env.token);

