const { RichEmbed } = require("discord.js");
const logicPath = require("./models/logicpath.js");
const { stripIndents } = require('common-tags');
const Cooldown = require("./models/cooldown.js");
const humanizeDuration = require("humanize-duration");
const { clues, frags, insp, ess1, ess2, ess3 } = require("./emojis.json");
const Guild = require("./models/guild.js");

module.exports = {

	rewards: async (bot) => {

		await logicPath.find({})
			.sort({ logic: -1 }).limit(5).exec(async (err, res) => {
				if (err) console.log(err);

				//the ID of Rewards channel on Cowboish server
				let reChannel = bot.channels.get('676502025499836416');

				let n1 = bot.users.get(res[0].UserID) || "Not found";
				let n2 = bot.users.get(res[1].UserID) || "Not found";
				let n3 = bot.users.get(res[2].UserID) || "Not found";
				let n4 = bot.users.get(res[3].UserID) || "Not found";
				let n5 = bot.users.get(res[4].UserID) || "Not found";

				let reeEmbed = new RichEmbed()
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
			〘5〙 **${n5.username}**
			**Logicpath Points**: **${res[4].logic}**<:LP:675763680863977513>
			**Rewards**: **20**<:echoes:655840505225281536>, **1**<:ess1:655840713904488469>, **1**<:ess2:655840643847028751>, **1**<:ess3:655840571616919586> and **200**<:clue:655384523735040000>
				
				`)
					.setThumbnail("https://i.imgur.com/VGo6rp3.png")
					.setTimestamp()

				reChannel.send(reeEmbed);

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

			});

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
			.setFooter("Cowboish bot", "https://i.imgur.com/ktOrGA4.png");
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
	newLP: async (message) => {
		let LP = await logicPath.findOne({ UserID: message.author.id });

		if (LP) return;

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
			bio: "0",
			frames: {
				frame1: false,
				frame2: false,
				frame3: false,
				frame4: false,
				frame5: false,
				frame6: false,
				equipped: "0"
			},
			Entomologist: false,
			Painter: false,
			Sculptor: false,
			Portrait: "0",
			ThreeMatches: 3

		});
		await newLP.save().catch(err => console.log(err));

	},
	addCooldown: async (message, cooldownTime, command) => {

		const newCooldown = new Cooldown({
			command: command,
			userID: message.author.id,
			timeRemaining: Date.now() + cooldownTime,
			dateNow: Date.now()
		});

		await newCooldown.save().catch(err => console.log(err));


	},
	findCooldown: async (message, command) => {
		const cooldownChecker = Cooldown.findOne({ userID: message.author.id, command: command });

		return cooldownChecker;
	},
	coolEmbed: (message, Title, Description, remainingTime, units) => {

		const timeLeft = new Date(remainingTime);

		const Remaining = humanizeDuration(timeLeft - Date.now(), { units: units, round: true });

		if (message.deletable) message.delete();

		let des = Description.replace("REMAINING", Remaining);

		if (message.guild.id !== "636241255994490900") {
			des = des + `\n\n**You're missing our daily giveaways on [Cowboish Server](https://discord.com/invite/YWcSukS)**\nGiveaway rewards may be (${clues}, ${frags}, ${insp}, ${ess1}, ${ess2} and ${ess3})`
		}

		const coolEmbed = new RichEmbed()
			.setTitle(Title)
			.setColor("0xFF0000")
			.setDescription(des)
			.setThumbnail("https://i.imgur.com/q6GYP17.png")
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://i.imgur.com/ktOrGA4.png");
		message.channel.send(coolEmbed).then(m => m.delete(30000));

	},
	checkForGuildDataExistance: async (message) => {
		const guild = await Guild.findOne({ guildID: message.guild.id });

		if (guild) return;

		const newGuild = new Guild({

			guildID: message.guild.id,

			leave: {
				enabled: false,

				channel: null,

				message: null,
			},
			welcome: {

				enabled: false,

				channel: null,

				message: null,
			},

			prefix: ">",

			autoroles: [],

		});
		await newGuild.save().catch(err => console.log(err));

	}


};
