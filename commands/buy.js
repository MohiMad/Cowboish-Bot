const logicPath = require("../models/logicpath.js");
const { ErrorMsg, newLP } = require("../functions.js");

const { MessageEmbed } = require('discord.js');
const { Skins } = require("../essences/items.json");
const { ess1, ess2, ess3, clues, frags, insp } = require("../emojis.json");

module.exports = {
    name: 'buy',
    description: "buy some stuff",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);

        const LP = await logicPath.findOne({ UserID: message.author.id });

        async function frame(message, frame, price, framePath, link) {
            if (framePath === true) return ErrorMsg(bot, message, "You already own this frame, why would you buy it twice?\nAre you trying to equip it instead of another one?\nIf so then `" + prefix + "equip` is the command you're looking for...");

            if (LP.frags < price) return ErrorMsg(bot, message, "Poor you can't afford that!\nYou need " + `**${price - LP.frags}**<:frags:655840344725913600> more...`)

            let frameEmbed = new MessageEmbed()
                .setAuthor("Successful purchase!", message.author.displayAvatarURL())
                .setDescription(`You successfully bought ${frame} and paid ${price}<:frags:655840344725913600>\nIt's now equipped and can be seen if you do` + "`" + prefix + "logicpath`\n\nTo change your frame to another one, do `" + prefix + "equip <FrameID>`")
                .setThumbnail(link);

            if (frame === "frame1") LP.frames.frame1 = true;
            if (frame === "frame2") LP.frames.frame2 = true;
            if (frame === "frame3") LP.frames.frame3 = true;
            if (frame === "frame4") LP.frames.frame4 = true;
            if (frame === "frame5") LP.frames.frame5 = true;
            if (frame === "frame6") LP.frames.frame6 = true;

            LP.frames.equipped = frame;
            LP.frags = LP.frags - price;

            await LP.save().catch(e => console.log(e));

            return message.channel.send(frameEmbed);
        };

        async function buyIt(charName, item, price, boughtMessage, URL) {
            if (item === true) return message.channel.send(`You already own that character, **${message.author.username}**\nWhy would you buy it twice? ;-;`);

            if (price > LP.Clues) return message.channel.send(`You don't have enough clues ${clues}, **${message.author.username}**...\nYou need **${price - LP.Clues}** more...`);

            const buyEmbed = new MessageEmbed()
                .setAuthor(`${message.author.username} paid ${price} clues and bought the ${charName}!`, message.author.displayAvatarURL())
                .setTimestamp()
                .setThumbnail(URL)
                .setDescription(boughtMessage)
                .setColor("GREEN")
                .setFooter("Cowboish bot", bot.user.displayAvatarURL());

            if (charName === "Cowboy") LP.Survivors.Cowboy = true;
            if (charName === "Mercenary") LP.Survivors.Mercenary = true;
            if (charName === "Coordinator") LP.Survivors.Coordinator = true;
            if (charName === "Priestess") LP.Survivors.Priestess = true;
            if (charName === "Mechanic") LP.Survivors.Mechanic = true;
            if (charName === "Mind's eye") LP.Survivors.Mindseye = true;
            if (charName === "Perfumer") LP.Survivors.Prefumer = true;
            if (charName === "Female Dancer") LP.Survivors.Dancer = true;
            if (charName === "Seer") LP.Survivors.Seer = true;
            if (charName === "Embalmer") LP.Survivors.Embalmer = true;
            if (charName === "Acrobat") LP.Survivors.Acrobat = true;
            if (charName === "1st Officer") LP.Survivors.Officer = true;
            if (charName === "Barmaid") LP.Survivors.Barmaid = true;
            if (charName === "Magician") LP.Survivors.Magician = true;
            if (charName === "Explorer") LP.Survivors.Explorer = true;
            if (charName === "Forward") LP.Survivors.Forward = true;
            if (charName === "Prospector") LP.Survivors.Prospector = true;
            if (charName === "Enchantress") LP.Survivors.Enchantress = true;
            if (charName === "Wildling") LP.Survivors.Wilding = true;
            if (charName === "Gravekeeper") LP.Survivors.NewSurv = true;
            if (charName === "Postman") LP.Survivors.Postman = true;
            if (charName === "Prisoner") LP.Survivors.AnotherSurv = true;
            if (charName === "Entomologist") LP.Entomologist = true;
            if (charName === "Painter") LP.Painter = true;

            if (charName === "Wu chang") LP.Hunters.WuChang = true;
            if (charName === "Axeboy") LP.Hunters.AxeBoi = true;
            if (charName === "Luchino") LP.Hunters.Lizard = true;
            if (charName === "Joker") LP.Hunters.Clown = true;
            if (charName === "Gamekeeper") LP.Hunters.GameKeeper = true;
            if (charName === "Ripper") LP.Hunters.Ripper = true;
            if (charName === "Soul Weaver") LP.Hunters.SoulWeaver = true;
            if (charName === "Geisha") LP.Hunters.Geisha = true;
            if (charName === "Joseph") LP.Hunters.PhotoGrapher = true;
            if (charName === "Madeyes") LP.Hunters.MadEyes = true;
            if (charName === "Feaster") LP.Hunters.Feaster = true;
            if (charName === "Dreamwitch") LP.Hunters.DreamWitch = true;
            if (charName === "Bonbon") LP.Hunters.Pingu = true;
            if (charName === "Ann") LP.Hunters.Sister = true;
            if (charName === "Bloody Queen") LP.Hunters.BloodyQueen = true;
            if (charName === "Violinist") LP.Hunters.NewHunta = true;
            if (charName === "Sculptor") LP.Sculptor = true;

            LP.Clues = LP.Clues - price;
            await LP.save().catch(e => console.log(e));

            message.channel.send(buyEmbed);
        };

        async function essBuy(name, path, emoji, URL) {
            let number;
            if (!args[2]) number = 1;
            else if (isNaN(args[2])) number = 1;
            else if (["-"].includes(args[2])) return message.reply(`**you can't buy a negative amount of essences >:/**`);
            else number = Number(args[2]);

            if (LP.Inspirations < (96 * number)) return message.channel.send(`**${message.author.username}** you can't afford buying that!\nYou need **${(96 * number) - LP.Inspirations}**${insp} more...`);

            const essEmbed = new MessageEmbed()
                .setAuthor(`${message.author.username} bought ${number} ${name}!`, message.author.displayAvatarURL())
                .setTimestamp()
                .setThumbnail(URL)
                .setDescription(`You paid **${96 * number}**${insp} and bought **${number}**${emoji}`)
                .setColor("GREEN")
                .setFooter("Cowboish bot", bot.user.displayAvatarURL());

            if (path === "ess1") LP.Ess1 = LP.Ess1 + number;
            if (path === "ess2") LP.Ess2 = LP.Ess2 + number;
            if (path === "ess3") LP.Ess3 = LP.Ess3 + number;
            LP.Inspirations = LP.Inspirations - (96 * number);

            await LP.save().catch(e => console.log(e));

            message.channel.send(essEmbed);

        }; //For buying essence

        async function buyPortrait(PortraitName, path, price, link) {
            if (LP.frags < price) return message.channel.send(`**${message.author.username}**, you don't haven't enough fragments... You need **${price - LP.frags}**${frags} more!`);

            if (LP.Opened.includes(path)) return message.channel.send(`**${message.author.username}** You have bought this portrait already... Why buy it again? ;-;`);

            const portraitEmbed = new MessageEmbed()
                .setAuthor(`${message.author.username} bought ${PortraitName}`, message.author.displayAvatarURL())
                .setTimestamp()
                .setThumbnail(link)
                .setDescription(`You paid **${price}**${frags} and bought **${PortraitName}**\n\nYour portraits is automatically equipped now...\nDo ` + "`" + prefix + "LP` to see how it looks like!")
                .setColor("GREEN")
                .setFooter("Cowboish bot", bot.user.displayAvatarURL());

            LP.Opened = [...LP.Opened, path];
            LP.frags = LP.frags - price;
            LP.Portrait = path;

            await LP.save().catch(e => console.log(e));

            message.channel.send(portraitEmbed);
        };

        if (!args[1]) {
            ErrorMsg(bot, message, "Please provide something to buy!\nUsage: `" + prefix + "buy <ItemHERE>`\n\nDunno what to buy? do `" + prefix + "shop` to check what you can buy")
        }
        //buy essences here
        else if (["s13-2", "s132", "ess2"].includes(args[1].toLowerCase()) || args[1] === "2") {
            await essBuy("s13-2", "ess2", ess2, "https://i.imgur.com/JGu6jXE.png");
        }
        else if (["s211", "s13-1", "ess1"].includes(args[1].toLowerCase()) || args[1] === "1") {
            await essBuy("s13-1", "ess1", ess1, "https://i.imgur.com/33Rr0iU.png");

        }
        else if (["s13-3", "s133", "ess3"].includes(args[1].toLowerCase()) || args[1] === "3") {
            await essBuy("s13-3", "ess3", ess3, "https://i.imgur.com/QQxyNKu.png");
        }
        //buy essences ends here

        //begining of survivors
        else if (["cowboi", "kevin", "cowboy"].includes(args[1].toLowerCase())) await buyIt("Cowboy", LP.Survivors.Cowboy, 3568, "The Cowboy is now yeeted into your account >:)\nYou can play as him by doing `" + prefix + "quick cowboy`", "https://ae01.alicdn.com/kf/Hbf2e16b9e1174a2da5aee9a1c3e1acfbA.jpg?width=800&height=800&hash=1600");

        else if (["mercenary", "merc", "naib"].includes(args[1].toLowerCase())) await buyIt("Mercenary", LP.Survivors.Mercenary, 3048, "Yeee you bought the punshing bag :D\nYou can now play as the mercenary by doing `" + prefix + "quick merc`", "https://vignette.wikia.nocookie.net/id5/images/d/d3/Naib.png/revision/latest/top-crop/width/360/height/450?cb=20190113021705");

        else if (["coordinator", "martha", "coord"].includes(args[1].toLowerCase())) await buyIt("Coordinator", LP.Survivors.Coordinator, 3568, "Shoot shoot?\nYou can now play as the coordinator by doing `" + prefix + "quick coordinator`", "https://vignette.wikia.nocookie.net/id5/images/b/b9/Martha.png/revision/latest/top-crop/width/360/height/450?cb=20200524022809");

        else if (["fiona", "priestess"].includes(args[1].toLowerCase())) await buyIt("Priestess", LP.Survivors.Priestess, 3568, "Yee you own the cockroach now >:D\nTo play as her, do `" + prefix + "quick priestess`", "https://vignette.wikia.nocookie.net/id5/images/d/d3/Priestess_Transparent.png/revision/latest/top-crop/width/360/height/450?cb=20200516014405");

        else if (["tracy", "mec", "mechanic"].includes(args[1].toLowerCase())) await buyIt("Mechanic", LP.Survivors.Mechanic, 3568, "Hehe the mechanic and her bot are now yours!\nTo play as her do `" + prefix + "quick mec`", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/7/79/Tracy_Reznik_Portrait.png");

        else if (["themindseye", "mindseye", "helena", "tme"].includes(args[1].toLowerCase())) await buyIt("Mind's eye", LP.Survivors.Mindseye, 3568, "Did you buy her? I can't see ><\nTo play as the mind's eye, do `" + prefix + "quick mindseye`", "https://vignette.wikia.nocookie.net/id5/images/4/4a/310px-Helena_Adam.png/revision/latest/top-crop/width/360/height/450?cb=20200524023610");

        else if (["perfumer", "vera"].includes(args[1].toLowerCase())) await buyIt("Perfumer", LP.Survivors.Prefumer, 3568, "Yaaay you have the Perfumer now :D\nDo, `" + prefix + "quick perfumer` to play as her", "https://vignette.wikia.nocookie.net/id5/images/9/98/Perfumer_Transparent.png/revision/latest/top-crop/width/360/height/450?cb=20181106034758");

        else if (["dancer", "margaretha", "femaledancer"].includes(args[1].toLowerCase())) await buyIt("Female Dancer", LP.Survivors.Dancer, 3568, "*Insert fortnite dance here*\nYou bought the Dancer Yaaay!", "https://vignette.wikia.nocookie.net/id5/images/c/ce/Margaretha.png/revision/latest/scale-to-width-down/211?cb=20200524024254");

        else if (["eli", "seer"].includes(args[1].toLowerCase())) await buyIt("Seer", LP.Survivors.Seer, 3568, "O I see a stalker main QwQ\nDo `" + prefix + "quick seer` to play as the Seer :3", "https://vignette.wikia.nocookie.net/id5/images/2/2d/Eli_yas.png/revision/latest/top-crop/width/360/height/450?cb=20190325040259");

        else if (["aseop", "embalmer", "aesop"].includes(args[1].toLowerCase())) await buyIt("Embalmer", LP.Survivors.Embalmer, 3568, "*insert coffin dance meme here :v*\nDo `" + prefix + "quick embalmer` to play as the Embalmer ^-^", "https://i.redd.it/g48kpm4c89121.png");

        else if (["mike", "acrobat"].includes(args[1].toLowerCase())) await buyIt("Acrobat", LP.Survivors.Acrobat, 3568, "Jump jump? Yaaay Acroboi is now yours :D\nDo `" + prefix + "quick acrobat` to play as him :3", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/3/3c/Mike_Morton_Portrait.png");

        else if (["officer", "1stofficer", "jose"].includes(args[1].toLowerCase())) await buyIt("1st Officer", LP.Survivors.Officer, 3568, "Hehe the 1st Officer is in your hands... wait is he? OwO\n\nDo `" + prefix + "quick officer` to play as him :3", "https://vignette.wikia.nocookie.net/id5/images/3/3e/Survivor23_Jose_Baden.png/revision/latest/top-crop/width/360/height/450?cb=20200103184549");

        else if (["bartender", "barmaid", "demi"].includes(args[1].toLowerCase())) await buyIt("Barmaid", LP.Survivors.Barmaid, 3568, "Need a drink?\nYou now own the Barmaid and can play as her by doing `" + prefix + "quick barmaid`", "https://vignette.wikia.nocookie.net/id5/images/b/b3/Survivor22_783fa4b.png/revision/latest/top-crop/width/360/height/450?cb=20200524025214");

        else if (["servais", "magician"].includes(args[1].toLowerCase())) await buyIt("Magician", LP.Survivors.Magician, 1988, "Ouuu you bought the Magician Yaaay!\nNow do `" + prefix + "quick magician` to play as him", "https://vignette.wikia.nocookie.net/id5/images/6/66/New_servais.png/revision/latest/top-crop/width/360/height/450?cb=20190325023412");

        else if (["kurt", "explorer"].includes(args[1].toLowerCase())) await buyIt("Explorer", LP.Survivors.Explorer, 1468, "Tiny explorer, tiny `_ _ _ _` xD jk jk\nTo play as the Explorer, do `" + prefix + "quick explorer`", "https://i0.wp.com/roonby.com/wp-content/uploads/2019/03/1.png?resize=1561%2C1106&ssl=1");

        else if (["william", "forward"].includes(args[1].toLowerCase())) await buyIt("Forward", LP.Survivors.Forward, 3568, "Time to bully some?\nDo `" + prefix + "quick forward` to play as him >:3", "https://vignette.wikia.nocookie.net/id5/images/0/0e/Forward.png/revision/latest/top-crop/width/360/height/450?cb=20181212104830");

        else if (["pros", "prospector", "norton"].includes(args[1].toLowerCase())) await buyIt("Prospector", LP.Survivors.Prospector, 3568, "So we gon' deliver some donuts to the hunters?\n`" + prefix + "quick prospector` to play as him >:)", "https://vignette.wikia.nocookie.net/id5/images/5/56/Norton_campbell.png/revision/latest/top-crop/width/360/height/450?cb=20200119021306");

        else if (["patricia", "enchantress"].includes(args[1].toLowerCase())) await buyIt("Enchantress", LP.Survivors.Enchantress, 3568, "Congrats! you bought the most annoying survivor in the game! are you happy now?\nDo `" + prefix + "quick enchantress` to play as her...", "https://pm1.narvii.com/7271/fd63be9f5a0ca8cbd0cd445af45a2ccaecfdabe7r1-366-387v2_uhq.jpg");

        else if (["wildling", "wilding", "murro"].includes(args[1].toLowerCase())) await buyIt("Wildling", LP.Survivors.Wilding, 3568, `${message.author.username} be ridin' 0-O\n` + "Do `" + prefix + "quick wildling` to play as him ;)", "https://vignette.wikia.nocookie.net/id5/images/2/29/Murro_better.png/revision/latest/top-crop/width/360/height/450?cb=20200524022245");

        else if (["gravekeeper", "gravedigger", "andrew"].includes(args[1].toLowerCase())) await buyIt("Gravekeeper", LP.Survivors.NewSurv, 3568, "There ya go! The Gavekeeper is now yours OwO\nDo `" + prefix + "quick gravekeeper` to play as Andrew :3", "https://i.redd.it/vl1run16g2h41.jpg");

        else if (["postmain", "postman", "victor"].includes(args[1].toLowerCase())) await buyIt("Postman", LP.Survivors.Postman, 3568, "A special deliverrrryyyy :D\nYou now own the Postman and can play as him by doing `" + prefix + "quick victor` ^-^", "https://i.imgur.com/tSZAZfh.png");

        else if (["prisoner", "luka", '"prisoner"'].includes(args[1].toLowerCase())) await buyIt("Prisoner", LP.Survivors.AnotherSurv, 3568, 'You bought zappy stunny man, the "prisoner" idk why the two "" exists but wtvr :)', "https://pm1.narvii.com/7489/81752f9a352981d8657fdc1cfef7c700fb951fabr1-1080-1863v2_hq.jpg");

        else if (["entomo", "entomologist", "melly"].includes(args[1].toLowerCase())) await buyIt("Entomologist", LP.Entomologist, 3568, "Aaaa noooo bees ;-;\nYou bought the Entomologist :D\nDo `" + prefix + "quick entomo` to play as her ^-^", "https://i.imgur.com/uU1pIL4.png");
        else if (["painter", "artist", "edgar"].includes(args[1].toLowerCase())) await buyIt("Painter", LP.Painter, 3568, "Ooohoo it's an artist 0-0\nYou bought the Painter, Edgar :D\nDo `" + prefix + "quick edgar` to play as him :3", "https://static.wikia.nocookie.net/id5/images/4/4a/Artist_Transparent.png/revision/latest/scale-to-width-down/1000?cb=20200924174637");

        //survivors ends here

        //hunters begins here
        else if (["uwuchang", "wuchang", "wuchangus", "wu"].includes(args[1].toLowerCase())) await buyIt("Wu chang", LP.Hunters.WuChang, 4508, "I got black i got white whatchu want? >:3\nYou bought Wuchang and play as him by doing `" + prefix + "hunt wu`", "https://vignette.wikia.nocookie.net/id5/images/1/1e/Wu_Chang%3B_smoother.png/revision/latest?cb=20181212105054");

        else if (["axeboi", "axeboy", "robbie"].includes(args[1].toLowerCase())) await buyIt("Axeboy", LP.Hunters.AxeBoi, 4508, "Isn't that a potatobag on his head?\nYaay you bought the missing child- whao wait what?", "https://i.imgur.com/Z9GJMfx.png");

        else if (["evilreptilian", "luchino", "lizard", "lunchino", "lizzyboi", "reptilian"].includes(args[1].toLowerCase())) await buyIt("Luchino", LP.Hunters.Lizard, 4508, "Yaaay you bought lizzboi :3\nNow do `" + prefix + "hunt lizard` to play as him", "https://i.imgur.com/hwgCwb2.png");

        else if (["joker", "clown", "smileyface"].includes(args[1].toLowerCase())) await buyIt("Joker", LP.Hunters.Clown, 1888, "Yaaay you bought Dishdashy... Ehh I meant the Clown :v\nDo `" + prefix + "hunt joker` to play as him", "https://i.imgur.com/W37ihzm.png");

        else if (["gamekeeper", "bane", "gk"].includes(args[1].toLowerCase())) await buyIt("Gamekeeper", LP.Hunters.GameKeeper, 3988, "Yee you bought a cowboish hunter :D\nYou now own the Gamekeeper and can play as him by doing `" + prefix + "hunt gk`", "https://vignette.wikia.nocookie.net/id5/images/9/9a/Bane.png/revision/latest?cb=20200524030642");

        else if (["jack", "ripper", "theripper"].includes(args[1].toLowerCase())) await buyIt("Ripper", LP.Hunters.Ripper, 4508, "You bought the most hated hunter, not because of how fast he is but because how many S skins he got :v\nAnyway do `" + prefix + "hunt ripper` to play as him :)", "https://vignette.wikia.nocookie.net/id5/images/f/f7/Jack_The_Ripper.png/revision/latest/top-crop/width/360/height/450?cb=20180725225333");

        else if (["soulweaver", "spider", "sw", "violetta"].includes(args[1].toLowerCase())) await buyIt("Soul Weaver", LP.Hunters.SoulWeaver, 4508, "Nascar goes frooom >:v\nDo `" + prefix + "hunt spider` to play as Violetta ^-^", "https://vignette.wikia.nocookie.net/id5/images/f/f1/Violetta.png/revision/latest/top-crop/width/360/height/450?cb=20180725230052");

        else if (["geisha", "gaysha", "michiko"].includes(args[1].toLowerCase())) await buyIt("Geisha", LP.Hunters.Geisha, 4508, "You bought the Gaysha i mean Geisha :v\nDo `" + prefix + "hunt geisha` Hehe", "https://vignette.wikia.nocookie.net/id5/images/9/94/Geisha_Transparent.png/revision/latest?cb=20181106092718");

        else if (["joseph", "photoboi", "photographer"].includes(args[1].toLowerCase())) await buyIt("Joseph", LP.Hunters.PhotoGrapher, 4508, "Yaaay! You bought the Photographer :D\nNow do `" + prefix + "hunt photographer` to play as him :)", "https://vignette.wikia.nocookie.net/id5/images/9/91/Joseph%3B_smoother.png/revision/latest/top-crop/width/360/height/450?cb=20181212105257");

        else if (["burke", "madeyes"].includes(args[1].toLowerCase())) await buyIt("Madeyes", LP.Hunters.MadEyes, 4508, "You bought Trump's right hand, aka the old man the Madeyes :D\nDo `" + prefix + "hunt burke` to play as him :3", "https://pm1.narvii.com/7359/59e528493cb7d497309df67fbdda817ab5061c8ar1-561-516v2_00.jpg");

        else if (["hastur", "feaster", "feasta"].includes(args[1].toLowerCase())) await buyIt("Feaster", LP.Hunters.Feaster, 4508, "Yaay the Feaster is now yours :)\nDo `" + prefix + "hunt feaster` to play as him");

        else if (["dw", "dreamwitch", "yidhra"].includes(args[1].toLowerCase())) await buyIt("Dreamwitch", LP.Hunters.DreamWitch, 4508, "You bought the Dreambi- witch :v\nDo `" + prefix + "hunt dw` to play as her ^-^", "https://vignette.wikia.nocookie.net/id5/images/0/0e/%24.png/revision/latest?cb=20190213000824");

        else if (["bonbon", "pingu", "no.26", "guard26"].includes(args[1].toLowerCase())) await buyIt("Bonbon", LP.Hunters.Pingu, 4508, "You bought- wait isn't that a robot? OwO\nBonbon is now yours hehe\nDo `" + prefix + "hunt bonbon` to play as him >:D", "https://i.imgur.com/UD8g11X.png");

        else if (["ann", "sister", "nun", "disciple"].includes(args[1].toLowerCase())) await buyIt("Ann", LP.Hunters.Sister, 4508, "Yaaay you bought the Discliple :D\nDo `" + prefix + "hunt ann` to play as her :)", "https://pm1.narvii.com/7433/fc8eeca673ea52ca8a4a22ab2d98b946c40ac825r1-1100-2048v2_uhq.jpg");

        else if (["queen", "bloodyqueen", "bq", "mary"].includes(args[1].toLowerCase())) await buyIt("Bloody Queen", LP.Hunters.BloodyQueen, 4508, "Congrats! You bought the Bloodyqueen...\nDo `" + prefix + "hunt bq` to play as her ^-^", "https://pm1.narvii.com/7272/afc959f76f4903895033759f515b8b451ea366dfr1-1080-1720v2_uhq.jpg");

        else if (["violinist", "musician", "antonio"].includes(args[1].toLowerCase())) await buyIt("Violinist", LP.Hunters.NewHunta, 4508, "You now own the Violinist and can play as him by doing `" + prefix + "hunt vio`", "https://vignette.wikia.nocookie.net/id5/images/4/42/Violinist_%28Transparent%29.png/revision/latest/top-crop/width/360/height/450?cb=20200524021507");

        else if (["galatea", "sculptor", "thesculptor", "the-sculptor"].includes(args[1].toLowerCase())) await buyIt("Sculptor", LP.Sculptor, 4508, "You now own the Sculptor and can play as her by doing `" + prefix + "hunt sculptor`", "https://vignette.wikia.nocookie.net/id5/images/2/22/Sculptor.PNG/revision/latest/scale-to-width-down/1000?cb=20200728030734");

        //Frames begins HERE
        else if (["frame1", "detective"].includes(args[1].toLowerCase())) return frame(message, "frame1", 2888, LP.frames.frame1, "https://i.imgur.com/73wiNnM.png");

        else if (["frame2", "valentine"].includes(args[1].toLowerCase())) return frame(message, "frame2", 2888, LP.frames.frame2, "https://i.imgur.com/8WptNEG.png");

        else if (["frame3", "allstar"].includes(args[1].toLowerCase())) return frame(message, "frame3", 2888, LP.frames.frame3, "https://i.imgur.com/yTwfbim.png");

        else if (["frame4", "tree"].includes(args[1].toLowerCase())) return frame(message, "frame4", 2888, LP.frames.frame4, "https://i.imgur.com/FRxIF2C.png");

        else if (["frame5"].includes(args[1].toLowerCase())) return frame(message, "frame5", 28888, LP.frames.frame5, "https://i.imgur.com/hvQYa3I.png");

        else if (["frame6"].includes(args[1].toLowerCase())) return frame(message, "frame6", 2888, LP.frames.frame6, "https://i.imgur.com/nnU1X0s.png");

        //we begin with portraits here huh?

        else if (["long jump luchino", "long jump", "longjumpluchino"].includes(args.slice(1).join(" ").toLowerCase())) return buyPortrait("Long Jump Luchino", "long_jump_luchino", 1888, "https://i.imgur.com/2NeJXqy.png");

        else if (["marathon runner victor", "marathon runner", "marathon victor", "marathonrunnervictor"].includes(args.slice(1).join(" ").toLowerCase())) return buyPortrait("Marathon Runner Victor", "marathon_runner_victor", 1888, "https://i.imgur.com/KzxmHgx.png");

        else if (["sword fighting joseph", "sword fighting", "sword fight", "swordfightingjoseph"].includes(args.slice(1).join(" ").toLowerCase())) return buyPortrait("Sword Fighting Joseph", "sword_fighting", 1888, "https://i.imgur.com/mRE6j40.png");
        else if (["skins", "skin"].includes(args[1].toLowerCase())) {
            let toSearchString = args.slice(2).join("").toLowerCase().replace("-", "").replace("[Costume]", "")

            for (const skin of Skins) {
                if (skin.Name.includes(toSearchString)) {
                    let skinNAME = skin.Name[0].slice(skin.Name[0].indexOf("- ")).replace("- ", "");

                    if (LP.Opened.includes(skin.Item)) return message.channel.send(`**You have already bought ${skinNAME}, ${message.author}**`);
                    if (LP.frags < skin.Price) return message.channel.send(`**You don't have enough fragments${frags}...**\nYou need` + "`" + `${skin.Price - LP.frags}` + "`" + `${frags} more...`);

                    let boughtSkinEmbed = new MessageEmbed()
                        .setTitle(`You successfully bought ${skinNAME}`)
                        .setColor(skin.Color)
                        .setThumbnail(skin.linkTag)
                        .setDescription(`You paid __${skin.Price}__${frags} and bought [**${skinNAME}**](https://youtu.be/FhsEd3MIBTI)\n\n**__Description__**:\n${skin.Des}`)

                    LP.Opened = [...LP.Opened, skin.Item];
                    LP.frags = LP.frags - skin.Price;
                    if (skin.Color === "0xfcba03") LP.S = LP.S + 1;
                    else LP.A = LP.A + 1;
                    await LP.save().catch(e => console.log(e));

                    message.channel.send(boughtSkinEmbed);

                }

            }


        }
        else message.channel.send(`**${message.author.username}** this item doesn't exist in the shop... make sure you typed it correctly...\nDo ` + "`" + prefix + "shop` for more info :3");

    }

}