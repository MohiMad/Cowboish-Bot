const { model, Schema } = require("mongoose");

const newsSchema = new Schema({
    toGrab: String,
    News: [
        {
            toFind: String,
            Message: String,
            Title: String,
            Description: String,
            Image: String,
            Thumbnail: String,
            Footer: String,
            HasSent: Boolean
        }
    ]

});
module.exports = model("IdentityVNews", newsSchema);