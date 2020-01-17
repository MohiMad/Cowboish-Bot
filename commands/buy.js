const logicPath = require("../models/logicpath.js");

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'buy',
    description: "buy some stuff",
    execute(message, args, MohiMoo, errWhere) {

        try{

        const buyEmbed = new RichEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username} successfully bought...`, message.author.avatarURL);

        //____________buy embed is here_______________

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
    
            }
    
            });
            newLP.save().catch(err => console.log(err))
            .then(message.reply("oof you didn't have any data saved, but now you do\n**Please run the command again!**"));
            }

        if(!args[1]){
            message.reply("Are you messing with me? please provide what you want to buy after the command!\nexample `>buy coa`");
        }

        else if ( (args[1]) === "coa" ){
            if(LP.Inspirations < 96){
                message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more!`)

            }
            else{
                buyEmbed.setDescription(`You bought **1** <:ess3:655840571616919586> and paid *96* <:inspirations:655840409674711060> `);
                message.channel.send(buyEmbed);

                LP.Inspirations = LP.Inspirations - 96 ;
                LP.Ess2 = LP.Ess2 + 1 ;
                LP.save().catch(err => console.log(err));
            }
        }

        else if ( (args[1]) === "s9-1" ){
            if(LP.Inspirations < 96){
                message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more`)

            }
            else{
                buyEmbed.setDescription(`You bought **1** <:ess1:655840713904488469> and paid *96* <:inspirations:655840409674711060> `);
                message.channel.send(buyEmbed);

                LP.Inspirations = LP.Inspirations - 96 ;
                LP.Ess1 = LP.Ess1 + 1 ;
                LP.save().catch(err => console.log(err));
            }
        }

        else if ( (args[1]) === "s9-2" ){
            if(LP.Inspirations < 96){
                message.reply(`sorry friend! but you don't have enough inspirations to buy that, you need **${96 - LP.Inspirations}** <:inspirations:655840409674711060> more!`)

            }
            else{
                buyEmbed.setDescription(`You bought **1** <:ess2:655840643847028751> and paid *96* <:inspirations:655840409674711060> `);
                message.channel.send(buyEmbed);

                LP.Inspirations = LP.Inspirations - 96 ;
                LP.Ess3 = LP.Ess3 + 1 ;
                LP.save().catch(err => console.log(err));
            }
        }

        else {
            message.reply("this item doesn't exist in the shop! make sure that you typed it correctly!");
        }

    })//LP 

}catch(err){
    MohiMoo.send(errWhere + "\n```" + err + "```");
    console.log(err);
    message.channel.send("❌ **An error has occured!** sorry :C");

}

    }

}