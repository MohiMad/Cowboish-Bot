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

["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));


bot.login(process.env.token);

