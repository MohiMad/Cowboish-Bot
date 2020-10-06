const { MessageEmbed } = require('discord.js');
const got = require('got');

const { ErrorMsg, coolEmbed, addCooldown, findCooldown } = require("../functions.js");

module.exports = {
    name: 'meme',
    description: "sends a random meme",
    execute: async (message, args, MohiMoo) => {

        const cooldownCheck = await findCooldown(message, "meme");

        if (cooldownCheck) return coolEmbed(message, "The cooldown is still on >:/", "This command requires a lot of energy from me, that's why there is a **5** seconds cooldown set on this command... You have to wait **REMAINING** more :)", cooldownCheck.timeRemaining, ["s"]);


        const subReddits = ["https://www.reddit.com/r/memes/random/.json", "https://www.reddit.com/r/dankmemes/random/.json"];

        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        if (!message.guild.me.hasPermission("ATTACH_FILES")) return ErrorMsg(bot, message, "I don't have enough permission to execute this command!\nPlease change my role's permissions and set **ATTACH FILES** to true");


        try {
            got(random).then(async (response) => {

                let content = JSON.parse(response.body);

                let permalink = content[0].data.children[0].data.permalink;

                let memeUrl = `https://reddit.com${permalink}`;

                let memeImage = content[0].data.children[0].data.url;

                let memeTitle = content[0].data.children[0].data.title;

                let memeUpvotes = content[0].data.children[0].data.ups;

                let memeNumComments = content[0].data.children[0].data.num_comments;


                const embeed = new MessageEmbed()
                    .setTitle(`${memeTitle}`)
                    .setURL(`${memeUrl}`)
                    .setColor("RANDOM")
                    .setImage(memeImage)
                    .setFooter(`👍 ${memeUpvotes}/💬 ${memeNumComments}`);

                message.channel.send(embeed);
                await addCooldown(message, 5000, "meme");


            }).catch(err => {
                if (err.message === "Response code 429 (Too Many Requests)") return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
                if (err.message === "MessageEmbed descriptions may not exceed 2048 characters.") return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again?`);
                else return message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`)
            })
        } catch (err) {
            console.log(err);
        }

    }
}