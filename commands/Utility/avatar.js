const { MessageEmbed } = require('discord.js');
const { getMember } = require('../../assets/functions.js');
module.exports = {
    name: ["avatar", "pfp", "user-avatar", "profilepicture", "profilepic"],
    description: "Returns someone's profile picture in highest resolution\n\n**Usage:** `$prefixavatar [user]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Utility",
    execute: async (message, args) => {
        const u = await getMember(message, args.slice(1).join(" ")) || await getMember(message, message.author.id);

        const avatar = new MessageEmbed()
            .setTitle(`${u.user.username}'s avatar!`)
            .setDescription(`[jpg](${u.user.displayAvatarURL({ dynamic: true, format: 'jpg' })}) \`|\` [png](${u.user.displayAvatarURL({ dynamic: true, format: 'png' })})`)
            .setColor(u.user.displayHexColor ? u.user.displayHexColor : "0xDFF42F")
            .setImage(u.user.displayAvatarURL({ dynamic: true, size: 4096, format: 'jpeg' }));

        return message.channel.send(avatar).catch(e => console.log(e));
    }
}