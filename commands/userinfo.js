const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../functions.js");

module.exports = {
    name: ["userinfo", "usrinfo", "user-info", "userinformation", "user-information"],
    description: "Displays your/others' User Information\n\n**Usage:** `$prefixuserinfo [user]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    execute(message, args) {


        const member = getMember(message, args.slice(1).join(" "));

        // Member variables
        const joined = formatDate(member.joinedAt);

        const roles = member.roles.cache.size - 1;

        // User variables
        const created = formatDate(member.user.createdAt);

        const embed = new MessageEmbed()
            .setFooter(member.displayName, member.user.displayAvatarURL())
            .setThumbnail(member.user.displayAvatarURL())
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('👇 User information 👇 ', stripIndents`
            **> Nickname **• ${member.displayName}

            **> 📌 Joined server **• ${joined}
            
            **> 👉 Roles **• ${roles}`, true)

            .addField('👇 User information 👇', stripIndents`
            **> ID **• ${member.user.id}

            **> 💬 Username**• ${member.user.username}

            **> 📎 Tag**• ${member.user.tag}

            **> 🎉 Account's birthday**• ${created}`, true)
            .setTimestamp()

        if (member.user.presence.game) embed.addField('🔴 Currently playing', stripIndents`> ** ${member.user.presence.game.name}**`);

        message.channel.send(embed);

    }
}