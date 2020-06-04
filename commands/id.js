const logicPath = require("../models/logicpath.js");
const { newLP } = require("../functions.js");

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'id',
    description: "id info",
    execute: async (message, args, prefix) => {

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP) { newLP(message) }

        else if (!args[1]) {

            if (LP.ID === "0") {
                const noArgsEmbed = new RichEmbed()
                    .setTitle("You haven't set your ingame ID yet!")
                    .setColor("RED")
                    .setDescription("Adding your ingame ID allows your friends to quickly add you and finding your id via the `" + prefix + "LP <TagHere>` command\n\n• Usage: `" + prefix + "ID <IngameID>`\n• The ID must be **7** numbers long\n• It's an ID so it must be numbers only!");

                message.channel.send(noArgsEmbed);
            }
            else {
                const idEmbed = new RichEmbed()
                    .setAuthor(`Hey ${message.author.username}! Your ID is set to...`)
                    .setColor("GREEN")
                    .setDescription(`IngameID: **${LP.ID}**` + "\nYou can change your ID again by doing `" + prefix + "ID <ID_here>`")

                message.channel.send(idEmbed)
            }
        }

        else if (isNaN(args[1])) {
            message.reply("the ID given must contain **numbers** only and is **6, 7 or 8** numbers long!")

        }
        else if (args[1].length === 6) {
            LP.ID = args[1];
            LP.save().catch(err => console.log(err));

            message.channel.send("Succesfully set your ID to **" + args[1] + "**");

        }
        else if (args[1].length === 7) {
            LP.ID = args[1];
            LP.save().catch(err => console.log(err));

            message.channel.send("Succesfully set your ID to **" + args[1] + "**");

        }
        else if (args[1].length === 8) {
            LP.ID = args[1];
            LP.save().catch(err => console.log(err));

            message.channel.send("Succesfully set your ID to **" + args[1] + "**");

        }
        else {
            message.reply("the ID given must contain **numbers** only and is **6, 7 or 8** numbers long!");
        }


    }
}