const { Client, RichEmbed, Attachment, Collection } = require('discord.js');

const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute(message, args) {


        

        const SEmbed = new RichEmbed()
            .setAuthor(`Congrats ${message.author.username}! you got Postman's limited skin 👏`, message.author.avatarURL)
            .attachFiles(["./s9-1/s9-1.PNG"])
            .setImage('attachment://s9-1.PNG')
            .setColor("0xfcba03")
            .setFooter("1 S skin was added to your collection!");
            //For S skins

            var Askins = ["s9-2.PNG", "s9-3.PNG"];
            var Askin = Math.floor(Math.random() * Askins.length);

            const AEmbed = new RichEmbed()
            .setAuthor(`Eyy! ${message.author.username}, you got an A skin 🤗`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Askins[Askin]) ])
            .setImage('attachment://' + (Askins[Askin]) )
            .setColor("0xbb2af5")
            .setFooter("1A skin is now in your inventory :)");

            //for A skins



            var Bskins = ["s9-4.PNG", "s9-5.PNG", "s9-6.PNG", "s9-7.PNG", "s9-8.PNG", "s9-9.PNG", "s9-10.PNG", "s9-11.PNG", "s9-12.PNG", "s9-13.PNG"];
            var Bskin = Math.floor(Math.random() * Bskins.length);

            const BEmbed = new RichEmbed()
            .setAuthor(`Ah, you get a B skin ${message.author.username}`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Bskins[Bskin]) ])
            .setImage('attachment://' + (Bskins[Bskin]))
            .setColor("0x2a3ef5")
            .setFooter("1 B skin is now in your pocket :v");
            //For B skins


            var Cskins = ["s9-14.PNG", "s9-15.PNG", "s9-16.PNG", "s9-17.PNG", "s9-18.PNG", "s9-19.PNG", "s9-20.PNG", "s9-21.PNG", "s9-22.PNG", "s9-23.PNG", "s9-24.PNG", "s9-25.PNG", "s9-26.PNG", "s9-27.PNG", "s9-28.PNG", "s9-29.PNG", "s9-30.PNG", "s9-31.PNG", "s9-32.PNG", "s9-33.PNG", "s9-34.PNG"];
            var Cskin = Math.floor(Math.random() * Cskins.length);
            const CEmbed = new RichEmbed()
            .setAuthor(`R.I.P ${message.author.username} you get a C skin, sad day for you`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Cskins[Cskin]) ])
            .setImage('attachment://'+ (Cskins[Cskin]))
            .setColor("0x14de3c")
            .setFooter("It's alright, you will get something better next time :D");
            //for C skins

            var Dskins = ["s9-35.PNG", "s9-36.PNG", "s9-37.PNG", "s9-38.PNG", "s9-39.PNG", "s9-40.PNG", "s9-41.PNG", "s9-42.PNG", "s9-43.PNG", "s9-44.PNG", "s9-45.PNG", "s9-46.PNG", "s9-47.PNG", "s9-48.PNG"];
            var Dskin = Math.floor(Math.random() * Dskins.length);

            const DEmbed = new RichEmbed()
            .setAuthor(`Lmao ${message.author.username} got a graffiti `, message.author.avatarURL)
            .attachFiles(["./s9-1/" +  (Dskins[Dskin])])
            .setImage('attachment://' + (Dskins[Dskin]) )
            .setColor("0xffffff")
            .setFooter("Graffitis are fine :p");


            var randomEmbeds = [
                SEmbed,
                AEmbed, AEmbed, AEmbed, 
                BEmbed, BEmbed, BEmbed, BEmbed, BEmbed, BEmbed,
                CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed, CEmbed,
                DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed, DEmbed 
                ];

            var REmbed = Math.floor(Math.random() * randomEmbeds.length);


            logicPath.findOne({

                UserID: message.author.id
    
            }, (err, LP) => {
    
                if (err) console.log(err);

                else if (!LP){

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
                        D: 0

    
                    })
                    newLP.save().catch(err => console.log(err))
                    .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"))

                }            

            
        else if (LP.Ess1 === 0){
            return message.reply("you don't have any ``s9-1`` essences to open, try rolling some dices and maybe you can get sum :)");

        }

        
        if ( (randomEmbeds[REmbed]) === (SEmbed) ){
            message.channel.send(SEmbed);

            LP.S = LP.S + 1;
            LP.Ess1 = LP.Ess1 - 1;

            LP.save().catch(err => console.log(err));

        }

        else if ( (randomEmbeds[REmbed]) === (AEmbed) ){
            message.channel.send(AEmbed);

            LP.A = LP.A + 1;

            LP.Ess1 = LP.Ess1 - 1;

            LP.save().catch(err => console.log(err));

        }

        else if ( (randomEmbeds[REmbed]) === (BEmbed) ){
            message.channel.send(BEmbed);

            LP.B = LP.B + 1;
            LP.Ess1 = LP.Ess1 - 1;

            LP.save().catch(err => console.log(err));

        }

        else if ( (randomEmbeds[REmbed]) === (CEmbed) ){
            message.channel.send(CEmbed);

            LP.C = LP.C + 1;

            LP.Ess1 = LP.Ess1 - 1;

            LP.save().catch(err => console.log(err));

        }


        //for D values

        else {
            message.channel.send(DEmbed);

            LP.D = LP.D + 1;

            LP.Ess1 = LP.Ess1 - 1;

            LP.save().catch(err => console.log(err));

        }
          
    

        




       

    })
        


    }
}
