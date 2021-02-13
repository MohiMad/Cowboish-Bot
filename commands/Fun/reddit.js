const { MessageEmbed } = require('discord.js');
const got = require('got');
const { ErrorMsg, addCooldown, coolEmbed, findCooldown } = require("../../assets/functions.js");
const moment = require("moment");

module.exports = {
    name: ["reddit", "subreddit"],
    description: "Sends a random post from the subreddit you provided\n\n**Usage:** `$prefixreddit <subredditName>`",
    permissions: ["SEND_MESSAGES", "EMBED_LINKS", "ATTACH_FILES"],
    category: "Fun",
    execute: async (message, args, bot, prefix) => {

        const cooldownCheck = await findCooldown(message, "reddit");

        if (cooldownCheck) return coolEmbed(message, "There is a cooldown set on this command!", "Please wait **REMAINING** before being able to execute this command again ;)", cooldownCheck.timeRemaining, ["s"]);

        if (!args[1]) return ErrorMsg(bot, message, "Please provide the name of the subreddit after the command!\n\n**Example:** `" + prefix + "reddit DamselYeeters`\n\nYou can even provide what flair you want the post to include...\n`Hot`, `Top`, `New` or `Rising`");

        let redditName = args[1];

        if (!redditName.includes("r/")) redditName = `r/${args[1]}`;
        if (redditName.includes("https://")) return message.channel.send(`**${message.author.username}** don't link the reddit... Just provide the name of it...`);
        let sort = args[2];

        if (!sort) sort = "?";
        else if (!["hot", "new", "top", "rising", "all"].includes(sort)) sort = "?";
        else sort = `?sort=${args[2].toLowerCase()}`;

        let reddit = `https://www.reddit.com/${redditName}.json${sort}`;

        try {

            await got(reddit).then(async response => {


                let content = JSON.parse(response.body);

                let allowed = content.data.children.filter(post => !post.data.over_18 && post.data.is_video === false && post.data.spoiler === false && post.data.media === null);

                if (!allowed.length) return message.channel.send(`**${message.author.username}** couldn't find any posts atm... sowwyy ;-;`);
                let randomPostNumber = Math.floor(Math.random() * allowed.length);

                let URL = `https://reddit.com${allowed[randomPostNumber].data.permalink}`;

                var Text = allowed[randomPostNumber].data.selftext;

                let Image = allowed[randomPostNumber].data.url;

                let PostTitle = allowed[randomPostNumber].data.title;

                let Upvotes = allowed[randomPostNumber].data.ups;

                let CommentAmount = allowed[randomPostNumber].data.num_comments;

                let author = allowed[randomPostNumber].data.author;
                let flair = allowed[randomPostNumber].data.author_flair_text

                if (PostTitle.length > 256) PostTitle = "Title too long!";
                else PostTitle = allowed[randomPostNumber].data.title;

                if (Text.length > 2048) Text = `The post was too long! click [HERE](${URL}) to see it`;

                if (flair === null) flair = ` `;
                else flair = "➤ " + flair

                const embeed = new MessageEmbed()
                    .setTitle(`${PostTitle}`)
                    .setURL(`${URL}`)
                    .setAuthor(`${author}  ` + flair)
                    .setDescription(`${Text}`)
                    .setImage(`${Image}`)
                    .setColor("RANDOM")
                    .setFooter(`${moment(allowed[randomPostNumber].data.created * 1000).calendar()} 👍 ${Upvotes} | 💬 ${CommentAmount}`);

                await addCooldown(message, 5000, "reddit");
                message.channel.send(embeed);

            });

        } catch (e) {
            if (e.message === "Response code 404 (Not Found)") return message.reply("Couldn't find that subreddit! Sorry :'(");
            if (e.message === "Response code 403 (Forbidden)") return message.reply("Can't access that subreddit! Sorry :'(");
            if (e.message === "Response code 429 (Too Many Requests)") return message.reply("The execution of this command is quite fast... Please slow it down ;-;");

            console.log(`Hit an error in the Reddit commannd\nReddit JSON search ${reddit}\nError: ${e}`);

        }

    }
}