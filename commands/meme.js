const { RichEmbed } = require('discord.js');
const got = require ('got');

module.exports = {
    name: 'meme', 
    description: "sends a random meme",
    execute( message, args){

        const subReddits = ["https://www.reddit.com/r/memes/random/.json", "https://www.reddit.com/r/dankmemes/random/.json"];

            const random = subReddits[Math.floor(Math.random() * subReddits.length)];

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
            .setURL (`${memeUrl}`)
            .setColor("RANDOM")
            .setImage(memeImage)
            .setFooter(`👍 ${memeUpvotes}/💬 ${memeNumComments}`);

            message.channel.send(embeed);
               
        }).catch(console.error);
    }
}