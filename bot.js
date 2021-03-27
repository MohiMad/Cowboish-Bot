const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const mongoose = require("mongoose");

const { shardManager, shardNum } = require("./index.js");

if ((shardNum + 1) != shardManager.totalShards) {
    mongoose.connect(process.env.mongoose_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    ["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));
}

bot.setMaxListeners(0);


bot.login(process.env.token);

