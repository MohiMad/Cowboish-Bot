const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { 
    token: process.env.token 
});

manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id + 1}/${shard.totalShards}`);
});

manager.spawn();