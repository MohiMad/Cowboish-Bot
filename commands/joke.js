

const { RichEmbed } = require('discord.js');
const got = require('got');
const cooldown = new Set();

module.exports = {
    name: 'joke',
    description: "sends a random joke",
    execute(message, args, MohiMoo) {


        const coolEmbed = new RichEmbed()
            .setTitle("Slow it down maaan!")
            .setDescription("I'm a bot, but bots deserves some rest as well\n**You probably didn't read the joke... READ IT!**\nThis command has a cooldown of **3** seconds!")
            .setColor("RANDOM");

        try {
            got('https://www.reddit.com/r/jokes/random/.json').then(response => {

                let content = JSON.parse(response.body);

                var title = content[0].data.children[0].data.title;

                var joke = content[0].data.children[0].data.selftext;

                let permalink = content[0].data.children[0].data.permalink;


                let memeUrl = `https://reddit.com${permalink}`;

                if (title.length > 256) {
                    title = "Joke title too long!";

                }

                const jokeEmbed = new RichEmbed()
                    .setTitle(title)
                    .setURL(memeUrl)
                    .setColor("RANDOM")
                    .setFooter("Joke from r/jokes")
                    .setDescription(joke);

                if (cooldown.has(message.author.id)) {
                    if (message.deletable) message.delete();

                    message.channel.send(coolEmbed).then(m => m.delete(20000));
                }

                else if (joke.length > 2048) {
                    message.reply("oof the joke is way too long... sorry please try again!");
                }

                else {

                    message.channel.send(jokeEmbed)
                        .then(cooldown.add(message.author.id))
                        .catch(err => console.log(err));

                }

                setTimeout(() => {
                    cooldown.delete(message.author.id)

                }, 30000);

            }).catch(err => {
                if (err.message === "Response code 429 (Too Many Requests)") {
                    return message.channel.send(`**${message.author.username}**, dude stop abusing me smh, take it easy...`);
                }
                else if (err.message === "RichEmbed descriptions may not exceed 2048 characters.") {
                    return message.channel.send(`**${message.author.username}**, This post was too long...\nPlease try to execute this command again?`);
                }
                else {
                    MohiMoo.send("```" + err + "```")
                    message.channel.send(`**${message.author.username}** Hit an unfamiliar error... SORRY`)
                }
            })
        } catch (err) {
            console.log(err)

        }


    }
}