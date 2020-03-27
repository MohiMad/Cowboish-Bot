const { RichEmbed } = require("discord.js");
const logicPath = require("./models/logicpath.js");
const { stripIndents } = require('common-tags');

module.exports = {

	rewards: (bot) => {

		logicPath.find({})
			.sort([
				["logic", "descending"]
			]).exec((err, res) => {
				if (err) console.log(err);

				//the ID of Rewards channel on Cowboish server
				let reChannel = bot.channels.get('676502025499836416');

				let n1 = bot.users.get(res[0].UserID) || "Not found";
				let n2 = bot.users.get(res[1].UserID) || "Not found";
				let n3 = bot.users.get(res[2].UserID) || "Not found";
				let n4 = bot.users.get(res[3].UserID) || "Not found";
				let n5 = bot.users.get(res[4].UserID) || "Not found";

				reChannel.send(stripIndents`
				**Yaaaay it's the end of the week!**
				《<:uno:676017997420167187>》 **${n1.username}** gets **50**<:echoes:655840505225281536>, **3**<:ess1:655840713904488469>, **3**<:ess2:655840643847028751>, **3**<:ess3:655840571616919586> and **500**<:clue:655384523735040000>
					With **${res[0].logic}**<:LP:675763680863977513> logicpath steps!

				〘<:dos:676019548016738304>〙 **${n2.username}** gets **40**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **400**<:clue:655384523735040000>
					With **${res[1].logic}**<:LP:675763680863977513> logicpath steps!

				〘<:tres:676019592757248001>〙 **${n3.username}** gets **30**<:echoes:655840505225281536>, **2**<:ess1:655840713904488469>, **2**<:ess2:655840643847028751>, **2**<:ess3:655840571616919586> and **300**<:clue:655384523735040000>
					With **${res[2].logic}**<:LP:675763680863977513> logicpath steps!

				〘4〙 **${n4.username}** gets **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
					With **${res[3].logic}**<:LP:675763680863977513> logicpath steps!

				〘5〙 **${n5.username}** gets **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
					With **${res[4].logic}**<:LP:675763680863977513> logicpath steps!
				`);

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

			})

	},

	coolEmbed: (message, Title, Description) => {
		const coolEmbed = new RichEmbed()
			.setTitle(Title)
			.setColor("RED")
			.setDescription(Description)
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1");
		message.channel.send(coolEmbed).then(m => m.delete(30000));

	},

	guildAdd: async (message) => {

		const LP_User = await logicPath.findOne({ UserID: message.author.id });

		if (!LP_User) {
			return;
		}
		else if (!LP_User.guildsID.includes(message.guild.id)) {

			LP_User.guildsID = [...LP_User.guildsID, message.guild.id];

			LP_User.save().catch(err => console.log(err));
		}

	},

	getMember: function (message, toFind = '') {
		toFind = toFind.toLowerCase();

		let target = message.guild.members.get(toFind);

		if (!target && message.mentions.members)
			target = message.mentions.members.first();

		if (!target && toFind) {
			target = message.guild.members.find(member => {
				return member.displayName.toLowerCase().includes(toFind) ||
					member.user.tag.toLowerCase().includes(toFind)
			});
		}

		if (!target)
			target = message.member;

		return target;
	},
	findMember: async (message, toFind) => {
		let member;
		if (message.mentions && message.mentions.members.size == 0 && message.mentions.users.size > 0) {
			const toFetch = await message.guild.fetchMember(message.mentions.users.first());
			return toFetch;
		}
		else {
			if (!toFind) return message.member;
			toFind = toFind.toLowerCase();
			member = message.mentions.members.first() || message.guild.members.find((x) => x.user.username.toLowerCase() === toFind) || message.guild.members.get(toFind);
		}
		return member;
	},

	formatDate: function (date) {
		return new Intl.DateTimeFormat('en-US').format(date)
	},

	ErrorMsg: (bot, message, error) => {

		let errMsgs = [
			"<:nae:671454247505625110> Oof dats an error >:/",
			"<:nae:671454247505625110> Oops, something went wrong...",
			"<:nae:671454247505625110> ERROR",
			"<:nae:671454247505625110> E R R O R"
		]

		let errMsg = Math.floor(Math.random() * errMsgs.length);

		const errEmbed = new RichEmbed()
			.setTitle(errMsgs[errMsg])
			.setColor("RED")
			.setDescription(error)
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/avatars/632291800585076761/d2199b698688927128515d64e327169a.png?size=256");
		message.channel.send(errEmbed);
	},

	findRole: (message, toFind) => {
		toFind = toFind.toLowerCase();
		const role = message.guild.roles.find((x) => x.name.toLowerCase() === toFind) || message.guild.roles.find((x) => x.name.toLowerCase().startsWith(toFind)) || message.guild.roles.get(toFind);
		return role;
	},

	findChannel: (message, toFind) => {
		toFind = toFind.toLowerCase();
		const channel = message.mentions.channels.first() || message.guild.channels.find((x) => x.name.toLowerCase().startsWith(toFind)) || message.guild.channels.find((x) => x.name.toLowerCase() === (toFind)) || message.guild.channels.get(toFind);
		return channel;
	},

	quiz: async (message, question, answer, Thumb, Difficulty, char) => {

		const filter = m => m.author.id === message.author.id;

		const LP = await logicPath.findOne({ UserID: message.author.id });

		const quizEmbed = new RichEmbed()
			.setTitle("Answer the question below to get a dice <:dice:655384578499936257>")
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setTimestamp()
			.setDescription(stripIndents`
			**Question about** : ${char}
			**Difficulty** : ${Difficulty}
			**Time** : 60 seconds
			**Reward** : 1 Dice <:dice:655384578499936257>` + "\n\n" + question)
			.setImage(Thumb)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1")
			.setColor("RANDOM");

		message.channel.send(quizEmbed).then(

			message.channel.awaitMessages(filter, { max: 1, time: 60000 }).then(collected => {

				if (answer.includes(collected.first().content.toLowerCase())) {
					let wins = [
						`**${message.author.username}** got the right answer and got a dice <:dice:655384578499936257>`,
						`Here is your dice <:dice:655384578499936257> **${message.author.username}**!`,
						`**${message.author.username}** answered correctly! Here, take this dice <:dice:655384578499936257>`
					];

					let win = Math.floor(Math.random() * wins.length);

					message.channel.send(wins[win]);

					LP.Dices = LP.Dices + 1;
					LP.save().catch(err => console.log(err));

				}
				else {
					message.channel.send("**" + message.author.username + "**, Wrooong! You lost the minigame!");
				}

			}).catch(collected => {
				message.channel.send("**" + message.author.username + "**, Time is over! You lost the minigame!");
			})
		)


	},
	newLP: (message) => {
		const newLP = new logicPath({
			UserID: message.author.id,
			guildsID: [message.guild.id],
			logic: 0,
			Dices: 15,
			Clues: 0,
			Ess1: 5,
			Ess2: 5,
			Ess3: 5,
			Inspirations: 0,
			frags: 0,
			S: 0,
			A: 0,
			B: 0,
			C: 0,
			D: 0,
			Echoes: 0,

			ID: 0,

			Survivors: {
				Cowboy: false,
				Mercenary: false,
				Coordinator: false,
				Priestess: false,
				Mechanic: false,
				Mindseye: false,
				Prefumer: false,
				Dancer: false,
				Seer: false,
				Embalmer: false,
				Acrobat: false,
				Officer: false,
				Barmaid: false,
				Magician: false,
				Explorer: false,
				Forward: false,
				Prospector: false,
				Enchantress: false,
				Wilding: false,
				Postman: false,
				NewSurv: false,
				AnotherSurv: false,
			},

			Hunters: {

				WuChang: false,
				AxeBoi: false,
				Lizard: false,
				Clown: false,
				GameKeeper: false,
				Ripper: false,
				SoulWeaver: false,
				Geisha: false,
				PhotoGrapher: false,
				MadEyes: false,
				Feaster: false,
				DreamWitch: false,
				BloodyQueen: false,
				Pingu: false,
				Sister: false,
				NewHunta: false,
				AnotherHunta: false

			},
			Opened: [],
			region: "0",
			bio: "0"

		})
		newLP.save().catch(err => console.log(err))
			.then(message.reply("It seems like you didn't have any idv account, a new one just got created for you!\nPlease try to run the command again :)"))

	}


};
