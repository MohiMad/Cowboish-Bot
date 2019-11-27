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
            .setColor("RANDOM")
            .setFooter('NOTE: This command doesnt have the same ingame percentage');

        numba = 32;
        imageNumba = Math.floor(Math.random() * (numba - 1 + 1)) + 1;
        const p5Embed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [P5 No.2] and got...', message.author.avatarURL)
            .attachFiles(["./p5/" + 'p5-' + imageNumba + ".jpg"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://p5-' + imageNumba + '.jpg')
            .setColor("RANDOM")
            .setFooter('NOTE: This command doesnt have the same ingame percentage');

        numb = 32;
        imageNumb = Math.floor(Math.random() * (numb - 1 + 1)) + 1;
        const Embed = new RichEmbed()
            .setAuthor(message.author.username + ' opened an essence [P5 No.1] and got...', message.author.avatarURL)
            .attachFiles(["./hasan/" + 'e' + imageNumb + ".jpg"])
            .setURL('https://rkanjo2.wixsite.com/cowboishbot')
            .setImage('attachment://e' + imageNumb + '.jpg')
            .setColor("RANDOM")
            .setFooter('NOTE: This command doesnt have the same ingame percentage');

        const filter = m => m.author.id === message.author.id;

        if (!args[1])
            message.reply('What essence do you want to open? please type one of these essences down below... ``p5-1``, ``p5-2`` or ``s8``');
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 10000
        }).then(collected => {

            if ((args[1]) || (collected.first().content === 'p5-2')){
                message.channel.sendEmbed(p5Embed);
            }

            else if ((args[1]) || (collected.first().content === 's8')) {
                message.channel.sendEmbed(newEmbed);
            }

            else if ((args[1]) || (collected.first().content === 'p5-1')) {
                message.channel.sendEmbed(Embed);
            }
        })
















        }
}
