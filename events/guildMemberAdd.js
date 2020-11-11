const Guild = require("../models/guild.js");
const { findRole } = require("../functions.js");

module.exports = async (bot, member) => {

    const guild = await Guild.findOne({ guildID: member.guild.id });

    if (!guild) return;
    if (guild.autoroles.length != 0) {
        for (const role of guild.autoroles) {
            let findTheRole = await findRole(member, role);
            if (!findTheRole) return;
            await member.roles.add(role).catch(() => void null);
        }
    }

    if (guild.welcome.enabled === false) return;
    if (!guild.welcome.message || guild.welcome.message.length < 1) return;
    if (guild.welcome.channel === null) return;
    const welcomeMessage = guild.welcome.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.cache.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);

    const welcomeChannel = member.guild.channels.cache.get(guild.welcome.channel);
    if (!welcomeChannel) return;
    welcomeChannel.send(welcomeMessage)
        .catch(() => void null);



};
