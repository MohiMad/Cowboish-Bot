const Discord = require("discord.js");
const { ErrorMsg } = require("../../src/functions.js");
const wikipedia = require("../../src/wikipedia.js");

const spamStopper = new Set();
module.exports = {
    name: ["idvwiki", "idvwikipedia", "idvw", "identityvwiki", "identityvwikipedia"],
    description: "The Identity V Wikipedia but in Discord UwU\nYou can find any Survivor/Hunter/Map information you're looking for here\nYou can also navigate through `Survivors`, `Hunters`, or `Maps` by providing one of them as your first argument\n\n**Usage:** `$prefixidvwikipedia <characterName/mapName>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "ADD_REACTIONS", "MANAGE_MESSAGES"],
    category: "IdentityV",
    execute: async (message, args, bot, prefix) => {

        /** Modifies an embed and returns it, skips throwing limit errors for fields etc using for loops
         * 
         * @param {Object} object The Object of the wiki including the character/map's information
         * @param {Array} majorObject The main object which is an array of Multiple objects including all survivors/hunters/maps
         * @returns {Promise<Object>} A Promise including the embed information
         */
        async function sendWikiInfo(object, majorObject) {
            const embed = new Discord.MessageEmbed()
                .setAuthor(object.Name[0], majorObject[0].Link, `https://identityv.gamepedia.com/${object.Href}`)
                .setColor(majorObject[0].Hex)
                .setImage(object.Image)
                .setThumbnail(majorObject[0].Link)
                .setFooter(majorObject[0].Footer.replace("$index", majorObject.indexOf(object))
                    .replace("$length", majorObject.slice(1).length), "https://i.imgur.com/UfYAmmo.png");

            const keys = Object.keys(object);
            const rg = new RegExp(/\_/, "g");

            for (var i = 3; i < keys.length; i++) {
                const splitted = object[keys[i]].match(/.{1,900}(\n|$)/gism);

                for (var j = 0; j < splitted.length; j++) {
                    if (j == 0) embed.addField(keys[i].replace(rg, " "), splitted[j].replace(/\d+%/g, "**$&**"));
                    else embed.addField("\u200b", splitted[j].replace(/\d+%/g, "**$&**"));
                }

            }

            //returns the embed
            return embed;
        }

        /**
         * Switch pages for embeds put in an array. Works with promised embeds, aka embeds that are put inside a Promise
         * @param {Array} Pages an array that includes all embeds you want the user to be able to switch pages through
         */
        async function switchPages(Pages) {
            let pageI = 0;
            await Pages[pageI].then(async (embed) => {
                await message.channel.send(embed).then(async (msg) => {

                    for (const emoji of ["⏪", "⏩", "❌"]) {
                        await msg.react(emoji);
                    }

                    const Filter = (reaction, user) => ["⏪", "⏩", "❌"].includes(reaction.emoji.name) & user.id === message.author.id;

                    const collector = await msg.createReactionCollector(Filter, {
                        time: 300000
                    });


                    collector.on('collect', async r => {
                        if (r.emoji.name === "❌") {
                            if (msg.deleted === true || !r || r === null || r === undefined || !msg) {

                                spamStopper.delete(message.author);
                                return await collector.stop();
                            }

                            await collector.stop();

                            spamStopper.delete(message.author);
                            return await msg.reactions.removeAll().catch(error => console.log(error));
                        }

                        await r.users.remove(message.author);

                        if (r.emoji.name === "⏪") {

                            if (pageI === 0) pageI = Pages.length - 1;
                            else pageI--;

                        } else if (r.emoji.name === "⏩") {

                            if (pageI === Pages.length - 1) pageI = 0;
                            else pageI++;

                        }

                        await Pages[pageI].then(async (embed) => {
                            await msg.edit(embed);
                        });
                    });

                    collector.on('end', async () => {
                        spamStopper.delete(message.author);
                        await msg.reactions.removeAll().catch(error => console.log(error));
                    });


                });
            });



        }

        const searchForString = args.slice(1).join(" ").toLowerCase();

        const wikiObjects = Object.keys(wikipedia);

        if (!searchForString) return ErrorMsg(bot, message, "Please provide a character/map name to view their information!\nOr you can do \n`" + prefix + "idvwiki survivor`\n`" + prefix + "idvwiki hunter`\n`" + prefix + "idvwiki maps`\nto switch between survivor/hunter/map information quicker :)\n\n**Examples:**\n`" + prefix + "idvwiki lucky guy`\n`" + prefix + "idvwiki the red church`");

        for (const wikiObject of wikiObjects) {
            //If the author asks to scroll through character/map pages
            if (wikipedia[wikiObject][0].Name.includes(searchForString)) {
                if (spamStopper.has(message.author)) return message.reply(`**Please react with ❌ on the previous embed..**`);

                const wikiArray = [];

                for (const y of wikipedia[wikiObject].slice(1)) {
                    wikiArray.push(sendWikiInfo(y, wikipedia[wikiObject]));

                }

                spamStopper.add(message.author);
                return await switchPages(wikiArray);

            }
            //If the author is looking for a specific wikipedia page
            for (const x of wikipedia[wikiObject].slice(1)) {
                if (x.Name.includes(searchForString)) {

                    await sendWikiInfo(x, wikipedia[wikiObject]).then(embed => {
                        return message.channel.send(embed);
                    });
                    return;
                }
            }

        }

        return ErrorMsg(bot, message, "Please provide a character/map name to view their information!\nOr you can do \n`" + prefix + "idvwiki survivor`\n`" + prefix + "idvwiki hunter`\n`" + prefix + "idvwiki maps`\nto switch between survivor/hunter/map information quicker :)\n\n**Examples:**\n`" + prefix + "idvwiki lucky guy`\n`" + prefix + "idvwiki the red church`");

    }
}


