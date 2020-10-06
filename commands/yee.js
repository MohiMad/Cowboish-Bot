module.exports = {
    name: 'yee',
    description: "haaaw",
    execute(message, args, MohiMoo) {

        var facts = [
            "Haaaw >:D", 
            "Yeeeeeeeeeeeet", 
            "Pizzaa?", 
            "did someone say Yee?, Heeey :D", 
            "Haaaw >:3\nFun fact, this command was my first command ever :3"
        ];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);

    }
}