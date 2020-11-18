
const { model, Schema } = require("mongoose");

const guildSchema = new Schema({
    guildID: String,
    leave: {
        enabled: Boolean,
        channel: String,
        message: String,
    },
    welcome: {
        enabled: Boolean,
        channel: String,
        message: String,
    },
    prefix: String,
    autoroles: Array,
    News: {
        Channel: String,
        toPingRole: String,
    }

});
module.exports = model("Guild", guildSchema);