const { model, Schema } = require("mongoose");

const muteSchema = new Schema({
    userID: String,
    guildID: String,
    channelID: String,
    created: Number,
    muteTime: Number,
});
module.exports = model("Mutes", muteSchema);