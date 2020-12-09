module.exports = {
    name: "ping",
    description: "999ms command",
    execute: async (message) => {

        const m = await message.channel.send("**Quickly type anything in the chat again!**");
        const filter = m => m.author.id === message.author.id;

        await message.channel.awaitMessages(filter, { time: 5000, max: 1, }).then(async (collected) => {
            var emoji = String,
                ping = Math.round(collected.first().createdTimestamp - m.createdTimestamp) / 4;

            if (ping < 100) emoji = "🟩";
            else if (ping < 299 && ping > 100) emoji = "🟨";
            else emoji = "🟥";

            for (const MSG of [collected, m, collected.first()]) {
                if(MSG.deletable) await MSG.delete({ reason: "Clearing Spam'ish messages ;)" });
            }
           

            return message.channel.send(message.author.username + "'s ping is " + emoji + "`" + ping + "ms`");
        }).catch(late => {
            message.channel.send(`**LMAO ${message.author}!**\n` + "Your response was too late and your ping went above 🟥`" + "4999" + "ms`")
        });

    }
}