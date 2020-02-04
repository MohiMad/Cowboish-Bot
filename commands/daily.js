const { RichEmbed } = require('discord.js');
let cooldown = new Set();

module.exports = {
    name: 'daily',
    description: "daily rewards",
    execute(message, args, MohiMoo, errWhere) {

        const coolEmbed = new RichEmbed()
            .setTitle("Take it easy on me dude!")
            .setColor("0xe80000")
            .setDescription("It's a DAILY reward so you have to wait 24 hours until you can get your reward again..");




        const logicPath = require("../models/logicpath.js");

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);


            if (!LP) {

                const newLP = new logicPath({
                    UserID: message.author.id,
                    logic: 0,
                    Dices: 15,
                    Clues: 0,
                    Ess1: 5,
                    Ess2: 5,
                    Ess3: 5,
                    Inspirations: 0,
                    frags: 0,
                    S: 0,
                    A: 0,
                    B: 0,
                    C: 0,
                    D: 0,
                    Echoes: 0,

                    ID: 0,

                    Survivors: {
                        Cowboy: false,
                        Mercenary: false,
                        Coordinator: false,
                        Priestess: false,
                        Mechanic: false,
                        Mindseye: false,
                        Prefumer: false,
                        Dancer: false,
                        Seer: false,
                        Embalmer: false,
                        Acrobat: false,
                        Officer: false,
                        Barmaid: false,
                        Magician: false,
                        Explorer: false,
                        Forward: false,
                        Prospector: false,
                        Enchantress: false,
                        Wilding: false,
                        Postman: false,
                        NewSurv: false,
                        AnotherSurv: false,
                    },

                    Hunters: {

                        WuChang: false,
                        AxeBoi: false,
                        Lizard: false,
                        Clown: false,
                        GameKeeper: false,
                        Ripper: false,
                        SoulWeaver: false,
                        Geisha: false,
                        PhotoGrapher: false,
                        MadEyes: false,
                        Feaster: false,
                        DreamWitch: false,
                        BloodyQueen: false,
                        Pingu: false,
                        Sister: false,
                        NewHunta: false,
                        AnotherHunta: false

                    },
                    Opened: []

                })
                newLP.save().catch(err => console.log(err))
                    .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"));

            }

            else if (cooldown.has(message.author.id)) {
                if (message.deletable) message.delete();

                message.channel.send(coolEmbed).then(m => m.delete(20000));


            }
            else {

                const dailyEmbed = new RichEmbed()
                    .setTitle("🎁 Here is your daily reward 🎁")
                    .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", "Here! take these **3**<:dice:655384578499936257>  **200**<:clue:655384523735040000>")
                    .setColor("0xffd500")
                    .setFooter("Remember to come back the next day to get your rewards again :)");


                message.channel.send(dailyEmbed)
                    .then(cooldown.add(message.author.id));

                LP.Dices = LP.Dices + 3;
                LP.Clues = LP.Clues + 200;
                LP.save().catch(err => console.log(err));



            }

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, 86400000);

        })





    }
}