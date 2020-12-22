const { ErrorMsg } = require("../functions.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: ["clear", "purge", "delete", "deletemessages", "sweep"],
    description: "Delete multiple messages at once using this command\nThis command can only be used by users with the permission **Manage Messages**\n\n**Usage:** `$prefixclear <amountOfMessages> [Reason]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES"],
    category: "Moderation",
    execute: async (message, args, bot, prefix) => {

        const toClear = args[1];

        if (!message.member.hasPermission("MANAGE_MESSAGES", { checkAdmin: true, checkOwner: true })) return message.channel.send("You do not have the required permissions to execute this command!");

        else if (isNaN(toClear) || !toClear || toClear > 100) return ErrorMsg(bot, message, "Please provide a number of messages for me to delete\nUsage: `" + prefix + "clear [amount] [reason(optional)]`\n\n**Note**: The highest amount of messages is *100*");

        else if (toClear.includes("-")) return message.channel.send("The amount of messages given can't be under 1");

        else if (toClear === 0) return message.channel.send("The amount of messages given can't be under 1");

        try {
            const messages = await message.channel.messages.fetch({ limit: toClear });
            await message.channel.bulkDelete(messages);

            const reason = args.slice(2).join(" ") || "No Reason";

            const clearEmbed = new MessageEmbed()
                .setColor("#000000")
                .setAuthor(`Clear case!`, message.author.displayAvatarURL())
                .setTimestamp()
                .setDescription(`
                    **Cleared Messages:** ${messages.size}
                    **Cleared in: **${message.channel}
                    **Cleared by:** ${message.author}
                    **Reason:** ${reason ? reason : "No Reason"}`);

            message.channel.send(clearEmbed).then(m => m.delete({ timeout:7000, reason: reason ? reason : "No Reason" }));

        } catch (err) {
            if (err.message === 'You can only bulk delete messages that are under 14 days old.') return ErrorMsg(bot, message, "**I can't delete messages that's older than 14 days!** sorry")

            console.log(err);
        }
    }
}