module.exports = {
    name: 'yee', 
    description: "haaaw",
    execute(message, agrs){
        var facts = ["Haaaw >:D", "Yeeeeeeeeeeeet", "Pizza?", "did someone say Yee?"];
        var fact = Math.floor(Math.random() * facts.length);
        message.channel.send(facts[fact]);
    }
}