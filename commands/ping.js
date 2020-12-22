const spamStopper = new Set();

module.exports = {
    name: ["ping", "ingameping", "ingame-ping"],
    description: "Hahah your ingame-ping is 998ms\nYou get it right? ingame-ping but in-discord ;)\nCowboish will ask you to send a message after executing the command, the faster you respond the lower your ping is going to be...\n\n**Lowest Ping By Noctilla?**: 🟩`13.5ms`\nLet us know in [Cowboish Server](https://discord.com/invite/YWcSukS) if you beat that record ;)",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES"],
    category: "IdentityV",
    execute: async (message, prefix) => {

        if(spamStopper.has(message.author)) return spamStopper.delete(message.author);
        
        const m = await message.channel.send("**Quickly type anything in the chat again!**");
        const filter = m => m.author.id === message.author.id;
        spamStopper.add(message.author);

        await message.channel.awaitMessages(filter, { time: 5000, max: 1, }).then(async (collected) => {
            if(collected.first().content === `${prefix}ping`) return;
            
            var emoji = String,
                ping = Math.round(collected.first().createdTimestamp - m.createdTimestamp) / 4;

            if (ping < 100) emoji = "🟩";
            else if (ping < 299 && ping > 100) emoji = "🟨";
            else emoji = "🟥";

            for (const MSG of [collected, m, collected.first()]) {
                if(MSG.deletable) await MSG.delete({ reason: "Clearing Spam'ish messages ;)" });
            }
           
            spamStopper.delete(message.author);
            return message.channel.send(message.author.username + "'s ping is " + emoji + "`" + ping + "ms`");
        }).catch(late => {
            spamStopper.delete(message.author);
            message.channel.send(`**LMAO ${message.author}!**\n` + "Your response was too late and your ping went above 🟥`" + "4999" + "ms`");
        });

    }
}