const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { 
    totalShards: 2,
    token: process.env.token 
});

manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id}`)
});

manager.spawn();