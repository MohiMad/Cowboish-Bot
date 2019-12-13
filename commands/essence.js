const { Client, RichEmbed, Attachment, Collection } = require('discord.js');
const bot = new Client();
let cooldown = new Set();
let seconds = 3;
module.exports = {
    name: 'essence',
    description: "opens an essence",
    execute(message, args) {


        number = 45;
        imagNumber = Math.floor(Math.random() * (number - 1 + 1)) + 1;
        const newEmbed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [S8 No.2] and got...', message.author.avatarURL)
            .attachFiles(["./s8/" + 'essence' + imagNumber + ".PNG"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://essence' + imagNumber + '.PNG')
            .setColor("RANDOM");
            //[S8 No.2]


            nmber = 48;
        imagNmber = Math.floor(Math.random() * (nmber - 1 + 1)) + 1;
        const s9Embed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [S9] and got...', message.author.avatarURL)
            .attachFiles(["./s9-1/" + 's9-' + imagNmber + ".PNG"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://s9-' + imagNmber + '.PNG')
            .setColor("RANDOM");

        

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


            const coolEmbed = new RichEmbed()
            .setTitle("Take it easy on me dude!")
            .addField("You'll have to wait **3** seconds after you opened an essence before you can open another one", "Instead of waiting, why don't you vote to me on [Top.gg](https://top.gg/bot/632291800585076761/vote)?");


            
        const filter = m => m.author.id === message.author.id;

        if (cooldown.has(message.author.id)){
            message.delete();
            message.channel.sendEmbed(coolEmbed);

            setTimeout(() => {
                cooldown.delete(message.author.id)

            }, seconds * 1000)

        }

        

        else if ((args[1]) === ('p5-1'))
            message.channel.sendEmbed(p5Embed)
            .then(cooldown.add(message.author.id));
              
            else if ((args[1]) === ('p5-2'))
            message.channel.sendEmbed(Embed)
            .then(cooldown.add(message.author.id));


            else if ((args[1]) === ('s8-2'))
            message.channel.sendEmbed(newEmbed)
            .then(cooldown.add(message.author.id));


            else if ((args[1]) === ('s8-1'))
            message.channel.sendEmbed(essEmbed)
            .then(cooldown.add(message.author.id));


            else if ((args[1]) === ('s9'))
            message.channel.sendEmbed(s9Embed)
            .then(cooldown.add(message.author.id));



            else{
                message.reply("Oops looks like you chose an invalid essence name essences available are ``s8-1``, ``s8-2``, ``p5-1``, ``p5-2``, ``s9`` please type one of them down bleow");

                message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000
                }).then(collected => {
        
                    let ess = collected.first();
        
                    if ((ess.content === 'p5-2')){
                        message.channel.sendEmbed(p5Embed);
                    }
        
                    else if ((ess.content === 's8-2')) {
                        message.channel.sendEmbed(newEmbed);
                    }
        
                    else if ((ess.content === 'p5-1')) {
                        message.channel.sendEmbed(Embed);
                    }

                    else if ((ess.content === 's8-1')) {
                        message.channel.sendEmbed(essEmbed);
                    }

                    else if ((ess.content === 's9')) {
                        message.channel.sendEmbed(s9Embed);
                    }
        
                    
                }).catch(collected => {
                    return;
                });
                
                
            }
              
              
       

















        }
}
