const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'winrate',
    description: "sends a random winrate",
    execute(message, args, MohiMoo, errWhere) {

            let persona = message.mentions.users.first()

            var facts = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
                "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
                "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
                "50", "51", "52", "53", "54", "55", "56", "57", "58", "59",
                "60", "61", "62", "63", "64", "65", "66", "67", "68", "69",
                "70", "71", "72", "73", "74", "75", "76", "77", "78", "79",
                "80", "81", "82", "83", "84", "85", "86", "87", "88", "89",
                "90", "91", "92", "93", "94", "95", "96", "97", "98", "99",
                "100"];

            var fact = Math.floor(Math.random() * facts.length);

            const wiEmbed = new RichEmbed()
                .setAuthor(message.author.username + "'s winrate is " + (facts[fact]) + '%', message.author.avatarURL)
                .setColor('0x1AA9EE')
                .setURL('https://rkanjo2.wixsite.com/cowboishbot');

            if (!args[1]) return message.channel.sendEmbed(wiEmbed)

            const winEmbed = new RichEmbed()
                .setAuthor(persona.username + "'s winrate is " + (facts[fact]) + '%', message.author.avatarURL)
                .setColor("RANDOM")
                .setURL('https://rkanjo2.wixsite.com/cowboishbot')

            message.channel.send(winEmbed);



    }
}