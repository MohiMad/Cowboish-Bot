const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'say',
    description: "repeats what you just said!",
    execute(message, args, MohiMoo, errWhere){

        try{

const sayMessage = args.slice(1).join(" ");

if (message.deletable) message.delete();

if (!args[1])
    message.channel.send("Tell me what to say...");

else {
message.channel.send(message.author.username + " says\n ``" + sayMessage + "``");

}

}catch(err){
    MohiMoo.send(errWhere + "\n```" + err + "```");
    console.log(err);
    message.channel.send("❌ **An error has occured!** sorry :C");
}

    }
}