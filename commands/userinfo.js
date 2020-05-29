const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../functions.js");



module.exports = {
    name: 'userinfo',
    description: "show info",
    execute(message, args, MohiMoo) {


        const member = getMember(message, args.join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        if(roles.length > 100){
            roles = member.roles.size
        }

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new RichEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setThumbnail(member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('👇 User information 👇 ', stripIndents`**> Nickname **• ${member.displayName}
            **> 📌 Joined server **• ${joined}
            **> 👉 Roles **• ${roles}`, true)

            .addField('👇 User information 👇', stripIndents`**> ID **• ${member.user.id}
            **> 💬 Username**• ${member.user.username}
            **> 📎 Tag**• ${member.user.tag}
            **> 🎉 Account's birthday**• ${created}`, true)
            .setTimestamp()

        if (member.user.presence.game)
            embed.addField('🔴Currently playing', stripIndents`> ** ${member.user.presence.game.name}**`);

        message.channel.send(embed);




    }
}