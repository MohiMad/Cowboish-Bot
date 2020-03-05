
const Guild = require("../models/guild.js");

module.exports = async (bot, member) => {

    const guild = await Guild.findOne({ guildID: member.guild.id });

    if (!guild) return;

    else if (guild.welcome.enabled === false) return;

    else if (!guild.welcome.message || guild.welcome.message.length < 1) return;

    else if (guild.welcome.channel === null) return;


    const welcomeMessage = guild.welcome.message
        .replace("memberCount", member.guild.memberCount)
        .replace("botCount", member.guild.members.filter(x => x.user.bot).size)
        .replace("serverName", member.guild.name)
        .replace("userName", member.user.username)
        .replace("userMention", member.user.toString())
        .replace("userTag", member.user.tag);


    const welcomeChannel = member.guild.channels.get(guild.welcome.channel);

    if (!welcomeChannel) return;

    else {

        welcomeChannel.send(welcomeMessage)
            .catch(() => void null);

    }

};
