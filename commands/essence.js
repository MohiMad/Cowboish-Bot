const { RichEmbed } = require('discord.js');
const { ErrorMsg } = require("../functions.js")
let cooldown = new Set();
let seconds = 3;
module.exports = {
    name: 'essence',
    description: "opens an essence",
    execute(message, args, bot) {


        number = 45;
        imagNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const newEmbed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [S8 No.2] and got...', message.author.avatarURL)
            .attachFiles(["./s8/" + 'essence' + imagNumber + ".PNG"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://essence' + imagNumber + '.PNG')
            .setColor("RANDOM");
        //[S8 No.2]


        numbe = 50;
        imagNumbe = Math.floor(Math.random() * (numbe - 1 + 1)) + 1;
        const essEmbed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [S8 No.1] and got...', message.author.avatarURL)
            .attachFiles(["./s8-2/" + 'ess' + imagNumbe + ".PNG"])
            .setImage('attachment://ess' + imagNumbe + '.PNG')
            .setColor("RANDOM");
        //[S8 No.1]

        numba = 32;
        imageNumba = Math.floor(Math.random() * (numba - 1 + 1)) + 1;
        const p5Embed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [P5 No.2] and got...', message.author.avatarURL)
            .attachFiles(["./p5/" + 'p5-' + imageNumba + ".jpg"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://p5-' + imageNumba + '.jpg')
            .setColor("RANDOM");
        //[P5 No.2]


        numb = 32;
        imageNumb = Math.floor(Math.random() * (numb - 1 + 1)) + 1;
        const Embed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [P5 No.1] and got...', message.author.avatarURL)
            .attachFiles(["./hasan/" + 'e' + imageNumb + ".jpg"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://e' + imageNumb + '.jpg')
            .setColor("RANDOM");
        //[P5 No.1]

        var s9_1_number = 48;
        var random_s9_number = Math.floor(Math.random() * (s9_1_number - 1 + 1)) + 1;

        const s9_1_embed = new RichEmbed()
            .setColor("RANDOM")
            .setAuthor(`Here is what you get ${message.author.username}!`, message.author.avatarURL)
            .attachFiles(["./essences/s9-1/s9-" + random_s9_number + ".PNG"])
            .setImage('attachment://s9-' + random_s9_number + '.PNG');


        var random_s9_2_number = Math.floor(Math.random() * (49 - 1 + 1)) + 1;

        const s9_2_Embed = new RichEmbed()
            .setAuthor(`Here is your reward ${message.author.username}!`, message.author.avatarURL)
            .setColor("RANDOM")
            .attachFiles(["./essences/s9-2/s9-" + random_s9_2_number + ".jpg"])
            .setImage("attachment://s9-" + random_s9_2_number + ".jpg");


        var ra_coa_number = Math.floor(Math.random() * (42 - 1 + 1)) + 1;

        const coa_Embed = new RichEmbed()
            .setAuthor(`Here is what you got ${message.author.username}!`, message.author.avatarURL)
            .setColor("RANDOM")
            .attachFiles(["./essences/caoIII/cao-" + ra_coa_number + ".jpg"])
            .setImage('attachment://cao-' + ra_coa_number + '.jpg');



        const coolEmbed = new RichEmbed()
            .setTitle("Take it easy on me dude!")
            .addField("You'll have to wait **3** seconds after you opened an essence before you can open another one...", "Instead of waiting, why don't you vote to me on [Top.gg](https://top.gg/bot/632291800585076761/vote) <:cowboy:649130677253439508> ");



        const filter = m => m.author.id === message.author.id;

        if (cooldown.has(message.author.id)) {
            if (message.deletable) message.delete();
            message.channel.send(coolEmbed).then(m => m.delete(20000));
        }



        else if ((args[1]) === ('p5-1')) {
            message.channel.send(p5Embed)
                .then(cooldown.add(message.author.id));
        }
        else if ((args[1]) === ('p5-2'))
            message.channel.send(Embed)
                .then(cooldown.add(message.author.id));


        else if ((args[1]) === ('s8-2'))
            message.channel.send(newEmbed)
                .then(cooldown.add(message.author.id));


        else if ((args[1]) === ('s8-1'))
            message.channel.send(essEmbed)
                .then(cooldown.add(message.author.id));


        else if ((args[1]) === ('s9-1')) {
            message.channel.send(s9_1_embed)
                .then(cooldown.add(message.author.id));

        }
        else if (args[1] === "s9-2") {
            message.channel.send(s9_2_Embed)
            .then(cooldown.add(message.author.id));

        }
        else if(args[1] === "cao"){
            message.channel.send(coa_Embed)
            .then(cooldown.add(message.author.id));
        }


        else {
            ErrorMsg(bot, message, "Ooops looks like you chose an invalid essence name or didn't provide one!\nThe current available essences are:\n`s8-1` - `s8-2` - `p5-1` - `p5-2` - `s9-1` - `s9-2` - `coa`\nPlease type one of those essence's name down below in the next **20** seconds\n\nOr you can just do: `>essence <essenceName>`")

            message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000
            }).then(collected => {

                let ess = collected.first();

                if ((ess.content === 'p5-2')) {
                    message.channel.send(p5Embed);
                }

                else if ((ess.content === 's8-2')) {
                    message.channel.send(newEmbed);
                }

                else if ((ess.content === 'p5-1')) {
                    message.channel.send(Embed);
                }

                else if ((ess.content === 's8-1')) {
                    message.channel.send(essEmbed);
                }

                else if ((ess.content === 's9-1')) {
                    message.channel.send(s9_1_embed)
                }
                else if(ess.content === "s9-2"){
                    message.channel.send(s9_2_Embed)
                }
                else if(ess.content === "coa"){
                    message.channel.send(coa_Embed)
                }

            }).catch(collected => {
                return;
            });


        }
        setTimeout(() => {
            cooldown.delete(message.author.id)

        }, seconds * 1000);



    }
}
