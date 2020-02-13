const { RichEmbed } = require('discord.js');
const got = require('got');

module.exports = {
    name: 'meme',
    description: "sends a random meme",
    execute(message, args, MohiMoo) {

        const subReddits = ["https://www.reddit.com/r/memes/random/.json", "https://www.reddit.com/r/dankmemes/random/.json"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];


        try {
            got(random).then(response => {

                let content = JSON.parse(response.body);

                let permalink = content[0].data.children[0].data.permalink;

                let memeUrl = `https://reddit.com${permalink}`;

                let memeImage = content[0].data.children[0].data.url;

                let memeTitle = content[0].data.children[0].data.title;

                let memeUpvotes = content[0].data.children[0].data.ups;

                let memeNumComments = content[0].data.children[0].data.num_comments;


                const embeed = new RichEmbed()
                    .setTitle(`${memeTitle}`)
                    .setURL(`${memeUrl}`)
                    .setColor("RANDOM")
                    .setImage(memeImage)
                    .setFooter(`👍 ${memeUpvotes}/💬 ${memeNumComments}`);

                message.channel.send(embeed);

            })
        } catch (err) {
            if (err.message === "Response code 429 (Too Many Requests)") {
                return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
            }
            else if (err.message === "RichEmbed descriptions may not exceed 2048 characters.") {
                return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again?`);
            }
            else {
                console.log(err);
                MohiMoo.send("```" + err + "```");
                message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`)
            }
        }

    }
}