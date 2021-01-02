
const logicPath = require("../models/logicpath.js");
const { newLP, addCooldown, findMember, findCooldown, spliceArray, findCooldownByCommand } = require("../functions.js");
const { PowerUps } = require("../essences/items.json");
const { stripIndents } = require("common-tags");
const { MessageEmbed } = require("discord.js");
const e = require("../emojis.json");

module.exports = {
    name: ["use", "consume"],
    description: "Just as `$prefixequip` command is made to equip portraits and frames, this command is made to use/activate specific powerups\n\n**Usage:** `$prefixuse <powerup> [additional-Arguments]`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "USE_EXTERNAL_EMOJIS"],
    category: "Logicpath",
    execute: async (message, bot, args, prefix) => {
        await newLP(message);
        const rg = new RegExp(/\$/, "g");

        const LP = await logicPath.findOne({ UserID: message.author.id });

        const noArgsEmbed = new MessageEmbed()
            .setTitle("Cowboish Powerups activation corner")
            .setColor("0xC70039")
            .setThumbnail("https://i.imgur.com/8Qcg9F1.png")
            .setDescription(stripIndents`You're low on arguments, here are what arguments you can use:
            
                ${e.blackMud} | **Black Mud (${LP.Inventory.filter(x => x === "mud").length})**
                To use, do $${prefix}use mud <user>$
                $<user>$ is the user/friend you want to throw mud at

                ${e.speedPill} | **Cooldown Minimizer (${LP.Inventory.filter(x => x === "cooldownMinimizer").length})**
                To use, do $${prefix}use cooldownMinimizer$

                ${e.Excitement} | **Effect Remover / Excitement** **Cooldown Minimizer (${LP.Inventory.filter(x => x === "excitement").length})**
                Do $${prefix}use excitement$ to remove negative-effects
                
                `
                .replace(rg, "`"))

        if (!args[1]) return message.channel.send(noArgsEmbed);

        function findit(powerup) {
            return PowerUps[PowerUps.findIndex(x => x.Name[0] === powerup)];
        }

        const blackMud = findit("Black Mud");
        const speedPill = findit("Cooldown Minimizer");
        const Excitement = findit("Excitement");

        if (blackMud.Name.includes(args[1].toLowerCase())) {
            const Friend = await findMember(message, args[2]);

            if (Friend.id === message.author.id) return message.channel.send(`**${message.author.toString()}, why do you wanna throw mud at yourself?**\nAsk others to do that pretty sure they will accept your request without hesitating ^-^`);
            if (Friend.id === bot.user.id) return message.channel.send(`${message.author.toString()}, no thank you... The superior Cowboish doesn't want your mud -v-`);
            if (Friend.user.bot) return message.channel.send(`${message.author.toString()}, I don't think my bot friend ${Friend.toString()} want mud, keep it for yourself.`);

            if (!LP.Inventory.includes("mud")) return message.channel.send(`**You don't have any ${e.blackMud} Black Muds, ${message.author.toString()}...**\nYou need to buy more from the shop!`);
            if (!Friend) return message.channel.send("**You need to mention someone to throw the Black Mud at**\nFor instance `" + prefix + "use mud `" + message.author.toString());
            const isMudded = await findCooldownByCommand(`Mud[${Friend.id}]`);

            if (isMudded) return message.channel.send(`**Someone have already put ${e.blackMud} Black Mud on ${Friend.user.username}'s Logicpath profile...**\nYou can't stack Muds on your poor friend（︶^︶）`);
            await addCooldown(message, 86400000, `Mud[${Friend.id}]`);

            LP.Inventory = await spliceArray(LP.Inventory, "mud");
            LP.save().catch(err => console.log(err));

            return message.channel.send(`**${message.author.username} threw ${e.blackMud} Black Mud at ${Friend.user.username}'s Logicpath profile >:D**\nNow whenever ${Friend.user.username} checks their logicpath profile, it's going to be full of Mud 😌👌`);

        }

        if (Excitement.Name.includes(args[1].toLowerCase())) {
            if (!LP.Inventory.includes("excitement")) return message.channel.send(`**You don't have any ${e.Excitement} Excitement-Powerups, ${message.author.toString()}...**\nYou need to buy more from the shop!`);

            const isMudded = await findCooldownByCommand(`Mud[${message.author.id}]`);
            if (!isMudded) return message.channel.send(`**${message.author.username}**, you can't use this powerup because you don't have any negative-powerups put on you at the moment...`);
            await isMudded.delete({}, err => {
                if (err) console.log(err);
            });

            LP.Inventory = await spliceArray(LP.Inventory, "excitement");
            LP.save().catch(err => console.log(err));

            return message.channel.send(`**${message.author.username}**, successfully removed the Black Mud's effect from your Logicpath profile :D`);
        }

        if (speedPill.Name.includes(args[1].toLowerCase())) {
            const cooldownReducerDoc =
                await findCooldown(message, `10Cooldown[${message.author.id}]`) ||
                await findCooldown(message, `30Cooldown[${message.author.id}]`) ||
                await findCooldown(message, `50Cooldown[${message.author.id}]`);


            if (cooldownReducerDoc) return message.channel.send(`**${message.author.toString()}**, you have already activated one ${e.speedPill} Cooldown Minimizer...**\nYou can't stack them...`);
            if (!LP.Inventory.includes("cooldownMinimizer")) return message.channel.send(`**You don't have any ${e.speedPill} Cooldown Minimizers, ${message.author.toString()}...**\nYou need to buy more from the shop!`);

            const randomChance = [10, 30, 50][Math.floor(Math.random() * 3)];

            const addedCooldownMinimizer = new MessageEmbed()
                .setColor("0x92B879")
                .setTitle("Successfully activated the Cooldown Minimizer")
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setThumbnail(speedPill.Link)
                .setDescription(stripIndents`
            The ${e.speedPill} Cooldown Minimizer have been activated.
            All cooldowns will now be reduced **${randomChance}%** for the next **1 hour**

            Keep in mind that already-assigned cooldowns' duration won't change... Only cooldowns assigned after the activation are **${randomChance}%** shorter...
            
            `)
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            LP.Inventory = await spliceArray(LP.Inventory, "cooldownMinimizer");
            await addCooldown(message, 3600000, `${randomChance}Cooldown[${message.author.id}]`);
            return message.channel.send(addedCooldownMinimizer);
        }

        return message.channel.send("You provided invalid arguments. Please read through the embed below again...", noArgsEmbed);


    }
}