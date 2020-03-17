const logicPath = require("../models/logicpath.js");
let cooldown = new Set();

module.exports = {
    name: 'awish',
    description: "bans a player",
    execute: async (message, args, bot, MohiMoo) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        let wishMsg = args.slice(1).join(" ");

        if (!args[1]) {
            return message.reply("Hey! you can't wish Mohi nothing :/\nPlease write a good bday letter for him :3");
        }
        else if (!LP) {
            MohiMoo.send(`**${message.author.tag}** sent you a letter:\n${wishMsg}`);

            message.channel.send(`Thank you, **${message.author.username}**!\nYour letter has been sent to Mohi :3`);
        }
        else {
            if (cooldown.has(message.author.id)) {
                message.reply(`You've already sent a letter!\nCan't send another one :c`)

            }
            else {
                LP.Clues = LP.Clues + 500;
                LP.save().catch(e => console.log(e));

                MohiMoo.send(`**${message.author.tag}** sent you a letter:\n${wishMsg}`);

                message.channel.send(`Thank you, **${message.author.username}**!\nYour letter has been sent to Mohi :3\nOh btw, take these *500* <:clue:655384523735040000> as a gift from Mohi >:D`).then(cooldown.add(message.author.id));
            }
        }


    }

}