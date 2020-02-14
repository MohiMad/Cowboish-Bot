const { RichEmbed } = require("discord.js");
const logicPath = require("./models/logicpath.js");
const { stripIndents } = require('common-tags');

module.exports = {

	coolEmbed: (message, Title, Description) => {
		const coolEmbed = new RichEmbed()
			.setTitle(Title)
			.setColor("RED")
			.setDescription(Description)
			.setAuthor(message.author.username, message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1");
		message.channel.send(coolEmbed).then(m => m.delete(30000));

	},

	guildAdd: async (message, LP) => {

	if(!LP.guildsID.includes(message.guild.id)){

	LP.guildsID = [...LP.guildsID, message.guild.id];

	LP.save().catch(err => console.log(err));
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
		const errEmbed = new RichEmbed()
			.setTitle("<:nae:671454247505625110> Oof dats an error >:/")
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
				let respondAuth = collected.first();

				if (answer.includes(collected.first().content.toLowerCase())) {
					message.channel.send(`**${message.author.username}** got the right answer and got a dice <:dice:655384578499936257>`);

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
			Opened: []

		})
		newLP.save().catch(err => console.log(err))
			.then(message.reply("It seems like you didn't have any idv account, a new one just got created for you!\nPlease try to run the command again :)"))

	}


};
