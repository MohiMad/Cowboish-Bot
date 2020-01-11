const logicPath = require("../models/logicpath.js");
const { stripIndents } = require('common-tags');

const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'shop',
    description: "shop list for ya",
    execute(message, args, MohiMoo, errWhere) {

            //___________Main shop list_________________
        const shopEmbed = new RichEmbed()
        .setTitle("<:cowboy:649130677253439508> Cowboish shop list")
        .setColor("RANDOM")
        .setDescription("Here is a list of the lists available in the shop! do `>shop <listID>`")
        .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents` 
        <:ess1:655840713904488469> | **Essences shop!** ─ ID ➜  __*essence*__
        Too unlucky to get essences? well buy some...

        <:luckyguy:649120786312855563> | **Survivors list!** (*Unvailable*) ─ ID ➜  __*survivor*__
        I swear to god if you buy Enchantress...

        <:uwuchang:659147931592687616> | **Hunters List!** (*Unvailable*) ─ ID ➜ __*hunter*__
        Nothing to say here tbh... `, true)
        .setFooter("Cowboish shop list ─ page 1 of 1");

        //___________Essence embed here_______________
        const EssEmbed = new RichEmbed()
        .setTitle("<:cowboy:649130677253439508> Cowboish Essence Shop!")
        .setDescription("Are you low on essences? no essences at all? it's all fine, you can buy yourself some by doing `>buy <itemID>`")
        .setColor("RANDOM")
        .addField("▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔", stripIndents`
        <:ess1:655840713904488469> | **essence s9-1** - Price : *96* <:inspirations:655840409674711060> - ID: __*s9-1*__

        <:ess3:655840571616919586> | **CAO III essence** - Price : *96* <:inspirations:655840409674711060> - ID: __*cao*__

        <:ess2:655840643847028751>  | **Essence s9-2** - Price : *96* <:inspirations:655840409674711060> - ID: __*s9-2*__

        `)
        .setFooter("Cowboish essence shop ─ page 1 of 1");

        if(!args[1]){
            message.channel.send(shopEmbed);
        }

        else if ( (args[1]) === "essence" ){
            message.channel.send(EssEmbed);

        }

        else if ((args[1]) === "survivor"){
            message.reply("survivors list is not available yet, sorry :C");
        }

        else if ((args[1]) === "hunter"){
            message.reply("hunters list is not available yet, sorry :C");
        }

        else {
            message.reply("what are you dooooiing! this list doesn't exist");
        }


    }
}
