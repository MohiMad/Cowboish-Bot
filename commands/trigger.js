
const token = 'NjMyMjkxODAwNTg1MDc2NzYx.XaNAoQ.MpR8EcnF4IhKI_wk6-o8gFv9uDw';
const Discord = require('discord.js');
const snekfetch = require ('snekfetch');
module.exports = {
    name: 'trigger',
    description: "triggers you n ur friends",
execute : async (message, args) => {

  let target = message.mentions.users.first() || message.author;
    let profilepic = target.avatarURL;
    let url = `https://arcadia-api.xyz/api/v1/triggered?url=${profilepic}`;

    snekfetch.get(url, {
        headers: {
            "Authorization": token
        }
    }).then(async res => {
        await message.channel.send({
           files: [{
               attachment: res.body,
               name: `${target.tag}-triggered.gif`
           }]
        })
    }).catch(err => console.error(err));

}

}
