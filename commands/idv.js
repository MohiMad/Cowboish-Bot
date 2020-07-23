const { RichEmbed } = require('discord.js');
const got = require('got');
const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'idv',
    description: "sends a random idv post",
    execute: async (message, args) => {

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH_FILES** to true");

        const subReddits = ["https://www.reddit.com/r/IdentityV/random/.json"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        await got(random).then(response => {


            let content = JSON.parse(response.body);

            let permalink = content[0].data.children[0].data.permalink;

            let memeUrl = `https://reddit.com${permalink}`;

            var joke = content[0].data.children[0].data.selftext;

            let memeImage = content[0].data.children[0].data.url;

            let memeTitle = content[0].data.children[0].data.title;

            let memeUpvotes = content[0].data.children[0].data.ups;

            let memeNumComments = content[0].data.children[0].data.num_comments;

            let author = content[0].data.children[0].data.author;
            let flair = content[0].data.children[0].data.author_flair_text

            if (memeTitle.length > 256) {
                memeTitle = "Title too long!";
            } else {
                memeTitle = content[0].data.children[0].data.title;
            }
            if (joke.length > 2048) {

                joke = `The post was too long! click [HERE](${memeUrl}) to see it`
            }

            if (flair === null) {
                flair = ` `
            } else {
                flair = "➤ " + flair
            }
            


            const embeed = new RichEmbed()
                .setTitle(`${memeTitle}`)
                .setURL(`${memeUrl}`)
                .setAuthor(`${author}  ` + flair, "https://b.thumbs.redditmedia.com/12jRRi7K2pjkF8ZeQefY7Shgyy0d4N2GdcpjkM4pkeM.png")
                .setDescription(`${joke}`)
                .setColor("RANDOM")
                .setFooter(`Provided by r/IdentityV 👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

            if (memeImage.endsWith(".jpg")) {
                embeed.setImage(`${memeImage}`)
            }
            else if (memeImage.endsWith(".png")) {
                embeed.setImage(`${memeImage}`)
            }
            else if (memeImage.endsWith(".gif")) {
                embeed.setImage(`${memeImage}`)
            }
            else if (joke.length > 1) {
                embeed.setDescription(`${joke}`)
            }
            else {
                embeed.setDescription(`No text or image? it's probably a video... click [HERE](${memeUrl}) to watch it!`)
            }

            message.channel.send(embeed);


        }).catch(err => {
            if (err.message === "Response code 429 (Too Many Requests)") {
                return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
            }
            else {
                console.log(err)
                message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`)
            }
        })



    }
}