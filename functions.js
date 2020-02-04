const { RichEmbed } = require('discord.js');
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
			.setTitle("<:nae:671454247505625110> Wrong usage! >:/")
			.setColor("RED")
			.setDescription(error)
			.setAuthor(message.author.username,  message.author.displayAvatarURL)
			.setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1");
		message.channel.send(errEmbed);
	},

    
}