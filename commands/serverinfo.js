const { RichEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');
const { formatDate } = require("../functions.js");

module.exports = {
	name: 'serverinfo',
	description: "shows the info of the server",
	execute(message, args, MohiMoo, errWhere) {


		const created = formatDate(message.guild.createdAt)
		const joined = formatDate(message.author.joinedAt);


		const embed = new RichEmbed()
			.setColor("RANDOM")


			.setDescription(`Info about **${message.guild.name}** (ID: ${message.guild.id})`)

			.addField(
				'❯ Channels',
				stripIndents`
				🙎‍♂️ ${message.guild.channels.filter(ch => ch.type === 'text').size} Text, ${
					message.guild.channels.filter(ch => ch.type === 'voice').size
					} 🎙️ Voice
				💤 AFK: ${
					message.guild.afkChannelID
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
				📜 Roles: ${message.guild.roles.size}
				🌎 Region: ${message.guild.region}
				🕐 Created at: ${(created)}
			`,
			);


		message.channel.send(embed);


	}

}
