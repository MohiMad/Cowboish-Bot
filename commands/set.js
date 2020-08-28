const logicPath = require("../models/logicpath.js");
const { RichEmbed } = require('discord.js');
const { ErrorMsg, newLP } = require("../functions.js");

module.exports = {
    name: 'set',
    description: "Set logicpath info",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

       if (!args[1]) {
            ErrorMsg(bot, message, "**Too few arguments provided...**\nPlease provide me what you want to set:\n\nTo set your **region**, do `" + prefix + "set region <regionHERE>`\nTo set your **ingame-ID**, do `" + prefix + "set ID <ingameID>`\nTo set your **biography**, do `" + prefix + "set bio <textGoesHere>`");

        } else if (["region", "server"].includes(args[1].toLowerCase())) {

            function region(message, bot) {
                ErrorMsg(bot, message, "You need to provide something for me so i can set your region!\n\nTo set your region to: **NA/EU** type `1`\nTo set your region to: **Asia** type `2`\n\nYou have **60** seconds type one of these numbers!");

                const filter = m => m.author.id === message.author.id;

                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 60000
                }).then(collected => {

                    let num = collected.first();

                    if (num.content === '1') {
                        message.channel.send(`Successfully set **${message.author.username}**'s region to ` + "`NA/EU`");

                        LP.region = "NA/EU";
                        LP.save().catch(e => console.log(e));
                    }
                    else if (num.content === "2") {
                        message.channel.send(`Successfully set **${message.author.username}**'s region to ` + "`Asia`");

                        LP.region = "Asia";
                        LP.save().catch(e => console.log(e));

                    }

                }).catch(collected => {
                    return message.reply(`**Time is over!** try again!`);
                });

            };

            if (!args[2]) {
                region(message, bot);

            }
            else if (["na/eu", "na", "eu"].includes(args[2].toLowerCase())) {
                message.channel.send(`Successfully set **${message.author.username}**'s region to ` + "`NA/EU`");

                LP.region = "NA/EU";
                LP.save().catch(e => console.log(e));

            }
            else if (["asia", "china"].includes(args[2].toLowerCase())) {
                message.channel.send(`Successfully set **${message.author.username}**'s region to ` + "`Asia`");

                LP.region = "Asia";
                LP.save().catch(e => console.log(e));
            }
            else {
                region(message, bot);
            }


        } else if (["id", "ingameid"].includes(args[1].toLowerCase())) {

            if (!args[2]) {

                if (LP.ID === "0") {
                    const noArgsEmbed = new RichEmbed()
                        .setTitle("You haven't set your ingame ID yet!")
                        .setColor("RED")
                        .setDescription("Adding your ingame ID allows your friends to quickly add you and finding your ID via the `" + prefix + "LP <TagHere>` command\n\n• Usage: `" + prefix + "set ID <IngameID>`\n• The ID must be **6, 7 or 8** numbers long\n• It's an ID so it must be numbers only!");

                    message.channel.send(noArgsEmbed);
                }
                else {
                    const idEmbed = new RichEmbed()
                        .setAuthor(`Hey ${message.author.username}! Your ID is set to...`)
                        .setColor("GREEN")
                        .setDescription(`IngameID: **${LP.ID}**` + "\nYou can change your ID again by doing `" + prefix + "set ID <ID_here>`");

                    message.channel.send(idEmbed);
                }
            }

            else if (isNaN(args[2])) {
                message.reply("the ID given must contain **numbers** only and is **6, 7 or 8** numbers long!")

            }
            else if (args[2].length === 6) {
                LP.ID = args[2];
                LP.save().catch(err => console.log(err));

                message.channel.send("Successfully set your ID to **" + args[2] + "**");

            }
            else if (args[2].length === 7) {
                LP.ID = args[2];
                LP.save().catch(err => console.log(err));

                message.channel.send("Successfully set your ID to **" + args[2] + "**");

            }
            else if (args[2].length === 8) {
                LP.ID = args[2];
                LP.save().catch(err => console.log(err));

                message.channel.send("Successfully set your ID to **" + args[2] + "**");

            }
            else {
                message.reply("the ID given must contain **numbers** only and is **6, 7 or 8** numbers long!");
            }


        } else if (["biography", "bio"].includes(args[1].toLowerCase())) {

            if (!args[2]) {

                if (LP.bio !== "0") {
                    return message.channel.send(`Hey **${message.author.username}**!\nYour biography is set to: ${LP.bio}`);
                }
                return ErrorMsg(bot, message, "**Too few arguments!**\nPlease provide something to set as your biography!");
            }
            else if (args[2].length > 47) {
                return ErrorMsg(bot, message, `The description given is **${args[2].length - 47}** characters over the limit!\nPlease provide a biography that's less than 47 characters!`);
            }
            else {
                LP.bio = args.slice(2).join(" ");

                LP.save().catch(e => console.log(e));

                message.reply(`Successfully set your biography to: ${args.slice(2).join(" ")}`);

            }

        } else {
            ErrorMsg(bot, message, "**Too few arguments provided...**\nPlease provide me what you want to set:\n\nTo set your **region**, do `" + prefix + "set region <regionHERE>`\nTo set your **ingame-ID**, do `" + prefix + "set ID <ingameID>`\nTo set your **biography**, do `" + prefix + "set bio <textGoesHere>`");
        }
    }

}