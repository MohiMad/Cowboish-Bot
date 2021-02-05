const { MessageEmbed } = require("discord.js");
const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');
const Cooldown = require("../models/cooldown.js");
const humanizeDuration = require("humanize-duration");
const { clues, frags, insp, ess1, ess2, ess3, twitter, topGG, cowboishEmoji } = require("./emojis.json");
const Guild = require("../models/guild.js");

const permissions = require("./permissions.js");

module.exports = {
	randomizeAnIndex: (array) => {
		return Math.floor(Math.random() * array.length);
	},
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

	},

	getMember: function (message, toFind = '') {
		toFind = toFind.toLowerCase().replace("<@", "").replace(">", "");

		let target = message.guild.members.cache.get(toFind);

		if (!target && message.mentions.members)
			target = message.mentions.members.first();

		if (!target && toFind) {
			target = message.guild.members.cache.find(member => {
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
			const toFetch = await message.guild.members.fetch(message.mentions.users.first());
			return toFetch;
		}
		else {
			if (!toFind) return message.member;
			toFind = toFind.toLowerCase();
			member = message.mentions.members.first() || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === toFind) || message.guild.members.cache.get(toFind);
		}
		return member;
	},

	formatDate: function (date) {
		return new Intl.DateTimeFormat('en-US').format(date);
	},

	ErrorMsg: (bot, message, error) => {

		let errMsgs = [
			"<:nae:671454247505625110> Oof dats an error >:/",
			"<:nae:671454247505625110> Oops, something went wrong...",
			"<:nae:671454247505625110> ERROR",
			"<:nae:671454247505625110> E R R O R"
		]

		let errMsg = Math.floor(Math.random() * errMsgs.length);

		const errEmbed = new MessageEmbed()
			.setTitle(errMsgs[errMsg])
			.setColor("RED")
			.setDescription(error)
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setFooter("Cowboish bot", "https://i.imgur.com/ktOrGA4.png");
		message.channel.send(errEmbed);
	},

	findRole: (message, toFind) => {
		if (toFind === null) return;

		toFind = toFind.toLowerCase().replace("<@&", "").replace(">", "");
		const role = message.guild.roles.cache.find((x) => x.name.toLowerCase() === toFind) || message.guild.roles.cache.find((x) => x.name.toLowerCase().startsWith(toFind)) || message.guild.roles.cache.get(toFind);
		return role;
	},

	findChannel: (message, toFind) => {
		if (!toFind) return;
		toFind = toFind.toLowerCase().replace("<#", "").replace(">", "");
		const channel = message.mentions.channels.first() || message.guild.channels.cache.find((x) => x.name.toLowerCase().startsWith(toFind)) || message.guild.channels.cache.find((x) => x.name.toLowerCase() === (toFind)) || message.guild.channels.cache.get(toFind);
		return channel;
	},
	newLP: async (message) => {
		let LP = await logicPath.findOne({ UserID: message.author.id });

		if (LP) {
			if (!LP.guildsID.includes(message.guild.id)) {
				LP.guildsID = [...LP.guildsID, message.guild.id];
				return await LP.save().catch(e => console.log(e));
			}
			else return;
		}

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
			Percy: false,
			Portrait: "0",
			ThreeMatches: 3,
			Batter: false,
			Inventory: ["pass", "switch", "excitement"]

		});
		await newLP.save().catch(err => console.log(err));

	},
	findCooldownByCommand: async (command) => {
		const cooldownChecker = Cooldown.findOne({ command: command });

		return cooldownChecker;
	},
	findCooldown: async (message, command) => {
		const cooldownChecker = Cooldown.findOne({ userID: message.author.id, command: command });

		return cooldownChecker;
	},
	addCooldown: async (message, cooldownTime, command) => {
		const cooldownReducerDoc = await Cooldown.findOne({ userID: message.author.id, command: `10Cooldown[${message.author.id}]` }) ||
			await Cooldown.findOne({ userID: message.author.id, command: `30Cooldown[${message.author.id}]` }) ||
			await Cooldown.findOne({ userID: message.author.id, command: `50Cooldown[${message.author.id}]` });

		let percentage = 1;
		if (message.guild.id === "636241255994490900") percentage += - 0.2;
		if (cooldownReducerDoc) percentage += - cooldownReducerDoc.command.slice(0, 2) / 100;

		const newCooldown = new Cooldown({
			command: command,
			userID: message.author.id,
			timeRemaining: Date.now() + (cooldownTime * percentage),
			dateNow: Date.now()
		});

		await newCooldown.save().catch(err => console.log(err));

	},
	coolEmbed: async (message, Title, Description, remainingTime, units) => {

		const timeLeft = new Date(remainingTime);

		const Remaining = humanizeDuration(timeLeft - Date.now(), { units: units, round: true });

		if (message.deletable) message.delete({ reason: "Command executed during cooldown..." });

		let des = Description.replace("REMAINING", Remaining);

		let randomNumber = Math.round(Math.random() * 3);

		if (randomNumber === 0) {
			des += `\n\n**Enjoying Cowboish? ${cowboishEmoji}**\nWrite a review about your experience with using Cowboish on our [Top.gg](https://top.gg/bot/632291800585076761) page!`
		}
		else if (randomNumber === 1) {
			if (message.guild.id !== "636241255994490900") {
				des = des + `\n\n**You're missing our daily giveaways in [Cowboish Server](https://discord.com/invite/YWcSukS)**\nGiveaway rewards may be ${clues}, ${frags}, ${insp}, ${ess1}, ${ess2}, ${ess3}, and more!`
			}
		} else if (randomNumber === 2) {
			des = des + `\n\n**Cowboish Fact:**\nWe host daily logicpath giveaways in [Cowboish Server](https://discord.com/invite/YWcSukS) ${cowboishEmoji}`
		} else if (randomNumber === 3) {
			if (message.guild.id !== "636241255994490900") {
				des += `\n\n**Tired of Waiting?**\nUse Cowboish in **[Cowboish Server](https://discord.com/invite/YWcSukS)** and you'll get **20%** shorter cooldowns!`
			}
		}

		const coolEmbed = new MessageEmbed()
			.setTitle(Title)
			.setColor("FFF800")
			.setDescription(des)
			.setThumbnail("https://i.imgur.com/twI8Vnp.png")
			.setAuthor(message.author.username, message.author.displayAvatarURL())
			.setFooter("Cowboish bot", "https://i.imgur.com/ktOrGA4.png");

		let m = await message.channel.send(coolEmbed);

		setTimeout(() => {
			if (!m || m == null || m == undefined || !m.deletable) return;
			else m.delete();
		}, 30000);


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
			News: {
				Channel: null,
				toPingRole: null,
			},
			PatchChannel: null
		});
		await newGuild.save().catch(err => console.log(err));

	},
	/**
		 * [awaitMessage function usage]
		 * @message {Discord.Message} message [the message object obtained from the message event]
		 * @filter {arrowFunction} filter [The filter that will be passed into awaitMessages function.]
		 * @max {number} max [The maximum number of messages you want the bot to await for before running 'code']
		 * @time {number} time [Amount of time in milliseconds until awaitMessages runs out]
		 * @toSend {string} toSend [A string that includes what you want to send to the channel before awaiting messages]
		 * @code {string} code [The code you want to run once a message that refers to the filter has been sent. Will be evaluated]
		 * @returnText {string} returnText [A string you want to return to the channel if the time runs out]
		 * 
	**/
	async awaitMessage(message, filter, max, time, toSend, code, returnText) {

		message.channel.send(toSend);

		await message.channel.awaitMessages(filter, {
			max: max,
			time: time,
			errors: ['time'],
		}).then(async (collected) => {
			eval(code);
			return true;
		}).catch((e) => {
			if (!e.message) return message.channel.send(returnText), true;

			console.log(e);
			return true;
		});
	},
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
			/*await newLP(message);
			const LP = await logicPath.findOne({ UserID: message.author.id });
			if (LP.Opened.includes("1yrAnniversary")) return;
			if (LP.Opened.includes("hasFired")) return;
	
			LP.Opened = [...LP.Opened, "hasFired"];
			LP.save().catch(e => console.log(e));
	
			message.channel.send("**Celebrating Cowboish's one year anniversary :D**\nType __`Happy Birthday Cowboish`__ in the chat to trigger the anniversary event :3", new MessageAttachment("https://i.imgur.com/LZlynfT.png"))
			*/
		}
	},
	permsCheck(message, bot, highestRole, requiredPerms, permissionsInGuild, permissionsInChannel) {

		const missingPermissionsEmbed = new MessageEmbed()
			.setAuthor("🟥 Missing permissions!", message.author.displayAvatarURL, "https://mohimad.github.io/cowboishbot/")
			.setColor("0xE75A5A")
			.setTimestamp()
			.setFooter(bot.user.tag, bot.user.displayAvatarURL);

		for (const perm of requiredPerms) {

			if (!permissionsInChannel.includes(perm)) {
				if (perm === "SEND_MESSAGES") return true;

				if (perm === "ATTACH_FILES" || perm === "EMBED_LINKS") return message.channel.send(`I'm missing the permission **${permissions[perm]}** in this __**Channel**__\nPlease make sure none of the roles I have doesn't doesn't have the permission **${permissions[perm]}** disabled in ${message.channel}\n\nIf one of my roles does, I won't able to execute this command properly...	`), true;

				missingPermissionsEmbed.setDescription(`I'm missing the permission **${permissions[perm]}** in this __**Channel**__\nPlease change the permissions for the role **${highestRole.toString()}** in ${message.channel} and set **${permissions[perm]}** to true... Otherwise I won't be able to execute this command in a proper way`)

				return message.channel.send(missingPermissionsEmbed), true;
			}

			if (!permissionsInGuild.includes(perm)) {
				if (perm === "SEND_MESSAGES") return true;

				if (perm === "ATTACH_FILES" || perm === "EMBED_LINKS") return message.channel.send(`I'm missing the permission **${permissions[perm]}** in this __**Server**__\nPlease change the permissions for the role **${highestRole.name}** and set **${permissions[perm]}** to true... Otherwise I won't be able to execute this command properly`), true;

				missingPermissionsEmbed.setDescription(`I'm missing the permission **${permissions[perm]}** in this __**Server**__\nPlease change the permissions for the role **${highestRole.toString()}** and set **${permissions[perm]}** to true... Otherwise I won't be able to execute this command in a proper way`)

				return message.channel.send(missingPermissionsEmbed), true;
			}


		}
	},
	spliceArray(DocArray, toSplice) {
		const SplicedArray = DocArray;
		SplicedArray.splice(SplicedArray.indexOf(toSplice), 1);

		return SplicedArray;
	}


};
