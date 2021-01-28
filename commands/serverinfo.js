const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const moment = require("moment");

module.exports = {
	name: ["serverinfo", "server-info", "srvrinfo"],
	description: "Shows this Server's general Information",
	permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
	category: "Utility",
	execute(message) {


		const created =  moment.utc(message.guild.createdAt).format("dddd, MMMM Do YYYY");

		const joined = moment.utc(message.member.joinedAt).format("dddd, MMMM Do YYYY");

		const embed = new MessageEmbed()
			.setColor("RANDOM")
			.setDescription(`Info about **${message.guild.name}**\n(ID: ${message.guild.id})`)
			.addField(
				'❯ Channels',
				stripIndents`
				🙎‍♂️ ${message.guild.channels.cache.filter(ch => ch.type === 'text').size} Text, ${message.guild.channels.cache.filter(ch => ch.type === 'voice').size
					} 🎙️ Voice
				💤 AFK: ${message.guild.afkChannelID
						? `<#${message.guild.afkChannelID}> after ${message.guild.afkTimeout / 60}min`
						: 'None'
					}
			`,
			)
			.addField(
				'❯ Members info',
				stripIndents`
				• ${message.guild.memberCount} members
				👑 Owner: ${message.guild.owner.user.tag} (ID: ${message.guild.ownerID})
				• You joined ${joined}
			`,
			)
			.addField(
				'❯ Other',
				stripIndents`
				📜 Roles: ${message.guild.roles.cache.size}
				🌎 Region: ${message.guild.region}
				🕐 Created at: ${(created)}
			`,
			)
			.setThumbnail(message.guild.iconURL({ dynamic: true }));


		message.channel.send(embed);


	}

}
