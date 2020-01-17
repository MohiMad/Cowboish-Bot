const { RichEmbed } = require('discord.js');

const { stripIndents } = require("common-tags");

const logicPath = require("../models/logicpath.js");


module.exports = {
    name: 'open',
    description: "opens an sessenc ofr yga ",
    execute : async (message, args, MohiMoo, errWhere) => {

        try{


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
            .attachFiles(["./s9-1/" + (Askins[Askin])])
            .setImage('attachment://' + (Askins[Askin]))
            .setColor("0xbb2af5")
            .setFooter("1A skin is now in your inventory :)");
        //for A skins
        var Bskins = ["s9-4.PNG", "s9-5.PNG", "s9-6.PNG", "s9-7.PNG", "s9-8.PNG", "s9-9.PNG", "s9-10.PNG", "s9-11.PNG", "s9-12.PNG", "s9-13.PNG"];
        var Bskin = Math.floor(Math.random() * Bskins.length);
        const BEmbed = new RichEmbed()
            .setAuthor(`Ah, you get a B skin ${message.author.username}`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Bskins[Bskin])])
            .setImage('attachment://' + (Bskins[Bskin]))
            .setColor("0x2a3ef5")
            .setFooter("1 B skin is now in your pocket :v");
        //For B skins
        var Cskins = ["s9-14.PNG", "s9-15.PNG", "s9-16.PNG", "s9-17.PNG", "s9-18.PNG", "s9-19.PNG", "s9-20.PNG", "s9-21.PNG", "s9-22.PNG", "s9-23.PNG", "s9-24.PNG", "s9-25.PNG", "s9-26.PNG", "s9-27.PNG", "s9-28.PNG", "s9-29.PNG", "s9-30.PNG", "s9-31.PNG", "s9-32.PNG", "s9-33.PNG", "s9-34.PNG"];
        var Cskin = Math.floor(Math.random() * Cskins.length);
        const CEmbed = new RichEmbed()
            .setAuthor(`R.I.P ${message.author.username} you get a C skin, sad day for you`, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Cskins[Cskin])])
            .setImage('attachment://' + (Cskins[Cskin]))
            .setColor("0x14de3c")
            .setFooter("It's alright, you will get something better next time :D");
        //for C skins
        var Dskins = ["s9-35.PNG", "s9-36.PNG", "s9-37.PNG", "s9-38.PNG", "s9-39.PNG", "s9-40.PNG", "s9-41.PNG", "s9-42.PNG"];
        var Dskin = Math.floor(Math.random() * Dskins.length);
        const DEmbed = new RichEmbed()
            .setAuthor(`Lmao ${message.author.username} got a graffiti `, message.author.avatarURL)
            .attachFiles(["./s9-1/" + (Dskins[Dskin])])
            .setImage('attachment://' + (Dskins[Dskin]))
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
    
                })
                newLP.save().catch(err => console.log(err))
                .then(message.reply("It seems like you didn't have any idv account, a new one just got created for you! please try to run the command again :)"))

            }

            if (!args[1]) {

                const noargsEmbed = new RichEmbed()
                    .setTitle("Please provide one of the essences ID after the command")
                    .setColor("0xfc2403")
                    .setDescription(
                        stripIndents`Essences available are..
                        <:ess1:655840713904488469> | **Essences s9-1** ─ ID ➜  __*s9-1*__

                        <:ess3:655840571616919586> | **COA III essence** - ID: __*coa*__
                `)
                    .setFooter("Example - >open s9-1");

                message.channel.send(noargsEmbed);
            }

            else if ((args[1]) === "s9-1") {

                if (LP.Ess1 === 0) {
                    return message.reply("you don't have any ``s9-1`` essences to open, try rolling some dices or buy some from the shop");

                }


                else if ((randomEmbeds[REmbed]) === (SEmbed)) {
                    message.channel.send(SEmbed);

                    LP.S = LP.S + 1;
                    LP.Ess1 = LP.Ess1 - 1;

                    LP.save().catch(err => console.log(err));

                }

                else if ((randomEmbeds[REmbed]) === (AEmbed)) {
                    message.channel.send(AEmbed);


                    LP.A = LP.A + 1;

                    LP.Ess1 = LP.Ess1 - 1;

                    LP.save().catch(err => console.log(err));

                }

                else if ((randomEmbeds[REmbed]) === (BEmbed)) {
                    message.channel.send(BEmbed);

                    LP.B = LP.B + 1;
                    LP.Ess1 = LP.Ess1 - 1;

                    LP.save().catch(err => console.log(err));

                }

                else if ((randomEmbeds[REmbed]) === (CEmbed)) {
                    message.channel.send(CEmbed);

                    
                    LP.C = LP.C + 1;

                    LP.Ess1 = LP.Ess1 - 1;

                    LP.save().catch(err => console.log(err));

                }


                //for D values

                else {
                    message.channel.send(DEmbed);


                    LP.Ess1 = LP.Ess1 - 1;

                    LP.save().catch(err => console.log(err));

                }

            }//for the s9-1 essence
            else if ((args[1]) === "coa") {

                const ScaoEmbed = new RichEmbed()
                    .setAuthor(`Eyy congrats ${message.author.username} you got an S skin!`, message.author.avatarURL)
                    .attachFiles(["./caoIII/cao-1.jpg"])
                    .setImage('attachment://cao-1.jpg')
                    .setColor("0xfcba03")
                    .setFooter("1S skin is now in you pocket ;D");
                    //___________CAO S SKIN_______________
            
                var CaoAskins = ["cao-2.jpg", "cao-3.jpg", "cao-4.jpg", "cao-5.jpg"];
                var CaoAskin = Math.floor(Math.random() * CaoAskins.length);
            
                const AcaoEmbed = new RichEmbed()
                .setAuthor(`Eyy! ${message.author.username}, you got an A skin 🤗`, message.author.avatarURL)
                .attachFiles(["./caoIII/" + (CaoAskins[CaoAskin])])
                .setImage('attachment://' + (CaoAskins[CaoAskin]))
                .setColor("0xbb2af5")
                .setFooter("1A skin is now in your inventory :)");
                //-_________________CAO A skin______________
            
                var CaoBskins = ["cao-6.jpg", "cao-7.jpg", "cao-8.jpg", "cao-9.jpg", "cao-10.jpg"];
                var CaoBskin = Math.floor(Math.random() * CaoBskins.length);
            
            const CaoBEmbed = new RichEmbed()
            .setAuthor(`Here is your B skin ${message.author.username}`, message.author.avatarURL)
            .attachFiles(["./caoIII/" + (CaoBskins[CaoBskin])])
            .setImage('attachment://' + (CaoBskins[CaoBskin]))
            .setColor("0x2a3ef5")
            .setFooter("1B skin is now in your pocket :v");
            //___________________FOR B skin________________
            
            var CaoCskins = ["cao-22.jpg", "cao-23.jpg", "cao-24.jpg", "cao-25.jpg", "cao-26.jpg", "cao-27.jpg", "cao-28.jpg", "cao-29.jpg"];
            var CaoCskin = Math.floor(Math.random() * CaoCskins.length);
            const CaoCEmbed = new RichEmbed()
            .setAuthor(`R.I.P ${message.author.username} you get a C skin, sad day for you`, message.author.avatarURL)
            .attachFiles(["./caoIII/" + (CaoCskins[CaoCskin])])
            .setImage('attachment://' + (CaoCskins[CaoCskin]))
            .setColor("0x14de3c")
            .setFooter("You should get used to your unluck :/");
            
            //________________C valur stff______________________
            var CaoDskins = ["cao-11.jpg", "cao-12.jpg", "cao-13.jpg", "cao-14.jpg", "cao-15.jpg", "cao-16.jpg", "cao-17.jpg", "cao-18.jpg", "cao-19.jpg", "cao-20.jpg", "cao-21.jpg", "cao-30.jpg", "cao-31.jpg", "cao-32.jpg", "cao-33.jpg", "cao-34.jpg", "cao-35.jpg", "cao-36.jpg", "cao-37.jpg", "cao-38.jpg", "cao-39.jpg", "cao-40.jpg", "cao-41.jpg", "cao-42.jpg"];
            var CaoDskin = Math.floor(Math.random() * CaoDskins.length);
            
            const CaoDEmbed = new RichEmbed()
            .setAuthor(`You get some useless stuff ma friend!`, message.author.avatarURL)
            .attachFiles(["./caoIII/" + (CaoDskins[CaoDskin])])
            .setImage('attachment://' + (CaoDskins[CaoDskin]))
            .setColor("0xffffff")
            .setFooter("Graffitis are fine :p");
            //_________________D value for CAOIII__________________
            
            var randomCaoEmbeds = [ScaoEmbed,
            AcaoEmbed, AcaoEmbed, AcaoEmbed, AcaoEmbed, AcaoEmbed,
            CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed, CaoBEmbed,
            CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed, CaoCEmbed,
            CaoDEmbed, CaoDEmbed,  CaoDEmbed,  CaoDEmbed,  CaoDEmbed,  
            ];
            var CaoREmbed = Math.floor(Math.random() * randomCaoEmbeds.length);
            
            if (LP.Ess2 === 0){
                return message.reply(`you have 0 CAOII essences <:ess3:655840571616919586> , try rolling some dices or buy some from the shop!`);
            
            }
            
            else if ((randomCaoEmbeds[CaoREmbed]) === ScaoEmbed){
                message.channel.send(ScaoEmbed);
                
                LP.Ess2 = LP.Ess2 - 1;
                LP.S = LP.S + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === AcaoEmbed){
                message.channel.send(AcaoEmbed);

                                
                LP.Ess2 = LP.Ess2 - 1;
                LP.A = LP.A + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === CaoBEmbed){
                message.channel.send(CaoBEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.B = LP.B + 1;
                LP.save().catch(err => console.log(err));
            }
            else if ((randomCaoEmbeds[CaoREmbed]) === CaoCEmbed){
                message.channel.send(CaoCEmbed);


                LP.Ess2 = LP.Ess2 - 1;
                LP.C = LP.C + 1;
                LP.save().catch(err => console.log(err));
            }
            else {
                message.channel.send(CaoDEmbed);


                LP.Ess2 = LP.Ess2 - 1 ;
                LP.D = LP.D + 1 ;
                LP.save().catch(e => console.log(e));
            }
                  
            }//__________if args === cao___________-

        })//_______find one_________

    }catch(err){
        MohiMoo.send(errWhere + "\n```" + err + "```");
        console.log(err);
        message.channel.send("❌ **An error has occured!** sorry :C");
    }
           
    }
}
