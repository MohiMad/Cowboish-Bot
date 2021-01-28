const logicPath = require("../models/logicpath.js");
const { MessageEmbed } = require("discord.js");
const { newLP, ErrorMsg } = require("../assets/functions.js");
const e = require("../assets/emojis.json");
const { Portraits, Frames } = require("../assets/items.json");

module.exports = {
    name: ["equip"],
    description: "This command alows you to fancinize and customize your `$prefixLP` the way you want it to look.\nYou get Portraits and you can buy portraits right? these Portraits/Frames are equipable using this command\n\n**Valid Items:** `portraits` or `frames`\n**Usage:** `$prefixequip <item(portrait/frame)> <portrait/frame's name>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "USE_EXTERNAL_EMOJIS"],
    category: "Logicpath",
    execute: async (message, args, bot, prefix) => {

        await newLP(message);
        let LP = await logicPath.findOne({ UserID: message.author.id });

        function frameFunction(message, frame, link) {

            let embed = new MessageEmbed()
                .setTitle("Your frame is now equipped!")
                .setColor("0x14abf7")
                .setDescription("Wanna see how it looks like? go ahead and do `" + prefix + "logicpath`")
                .setThumbnail(link);

            LP.frames.equipped = frame;
            LP.save().catch(e => console.log(e));

            message.channel.send(embed);
        }
        if (!args[1]) return ErrorMsg(bot, message, "**Missing Arguments!**\nPlease provide me what you want to equip after the command...\nAre you trying to equip a **frame** or a **portrait**?\n\nTo equip a specific *portrait-frame*, do `" + prefix + "equip frame <frameID>`\nAre you trying to equip a *portrait*? Do `" + prefix + "equip portrait <portrait name>`\n\nTo check what frames exist, do `" + prefix + "shop frames`\nTo check what portraits you have, do `" + prefix + "shop portraits`");
        else {

            if (["frame", "portrait-frame", "frames", "portrait-frames"].includes(args[1].toLowerCase())) {

                let description = ":",
                    equipped,
                    OwnedBoolean = Boolean,
                    wrongArgsBoo = Boolean;

                for (frame of Frames) {
                    if (LP.frames[frame.Item] === true) description = `${description} ${e[frame.Name[0]]}`;
                    else if (LP.Opened.includes(frame.Item)) description = `${description} ${e[frame.Name[0]]}`;

                    if (LP.frames.equipped === frame.Item) equipped = e[frame.Name[0]];
                }

                description = description + ` ${e.frame7} ${e.frame8} ${e.frame9} ${e.frame10}`
                if (!equipped) equipped = "None!";

                let framEmbed = new MessageEmbed()
                    .setAuthor(bot.user.username, bot.user.displayAvatarURL())
                    .setColor("RANDOM")
                    .setDescription("Please provide the frame's ID you want to equip!\nCorrect usage: `" + prefix + "equip frame <frameID>`\n\n**Frames you already own**" + description + "\n\n**Equipped frame**: " + equipped + "\n\nDunno what to equip? do `" + prefix + "shop frames` to see what's in the shop\nWanna unequip your frame? do `" + prefix + "equip frame none`")
                    .setFooter(message.author.tag, message.author.displayAvatarURL())
                    .setTimestamp();

                if (!args[2]) return message.channel.send(framEmbed);

                if (["none", "no", "unequip"].includes(args[2].toLowerCase())) {
                    LP.frames.equipped = "0";
                    LP.save().catch(e => console.log(e));
                    return message.reply("**Unequipped your portraitframe!**");

                }

                for (const frame of Frames) {
                    if (frame.Name.includes(args[2].toLowerCase())) {
                        wrongArgsBoo = true;
                        if (LP.frames[frame.Item] === true) frameFunction(message, frame.Item, frame.linkTag);
                        else if (LP.Opened.includes(frame.Item)) frameFunction(message, frame.Item, frame.linkTag);
                        else if (["frame7", "frame8", "frame9", "frame10"].includes(frame.Item)) frameFunction(message, frame.Item, frame.linkTag);
                        else OwnedBoolean = false;
                    }
                }
                if (wrongArgsBoo != true) return message.channel.send(framEmbed);
                if (OwnedBoolean === false) return message.channel.send(`**You can't equip that frame, ${message.author}**\nYou need to buy it from the shop ^-^`);


            } else if (["portrait", "portraits"].includes(args[1].toLowerCase())) {

                let ownedPortraits = ":";
                let x = 0;
                let portraitString = args.slice(2).join(" ");

                for (const portrait of Portraits.slice(1)) {
                    if (LP.Opened.includes(portrait.Item)) {
                        if(ownedPortraits.length > 1600){
                            x++;
                            if(portrait.Item === "seerBirthday") ownedPortraits += `...\nAnd **${x}** more portraits, ` + "`" + prefix +"view portraits` to view all."
                        } else {
                        ownedPortraits = `${ownedPortraits}\n${portrait.Name[0]}`;
                        }
                    }
                }
                if (ownedPortraits === ":") ownedPortraits = "None lol";

                let ownedPortraitEmbed = new MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("Pfff you're missing some arguments friend :<")
                    .setColor("0x6714f7")
                    .setThumbnail("https://i.imgur.com/NGzUkth.png")
                    .setFooter("Keep in mind that you can't equip a portrait you haven't obtained from an essence...\nOr bought it ofc", bot.user.displayAvatarURL())
                    .setDescription("Please provide me what portrait you want to equip, to do that, do`" + prefix + "equip portrait <portrait name>`\n\n**Dunno what portraits you have? Here are they**" + ownedPortraits + "\n\n**Example Usage**:\n`" + prefix + "equip portrait Black And White Priestess`\n\nWanna set your portrait back to your profile-picture? do `" + prefix + "equip portrait default`");


                if (!args[2]) return message.channel.send(ownedPortraitEmbed);

                if (["none", "unequip", "no", "default", "pfp", "profilepicture", "profilepic"].includes(portraitString.toLowerCase())) {

                    LP.Portrait = "0";
                    LP.save().catch(e => console.log(e));

                    return message.reply("**Your portrait has been set to your profile-picture!**");
                }

                for (const portrait of Portraits.slice(1)) {
                    if (portrait.Name.includes(portraitString.toLowerCase())) {
                        if (!LP.Opened.includes(portrait.Item)) return ErrorMsg(bot, message, "**You don't own this portrait!**\nPortraits are either obtainable from essences, events or purshasable from the shop\nYou need to buy it from the `shop`");

                        LP.Portrait = portrait.logicpathID;
                        await LP.save().catch(e => console.log(e));

                        let PortraitEmbed = new MessageEmbed()
                            .setTitle("Succesfully changed your portrait!")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL())
                            .setThumbnail(portrait.linkTag)
                            .setColor("0x952cdb")
                            .setDescription("Your portrait has been set to:\n**" + portraitString + "**\n\nWanna see how it looks like? Do `" + prefix + "logicpath`")
                            .setFooter(bot.user.tag, bot.user.displayAvatarURL());

                        return message.channel.send(PortraitEmbed);
                    }
                }

                return ErrorMsg(bot, message, "**Ooops, looks like you provided a nonexistent portrait...**\nAre you sure it exists? Make sure you typed it correctly...\n\nTo check what portraits you actually own, do `" + prefix + "shop portrait` or `" + prefix + "equip portrait`\n\n**Example of Usage: **`" + prefix + "equip portrait colorful memory forward`\n\nWanna set your portrait back to your profile-picture? do `" + prefix + "equip portrait default`")

            } else {
                return ErrorMsg(bot, message, "**Seems like you messed up with your first arguments**\nTo equip a specific *portrait-frame*, do `" + prefix + "equip frame <frameID>`\nAre you trying to equip a *portrait*? Do `" + prefix + "equip portrait <portrait name>`\n\nTo check what frames exist, do `" + prefix + "shop frames`\nTo check what portraits you have, do `" + prefix + "shop portraits`")
            }


        }//the else bracket!



    }
}