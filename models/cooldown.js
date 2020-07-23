const { model, Schema } = require("mongoose");

    const cooldownSchema = new Schema({
        command: String,
        userID: String,
        timeRemaining: Number,
        dateNow: Number

    });

    module.exports = model("Cooldown", cooldownSchema);