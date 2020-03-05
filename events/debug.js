module.exports = (bot, err) => {

    bot.users.get("478527909250990090").send(`${err}`);
    
    console.info(err);
    
};