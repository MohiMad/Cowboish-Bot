const ms = require('ms');

module.exports = {
  name: 'mute',
  description: "mute!",
  execute: async (message, args, MohiMoo) => {


    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user! make sure that you tagged them right after the command example >mute <member> s/h/d");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Oof looks like i can't mute them... how op");
    let muterole = message.guild.roles.find(muterole => muterole.name === "😶Taped Mouth😶");

    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "😶Taped Mouth😶",
          color: "#000000",
          permissions: []
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }

    let mutetime = args[2];
    if (!mutetime) return message.reply("You didn't specify a time! example >mute <membertag> s/h/d");

    await (tomute.addRole(muterole.id));
    message.reply(`Rip <@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function () {
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));





  }
}