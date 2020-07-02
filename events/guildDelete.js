module.exports = (bot, guild) => {

    const logs = bot.channels.get('651476936379596830');

    if (!logs) return;

    if (guild.name === undefined) return;

    let logsMessages = [
        `I have been removed from: **${guild.name}** :'C`,
        `Nuuu I've been kicked from **${guild.name}** >:C`,
        `Someone kicked outta **${guild.name}** :'(`,
        `They kicked me out of **${guild.name}** server :'C\nI swear I wasn't trolling >:v`
    ];
    let random_number = Math.floor(Math.random() * logsMessages.length);

    logs.send(logsMessages[random_number]);


};