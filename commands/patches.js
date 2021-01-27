const { MessageEmbed } = require("discord.js");
const spamStopper = new Set();
const p = require("../assets/patchnotes.js");

module.exports = {
    name: ["patches", "patchnotes", "identityvpatches", "idvpatches", "identityvpatchnotes"],
    description: "Check Identity V's latest patchnotes\nCowboish will send the full version of it split into multiple pages and you can move to next/previous page by reacting with ◀ ▶ on the embed",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "ADD_REACTIONS", "MANAGE_MESSAGES"],
    category: "IdentityV",
    execute: async (message, bot, prefix) => {

        if (spamStopper.has(message.author)) return message.reply("**You can't run two patchnotes-scrollers at once... Please react with ❌ on the previous embed before being able to start a new scroller!**");

        let patchNotes = p.patchNotes.replace(/(])/g, ']**')
            .replace(/[[]/g, '**[')
            .match(/.{1,1900}(\n|$)/gism);

        let pageI = 0;

        const embed = new MessageEmbed()
            .setColor("BLUE")
            .setTitle(`Identity V Patch Notes: ${p.PatchDate}`)
            .setThumbnail("https://i.imgur.com/hSMftcq.png")
            .setDescription(patchNotes[pageI])
            .setFooter(`Page ${pageI + 1} out of ${patchNotes.length}`, bot.user.displayAvatarURL({ format: "png", dynamic: false }))


        spamStopper.add(message.author);
        let msg = await message.channel.send(embed);

        await msg.react('⏪');
        await msg.react('⏩');
        await msg.react('❌');

        let backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;

        let forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;

        let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

        let back = msg.createReactionCollector(backFilter, {
            time: 500000
        });

        let forward = msg.createReactionCollector(forwardFilter, {
            time: 500000
        });

        let end = msg.createReactionCollector(endFilter, {
            time: 500000
        });

        back.on('collect', async r => {

            await r.users.remove(message.author);

            if (pageI === 0) {
                pageI = patchNotes.length - 1;
            } else {
                pageI--;
            }

            embed.setDescription(patchNotes[pageI])
                .setFooter(`Page ${pageI + 1} out of ${patchNotes.length}`, bot.user.displayAvatarURL({ format: "png", dynamic: false }))

            await msg.edit(embed);
        });

        forward.on('collect', async r => {

            await r.users.remove(message.author);

            if (pageI === patchNotes.length - 1) {
                pageI = 0;
            } else {
                pageI++;
            }
            embed.setDescription(patchNotes[pageI])
                .setFooter(`Page ${pageI + 1} out of ${patchNotes.length}`, bot.user.displayAvatarURL({ format: "png", dynamic: false }))

            await msg.edit(embed);
        });

        end.on('collect', async r => {

            embed.setImage(p.patchImage)
                .setDescription(`Thank you for using Cowboish UwU\nRemember that you can also set a **Patch Notes Channel** for me to send the full version of the Patch Notes in it whenever they're out. Wonder how? Do: ` + "\n`" + prefix + "identityvnews patchnotes <channelHere>`")
                .setFooter(p.patchDateFooter)
                .setTimestamp();

            msg.edit(embed);
            msg.reactions.removeAll().catch(error => console.log(error));

            await end.stop();
            await forward.stop();
            await back.stop();
            spamStopper.delete(message.author);

        });

        end.on('end', async (r) => {
            if (msg.deleted === true || !r || r === null || r === undefined || !msg) {
                forward.stop();
                back.stop();
                spamStopper.delete(message.author);
                return end.stop();
            }

            embed.setImage(p.patchImage)
                .setDescription(`Thank you for using Cowboish UwU\nRemember that you can also set a **Patch Notes Channel** for me to send the full version of the Patch Notes in it whenever they're out. Wonder how? Do: ` + "\n`" + prefix + "identityvnews patchnotes <channelHere>`")
                .setFooter(p.patchDateFooter)
                .setTimestamp();

            msg.edit(embed);
            spamStopper.delete(message.author);
            msg.reactions.removeAll().catch(error => console.log(error));
        });

    }
}