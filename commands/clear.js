const { ErrorMsg } = require("../functions.js");
module.exports = {
    name: 'clear',
    description: "clear commands",
    execute(message, args, bot) {


        if (message.guild && !message.channel.permissionsFor(message.guild.me).missing('MANAGE_MESSAGES')) {
            return ErrorMsg(bot, message, "I don't have the required permissions to execute this command!\nRequired permission: **MANAGE_MESSAGES**")

        }

        else if (!args[1]) return ErrorMsg(bot, message, 'How many messeges do u want me to sweep?');

        if (args[1] > 100) return ErrorMsg(bot, message, "I can't delete more than 100 mesaages dum dum")

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