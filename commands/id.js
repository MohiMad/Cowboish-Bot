const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'id',
    description: "id info",
    execute : async(message, args, bot, errWhere, MohiMoo) => {

        try{

        const LP = await logicPath.findOne({ UserID: message.author.id });

        if(!LP){
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
        else if(!args[1]){

            if(LP.ID === "0"){
            const noArgsEmbed = new RichEmbed()
                .setTitle("You haven't set your ingame ID yet!")
                .setColor("RED")
                .setDescription("Adding your ingame ID allows your friends to quickly add you and finding your id via the `>LP <TagHere>` command\n\n• Usage: `>ID <IngameID>`\n• The ID must be **7** numbers long\n• It's an ID so it must be numbers only!");

                message.channel.send(noArgsEmbed);
            }
            else{
                const idEmbed = new RichEmbed()
                    .setAuthor(`Hey ${message.author.username}! Your ID is set to...`)
                    .setColor("GREEN")
                    .setDescription(`IngameID: **${LP.ID}**` + "\nYou can change your ID again by doing `>ID <ID_here>`")

                message.channel.send(idEmbed)
            }
        }

        else if(isNaN(args[1])){
            message.reply("the ID given must contain **numbers** only and is **7** numbers long!")

        }
        else if(args[1].length !== 7){
            message.reply("the ID given must contain **numbers** only and is **7** numbers long!")

        }
        else{

            LP.ID = args[1];
            LP.save().catch(err => console.log(err));

            message.channel.send("Succesfully set your ID to **" + args[1] + "**");

        }
    }catch(err){
        MohiMoo.send(errWhere + "\n```" + err + "```");
        console.log(err);
        message.channel.send("❌ **An error has occured!** sorry :C");
    }

    }
}