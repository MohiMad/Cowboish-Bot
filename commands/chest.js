const { MessageEmbed } = require("discord.js");

module.exports = {
    name: ["chest", "openchest", "open-chest"],
    description: "Open a chest and get a random item\nThis command has the same in-game percentage of obtaining a specific item... Based on [IdentityV Wiki's Informtaion](https://id5.fandom.com/wiki/Chest)",
    category: "IdentityV",
    permissions: ["SEND_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    execute: async (message) => {
        
        const embed = new MessageEmbed()
            .setTitle("Opening the Chest...")
            .setImage("https://media.giphy.com/media/iY7Vyy6nVnFwollqT7/giphy.gif")
            .setURL("https://id5.fandom.com/wiki/Chest")
            .setColor("0x60303E");

        const msg = await message.channel.send(embed);

        let contstantItems = [
            {
                a: "https://i.imgur.com/zSKCMme.png",
                b: "a Syringe",
                c: 15
            },
            {
                a: "https://i.imgur.com/AZg34yP.png",
                b: "a Toolbox",
                c: 11

            },
            {
                a: "https://i.imgur.com/FE5jrT7.png",
                b: "a Flashlight",
                c: 11

            },
            {
                a: "https://i.imgur.com/z8n1VfJ.png",
                b: "a Flaregun",
                c: 2

            },
            {
                a: "https://i.imgur.com/ZzmyhLk.png",
                b: "an Elbow Pad",
                c: 13

            },
            {
                a: "https://i.imgur.com/Gl4KhYi.png",
                b: "a Magic Wand",
                c: 8

            },
            {
                a: "https://i.imgur.com/XCKUcu3.png",
                b: "a Fantasy Book",
                c: 11

            },
            {
                a: "https://i.imgur.com/MmPuaAB.png",
                b: "a Perfume",
                c: 8

            },
            {
                a: "https://i.imgur.com/b0OMAhi.png",
                b: "a Map",
                c: 11

            },
            {
                a: "https://i.imgur.com/p9QAH7t.png",
                b: "a Rugby Ball",
                c: 3

            },
            {
                a: "https://i.imgur.com/4lPUFt2.png",
                b: "a Controller",
                c: 5

            },
            {
                a: "https://i.imgur.com/BEPMSq8.png",
                b: "a Pocketwatch",
                c: 2

            }
        ];


        let items = new Array;

        for(item of contstantItems){
            for(var _ = 0; _ < item.c; _++){
                items.push(item);
            }
        }

        let randomItem = Math.floor(Math.random() * items.length);
        
        setTimeout(async () => {
            embed.setImage(items[randomItem].a)
            .setTitle("You get " + items[randomItem].b)

            await msg.edit(embed);
        }, 5600);
    }
}