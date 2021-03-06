const { MessageEmbed } = require('discord.js');
const got = require('got');

const { coolEmbed, findCooldown, addCooldown } = require("../../src/functions.js");

module.exports = {
    name: ["joke", "redditjoke", "lemmelaugh"],
    description: "Sends a random joke from the subreddit r/Jokes",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS"],
    category: "Fun",
    execute: async (message) => {

        const cooldownCheck = await findCooldown(message, "joke");

        if (cooldownCheck) return coolEmbed(message, "Slow it down maaan!", "I'm a bot, but bots deserves some rest as well\n**You probably didn't read the joke... READ IT!**\nPlease wait **REMAINING** before using this command again...", cooldownCheck.timeRemaining, ["s"])

        try {
            got('https://www.reddit.com/r/jokes/random/.json').then(async (response) => {

                let content = JSON.parse(response.body);

                var title = content[0].data.children[0].data.title;

                var joke = content[0].data.children[0].data.selftext;

                let permalink = content[0].data.children[0].data.permalink;


                let memeUrl = `https://reddit.com${permalink}`;

                if (title.length > 256) {
                    title = "Joke title too long!";

                }

                const jokeEmbed = new MessageEmbed()
                    .setTitle(title)
                    .setURL(memeUrl)
                    .setColor("RANDOM")
                    .setFooter("Joke from r/jokes")
                    .setDescription(joke);



                if (joke.length > 2048) {
                    message.reply("oof the joke is way too long... sorry please try again!");
                }

                else {
                    message.channel.send(jokeEmbed);
                    await addCooldown(message, 10000, "joke");

                }



            }).catch(err => {
                if (err.message === "Response code 429 (Too Many Requests)") {
                    return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
                }
                else if (err.message === "MessageEmbed descriptions may not exceed 2048 characters.") {
                    return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again...`);
                }
                else {
                    message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`);
                }
            })
        } catch (err) {
            console.log(err);

        }

    }
}