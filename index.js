const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./bot.js', { 
    token: process.env.token 
});
let sh = 0;

manager.on('shardCreate', (shard) => {
    sh = shard.id;
    console.log(`Launched shard ${shard.id + 1}/${manager.totalShards}`);
});

manager.spawn();
module.exports.shardNum = sh;
module.exports.shardManager = manager;