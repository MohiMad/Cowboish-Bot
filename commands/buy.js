const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'buy',
    description: "buy some stuff",
    execute(message, args) {

        const buyEmbed = new RichEmbed()
        .setTimestamp()
        .setAuthor(`${message.author.username} successfully bought...`, message.author.avatarURL);

        //____________buy embed is here_______________

        logicPath.findOne({
            UserID: message.author.id

        }, (err, LP) => {

            if (err) console.log(err);
        

            if (!LP) {
            message.reply("dude, you don't have an identity v account, but it's all fine, you can do `>quick` and i will create on for ya ;D");

            }

        if(!args[1]){
            message.reply("Are you messing with me? please provide what you want to buy after the command!\nexample `>buy cao`");
        }

        else if ( (args[1]) === "cao" ){
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

    }

}