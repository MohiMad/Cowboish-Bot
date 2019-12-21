const mongoose = require ("mongoose");

    const LPSchema = mongoose.Schema({
        
        UserID: String,

        logic: Number,

        Dices: Number,

        Clues: Number,

        Ess1: Number,

        Ess2: Number,

        Ess3:Number,

        Inspirations: Number,

        frags: Number,

        S: Number,

        A: Number,

        B: Number,

        C: Number,

        D: Number


    });

    module.exports = mongoose.model("logicPath", LPSchema);