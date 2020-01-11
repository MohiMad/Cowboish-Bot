

const { RichEmbed } = require('discord.js');
const got = require ('got');
const cooldown = new Set();

module.exports = {
    name: 'joke', 
    description: "sends a random joke",
    execute( message, args, MohiMoo, errWhere){

        const coolEmbed = new RichEmbed()
            .setTitle("Slow it down maaan!")
            .setDescription("I'm a bot, but bots deserves some rest as well\n**You probably didn't read the joke... READ IT!**\nThis command has a cooldown of **3** seconds!")
            .setColor("RANDOM");

 got('https://www.reddit.com/r/jokes/random/.json').then(response => {

    let content = JSON.parse(response.body);

    var title = content[0].data.children[0].data.title;

    var joke = content[0].data.children[0].data.selftext;

    let permalink = content[0].data.children[0].data.permalink;


    let memeUrl = `https://reddit.com${permalink}`;


    const jokeEmbed = new RichEmbed()
        .setTitle(title)
        .setURL(memeUrl)
        .setColor("RANDOM")
        .setDescription(joke + "\n\nJoke from [r/jokes](https://www.reddit.com/r/jokes)");

        if (cooldown.has(message.author.id)){
            if(message.deletable) message.delete();

            message.channel.send(coolEmbed).then(m => m.delete(20000));
        }

        else if(joke.length > 2048 ){
            message.reply("oof the joke is way too long... sorry please try again!");
        }
        
        else{

    message.channel.send(jokeEmbed)
    .then(cooldown.add(message.author.id))
    .catch(err => console.log(err));

        }

        setTimeout(() => {
            cooldown.delete(message.author.id)

        }, 30000);

})

    }
}