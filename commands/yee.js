module.exports = {
    name: 'yee', 
    description: "haaaw",
    execute(message, args, MohiMoo, errWhere){

        try{

        var facts = ["Haaaw >:D", "Yeeeeeeeeeeeet", "Pizzaa?", "did someone say Yee?, Heeey :D"];

        var fact = Math.floor(Math.random() * facts.length);

        message.channel.send(facts[fact]);

    }catch(err){
        MohiMoo.send(errWhere + "\n```" + err + "```");
        console.log(err);
        message.channel.send("❌ **An error has occured!** sorry :C");
    }
    }
}