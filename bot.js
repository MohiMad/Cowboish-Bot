const Discord = require('discord.js');

const bot = new Discord.Client({
    messageCacheMaxSize: 35
});

const mongoose = require("mongoose");


bot.on('shardReady', async (shard) => {
    if ((shard + 1) === bot.shard.count) {
        await mongoose.connect(process.env.mongoose_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        ["event", "command"].forEach(x => require(`./handlers/${x}`)(bot));
    }
});

bot.setMaxListeners(0);

bot.login(process.env.token);

