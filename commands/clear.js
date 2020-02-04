const { ErrorMsg } = require("../functions.js");
module.exports = {
    name: 'clear',
    description: "clear commands",
    execute(message, args, MohiMoo, errWhere) {


            if (!args[1]) return message.reply('How many messeges do u want me to sweep?').then(m => m.delete(5000));

            if (args[1] > 100) return message.reply("I can't delete more than 100 mesaages dum dum").then(m => m.delete(5000));

            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
                return message.reply("You can't delete messages....").then(m => m.delete(5000));
            }
            if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
                return message.reply("oof i don't have MANAGE_MESSAGES permission, can't delete messages...").then(m => m.delete(5000));
            }
            else message.channel.bulkDelete(args[1]);
            message.channel.send('Successully deleted ' + (args[1]) + ' messages :D  got the order from => **' + message.author.username + '**').then(m => m.delete(5000));



    }
}