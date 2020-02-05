const { RichEmbed } = require('discord.js');
const logicPath = require("./models/logicpath.js");

module.exports = {
    getMember: function(message, toFind = '') {
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
		if(message.mentions && message.mentions.members.size == 0 && message.mentions.users.size > 0) {
			const toFetch = await message.guild.fetchMember(message.mentions.users.first());
			return toFetch;
		}
		else{
			if(!toFind) return message.member;
			toFind = toFind.toLowerCase();
			member = message.mentions.members.first() || message.guild.members.find((x) => x.user.username.toLowerCase() === toFind) || message.guild.members.get(toFind);
		}
		return member;
	},

    formatDate: function(date) {
        return new Intl.DateTimeFormat('en-US').format(date)
    },
    ErrorMsg: (bot, message, error) => {
		const errEmbed = new RichEmbed()
			.setTitle("<:nae:671454247505625110> Errrrrrooor >:/")
			.setColor("RED")
			.setDescription(error)
			.setAuthor(message.author.username,  message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1");
		message.channel.send(errEmbed);
    },
    newLP: (message) => {
        const newLP = new logicPath({
            UserID: message.author.id,
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

    
}