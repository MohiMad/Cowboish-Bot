const { MessageEmbed } = require("discord.js")
const { getMember, ErrorMsg, randomizeAnIndex } = require("../../src/functions.js");
const { hunterIcon, survivorIcon, Blink } = require("../../src/emojis.json");
const { stripIndents } = require("common-tags");
const humanizeDuration = require("humanize-duration");
const { states, distance, Hunter, Survivor } = require("../../src/1v1.js");

module.exports = {
    name: ['1v1', "onevsone", "1vs1"],
    description: "Play a one versus one match against your friend!\nThe faction gets randomly picked by the bot.\nNeed a how-to-play explanation? Run `$prefix1v1 help`",
    usage: "1v1 <mention>",
    category: "IdentityV",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES", "ADD_REACTIONS"],
    execute: async (message, args, bot, prefix) => {

        let description, matchStart = Date.now();

        const mentionedUser = await getMember(message, args.slice(1).join(" "));
        const author = await getMember(message, message.author.id);

        if (!args[1]) return ErrorMsg(bot, message, "Who would you like to 1v1? Mention them in your 1st arguments.\n**Example:** `" + prefix + "1v1 <@mention>`\n\nYou can run `" + prefix + "1v1 help` to see what every method does and their cons and pros.");
        if (["help", "methods"].includes(args[1].toLowerCase())) {


            const explanationEmbed = new MessageEmbed()
                .setTitle("The Explanation Section of the 1v1 command!")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription("The `1v1` command simulates an Identity V one vs one custom match. You request a user to play a match, and the factions gets randomly selected by the bot. Both factions have different methods that benefits them during the match. The methods are explained below.")
                .addField("\u200b", stripIndents`
            > **${hunterIcon} - Hunter's Presence**: 
             ~ \`active\`, meaning that the Hunter isn't stunned, during attack recovery, or AFK.
             ~ \`stunned\`, means that the Hunter is stunned. When the Hunter is stunned, they can't perform any actions or do any methods for the next 7s.
        
            > **${Blink} - Hunter's Trait (Blink)**: 
             Blink allows the Hunter to close the gap between them and the Survivor. 
             It gets off cooldown every 5 moves the players make.
             
             __Blink's different states are__:
                - \`Ready to use\`: The Blink is off cooldown and can be used.
                - \`On Cooldown\`: The Blink is is on cooldown, meaning that it can not be used yet.
            `)
                .addField("\u200b", stripIndents`
            > **Explanation of the \`chase\` Method**:
             This method allows the Hunter to close the gap between them and the Survivor. It makes the Distance shorter.

           > **Explanation of the \`blink\` Method**:
            This method makes the Hunter use their Blink. Read more about what Blink does in the explanation above.

           > **Explanation of the \`attack\` Method**: 
            The attack method doesn't work if the Distance is ${distance[2].e} *Far*. This method damages the Survivor depending on different factors, luck is one of them.
            `)
                .addField(`**Character Distance** (${[distance[0].e, distance[1].e, distance[2].e].join(", ")}):`,
                    stripIndents`
             The Distance represent how far/close the player is to the other.
             Being at the closest distance benefits the Hunter in having a chance of hitting the Survivor and it increases the chance of landing a successful blink.
             The closest distance makes the Survivor able to tightkite the Hunter and increases the chance of them stunning the Hunter.`
                )
                .addField("\u200b", stripIndents`
                > **The Survivor's Health States** (${[states[0].emoji, states[1].emoji, states[2].emoji].join(", ")}):
                 Represents the Health of the Survivor.
                 ${states[2].emoji} → ${states[2].des}, has 2 hits left before getting knocked down.
                 ${states[1].emoji} → ${states[1].des}, one hit from being knocked down.
                 ${states[0].emoji} → ${states[0].des}, match ends. 

                > **⏱️ - Kiting Duration**
                 How long the Survivor has been kiting for. 
                 Increases the more moves the players make and when the Survivor stuns the Hunter.`)
                .addField("\u200b", stripIndents`
                > **Explanation of the \`tightkite\` Method**:
                Decreases the distance between the Survivor and the Hunter but increases the chance of stunning the Hunter.

               > **Explanation of the \`transition\` Method**:
                Increases the distance between the Hunter and the Survivor. Keep in mind that transitioning too much might lead to a dead end, causing the Survivor to get hit.

               > **Explanation of the \`stun\` Method**:
                Attempt to stun the Hunter. Makes the Hunter unable to do anything for 7s. Increases the kiting duration by 3 seconds.
           `)
                .setColor("#F7A60E")
                .setFooter(bot.user.tag, bot.user.displayAvatarURL());

            return message.channel.send(explanationEmbed);
        }
        if (!mentionedUser) return ErrorMsg(bot, message, "Couldn't find that user!\nMake sure you mentioned them in your command execution...");

        if (mentionedUser.id === author.id) return message.reply("Umm do you want to 1v1 yourself??!");
        if (mentionedUser.user.bot) return message.reply("Dude... you can't 1v1 a bot are you serious?");

        const filter = (m) => !m.author.bot;

        let messagesSent = 0;

        const collector = await message.channel.createMessageCollector(filter, {
            time: 30000,
            idle: 120000
        });

        const users = [author.user, mentionedUser.user];
        const randomFaction = randomizeAnIndex(users);

        const otherUser = Math.abs(randomFaction - 1);

        const HuntingUser = new Hunter(users[randomFaction]);
        const SurvivingUser = new Survivor(users[otherUser]);

        function updateDes() {
            const time = humanizeDuration(Date.now() - matchStart, { units: ["s", "m"], round: true });
            const kited = humanizeDuration(SurvivingUser.Kited, { units: ["s", "m"], round: true });

            description = stripIndents`
                    
                    ${hunterIcon} | **${users[randomFaction].toString()} is the Hunter:** 
                    Hunters can use the methods: \`chase\`, \`blink\`, and \`attack\`
            
                    ~ ${hunterIcon} ⁝ **Hunter's Current Presence:** *${String(HuntingUser.isStunned).replace(true, "Stunned").replace(false, "Active")}*
                    ~ ${Blink} ⁝ **Hunter's Blink:** *${String(HuntingUser.hasBlink).replace(false, "On Cooldown").replace(true, "Ready to use")}*
                    ~ ${distance[HuntingUser.Distance].e} ⁝ **Distance From The Survivor:** *${distance[HuntingUser.Distance].des}*
            
                    > ⏱ ⁝ **Match Duration:** *${time}*
                        - Both Players can write \`surrender\` to cancel the match.
            
                    ${survivorIcon} | **${users[otherUser]} is the Survivor:**
                    Survivors can use the methods: \`tightkite\`, \`transition\`, and \`stun\`
            
                    ~ ${states[SurvivingUser.Health].emoji} ⁝ **Survivor's Health State:** *${states[SurvivingUser.Health].des}*
                    ~ ⏱ ⁝ **Kiting Duration:** *${kited}*
                    ~ ${distance[HuntingUser.Distance].e} ⁝ **Distance From The Hunter:** *${distance[HuntingUser.Distance].des}*
                    `
        }

        updateDes();
        const embed = new MessageEmbed()
            .setColor("0xFFD500")
            .setThumbnail(HuntingUser.data.displayAvatarURL({ format: "png", dynamic: true }))
            .setTitle(`${message.author.username} challenged ${mentionedUser.user.username} for a 1vs1`)
            .setDescription(description)
            .setTimestamp();

        const botMsg = await message.channel.send(`${mentionedUser}, ${message.author.username} wants to 1v1. Do you accept the challenge?\nPlease type either \`yes\` or \`no\` within the next 30 seconds!`);

        collector.on('collect', async (m) => {
            setTimeout(async () => {
                await m.delete().catch((e) => console.log(e));
            }, 15000);

            if (messagesSent === 0 && m.author.id == mentionedUser.id) {
                if (["n", "no", "nope"].includes(m.content.toLowerCase())) {
                    collector.stop();
                    return botMsg.edit(`${mentionedUser} refused to 1v1. Cancelled!`);

                } else if (["y", "yes", "ya"].includes(m.content.toLowerCase())) {
                    messagesSent++;
                    collector.resetTimer({ time: 600000, idle: 120000 });

                    return await botMsg.edit(`${HuntingUser.data.toString()} begins! Do your first move!`, embed);
                }
            }

            if (messagesSent === 0) return;

            if ([1, 2, 3, 4, 5].includes(messagesSent / 4)) HuntingUser.hasBlink = true;

            SurvivingUser.Kited += 3500;
            const firstWordRegex = new RegExp(`^${prefix}?[a-z]*`, "gi");

            if (SurvivingUser.data.id === m.author.id && SurvivingUser.Turn) {
                const SurvRegex = /tightkite|kite|loop|stun|pallet|transition|surrender/gi;
                if (SurvRegex.test(m.content.match(new RegExp(`^${prefix}?[a-z]*`, "gi"))[0])) {
                    SurvivingUser[m.content.toLowerCase().match(SurvRegex)[0].replace(prefix, "")](message, HuntingUser);

                    updateDes();
                    SurvivingUser.Turn = false;
                    messagesSent++;
                    HuntingUser.Turn = true;
                    if (SurvivingUser.Health != 0) botMsg.edit(`It's ${HuntingUser.data.toString()}'s turn now!`, embed.setDescription(description).setThumbnail(HuntingUser.data.displayAvatarURL({ dynamic: true })));

                }
            }
            if (HuntingUser.data.id === m.author.id && HuntingUser.Turn) {
                const HuntRegex = /blink|attack|hit|chase|surrender/gi;

                if (HuntRegex.test(m.content.match(firstWordRegex)[0])) {
                    HuntingUser[m.content.toLowerCase().match(HuntRegex)[0].replace(prefix, "")](message, SurvivingUser);
                    updateDes();
                    SurvivingUser.Turn = true;
                    messagesSent++;
                    HuntingUser.Turn = false;

                    if (SurvivingUser.Health != 0) botMsg.edit(`It's ${SurvivingUser.data.toString()}'s turn now!`, embed.setDescription(description).setThumbnail(SurvivingUser.data.displayAvatarURL({ dynamic: true })));
                }
            }

            if (SurvivingUser.Health === 0 || SurvivingUser.Surrendered || HuntingUser.Surrendered) {
                collector.stop();
                botMsg.edit(`The Match Has Ended!\n**Total moves made:** ${messagesSent - 1}\n\nHave a suggestion for improving the command? Run \`${prefix}suggest\` to let the developer know about your idea.`, embed.setDescription(description).setThumbnail(bot.user.displayAvatarURL()));
            }


        });

        collector.on('end', async () => {
            //meaning that the collector has been shut down by the bot.
            if (SurvivingUser.Health == 0) return;
            if (collector.options.time === 30000) return botMsg.edit(`Seems like ${mentionedUser.toString()} is AFK. How sad...`);

            return botMsg.edit(`Seems like one of the players went AFK... How sad...`);

        });

    }
}