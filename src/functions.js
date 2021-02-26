const { MessageEmbed } = require("discord.js");
const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');
const Cooldown = require("../models/cooldown.js");
const humanizeDuration = require("humanize-duration");
const { clues, frags, insp, ess1, ess2, ess3, twitter, topGG } = require("./emojis.json");
const Guild = require("../models/guild.js");

const permissions = require("./permissions.js");

module.exports = {
	randomizeAnIndex: (array) => {
		return Math.floor(Math.random() * array.length);
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
			.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true}))
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
	/**
	 * [CoolEmbed function]
	 * Yes I know it says cool-embed but here, I mean cooldown embed.
	 * This function is used to tell a user that they're still on cooldown in a specific command.
	 * THe function is also used to advertise.
	 * @param {Object} message the message that fired the command. 
	 * @param {String} Title The title of the embed.
	 * @param {String} Description The description of the embed. Also allows "REMAINING" to get set as the remaining time.
	 * @param {Number} remainingTime The remaining time, is grabbed from the findCooldown() function, accessed by <findCooldown>.timeRemaining
	 * @param {Array} units An array that includes the units you want the "REMAINING" to get displayed in, ["s", "m"] for instance. 
	 */
	coolEmbed: async (message, Title, Description, remainingTime, units) => {

		const timeLeft = new Date(remainingTime);

		const Remaining = humanizeDuration(timeLeft - Date.now(), { units: units, round: true });

		if (message.deletable) message.delete({ reason: "Command executed during cooldown..." });

		let des = Description.replace("REMAINING", Remaining);

		let randomNumber = Math.round(Math.random() * 3);

		if (randomNumber === 0) {
			des += `\n\n**Enjoying Cowboish?**\nWrite a review about your experience with using Cowboish on our [Top.gg](https://top.gg/bot/632291800585076761) page!`
		}
		else if (randomNumber === 1) {
			if (message.guild.id !== "636241255994490900") {
				des = des + `\n\n**You're missing our daily giveaways in [Cowboish Server](https://discord.com/invite/YWcSukS)**\nGiveaway rewards may be ${clues}, ${frags}, ${insp}, ${ess1}, ${ess2}, ${ess3}, and more!`
			}
		} else if (randomNumber === 2) {
			des = des + `\n\n**Cowboish Fact:**\nWe host daily logicpath giveaways in [Cowboish Server](https://discord.com/invite/YWcSukS)`
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
	/**
	 * [checkForGuildDataExistance]
	 * A function that will check whether the guild's data exists in the database. If not, it will create one without interuppting the code.
	 * @param {Object} message the message parameter that is passed in 'message' event or even other guidMemberAdd events, 'member' in that case.
	 */
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
		 * Use this function to await a message from the author.
		 * @param {Object} message [the message object obtained from the message event]
		 * @param {Function} filter [The filter that will be passed into awaitMessages function.]
		 * @param {Number} max [The maximum number of messages you want the bot to await for before running 'code']
		 * @param {Number} time [Amount of time in milliseconds until awaitMessages runs out]
		 * @param {String} toSend [A string that includes what you want to send to the channel before awaiting messages]
		 * @param {String} code [The code you want to run once a message that refers to the filter has been sent. Will be evaluated]
		 * @param {String} returnText [A string you want to return to the channel if the time runs out]
		 * @returns {null}
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
