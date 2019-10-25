module.exports = {
    name: 'clear', 
    description: "clear commands",
    execute(message, agrs){
if (!args[1]) return message.reply('How many messeges do u want me to sweep?')
message.channel.bulkDelete(args[1]);





}}