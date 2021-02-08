const { giveaway } = require("../assets/minor-commands.js");

module.exports = {
    name: 'giveaway',
    description: "Daily giveaways for cowboish members :3",
    admins: ["478527909250990090"],
    permissions: ["SEND_MESSAGES"],
    execute: async (bot) => {
        giveaway(bot);
    }

}