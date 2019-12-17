
module.exports = {
    name: 'say',
    description: "repeats what you just said!",
    execute(message, args){

const sayMessage = args.slice(1).join(" ");

message.delete().catch(O_o => { });

if (!args[1])
    message.channel.send("Tell me what to say...");

else {
message.channel.send(message.author.username + " says\n ``" + sayMessage + "``");

}
    }
}