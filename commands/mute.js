const ms = require("ms");
const { ErrorMsg, findMember, findRole } = require("../assets/functions.js");
const { MessageEmbed } = require("discord.js");
const Mutes = require("../models/mutes.js");

module.exports = {
  name: ["mute", "shutup"],
  description: "Mutes the mentioned member for a specified amount of time...\n\n**Usage:** `$prefixmute <user> <time> [reason]`\n\nThe `<time>` tag should be provided using the following format:\n**10 Seconds**: `10s`\n**10 Minutes**: `10m`\n**10 Hours**: `10h`\n**10 Days**: `10d`",
  permissions: ["SEND_MESSAGES", "MANAGE_CHANNELS", "MANAGE_ROLES", "EMBED_LINKS"],
  category: "Moderation",
  execute: async (message, args, bot, prefix) => {

    if (!message.member.hasPermission("MANAGE_ROLES", { checkAdmin: true, checkOwner: true })) return ErrorMsg(bot, message, "Not enough permissions!\nOnly members with the permission: **MANAGE_ROLES** can execute this command!");

    if (!args[1] || !args[2]) return ErrorMsg(bot, message, "**No Member** provided or **Mute Time**!\nPlease provide me a member to mute and the amount of time you want me to mute them for.\n\nCorrect usage: `" + prefix + "mute <member> <time(s/m/d)> <reason(optional)>`");

    const member = await findMember(message, args[1]);

    if (!member) return ErrorMsg(bot, message, "Couldn't find that member!");

    const muteRole = findRole(message, "muted") || await message.guild.roles.create({ name: "muted", color: "#27272b", permissions: [], reason: "Couldn't find a muted role." });

    const reason = args.slice(3).join(" ");

    await message.guild.channels.cache.forEach(async (channel) => {
        if(!channel.viewable) return;
        if(!channel.editable) return;

      await channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        SPEAK: false,
      });
    });

    let muteTime = ms(args[2]);

    if (!muteTime) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `" + prefix + "mute <member> <time(s/m/d)> <reason>`");

    if (isNaN(muteTime)) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `" + prefix + "mute <member> <time(s/m/d)> <reason>`");

    if (muteTime > 2592000000000) return ErrorMsg(bot, message, "Please provide a mute time under 30 days!\nCorrect usage: `" + prefix + "mute <member> <time(s/m/d)> [reason]`");

    const mute = new Mutes({
      guildID: message.guild.id,
      userID: member.user.id,
      channelID: message.channel.id,
      created: Date.now(),
      muteTime: muteTime,
    });

    mute.save().catch(e => console.log(e));

    member.roles.add(muteRole);

    const muteEmbed = new MessageEmbed()
      .setColor("#000000")
      .setAuthor(`Mute case!`, member.user.displayAvatarURL())
      .setDescription(`**Muted By:** ${message.author.tag}\n**Muted User:** ${member.user.tag}\n**Mute Time:** ${args[2]}\n **Reason:** ${reason ? reason : "No reason provided!"}`);

    message.channel.send(muteEmbed);
  }
}