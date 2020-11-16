const { MessageEmbed } = require('discord.js');
const { findMember } = require("../functions.js");
module.exports = {
    name: 'winrate',
    description: "sends a random winrate",
    execute: async (message, args, MohiMoo) => {

        let persona = await findMember(message, args.slice(1).join(" "));

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

        const wiEmbed = new MessageEmbed()
            .setAuthor(message.author.username + "'s winrate is " + (facts[fact]) + '%', message.author.avatarURL())
            .setColor('0x1AA9EE')

        if (!persona || persona.user.id === message.author.id) return message.channel.send(wiEmbed);

        const winEmbed = new MessageEmbed()
            .setAuthor(persona.user.username + "'s winrate is " + (facts[fact]) + '%', persona.user.avatarURL())
            .setColor("RANDOM")

        message.channel.send(winEmbed);



    }
}