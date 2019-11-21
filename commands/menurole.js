const Discord = require('discord.js');
module.exports = {
    name: 'menurole',
    description: "menu self assign roles",
execute : async (message, args) => {
    message.channel.send('React with the following emojis to get the role :cowboy: => COWBOY role');

    let cowboy = message.guild.roles.find(cowboy => cowboy.name === "Cowboy");

        message.react('🤠');

        if(!cowboy){
        cowboy = await message.guild.createRole({
        name: "Cowboy",
        color: "#000000",
        permissions:[]})     }        
    
        const filter = (reaction, user) => {
        return ['🤠'].includes(reaction.emoji.name) && user.id === message.author.id;
};                
    
    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })

    .then(collected => {

    const reaction = collected.first();

    if (reaction.emoji.name === '🤠') {

    message.reply('You got the cowboy role!');

    message.member.addRole(cowboy.id);
}
})
}}