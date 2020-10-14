const { MessageEmbed } = require('discord.js');
const { newLP } = require("../functions.js");
const logicPath = require("../models/logicpath.js");

module.exports = {
    name: 'birthday',
    description: "Happy anniversary lov",
    execute: async (message, args, bot, prefix) => {
        await newLP(message);
        const LP = await logicPath.findOne({ UserID: message.author.id });

        if(LP.Opened.includes("1yrAnniversary")) return;

        const embed = new MessageEmbed()
            .setTitle("Cowboooooish Birthdaaaaaaay 🥳🎉🎉")
            .setAuthor("Cowboish's 1 Year Anniversary!", message.author.displayAvatarURL())
            .setColor("0xECE615")
            .setDescription(`**The text below is written by __Mohi#2888__, the developer and the creator of Cowboish... The full story can be found on our [Cowboish Community](https://discord.com/invite/YWcSukS)**\n\nSo yep! On 11/10/2019 the idea of creating Cowboish came to my mind. I did my researches yk, looked it up on google, YouTube and watched some tutorials, the thing is that creating a bot required a better device than the one I had at that time so I um- yes, I stole my mom's laptop when we had a guest at home :v\nSo I opened up YouTube and searched up:\n["How to make your own Disocrd Bot"](https://youtu.be/X_qg0Ut9nU8)\n*Btw the hyperlink above leads to the exact tutorial series I used to make Cowboish :3*\n\nFrom there I started off making a complete basic (say "yee") bot responds with ("haw") command... I kept using mom's laptop for 3 months or so until I asked for my own. What I'm tryna point is that everything can be possibly done as long as you have the will and patience for it :)\n\nYou have been given:\n**LIMITED Cowboish 1st year anniversary frame 🎉**\n**6000**<:clue:655384523735040000>, **25**<:ess1:655840713904488469> and **16000**<:frags:655840344725913600>\n\nYou can equip the frame by doing\n` + "`" + prefix + "equip frame anniversary`\n\nWanna check what skins you can buy with fragments <:frags:655840344725913600>? Do\n`" + prefix + "shop skins`" + `\n\nHave a great great day, ${message.author} <3`)
            .setImage("https://i.imgur.com/wcwz4RN.png")
            .setThumbnail("https://i.imgur.com/CS4FFqR.png")
            .setFooter("Aiming for a 2nd Year Anniversay U ~ U");

        LP.Opened = [...LP.Opened, "1yrAnniversary"];
        LP.Clues = LP.Clues + 6000;
        LP.frags = LP.frags + 16000;
        LP.Ess1 = LP.Ess1 + 25;
        LP.save().catch(e => console.log(e));

        message.channel.send(embed);
    }
}