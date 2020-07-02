const logicPath = require("../models/logicpath.js");
const { ErrorMsg, newLP } = require("../functions.js");

const { RichEmbed } = require('discord.js');


module.exports = {
    name: 'buy',
    description: "buy some stuff",
    execute(message, args, bot, prefix) {



        const buyEmbed = new RichEmbed()
            .setTimestamp()
            .setColor("GREEN")
            .setFooter("Cowboish bot", "https://cdn.discordapp.com/emojis/667718317032603659.png?v=1")
            .setAuthor(`${message.author.username} successfully bought...`, message.author.avatarURL);

        //____________buy embed is here_______________


        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);

            function frame(message, frame, price, framePath) {
                if (framePath === true) {
                    return ErrorMsg(bot, message, "You already own this frame, why would you buy it twice?\nAre you trying to equip it instead of another one?\nIf so then `" + prefix + "equip` is the command you're looking for...");
                } else if (LP.frags < price) {
                    return ErrorMsg(bot, message, "Poor you can't afford that!\nYou need " + `**${price - LP.frags}**<:frags:655840344725913600> more...`)
                } else {

                    let frameEmbed = new RichEmbed()
                        .setAuthor("Successful purchase!", message.author.displayAvatarURL)
                        .setDescription(`You successfully bought ${frame} and paid ${price}<:frags:655840344725913600>\nIt's now equipped and can be seen if you do` + "`" + prefix + "logicpath`\n\nTo change your frame to another one, do `" + prefix + "equip <FrameID>`")
                        .attachFiles([`./pics/${frame}.png`])
                        .setThumbnail("attachment://" + frame + ".png");

                    if (frame === "frame1") LP.frames.frame1 = true;
                    if (frame === "frame2") LP.frames.frame2 = true;
                    if (frame === "frame3") LP.frames.frame3 = true;
                    if (frame === "frame4") LP.frames.frame4 = true;
                    if (frame === "frame5") LP.frames.frame5 = true;
                    if (frame === "frame6") LP.frames.frame6 = true;

                    LP.frames.equipped = frame;
                    LP.frags = LP.frags - price;

                    LP.save().catch(e => console.log(e));

                    message.channel.send(frameEmbed);
                }

            }


            if (!LP) { newLP(message) }

            else if (!args[1]) {
                ErrorMsg(bot, message, "Please provide something to buy!\nUsage: `" + prefix + "buy <ItemHERE>`\n\nDunno what to buy? do `" + prefix + ">shop` to check what you can buy")
            }
            //buy essences here
            else if (["s11-2", "s112", "ess2"].includes(args[1].toLowerCase()) || args[1] === "2") {
                if (LP.Inspirations < 96) {
                    message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more!`)

                }
                else {
                    buyEmbed.setDescription(`You bought **1** <:ess3:655840571616919586> and paid *96* <:inspirations:655840409674711060> `);
                    message.channel.send(buyEmbed);

                    LP.Inspirations = LP.Inspirations - 96;
                    LP.Ess2 = LP.Ess2 + 1;
                    LP.save().catch(err => console.log(err));
                }
            }

            else if (["s111", "s11-1", "ess1"].includes(args[1].toLowerCase()) || args[1] === "1") {
                if (LP.Inspirations < 96) {
                    message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more`)

                }
                else {
                    buyEmbed.setDescription(`You bought **1** <:ess1:655840713904488469> and paid *96* <:inspirations:655840409674711060> `);
                    message.channel.send(buyEmbed);

                    LP.Inspirations = LP.Inspirations - 96;
                    LP.Ess1 = LP.Ess1 + 1;
                    LP.save().catch(err => console.log(err));
                }
            }

            else if (["s11-3", "s113", "ess3"].includes(args[1].toLowerCase()) || args[1] === "3") {
                if (LP.Inspirations < 96) {
                    message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more!`)

                }
                else {
                    buyEmbed.setDescription(`You bought **1** <:ess2:655840643847028751> and paid *96* <:inspirations:655840409674711060> `);
                    message.channel.send(buyEmbed);

                    LP.Inspirations = LP.Inspirations - 96;
                    LP.Ess3 = LP.Ess3 + 1;
                    LP.save().catch(err => console.log(err));
                }
            }
            //buy essences ends here

            //begining of survivors
            else if (["Cowboy", "Kevin", "Kevin", "cowboy"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Cowboy === true) {
                    message.reply("you bought the Cowboy already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Cowboy = true;

                    buyEmbed.setDescription("Yooink!\nYou now own the Cowboy!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }

            else if (["mercenary", "Mercenary"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3048) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3048 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Mercenary === true) {
                    message.reply("nani??! you already have the Mercenary why would you buy him agaiin??!");
                }
                else {
                    LP.Clues = LP.Clues - 3048;
                    LP.Survivors.Mercenary = true;

                    buyEmbed.setDescription("Yaaaay you wasted your Clues on the punching bag... congrats!\nYou have the Mercenary now!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }

            else if (["coordinator", "Coordinator", "coord"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Coordinator === true) {
                    message.reply("you bought the Coordinator already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Coordinator = true;

                    buyEmbed.setDescription("Noice!\nYou now own the Coordinator!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Priestess", "priestess"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Priestess === true) {
                    message.reply("you bought the Priestess already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Priestess = true;

                    buyEmbed.setDescription("Hello cockroach!\nThe Priestess is now yours!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Mechanic", "mec", "mechanic"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Mechanic === true) {
                    message.reply("you bought the Mechanic already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Mechanic = true;

                    buyEmbed.setDescription("\nThe Mechanic is now yours!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Mindseye", "mindseye"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Mindseye === true) {
                    message.reply("you own the Mindseye already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Mindseye = true;

                    buyEmbed.setDescription("Congrats! You bought the blindseye!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["perfumer", "Perfumer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Prefumer === true) {
                    message.reply("you own the Perfumer already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Prefumer = true;

                    buyEmbed.setDescription("The Perfumer is now yours!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["dancer", "Dancer", "femaledancer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Dancer === true) {
                    message.reply("you own the female dancer already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Dancer = true;

                    buyEmbed.setDescription("Time to dance?\nThe Perfumer is now yours!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Seer", "seer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Seer === true) {
                    message.reply("you own the Seer already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Seer = true;

                    buyEmbed.setDescription("Stalker main? why not\nYou bought the Seer succesfully!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Embalmer", "embalmer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Embalmer === true) {
                    message.reply("you own the Embalmer already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Embalmer = true;

                    buyEmbed.setDescription("You bought the Embalmer succesfully!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Acrobat", "acrobat"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Acrobat === true) {
                    message.reply("you own the Acrobat already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Acrobat = true;

                    buyEmbed.setDescription("You bought the Acrobat succesfully!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Offucer", "officer", "1stofficer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Officer === true) {
                    message.reply("you own the 1st Officer already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Officer = true;

                    buyEmbed.setDescription("You bought the 1st Officer succesfully!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Barmaid", "barmaid"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Barmaid === true) {
                    message.reply("you own the Barmaid already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Barmaid = true;

                    buyEmbed.setDescription("Want a drink?\nYou bought the Barmaid");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Magician", "magician"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 1988) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${1988 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Magician === true) {
                    message.reply("you own the Magician already!");
                }
                else {
                    LP.Clues = LP.Clues - 1988;
                    LP.Survivors.Magician = true;

                    buyEmbed.setDescription("You bought the Magician");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Explorer", "explorer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 1468) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${1468 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Explorer === true) {
                    message.reply("you own the Explorer already!");
                }
                else {
                    LP.Clues = LP.Clues - 1468;
                    LP.Survivors.Explorer = true;

                    buyEmbed.setDescription("Tiny explorer, tiny _ _ _ _ xD jk\nYou bought the Explorer");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Forward", "forward"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Forward === true) {
                    message.reply("you own the Forward already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Forward = true;

                    buyEmbed.setDescription("Hmm time to bully some :P\nYou bought the Forward");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Prospector", "prospector"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Prospector === true) {
                    message.reply("you own the Prospector already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Prospector = true;

                    buyEmbed.setDescription("Want a donut?\nYou now own the Prospector");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Enchantress", "enchantress"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Enchantress === true) {
                    message.reply("you own the Enchantress already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Enchantress = true;

                    buyEmbed.setDescription("Congrats! you bought the most annoying survivor in the game! are you happy now?");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Wilding", "wilding"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Wilding === true) {
                    message.reply("you own the Wilding already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Wilding = true;

                    buyEmbed.setDescription("Yaaaay! you wasted your Clues on the Wilding");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["gravekeeper", "gravedigger"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.NewSurv === true) {
                    message.reply("you own the Wilding already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.NewSurv = true;

                    buyEmbed.setDescription("There ya go!\nYou now own the Gravedigger :3");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["Postman", "postman"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.Postman === true) {
                    message.reply("you own the Postman already!");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.Postman = true;

                    buyEmbed.setDescription("A special deliverrrryyyy\nYou bought the Postman!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            } else if (["prisoner", "luka", '"prisoner"'].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Survivors.AnotherSurv === true) {
                    message.reply('you own the "Prisoner" already!');
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Survivors.AnotherSurv = true;

                    buyEmbed.setDescription('You bought zappy stunny man, the "prisoner" idk why the two "" exists but wtvr :)');
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            } else if (["entomo", "entomologist", "melly"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3568) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3568 - LP.Clues}** more!`);
                }
                else if (LP.Entomologist === true) {
                    message.reply("You already own the Entomologist");
                }
                else {
                    LP.Clues = LP.Clues - 3568;
                    LP.Entomologist = true;

                    buyEmbed.setDescription("Yee you bought the Entomologist...");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }//survivors ends here

            //hunters begins here

            else if (["WuChang", "wuchang", "Wuchang"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.WuChang === true) {
                    message.reply("Dude you have already bought Wuchang");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.WuChang = true;

                    buyEmbed.setDescription("I got black i got white whatchu want?\nYou bought Wuchang and paid 4508 <:clue:655384523735040000>");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["Axeboy", "axeboy", "AxeBoy"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.AxeBoi === true) {
                    message.reply("Dude you have already bought Axe boi");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.AxeBoi = true;

                    buyEmbed.setDescription("Isn't that a potatobag on his head?\nYou bought Axeboy and paid 4508 <:clue:655384523735040000>");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["Lizard", "Luchino", "lizard"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Lizard === true) {
                    message.reply("Dude you have already bought Lizardo");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Lizard = true;

                    buyEmbed.setDescription("Yaaay you bought Mohi's hunter main :D\nYou bought Luchino and paid 4508 <:clue:655384523735040000>");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["joker", "clown", "smileyface"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 1888) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${1888 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Clown === true) {
                    message.reply("Dude you have already bought Clowny booi");
                }
                else {
                    LP.Clues = LP.Clues - 1888;
                    LP.Hunters.Clown = true;

                    buyEmbed.setDescription("You bought **The fasted man alive!**, **DishDashy** aka The Clown or Smiley face.. call him what you want");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["gamekeeper", "bane", "Gamekeeper"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 3988) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${3988 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.GameKeeper === true) {
                    message.reply("Dude you have already bought GameKeeper");
                }
                else {
                    LP.Clues = LP.Clues - 3988;
                    LP.Hunters.GameKeeper = true;

                    buyEmbed.setDescription("You wasted your clues on a F tier hunter (back in da days)\nYou bought the GameKeeper");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["Ripper", "ripper"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Ripper === true) {
                    message.reply("Dude you have already bought The Ripper");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Ripper = true;

                    buyEmbed.setDescription("The most hated hunter, not because of how fast he is but because how many S skins he got...\nYou bought Ripper and paid 4508 <:clue:655384523735040000>");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["soulweaver", "spider", "SoulWeaver"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.SoulWeaver === true) {
                    message.reply("Dude you have already bought The SoulWeaver");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.SoulWeaver = true;

                    buyEmbed.setDescription("Nascar!\nYou bought the Soul Weaver and paid 4508 <:clue:655384523735040000>");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["geisha", "Geisha"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Geisha === true) {
                    message.reply("Dude you have already bought The Geisha");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Geisha = true;

                    buyEmbed.setDescription("You bought the Gaysha i mean Geisha :/");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["PhotoGrapher", "photoboi", "photographer"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.PhotoGrapher === true) {
                    message.reply("Dude you have already bought The Photographer");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.PhotoGrapher = true;

                    buyEmbed.setDescription("You bought the photographer!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["MadEyes", "madeyes"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.MadEyes === true) {
                    message.reply("Dude you have already bought The MadEyes");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.MadEyes = true;

                    buyEmbed.setDescription("You bought the MadEyes!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["Feaster", "feaster"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Feaster === true) {
                    message.reply("Dude you have already bought The Feaster");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Feaster = true;

                    buyEmbed.setDescription("You bought the Feaster!\nPlease nerf!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["DW"], "dreamwitch", "Dreamwitch".includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.DreamWitch === true) {
                    message.reply("Dude you have already bought The DreamWitch");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.DreamWitch = true;

                    buyEmbed.setDescription("You bought the DreamWitch!");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["bonbon", "pingu", "no.26", "No.26"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Pingu === true) {
                    message.reply("Dude you have already bought The No.26 guard!");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Pingu = true;

                    buyEmbed.setDescription("You bought Pingu, the trashcan :v");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["ann", "sister", "nun"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.Sister === true) {
                    message.reply("Dude you have already bought Sister sister :/!");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.Sister = true;

                    buyEmbed.setDescription("Hello sister, you just bought sister :v it doesn't make sense but whatever");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }
            else if (["queen", "bloodyqueen", "bq"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.BloodyQueen === true) {
                    message.reply("Hey! You have already bought BloodyQueen, why buy her again :v");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.BloodyQueen = true;

                    buyEmbed.setDescription("Congrats! you bought bloodyqueen r u happy now?");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }
            }
            else if (["violinist", "musician"].includes(args[1].toLowerCase())) {
                if (LP.Clues < 4508) {
                    message.reply(`you don't have enough Clues <:clue:655384523735040000>, you need **${4508 - LP.Clues}** more!`);
                }
                else if (LP.Hunters.NewHunta === true) {
                    message.reply("Hey! You have already bought Violinist, why buy him again? :v");
                }
                else {
                    LP.Clues = LP.Clues - 4508;
                    LP.Hunters.NewHunta = true;

                    buyEmbed.setDescription("You now own Violinist and can play as him by doing `>hunt violinist`");
                    message.channel.send(buyEmbed);

                    LP.save().catch(err => console.log(err));
                }

            }//Frames begins HERE
            else if (["frame1", "detective"].includes(args[1].toLowerCase())) {
                return frame(message, "frame1", 888, LP.frames.frame1);

            }
            else if (["frame2", "valentine"].includes(args[1].toLowerCase())) {
                return frame(message, "frame2", 888, LP.frames.frame2);

            }
            else if (["frame3", "allstar"].includes(args[1].toLowerCase())) {
                return frame(message, "frame3", 888, LP.frames.frame3);

            }
            else if (["frame4", "tree"].includes(args[1].toLowerCase())) {
                return frame(message, "frame4", 888, LP.frames.frame4);

            }
            else if (["frame5"].includes(args[1].toLowerCase())) {
                return frame(message, "frame5", 8888, LP.frames.frame5);

            }
            else if (["frame6"].includes(args[1].toLowerCase())) {
                return frame(message, "frame6", 888, LP.frames.frame6);

            } else if (["danganronpa", "dangan"].includes(args[1].toLowerCase())) {
                if (LP.Inspirations < 96) {
                    message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more!`)

                }
                else {
                    buyEmbed.setDescription(`You bought **1**  and paid *96* <:inspirations:655840409674711060> `);
                    message.channel.send(buyEmbed);

                    LP.Inspirations = LP.Inspirations - 96;
                    LP.dangan = LP.dangan + 1;
                    LP.save().catch(err => console.log(err));
                }

            }


            else {
                message.reply("this item doesn't exist in the shop! make sure that you typed it correctly!");
            }


        });//LP 



    }

}