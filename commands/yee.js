module.exports = {
    name: 'yee', 
    description: "haaaw",
    execute(message, args){

        var facts = ["Haaaw >:D", "Yeeeeeeeeeeeet", "Pizzaa?", "did someone say Yee?, Heeey :D"];

        var fact = Math.floor(Math.random() * facts.length);

        message.channel.send(facts[fact]);
    }
}