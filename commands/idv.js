const { RichEmbed } = require('discord.js');
const got = require ('got');

module.exports = {
    name: 'idv', 
    description: "sends a random idv post",
    execute(message, args, MohiMoo, errWhere){

        const subReddits = ["https://www.reddit.com/r/IdentityV/random/.json"];

            const random = subReddits[Math.floor(Math.random() * subReddits.length)];

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
            .setDescription(`[${memeImage}](${memeImage})\n${joke}`)
            .setColor("RANDOM")
            .setFooter(`Provided by r/IdentityV | 👍 ${memeUpvotes}| 💬 ${memeNumComments}`);

            if(memeImage.endsWith(".jpg")){
                embeed.setImage(`${memeImage}`)
                message.channel.send(embeed);


            }
            else if(memeImage.endsWith(".png")){
                embeed.setImage(`${memeImage}`)
                message.channel.send(embeed);


            }
            else if(memeImage.endsWith(".gif")){
                embeed.setImage(`${memeImage}`)
                message.channel.send(embeed);


            }
            else {
                message.channel.send(embeed);
            }


            
               
        }).catch(err => console.log(err));
        
        }
}