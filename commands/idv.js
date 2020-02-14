const { RichEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'idv',
    description: "sends a random idv post",
    execute(message, args, MohiMoo) {



        const subReddits = ["https://www.reddit.com/r/IdentityV/random/.json"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        try {

            got(random).then(response => {

                let content = JSON.parse(response.body);

                let permalink = content[0].data.children[0].data.permalink;

                let memeUrl = `https://reddit.com${permalink}`;

                var joke = content[0].data.children[0].data.selftext;

                let memeImage = content[0].data.children[0].data.url;

                let memeTitle = content[0].data.children[0].data.title;

                let memeUpvotes = content[0].data.children[0].data.ups;

                let memeNumComments = content[0].data.children[0].data.num_comments;



                const embeed = new RichEmbed()
                    .setTitle(`${memeTitle}`)
                    .setURL(`${memeUrl}`)
                    .setDescription(`${joke}`)
                    .setColor("RANDOM")
                    .setFooter(`Provided by r/IdentityV | 👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                if (joke.length > 2048) {
                    return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again?`);

                }
                else if (memeImage.endsWith(".jpg")) {
                    embeed.setImage(`${memeImage}`)
                    message.channel.send(embeed);
                }
                else if (memeImage.endsWith(".png")) {
                    embeed.setImage(`${memeImage}`)
                    message.channel.send(embeed);
                }
                else if (memeImage.endsWith(".gif")) {
                    embeed.setImage(`${memeImage}`)
                    message.channel.send(embeed);
                }
                else {
                    message.channel.send(embeed);
                }

            }).catch(err => {
                if (err.message === "Response code 429 (Too Many Requests)") {
                    return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
                }
                else if (err.message === "RichEmbed descriptions may not exceed 2048 characters.") {
                    return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again?`);
                }
                else {
                    MohiMoo.send("```" + err + "```");
                    message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`)
                }

            })
        } catch (err) {
            console.log(err);

        }




    }
}