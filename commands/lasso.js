const { RichEmbed } = require('discord.js');

module.exports = {
    name: 'lasso',
    description: "lassos you",
    execute(message, args, MohiMoo, errWhere){

        try{
        if (!args[1]) return message.reply('Who do you want to lasso? Mention them right after the command | example: >lasso @Cowboish Bot . Oh yes lasso me >:D').then(m => m.delete(10000));

        
        let persona  = message.mentions.users.first()

        nuber = 9;

        imagaNumber = Math.floor (Math.random() * (nuber - 1 + 1)) + 1;

        var facts = [ 
        'Yoooink! ' + message.author.username + ' lassoed ' + persona.username,
        persona.username + ' is riding on ' +  message.author.username + ' Yee Haaaw >:D',
        message.author.username + ' stole ' + persona.username  + " from the hunter's hands"];

        var fact = Math.floor(Math.random() * facts.length);

        const lassoembed = new RichEmbed()
        .setAuthor((facts[fact]), message.author.avatarURL)
        .attachFiles (["./lassos/" + 'lasso' + imagaNumber + ".gif"])
        .setImage('attachment://lasso' + imagaNumber + '.gif')
        .setColor("RANDOM");
        
        if(message.mentions.users.first().id === message.author.id) 
            return message.channel.send ("Um sorry,** " + message.author.username + '** but you cant lasso yourself :v');

        else message.channel.send(lassoembed);

    }catch(err){
        MohiMoo.send(errWhere + "\n```" + err + "```");
        console.log(err);
        message.channel.send("❌ **An error has occured!** sorry :C");
    }

    }
}