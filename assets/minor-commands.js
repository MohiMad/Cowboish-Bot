const { MessageEmbed } = require("discord.js");
const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');
const Cooldown = require("../models/cooldown.js");
const { clues, frags, insp, ess1, ess2, ess3 } = require("./emojis.json");

module.exports = {
    /**
     * [Rewards function]
     * Is executed only once a week, gives rewards to top 5 players on Cowboish
     * 
     * @param {Class} bot The Client
     * @returns {null}
     */
    rewards: async (bot) => {

        await logicPath.find({})
            .sort({ logic: -1 }).limit(5).exec(async (err, res) => {
                if (err) console.log(err);

                //the ID of Rewards channel on Cowboish server
                let reChannel = bot.channels.cache.get('676502025499836416');
                if (!reChannel) return console.log("LMAO WHERE IS MY REWARDS CHANNEL MOHEEEE?");

                for (i = 0; i < 5; i++) {
                    await bot.users.fetch(res[i].UserID).catch(e => console.log(e));
                }

                const n1 = bot.users.cache.get(res[0].UserID) || "Not found";
                const n2 = bot.users.cache.get(res[1].UserID) || "Not found";
                const n3 = bot.users.cache.get(res[2].UserID) || "Not found";
                const n4 = bot.users.cache.get(res[3].UserID) || "Not found";
                const n5 = bot.users.cache.get(res[4].UserID) || "Not found";


                res[0].Echoes = res[0].Echoes + 50;
                res[0].Ess1 = res[0].Ess1 + 3;
                res[0].Ess2 = res[0].Ess2 + 3;
                res[0].Ess3 = res[0].Ess3 + 3;
                res[0].Clues = res[0].Clues + 500;
                res[0].save().catch(err => console.log(err));
                //Top 1 rewards!

                res[1].Echoes = res[1].Echoes + 40;
                res[1].Ess1 = res[1].Ess1 + 2;
                res[1].Ess2 = res[1].Ess2 + 2;
                res[1].Ess3 = res[1].Ess3 + 2;
                res[1].Clues = res[1].Clues + 400;
                res[1].save().catch(err => console.log(err));
                //Top 2 rewards

                res[2].Echoes = res[2].Echoes + 30;
                res[2].Ess1 = res[2].Ess1 + 2;
                res[2].Ess2 = res[2].Ess2 + 2;
                res[2].Ess3 = res[2].Ess3 + 2;
                res[2].Clues = res[2].Clues + 300;
                res[2].save().catch(err => console.log(err));
                //Top 3 rewards!

                res[3].Echoes = res[3].Echoes + 20;
                res[3].Ess1 = res[3].Ess1 + 1;
                res[3].Ess2 = res[3].Ess2 + 1;
                res[3].Ess3 = res[3].Ess3 + 1;
                res[3].Clues = res[3].Clues + 200;
                res[3].save().catch(err => console.log(err));
                //Top 4 rewards

                res[4].Echoes = res[4].Echoes + 20;
                res[4].Ess1 = res[4].Ess1 + 1;
                res[4].Ess2 = res[4].Ess2 + 1;
                res[4].Ess3 = res[4].Ess3 + 1;
                res[4].Clues = res[4].Clues + 200;
                res[4].save().catch(err => console.log(err));

                let reeEmbed = new MessageEmbed()
                    .setTitle("Yaaaay a new week has began!")
                    .setColor("0xf0cf07")
                    .setDescription(stripIndents`
        《<:uno:676017997420167187>》 **${n1.tag}** 
        **Logicpath Points**: **${res[0].logic}**<:LP:675763680863977513>
        **Rewards**: **50**<:echoes:655840505225281536>, **3**<:ess1:655840713904488469>, **3**<:ess2:655840643847028751>, **3**<:ess3:655840571616919586> and **500**<:clue:655384523735040000>

        - - - - -
        〘<:dos:676019548016738304>〙 **${n2.tag}**
        **Logicpath Points**: **${res[1].logic}**<:LP:675763680863977513>
        **Rewards**: **40**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **400**<:clue:655384523735040000>

        - - - - -
        〘<:tres:676019592757248001>〙 **${n3.tag}**
        **Logicpath Points** **${res[2].logic}**<:LP:675763680863977513>
        **Rewards**: **30**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **300**<:clue:655384523735040000>

        - - - - -
        〘4〙 **${n4.tag}**
        **Logicpath Points**: **${res[3].logic}**<:LP:675763680863977513>
        **Rewards**: **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>

        - - - - -
        〘5〙 **${n5.tag}**
        **Logicpath Points**: **${res[4].logic}**<:LP:675763680863977513>
        **Rewards**: **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
            
            `)
                    .setThumbnail("https://i.imgur.com/VGo6rp3.png")
                    .setTimestamp()

                await reChannel.send(reeEmbed);
            });
            //I know it's messy shhhhh

    },
    /**
     * [Announce it function]
     * Fires a notification message in any channel a message was sent. 
     * The bot won't fire this event repeatedly in the channel.
     * It fires once and once only for an hour or so.
     * 
     * @param {Object} message The message object from a user
     * @param {String} event Which event holds this notification? 
     */
    announcIt: async (message, event) => {
		let randomNumber = Math.floor(Math.random() * 10),
			oneTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		const checkForChannel = Cooldown.findOne({ userID: message.channel.id, command: event });

		if (checkForChannel) return;

		const cooldownChannel = new Cooldown({
			command: event,
			userID: message.channel.id,
			timeRemaining: Date.now() + 1800000,
			dateNow: Date.now()
		});

		await cooldownChannel.save().catch(err => console.log(err));

		if (oneTo10[randomNumber] > 3 && oneTo10[randomNumber] < 8) {
			await newLP(message);
			const LP = await logicPath.findOne({ UserID: message.author.id });
			if (LP.Opened.includes("1yrAnniversary")) return;
			if (LP.Opened.includes("hasFired")) return;
	
			LP.Opened = [...LP.Opened, "hasFired"];
			LP.save().catch(e => console.log(e));
	
			message.channel.send("**Celebrating Cowboish's one year anniversary :D**\nType __`Happy Birthday Cowboish`__ in the chat to trigger the anniversary event :3", new MessageAttachment("https://i.imgur.com/LZlynfT.png"))	
		}
	},
    /** [Birthday function]
     * Fires a notification message in the chat regearding a character's/someone's birthday
     * 
     * @param {Object} message the message object from a user message in a channel
     * @param {String} prefix The bot's prefix
     */
    birthday: async (message, prefix) => {
        await newLP(message);
        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (LP.Opened.includes("seerBirthday")) return;

        const embed = new MessageEmbed()
            .setTitle("Yeeeee Happy Birthday Seeeeeeeeeer 🥳🎉🎉")
            .setAuthor("October 31", message.author.displayAvatarURL())
            .setColor("0xECE615")
            .setDescription("On October 31, Eli Clark joined the manor :D\nAs a late clebration, we give you **SeerBirthday** *frame* and *portrait*\n\nTo equip the seer portrait, do `" + prefix + "equip portrait happy birthday seer`\nTo equip the Seer frame, do `" + prefix + "equip frame seer`")
            .setImage("https://i.imgur.com/9dVcah8.png")
            .setThumbnail("https://i.imgur.com/jUhhMje.png");

        LP.Opened = [...LP.Opened, "seerBirthday"];
        LP.save().catch(e => console.log(e));

        return message.channel.send(embed);
    },
    /** [Giveaway function]
     * This function fires daily to announce a daily giveaway in the cowboish server
     * 
     * @param {Class} bot The bot. Cowboish basically. 
     */
    giveaway: async (bot) => {

        let mainGuild = bot.guilds.cache.get("636241255994490900");
        await mainGuild.members.fetch().catch(e => console.log("Giveaway fetching error:", e));

        let giveawayRole = mainGuild.roles.cache.get("721657451916820543");

        let randomUser = giveawayRole.members.filter(async (m) => {
            let usersLP = await logicPath.findOne({ UserID: m.user.id });
            m.user.bot === false && usersLP
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

    },
    /**
     * [Reset Matches Function]
     * Resets everyone's three matches field in their logicpath. Fires with the giveaway function.
     */
    resetMatches: async () => {
        await logicPath.updateMany({}, {
            $set:
            {
                ThreeMatches: 3
            }
        }).catch(e => console.log(e));
    }

}