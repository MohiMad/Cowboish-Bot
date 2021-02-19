const { MessageEmbed } = require('discord.js');
const spamStopper = new Set();
module.exports = {
    name: ["emojis", "emoji", "emojilist", "emoji-list"],
    description: "Displays the list of emojis in this server.",
    usage: "emojis [emoji(s)]",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Utility",
    execute: async (message, args) => {

        const emojiArray = [];

        const content = args.slice(1).join(" ");
        const emojiFinderRegex = /(<:).*?(>)/gi;

        if (emojiFinderRegex.test(content)) {
            const occurrences = content.match(emojiFinderRegex);
            let continues = true;

            for (var i = 0; i < occurrences.length; i++) {
                const e = message.guild.emojis.cache.get(occurrences[i].replace(/<:.*:/gi, "").replace(">", ""));

                if (!e) continue;

                if (emojiArray) {
                    for (var j = 0; j < emojiArray.length; j++) {
                        if (emojiArray[j].name === e.name) {
                            continues = false;
                            break;
                        }
                    }
                }

                if (continues == false) {
                    continues = true;
                    continue;
                }

                emojiArray.push({
                    emoji: e.url,
                    name: e.name
                });
                continues = true;
            }
        } else {
            await message.guild.emojis.cache.each(emoji => {
                emojiArray.push({
                    emoji: emoji.url,
                    name: emoji.name
                });
            });
        }

        if (emojiArray.length < 1) return message.channel.send("Couldn't find any emojis, sorry!");

        if (spamStopper.has(message.author)) return message.reply("**Please react with ❌ on the previous embed before being able to start a new Emoji scroller!**");

        let Pages = emojiArray;
        let pageI = 0;

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(emojiArray[pageI].name)
            .setURL(emojiArray[pageI].emoji)
            .setFooter(`Emoji 1 of ${emojiArray.length}`)
            .setImage(emojiArray[pageI].emoji);

        spamStopper.add(message.author);
        const msg = await message.channel.send(embed);

        for (const emoji of ["⏪", "⏩", "❌"]) {
            await msg.react(emoji);
        }

        const backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;
        const forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;
        const endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

        const back = msg.createReactionCollector(backFilter, {
            time: 300000
        });

        const forward = msg.createReactionCollector(forwardFilter, {
            time: 300000
        });


        const end = msg.createReactionCollector(endFilter, {
            time: 300000
        });


        back.on('collect', async r => {
            await r.users.remove(message.author).catch(e => console.log(e));

            if (pageI === 0) {
                pageI = emojiArray.length - 1;
            } else {
                pageI--;
            }

            embed.setImage(emojiArray[pageI].emoji)
                .setFooter(`Emoji ${pageI + 1} of ${emojiArray.length}`)
                .setURL(emojiArray[pageI].emoji)
                .setTitle(emojiArray[pageI].name);

            await msg.edit(embed).catch(e => console.log(e));
        });

        forward.on('collect', async r => {

            await r.users.remove(message.author).catch(e => console.log(e));

            if (pageI === emojiArray.length - 1) {

                pageI = 0;
            } else {
                pageI++;
            }
            embed.setImage(emojiArray[pageI].emoji)
                .setFooter(`Emoji ${pageI + 1} of ${emojiArray.length}`)
                .setURL(emojiArray[pageI].emoji)
                .setTitle(emojiArray[pageI].name);

            await msg.edit(embed).catch(e => console.log(e));
        });


        end.on('collect', async r => {

            for (var i = 0; i < 3; i++) {
                await [end, forward, back][i].stop();
            }

            msg.reactions.removeAll().catch(error => console.log(error));

            spamStopper.delete(message.author);

        });

        end.on('end', async (r) => {
            if (msg.deleted === true || !r || r === null || r === undefined || !msg) {
                for (const y of [end, forward]) {
                    await y.stop().catch(error => console.log(error));
                }

                spamStopper.delete(message.author);
                return end.stop();
            }

            spamStopper.delete(message.author);
            msg.reactions.removeAll().catch(error => console.log(error));
        });

    }
}