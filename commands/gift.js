const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require("discord.js");

const { findMember, newLP, ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'gift',
    description: "Gift yo friends yo items :D",
    execute: async (message, args, bot) => {

        let LP = await logicPath.findOne({ UserID: message.author.id });

        let gifted = await findMember(message, args[1]);

        let giftedLP = await logicPath.findOne({ UserID: gifted.id });

        if (!LP) return newLP(message);

        if (!args[1] || !args[2] || !args[3]) return ErrorMsg(bot, message, "**Too few arguments**\nPlease provide someone to gift, how much you want to gift and what you want to gift,\nLol did i get you confused?\nHere is the correct usage: `>gift <@tagSomeone> <amount(NUMBER)> <item>`\n\nGiftable items are: `inspirations`, `fragments`, `clues`, `ess1`, `ess2`, `ess3`");

        if (!gifted) return ErrorMsg(bot, message, "couldn't find that user!\nPlease make sure that you mention them right after the command execution!\nExample: `>gift`" + ` ${message.author} ` + "`10 fragments`");

        if (gifted.id === message.author.id) return ErrorMsg(bot, message, "Are you serious??\nY-you wanna gift yourself??!\nSorry friend but that's not how life works :/");

        if (!giftedLP) return ErrorMsg(bot, message, "This user doesn't have any data saved!\nPlease ask them to execute one of the commands below so i can create an account for em :)\n\n`>quick`, `>hunt`, `>roll` or other `>help logicpath` commands");

        if (["frag", "frags", "fragments", "fragment"].includes(args[3].toLowerCase())) {

            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 fragments`");

            }
            else if (LP.frags < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough fragment(s) you have **" + LP.frags + "** fragment(s)!");

            } else {
                LP.frags = LP.frags - Number(args[2]);

                giftedLP.frags = giftedLP.frags + Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));

                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:frags:655840344725913600>`)
                    .setColor("RANDOM")
                    .setFooter(`${gifted.user.username} is happy now :)`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        }
        else if (["insp", "inspiration", "inspirations"].includes(args[3].toLowerCase())) {

            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 inspirations`");

            }
            else if (LP.Inspirations < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough fragment(s) you have **" + LP.Inspirations + "** fragment(s)!");

            } else {
                LP.Inspirations = LP.Inspirations - Number(args[2]);

                giftedLP.Inspirations = giftedLP.Inspirations + Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));


                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:inspirations:655840409674711060>`)
                    .setColor("RANDOM")
                    .setFooter(`${message.author.username} made ${gifted.user.username} glad :3`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        }
        else if (["clues", "clue"].includes(args[3].toLowerCase())) {
            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 clues`");

            }
            else if (LP.Clues < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough clue(s) you have **" + LP.Clues + "** clue(s)!");

            } else {
                giftedLP.Clues = giftedLP.Clues + Number(args[2]);

                LP.Clues = LP.Clues - Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));


                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:clue:655384523735040000>`)
                    .setColor("RANDOM")
                    .setFooter(`${message.author.username} made ${gifted.user.username} glad :3`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        }
        else if (["ess1", "s11-1", "1"].includes(args[3].toLowerCase())) {

            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 s11-1`");

            }
            else if (LP.Ess1 < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough s11-1 essence(s) you have **" + LP.Ess1 + "** s11-1 essence(s)!");

            } else {
                LP.Ess1 = LP.Ess1 - Number(args[2]);

                giftedLP.Ess1 = giftedLP.Ess1 + Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));


                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:ess1:655840713904488469>`)
                    .setColor("RANDOM")
                    .setFooter(`${gifted.user.username} is happy now :)`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        }
        else if (["ess2", "s11-2", "2"].includes(args[3].toLowerCase())) {
            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 s11-2`");

            }
            else if (LP.Ess2 < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough s11-2 essence(s) you have **" + LP.Ess2 + "** s11-2 essence(s)!");

            } else {
                LP.Ess2 = LP.Ess2 - Number(args[2]);

                giftedLP.Ess2 = giftedLP.Ess2 + Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));


                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:ess2:655840643847028751>`)
                    .setColor("RANDOM")
                    .setFooter(`That was kind of you, ${message.author.username}`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        }
        else if (["ess3", "s11-3", "3"].includes(args[3].toLowerCase())) {
            if (isNaN(args[2]) === true) {
                return ErrorMsg(bot, message, "The amount to be gifted must be a number!\nExample: `>gift`" + ` ${message.author}` + "` 10 s11-3`");

            }
            else if (LP.Ess3 < args[2]) {
                return ErrorMsg(bot, message, "You don't have enough s11-3 essence(s) you have **" + LP.Ess3 + "** s11-3 essence(s)!");

            } else {
                LP.Ess3 = LP.Ess3 - Number(args[2]);

                giftedLP.Ess3 = giftedLP.Ess3 + Number(args[2]);

                [LP, giftedLP].forEach(x => x.save().catch(e => console.log(e)));

                let giftedEmbed = new RichEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL)
                    .setDescription(`${message.author.username} gifted ${gifted.user.username} ${args[2]}<:ess3:655840571616919586>`)
                    .setColor("RANDOM")
                    .setFooter(`That was kind of you, ${message.author.username}`, gifted.user.displayAvatarURL);

                message.channel.send(giftedEmbed);

            }
        } else {
            return ErrorMsg(bot, message, "Looks like you're having trouble with the items you want to gift\nHere is a list of giftable items\n\n<:frags:655840344725913600> | Shortcuts: `frags`, `fragment`, `fragments`\n<:inspirations:655840409674711060> | Shortcuts: `insp`, `inspirations`, `inspiration`\n<:clue:655384523735040000> | Shortcuts: `clue`, `clues`\n<:ess1:655840713904488469> | Shortcuts: `ess1`, `s11-1`, `1`\n<:ess2:655840643847028751> | Shortcuts: `ess2`, `s11-2`, `2`\n<:ess3:655840571616919586> | Shortcuts: `ess3`, `s11-3`, `3`\nExample: `>gift`" + ` ${message.author}` + "` 10 fragments`");
        }



    }
}