const { ErrorMsg } = require("../functions.js");
const { RichEmbed } = require("discord.js");

module.exports = {
    name: 'clear',
    description: "clear commands",
    execute: async (message, args, bot) => {

        const toClear = args[1];



        if (!message.channel.permissionsFor(message.guild.me).missing('MANAGE_MESSAGES')) {
            return ErrorMsg(bot, message, "I don't have the required permissions to execute this command!\nRequired permission: **MANAGE_MESSAGES**")

        }

        else if (!message.member.hasPermission("MANAGE_MESSAGES", false, true, true)) return ErrorMsg(bot, message, "You do not have the required permissions to execute this command!");

        else if (isNaN(toClear) || toClear.includes(["-", "_", ".", ","]) || !toClear || toClear === 0 || toClear > 100) return ErrorMsg(bot, message, "Please provide a number of messages for me to delete\nUsage: `>clear [amount] [reason(optional)]`\n\n**Note**: The highest amount of messages is *100*");

        else {
            try {
                const messages = await message.channel.fetchMessages({ limit: toClear });
                await message.delete();
                const reason = args.slice(2).join(" ") || "No Reason";

                await message.channel.bulkDelete(messages);

                const clearEmbed = new RichEmbed()
                    .setColor("#000000")
                    .setAuthor(`Clear case!`, message.author.displayAvatarURL)
                    .setTimestamp()
                    .setDescription(`
            **Cleared Messages:** ${messages.size}\n
            **Cleared in :**${message.channel}\n
            **Cleared by:** ${message.author}\n
            **Reason:** ${reason ? reason : "No Reason"}`);

                message.channel.send(clearEmbed);
            } catch (err) {
                if (err.message === 'You can only bulk delete messages that are under 14 days old.') return ErrorMsg(bot, message, "**I can't delete messages that's older than 14 days!** sorry")

                else {
                    console.log(err)
                    message.channel.send(`Sorry **${message.author.username}** i hit an unknown error... :c`)
                }

            }
        }
    }
}