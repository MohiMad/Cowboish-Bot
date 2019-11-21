
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';
const Discord = require('discord.js');
const snekfetch = require ('snekfetch');
module.exports = {
    name: 'trigger',
    description: "triggers you n ur friends",
execute : async (message, args) => {

    let profilepic = message.author.avatarURL;

    message.channel.send({
        file: {
            attachment: "https://cute-api.tk/v1/generate/triggered?url=" + profilepic,
            name: "triggered.gif"
        }
    });



}

}
