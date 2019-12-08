const { Client, RichEmbed, Attachment, Collection } = require('discord.js');
const bot = new Client();

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

            
        const filter = m => m.author.id === message.author.id;

        if ((args[1]) === ('p5-1'))
            message.channel.sendEmbed(p5Embed);
              
            else if ((args[1]) === ('p5-2'))
            message.channel.sendEmbed(Embed);

            else if ((args[1]) === ('s8-2'))
            message.channel.sendEmbed(newEmbed);

            else if ((args[1]) === ('s8-1'))
            message.channel.sendEmbed(essEmbed);

            else{
                message.reply("Oops looks like you chose an invalid essence name essences available are ``s8-1``, ``s8-2``, ``p5-1``, ``p5-2`` please type one of them down bleow");

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
        
                    
                }).catch(collected => {
                    return;
                });

            }
              
              
       

















        }
}
