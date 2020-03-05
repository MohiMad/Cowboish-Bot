const Guild = require("../models/guild.js");

module.exports = async (bot, member) => {

    const guild2 = await Guild.findOne({ guildID: member.guild.id });

    if (!guild2) return;

    else if ((guild2.leave.enabled) === false) return;

    else if (!guild2.leave.message || guild2.leave.message.length < 1) return;

    else if ((!guild2.leave.message) === null) return;

    else if ((guild2.leave.channel) === null) return;

    const leaveMessage = guild2.leave.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);

    const leaveChannel = member.guild.channels.get(guild2.leave.channel);

    if (leaveChannel === null) return;

    leaveChannel.send(leaveMessage);
};