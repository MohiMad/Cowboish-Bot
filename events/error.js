module.exports = (bot, err) => {

    let Mohi = bot.users.get("478527909250990090");

    Mohi.send(`` + err.name + ":" + err.stack + ``);
    
    console.log(err);
    
};