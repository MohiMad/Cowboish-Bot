module.exports = (bot, guild) => {

    const logs = bot.channels.get('651476936379596830');

        if (!logs) return;

        else logs.send(`I have been removed from: **${guild.name}** :'C`);
        

};