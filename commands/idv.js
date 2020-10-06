const { MessageEmbed } = require('discord.js');
const got = require('got');
const { addCooldown, coolEmbed, findCooldown } = require("../functions.js");
const moment = require("moment");

module.exports = {
    name: 'idv',
    description: "sends a random reddit post",
    execute: async (message, args, bot, prefix) => {

        const cooldownCheck = await findCooldown(message, "idv");

        if (cooldownCheck) return coolEmbed(message, "There is a cooldown set on this command!", "Please wait **REMAINING** before being able to execute this command again ;)", cooldownCheck.timeRemaining, ["s"]);

        let reddit = `https://www.reddit.com/r/identityv/.json?limit=100`;

        try {

            await got(reddit).then(async response => {

                let content = JSON.parse(response.body);

                let allowed = content.data.children.filter(post => !post.data.over_18 && post.data.is_video === false && post.data.spoiler === false && post.data.author != "AutoModerator");

                if (!allowed.length) return message.channel.send(`**${message.author.username}** couldn't find any posts atm... sowwyy ;-;`);
                let randomPostNumber = Math.floor(Math.random() * allowed.length);

                let URL = `https://reddit.com${allowed[randomPostNumber].data.permalink}`;

                var Text = allowed[randomPostNumber].data.selftext;

                let Image = allowed[randomPostNumber].data.url;
                if (Image.includes("gallery")) Image = `https://i.redd.it/${allowed[randomPostNumber].data["gallery_data"]["items"][0].media_id}.jpg`;


                let postFalir = allowed[randomPostNumber].data.link_flair_richtext[0].t;
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
                    .setAuthor(`${postFalir} ─ ${author}  ` + flair, "https://i.imgur.com/j0elwEQ.png")
                    .setDescription(`${Text}`)
                    .setImage(`${Image}`)
                    .setColor("RANDOM")
                    .setFooter(`${moment(allowed[randomPostNumber].data.created * 1000).calendar().replace("Tomorrow", "Today")} ─ 👍 ${Upvotes} | 💬 ${CommentAmount}`);

                await addCooldown(message, 5000, "idv");
                message.channel.send(embeed);

            });

        } catch (e) {
            if (e.message === "Response code 404 (Not Found)") return message.reply("Couldn't find that subreddit! Sorry :'(");
            if (e.message === "Response code 403 (Forbidden)") return message.reply("Can't access that subreddit! Sorry :'(");
            if (e.message === "Response code 429 (Too Many Requests)") return message.reply("The execution of this command is quite fast... Please slow it down ;-;");

            console.log(`Identity V Error: ${e}`);

        }

    }
}