const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { 
    token: process.env.token 
});

manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id + 1}/${manager.totalShards}`);
});

manager.spawn();
module.exports.shardManager = manager;