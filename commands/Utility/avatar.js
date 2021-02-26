const { MessageEmbed } = require('discord.js');
const { getMember } = require('../../src/functions.js');
module.exports = {
    name: ["avatar", "pfp", "user-avatar", "profilepicture", "profilepic"],
    description: "Returns someone's profile picture in highest resolution\n\n**Usage:** `$prefixavatar [user]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Utility",
    execute: async (message, args) => {

        const u = await getMember(message, args.slice(1).join(" "));
        if (!u) await getMember(message, message.author.id);

        let formats = `[jpg](${u.user.avatarURL({ dynamic: false, size: 4096, format: 'jpg' })}) \`|\` [png](${u.user.avatarURL({ dynamic: false, size: 4096, format: 'png' })})`;
        if (u.user.avatarURL({ dynamic: true, size: 4096 }).includes(".gif")) formats += `\`|\` [gif](${u.user.avatarURL({ dynamic: false, size: 4096, format: 'gif' })})`

        const avatar = new MessageEmbed()
            .setTitle(`${u.user.username}'s avatar!`)
            .setDescription(formats)
            .setColor(u.displayHexColor ? u.displayHexColor : "0xDFF42F")
            .setImage(u.user.displayAvatarURL({ dynamic: true, size: 4096 }))
            .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }));

        return message.channel.send(avatar).catch(e => console.log(e));
    }
}