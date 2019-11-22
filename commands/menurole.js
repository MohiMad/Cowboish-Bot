const Discord = require('discord.js');
const { Client, RichEmbed, Attachment, Collection, Discord } = require('discord.js');
module.exports = {
    name: 'menurole',
    description: "menu self assign roles",
    execute: async (message, args) => {


        const survembed = new RichEmbed()
            .setTitle('**Survivors Role Menu!**')
            .setDiscription('React with the following emojis to get a role of your main :)')
            .addField('Cowboy role', '🤠', true)
            .addField('Mechanic role', '🤖', true)
            .addField('1st officer role', '⌚', true)
            .addField('Theif role', '🔦', true)
            .addField('Doctor role', '💉', true)
            .addField('Lucky guy role', '🍀', true)
            .addField('Gardener role', '⚒', true)
            .addField('Mercenary role', '💪', true)
            .addField('Mindseye role', '👁‍🗨', true)
            .addField('Pristess role', '🌀', true)
            .addField('Perfumer role', '🦋', true)
            .addField('Magician role', '🕴', true)
            .addField('Explorer role', '📕', true)
            .addField('Coordinator role', '🔫', true)
            .addField('Female dancer role', '💃', true)
            .addField('Embalmer role', '⚰', true)
            .addField('Forward role', '🏉', true)
            .addField('Seer role', '👁', true)
            .addField('Prospector role', '🍩', true);

        if (!args[1])
            message.reply('Please choose a rolemenu. Available rolemenus rn ``survivor``');

        if (args[1] === 'survivor')
        const filter = m => m.author.id === message.author.id;
        message.channel.reply('Are you sure you want to create this rolemenu? it will create a total of 20 survivor roles. please type ``yes`` to activate or ``no`` to cancel').then(r => r.delete(10000));
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then(collected => {

            if (collected.first().content === 'yes') {
                message.channel.sendEmbed(survembed).then(sentMessage => {
                    sentMessage.react('🤠')
                        .then(() => sentMessage.react('🤖'))
                        .then(() => sentMessage.react('⌚'))
                        .then(() => sentMessage.react('🔦'))
                        .then(() => sentMessage.react('💉'))
                        .then(() => sentMessage.react('🍀'))
                        .then(() => sentMessage.react('⚒ '))
                        .then(() => sentMessage.react('💪'))
                        .then(() => sentMessage.react('👁‍🗨'))
                        .then(() => sentMessage.react('🌀'))
                        .then(() => sentMessage.react('🦋'))
                        .then(() => sentMessage.react('🕴'))
                        .then(() => sentMessage.react('📕'))
                        .then(() => sentMessage.react('🔫'))
                        .then(() => sentMessage.react('💃'))
                        .then(() => sentMessage.react('⚰'))
                        .then(() => sentMessage.react('🏉'))
                        .then(() => sentMessage.react('👁'))
                        .then(() => sentMessage.react('🍩'))
                });
            }

            if (collected.first().content === 'no') {
                message.reply('Canceled');
            }
        })

        let cowboy = message.guild.roles.find(cowboy => cowboy.name === "Cowboy");
            if (!cowboy) {
                cowboy = await message.guild.createRole({
                    name: "Cowboy",
                    color: "#000000",
                    permissions: []
                })
            }

            const filte = (reaction, user) => {
                return ['🤠'].includes(reaction.emoji.name) && user.id === message.author.id;
            };

            message.awaitReactions(filte, { max: 5, time: 60000, errors: ['time'] })

                .then(collected => {

                    const reaction = collected.first();

                    if (reaction.emoji.name === '🤠') {
                        message.author('You got the **Cowboy** role!');
                        message.member.addRole(cowboy.id);
                    }
                })
            




        }}