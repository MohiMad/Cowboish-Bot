const { ErrorMsg } = require("../../assets/functions.js");
const { MessageEmbed } = require("discord.js");
const { Filter, Maps } = require("../../assets/spawnLocations.json")

const spamStopper = new Set();
module.exports = {
    name: ["spawns", "spawn", "mapspawns", "map-spawns", "mapspawn", "map-spawn"],
    description: "Check the Spawn points of Survivors, Hunters, Cipher Machines and Dungeon locations in a specific map\nThe ingame maps are: Church, Hospital, Factory, Moonlit, Lakeside, Eversleeping, and Asylum... (Golden Cave isn't included because it's made of multiple floors/levels)\nThe **Filter** arguement can be: `ciphers`, `characters`, or `dungeon`... Providing one of these as your 2nd argument will make Cowboish only display the spawn-location of what you asked it to provide in that map\n\n**Command Usage:** `$prefixspawns <mapName> [Filter]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "MANAGE_MESSAGES", "ADD_REACTIONS"],
    category: "IdentityV",
    execute: async (message, args, bot, prefix) => {

        let msg = "**Too few arguments were given...**\nPlease provide me what map you want to check the spawns for... \n**Optional**: You can also provide what spawns you want to check for after providing the map name...\n\n**Map Names/Arguments (2nd):**\n\n**The Red Chruch** ➜ `church`\n**Sacred Heart Hospital** ➜ `hospital`\n**Arms Factory** ➜ `factory`\n**Leo's Memory** ➜ `memory`\n**Moonlit River Park** ➜ `moonlit`\n**Lakeside Village** ➜ `lakeside`\n**Eversleeping Town** ➜ `eversleeping`\n**White Sand Street Asylum** ➜ `asylum`\n\n**Spawn Arguments (3rd):**\n\n**Cipher Machines** ➜ `cipher`\n**Survivors/Hunter** ➜ `players`\n**Dungeon Location** ➜ `dungeon` Duuuh on this one xD\n\n**Examples:**\n`" + prefix + "spawns <mapName> <spawnType(optional)>`\n`" + prefix + "spawns church ciphermachines`";

        async function pageScroller(message, imageArray, title) {

            if (spamStopper.has(message.author)) return message.reply("**Please react with ❌ on the previous embed before being able to start a new spawn scroller!**");

            let Pages = imageArray;
            let pageI = 0;

            let embed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(title, message.author.displayAvatarURL(), imageArray[pageI].replace(".jpg", ""));

            embed.setFooter(`Spawn 1 of ${imageArray.length}`);
            embed.setImage(imageArray[pageI]);

            spamStopper.add(message.author);
            let msg = await message.channel.send(embed);

            await msg.react('⏪');

            await msg.react('⏩');

            await msg.react('❌');


            let backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;

            let forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;


            let back = msg.createReactionCollector(backFilter, {
                time: 300000
            });

            let forward = msg.createReactionCollector(forwardFilter, {
                time: 300000
            });

            back.on('collect', async r => {
                await r.users.remove(message.author);

                if (pageI === 0) {
                    pageI = Pages.length - 1;
                } else {
                    pageI--;
                }

                embed.setImage(imageArray[pageI]);
                embed.setFooter(`Spawn ${pageI + 1} of ${imageArray.length}`);

                await msg.edit(embed);
            });

            forward.on('collect', async r => {

                await r.users.remove(message.author);

                if (pageI === Pages.length - 1) {

                    pageI = 0;
                } else {
                    pageI++;
                }
                embed.setImage(imageArray[pageI]);
                embed.setFooter(`Spawn ${pageI + 1} of ${imageArray.length}`);

                await msg.edit(embed);
            });

            let endFilter = (reaction, user) => reaction.emoji.name === '❌' & user.id === message.author.id;

            let end = msg.createReactionCollector(endFilter, {
                time: 300000
            });

            end.on('collect', async r => {

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

                spamStopper.delete(message.author);
                msg.reactions.removeAll().catch(error => console.log(error));
            });

        };

        if (args[1]) {
            for (const map of Maps) {
                if (map.Name.includes(args[1].toLowerCase())) {
                    for (const filter of Filter) {
                        if (args[2]) {
                            if (filter.includes(args[2].toLowerCase())) {
                                return pageScroller(message, map[filter[0]], `${filter[0]} Spawn Locations In ${map.Name[0]}`);
                            }
                        }
                    }
                    const array = map.Players.concat(map.Ciphers, map.Dungeon);
                    return pageScroller(message, array, `All Spawn LocationS In ${map.Name[0]}`);
                }
            }
        }
        return ErrorMsg(bot, message, msg);
    }

}