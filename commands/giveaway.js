const logicPath = require("../models/logicpath.js");

const { MessageEmbed } = require('discord.js');
const Cooldown = require("../models/cooldown.js");
const { clues, insp, ess1, ess2, ess3, frags } = require("../emojis.json");

module.exports = {
    name: 'giveaway',
    description: "Daily giveaways for cowboish members :3",
    isDisabled: true,
    admins: ["632291800585076761"],
    execute: async (bot) => {

        let mainGuild = bot.guilds.cache.get("636241255994490900");

        let giveawayRole = mainGuild.roles.cache.get("721657451916820543");

        await logicPath.updateMany({}, {
            $set:
            {
                ThreeMatches: 3
            }
        }).catch(e => console.log(e));

        let randomUser = giveawayRole.members.filter(async (m) => {

            let usersLP = await logicPath.findOne({ UserID: m.user.id });

            m.user.bot === false && usersLP != undefined
        }).random();

        let rewards = [
            `1000 ${clues} and 25 ${ess3}`, //0
            `500 ${clues}, 30 ${ess2}`, //1
            `200 ${insp}, 5000 ${frags}, and 500 ${clues}`, //2
            `3000 ${frags}, 15 ${ess1}, and 96 ${insp}`, //3
            `10 ${ess1}, 5 ${ess2}, and 1000 ${clues}`, //4
            `50 ${ess1}`, //5

        ];

        let randomRewardNumber = Math.floor(Math.random() * rewards.length);

        try {

            let LP = await logicPath.findOne({ UserID: randomUser.user.id });

            if (!LP) return;

            switch (randomRewardNumber) {
                case 0:
                    LP.Clues = LP.Clues + 1000;
                    LP.Ess1 = LP.Ess1 + 25;
                    break;

                case 1:
                    LP.Clues = LP.Clues + 500;
                    LP.Ess2 = LP.Ess2 + 30;
                    break;

                case 2:
                    LP.Inspirations = LP.Inspirations + 200;
                    LP.frags = LP.frags + 5000;
                    LP.Clues = LP.Clues + 500;
                    break;

                case 3:
                    LP.frags = LP.frags + 300;
                    LP.Ess1 = LP.Ess1 + 15;
                    LP.Inspirations = LP.Inspirations + 96;
                    break;

                case 4:
                    LP.Ess2 = LP.Ess2 + 5;
                    LP.Ess1 = LP.Ess1 + 10;
                    LP.Clues = LP.Clues + 1000;
                    break;

                case 5:
                    LP.Ess1 = LP.Ess1 + 50;
                    
                    break;

            }

            LP.save().catch(e => console.log(e));


            let giveawayEmbed = new MessageEmbed()
                .setAuthor(`${randomUser.user.tag} won today's giveaway`, randomUser.user.displayAvatarURL())
                .setThumbnail("https://i.imgur.com/iplaxWs.png")
                .setDescription(`Congrats ${randomUser.user.username}! You won today's giveaway and got:\n` + rewards[randomRewardNumber])
                .setColor("0xFFF030")
                .setTimestamp()
                .setFooter(`Oooohoo lucky ${randomUser.user.username} >:3`, bot.user.displayAvatarURL());

            let giveawayChannel = bot.channels.cache.get('676502025499836416');

            if (!giveawayChannel) return;

            giveawayChannel.send(`Congrats ${randomUser} on winning today's giveaway!`, giveawayEmbed);



            const giveawaySpamStopper = new Cooldown({
                command: "giveaway",
                userID: bot.user.id,
                timeRemaining: Date.now() + 300000,
                dateNow: Date.now()
            });

            await giveawaySpamStopper.save().catch(err => console.log(err));

        } catch (err) {
            console.log(err);
        }

    }

}