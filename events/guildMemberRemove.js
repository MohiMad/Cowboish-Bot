const Guild = require("../models/guild.js");

module.exports = async (bot, member) => {

    const guild = await Guild.findOne({ guildID: member.guild.id });

    if (!guild) return;

    if (guild.leave.enabled === false) return;

    if (!guild.leave.message) return;

    if (guild.leave.channel === null) return;


    const leaveMessage = guild.leave.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);

    const leaveChannel = member.guild.channels.get(guild.leave.channel);

    if (!leaveChannel) {
        return;

    } else {

        leaveChannel.send(leaveMessage)
            .catch(() => void null);


    }
};