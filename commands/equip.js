const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require("discord.js");

const { findMember, newLP, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'equip',
    description: "Equip the frame you bought!",
    execute: async (message, args, bot) => {

        let LP = await logicPath.findOne({ UserID: message.author.id });

        if (!LP) return newLP(message);

        function freeToUse(message, fram) {

            let freeToUseEmbed = new RichEmbed()
                .setTitle("Your frame is now equipped!")
                .setColor("BLUE")
                .setDescription("Wanna see how it looks like? go ahead and do `>logicpath`")
                .attachFiles([`./pics/${fram}.png`])
                .setThumbnail("attachment://" + fram + ".png");

            message.channel.send(freeToUseEmbed);

        }


        function frame(message, frames, eFrame) {
            if (eFrame === false) {
                return ErrorMsg(bot, message, "You don't have that frame!\nYou need to buy that frame to be able to equip it!\n\nTo buy the frame, do `>buy " + frames + "`\nTo check what frames exists, so `>shop frames`");
            }

            let embed = new RichEmbed()
                .setTitle("Your frame is now equipped!")
                .setColor("BLUE")
                .setDescription("Wanna see how it looks like? go ahead and do `>logicpath`")
                .attachFiles([`./pics/${frames}.png`])
                .setThumbnail("attachment://" + frames + ".png");

            LP.frames.equipped = frames;
            LP.save().catch(e => console.log(e));

            message.channel.send(embed);
        }

        if (!args[1]) {

            let description = ":";

            if (LP.frames.frame1 === true) {
                description = description + " <:frame1:693410346005954580>";

            }
            if (LP.frames.frame2 === true) {
                description = description + " <:frame2:693410403283370045>";

            }
            if (LP.frames.frame3 === true) {
                description = description + " <:frame3:693410506643472385>";

            }
            if (LP.frames.frame4 === true) {
                description = description + " <:frame4:693526158830075955>";

            }
            if (LP.frames.frame5 === true) {
                description = description + " <:frame5:693526250647715892>";

            }
            if (LP.frames.frame6 === true) {
                description = description + " <:frame6:694820135306919977>";

            }

            let equipped;

            if (LP.frames.equipped === "frame1") {
                equipped = "<:frame1:693410346005954580>";
            }
            else if (LP.frames.equipped === "frame2") {
                equipped = "<:frame2:693410403283370045>";
            }
            else if (LP.frames.equipped === "frame3") {
                equipped = "<:frame3:693410506643472385>";
            }
            else if (LP.frames.equipped === "frame4") {
                equipped = "<:frame4:693526250647715892>";
            }
            else if (LP.frames.equipped === "frame5") {
                equipped = "<:frame5:693526158830075955>";
            }
            else if (LP.frames.equipped === "frame6") {
                equipped = "<:frame6:694820135306919977>";
            }
            else if (LP.frames.equipped === "frame7") {
                equipped = "<:frame7:697804971227349103>";
            }
            else if (LP.frames.equipped === "frame8") {
                equipped = "<:frame8:706555854513766490>";
            }
            else {
                equipped = "None!";
            }




            let framEmbed = new RichEmbed()
                .setAuthor(message.author.tag, bot.user.displayAvatarURL)
                .setColor("RED")
                .setDescription("Please provide the frame's ID you want to equip!\nCorrect usage: `>equip <frameID>`\n\n**Frames you already own**" + description + "\n▔ ▔ ▔ ▔ ▔\n**Equipped frame**: " + equipped + "\n▔ ▔ ▔ ▔ ▔\nDunno what to equip? do `>shop frames` to see what's in the shop\nWanna unequip your frame? do `>equip none`")
                .setTimestamp();

            message.channel.send(framEmbed);

        } else if (["frame1", "detective"].includes(args[1].toLowerCase())) {
            return frame(message, "frame1", LP.frames.frame1);
        }
        else if (["frame2", "valentine"].includes(args[1].toLowerCase())) {
            return frame(message, "frame2", LP.frames.frame2);
        }
        else if (["frame3", "allstar"].includes(args[1].toLowerCase())) {
            return frame(message, "frame3", LP.frames.frame3);
        }
        else if (["frame4", "tree"].includes(args[1].toLowerCase())) {
            return frame(message, "frame4", LP.frames.frame4);
        }
        else if (["frame5"].includes(args[1].toLowerCase())) {
            return frame(message, "frame5", LP.frames.frame5);
        }
        else if (["frame6"].includes(args[1].toLowerCase())) {
            return frame(message, "frame6", LP.frames.frame6);
        }
        else if (["frame7"].includes(args[1].toLowerCase())) {
            LP.frames.equipped = "frame7";
            LP.save().catch(e => console.log(e));

            freeToUse(message, "frame7");

        }
        else if (["frame8"].includes(args[1].toLowerCase())) {
            LP.frames.equipped = "frame8";
            LP.save().catch(e => console.log(e));

            freeToUse(message, "frame8");

        }
        else if (["none", "no"].includes(args[1].toLowerCase())) {
            LP.frames.equipped = "0";
            LP.save().catch(e => console.log(e));
            return message.reply("Unequipped your portraitframe!");

        }



    }
}