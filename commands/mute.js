const ms = require("ms");

const { ErrorMsg, findMember, findRole } = require("../functions");

const { RichEmbed } = require("discord.js");

const Mutes = require("../models/mutes.js");

module.exports = {
  name: 'mute',
  description: "Mute...",
  execute: async (message, args, bot) => {

    if (!message.member.hasPermission("MANAGE_ROLES", false, true, true)) return ErrorMsg(bot, message, "Not enough permissions!\nOnly members with the permission: **MANAGE_ROLES** can execute this command!");

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **MANAGE_ROLES** to true");

    if (!args[1]) return ErrorMsg(bot, message, "No member provided!\nPlease provide me a member to mute!\n\nCorrect usage: `>mute <member> <time(s/m/d)> <reason>`");

    const member = await findMember(message, args[1]);

    if (!member) return ErrorMsg(bot, message, "Couldn't find that member!");

    const muteRole = findRole(message, "muted") || await message.guild.createRole({ name: "muted", color: "#27272b", permissions: [] });

    const reason = args.slice(3).join(" ");

    message.guild.channels.forEach((channel) => {
      channel.overwritePermissions(muteRole, {
        SEND_MESSAGES: false,
        SPEAK: false,
      });
    });

    const muteTime = ms(args[2]);

    if (!muteTime) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `>mute <member> <time(s/m/d)> <reason>`");

    if (isNaN(muteTime)) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `>mute <member> <time(s/m/d)> <reason>`");

    if (muteTime > 2592000000000) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `>mute <member> <time(s/m/d)> <reason>`");

    const mute = new Mutes({
      guildID: message.guild.id,
      userID: member.user.id,
      channelID: message.channel.id,
      created: Date.now(),
      muteTime: muteTime || 999999999999999999999999999999999,
    });

    mute.save().catch(e => console.log(e));

    member.addRole(muteRole);

    const muteEmbed = new RichEmbed()
      .setColor("#000000")
      .setAuthor(`Mute case!`, member.user.displayAvatarURL)
      .setDescription(`**Muted By:** ${message.author.tag}\n**Muted User:** ${member.user.tag}\n**Mute Time:** ${args[2]}\n **Reason:** ${reason ? reason : "No reason provided!"}`);

    message.channel.send(muteEmbed);
  }
}