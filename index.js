const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { 
    totalShards: 'auto',
    token: process.env.token 
});

manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id}`)
});

manager.spawn();