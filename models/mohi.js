const { model, Schema } = require("mongoose");

const mohiSchema = new Schema({
    ID: String,
    times: Number
});

module.exports = model("MOHI", mohiSchema);