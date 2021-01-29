const { ErrorMsg, findRole, randomizeAnIndex, } = require("../assets/functions.js");
const { Characters } = require("../assets/items.json");
const { Util } = require('discord.js');
module.exports = {
    name: ["randomize", "random", "pickrandomly"],
    description: "Picks you a random Item, Survivor or Hunter... You choose which ;)\nTo randomize between Survivors, add `survivors` as your 1st arguments and same goes for Hunters...\nI can pick a random member form the server if you do `$prefixrandomize member`...\nI can also pick a random member from a role you provided if you do it this way `$prefixrandomize member role <role name/id/mention>`\n\nIf you want Cowboish to pick something from a list your provide, add the list of your items you want Cowboih to pick between separated with a comma\n\n**Usage:** `$prefixrandomize <survivors/hunters>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "IdentityV",
    execute: async (message, args, bot, prefix) => {

        function filterItems(isSurv) {
            return Characters.filter(x => (x.isSurvivor ? x.isSurvivor : false) == isSurv);
        }
        function insert(arr, index, ...items) {
            return [
                ...arr.slice(0, index),
                ...items,
                ...arr.slice(index)
            ];
        }


        if (!args[1]) return ErrorMsg(bot, message, "**Too few arguments!**\nPlease provide me some values separated with a comma for me to pick from!\n\n**Example:** `" + prefix + "randomize cat, fish, and a dog`\n**Example respond: **I choose **dog**\n\nRemember to seperate the values with a comma in between\n\nOr you can do `" + prefix + "randomize survivor` or `" + prefix + "randomize hunter` so i pick a random character for you!\n\nYou can also do `" + prefix + "randomize member` if you want me to pick a random member from this server...\n\nDo `" + prefix + "randomize member role <role Here>` and I will pick a random member from the role you provided!");

        if (["surv", "survivor", "survivors"].includes(args[1].toLowerCase())) {
            let survivorArray = insert(filterItems(true), 0,
                {
                    Name: ["The Doctor"]
                },
                {
                    Name: ["The Lawyer"]
                },
                {
                    Name: ["The Thief"]
                },
                {
                    Name: ["The Gardener"]
                },
                {
                    Name: ["The LuckyGuy"]
                },
            );

            return message.channel.send(`I choose **${survivorArray[randomizeAnIndex(survivorArray)].Name[0].replace("The ", "")}**`);
        }

        if (["hunter", "hunters"].includes(args[1].toLowerCase())) {
            let hunterArray = insert(filterItems(false), 0, { Name: ["The HellEmber"] });

            return message.channel.send(`I choose **${hunterArray[randomizeAnIndex(hunterArray)].Name[0].replace("The ", "")}**`);
        }

        if (["member", "members", "server-members", "server-member"].includes(args[1].toLowerCase())) {
            await message.guild.members.fetch().catch(console.error);

            if (["role", "roles"].includes(args[2].toLowerCase())) {
                const role = await findRole(message, args.slice(3).join(" "));
                if (!role) return message.channel.send(`**You gave no role... ${message.author.toString()}**\nPlease mention the role, provide it's name or ID in your 3rd arguments in order for me to randomize a member from that role`);

                const randomMemberFromTheRole = role.members.random();

                return message.channel.send(`I choose **${randomMemberFromTheRole.user.tag}**`);
            }

            const randomMember = await message.guild.members.cache.filter((m) => m.user.bot != true).random();
            if (!randomMember) return message.channel.send(`I choose **${message.author.tag}** because I couldn't find anyone else >:v`);
            if (randomMember.id === message.author.id) return message.channel.send(`I choose **you** ;)`);

            return message.channel.send(`I choose **${randomMember.user.tag}**`);
        }

        if (!args.slice(1).join(" ").includes(",")) return message.channel.send(`I choose **${args.slice(1).join(" ")}** since you didn't provide anything else -v-`);

        const values = args.slice(1).join(" ").split(",");

        return message.channel.send(Util.cleanContent(`I choose **${values[randomizeAnIndex(values)]}**`, message));
    }
}