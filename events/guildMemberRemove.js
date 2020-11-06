const Guild = require("../models/guild.js");

module.exports = async (bot, member) => {

    console.log("yeet");
    const guild = await Guild.findOne({ guildID: member.guild.id });

    if (!guild) return;

    if (guild.leave.enabled === false) return;

    if (!guild.leave.message) return;

    if (guild.leave.channel === null) return;


    const leaveMessage = guild.leave.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.cache.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);

    const leaveChannel = member.guild.channels.cache.get(guild.leave.channel);

    if (!leaveChannel) return;

    leaveChannel.send(leaveMessage).catch(() => void null);

};