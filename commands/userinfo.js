
const {Client, RichEmbed, Attachment, Collection} = require('discord.js');
const bot = new Client();

module.exports = {
    name: 'shoot',
    description: "shoots you",
    execute(message, args){

 const member = getMember(message, args.join(" "));

 // Member variables
 const joined = formatDate(member.joinedAt);
 const roles = member.roles
     .filter(r => r.id !== message.guild.id)
     .map(r => r).join(", ") || 'none';

 // User variables
 const created = formatDate(member.user.createdAt);

 const embed = new RichEmbed()
     .setFooter(member.displayName, member.user.displayAvatarURL)
     .setThumbnail(member.user.displayAvatarURL)
     .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

     .addField('Member information:', stripIndents`**> Display name:** ${member.displayName}
     **> Joined at:** ${joined}
     **> Roles:** ${roles}`, true)

     .addField('User information:', stripIndents`**> ID:** ${member.user.id}
     **> Username**: ${member.user.username}
     **> Tag**: ${member.user.tag}
     **> Created at**: ${created}`, true)
     
     .setTimestamp()

 if (member.user.presence.game) 
     embed.addField('Currently playing', stripIndents`**> Name:** ${member.user.presence.game.name}`);

 message.channel.send(embed);

    }
}