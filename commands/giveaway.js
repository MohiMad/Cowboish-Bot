const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require('discord.js');

const { clues, insp, ess1, ess2, ess3, frags } = require("../emojis.json");

module.exports = {
    name: 'giveaway',
    description: "Daily giveaways for cowboish members :3",
    execute: async (bot) => {

        let mainGuild = bot.guilds.get("636241255994490900");

        let giveawayRole = mainGuild.roles.get("721657451916820543");

        let randomUser = giveawayRole.members.random();

        let rewards = [
            `1000 ${clues} and 5 ${ess1}`, //0
            `500 ${clues}, 3 ${ess1}, and 3 ${ess3}`, //1
            `100 ${insp}, 1000 ${frags}, and 200 ${clues}`, //2
            `500 ${frags}, 5 ${ess3}, and 96 ${insp}`, //3
            `7 ${ess1}, 5 ${ess3}, and 700 ${clues}`, //4

        ];

        let randomRewardNumber = Math.floor(Math.random() * rewards.length);

        let LP = await logicPath.findOne({ UserID: randomUser.user.id });

        if (!LP) return;

        switch (randomRewardNumber) {
            case 0:
                LP.Clues = LP.Clues + 1000;
                LP.Ess1 = LP.Ess1 + 5;
                break;

            case 1:
                LP.Clues = LP.Clues + 500;
                LP.Ess1 = LP.Ess1 + 3;
                LP.Ess3 = LP.Ess3 + 3;
                break;

            case 2:
                LP.Inspirations = LP.Inspirations + 100;
                LP.frags = LP.frags + 1000;
                LP.Clues = LP.Clues + 200;
                break;

            case 3:
                LP.frags = LP.frags + 500;
                LP.Ess3 = LP.Ess3 + 5;
                LP.Inspirations = LP.Inspirations + 96;
                break;

            case 4:
                LP.Ess3 = LP.Ess3 + 5;
                LP.Ess1 = LP.Ess1 + 7;
                LP.Clues = LP.Clues + 700;
                break;

        }

        LP.save().catch(e => console.log(e));


        let giveawayEmbed = new RichEmbed()
            .setAuthor(`${randomUser.user.tag} won today's giveaway`, randomUser.user.displayAvatarURL)
            .setThumbnail("https://cdn.discordapp.com/emojis/699667884833636352.png?v=1")
            .setDescription(`Congrats ${randomUser.user.username}! You won today's giveaway and got:\n` + rewards[randomRewardNumber])
            .setColor("0xFFF030")
            .setTimestamp()
            .setFooter(`Oooohoo lucky ${randomUser.user.username} >:3`, bot.user.displayAvatarURL);

        let giveawayChannel = bot.channels.get('676502025499836416');

        if (!giveawayChannel) return;

        giveawayChannel.send(`Congrats ${randomUser} on winning today's giveaway!`, giveawayEmbed);

    }

}