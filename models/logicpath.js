const mongoose = require("mongoose");

const LPSchema = mongoose.Schema({

    UserID: String,

    guildsID: Array,

    logic: Number,

    Dices: Number,

    Clues: Number,

    Ess1: Number,

    Ess2: Number,

    Ess3: Number,

    Inspirations: Number,

    frags: Number,

    S: Number,

    A: Number,

    B: Number,

    C: Number,

    D: Number,

    Echoes: Number,

    ID: String,

    Survivors: {
        Cowboy: Boolean,
        Mercenary: Boolean,
        Coordinator: Boolean,
        Priestess: Boolean,
        Mechanic: Boolean,
        Mindseye: Boolean,
        Prefumer: Boolean,
        Dancer: Boolean,
        Seer: Boolean,
        Embalmer: Boolean,
        Acrobat: Boolean,
        Officer: Boolean,
        Barmaid: Boolean,
        Magician: Boolean,
        Explorer: Boolean,
        Forward: Boolean,
        Prospector: Boolean,
        Enchantress: Boolean,
        Wilding: Boolean,
        Postman: Boolean,
        NewSurv: Boolean,
        AnotherSurv: Boolean,
    },

    Hunters: {

        WuChang: Boolean,
        AxeBoi: Boolean,
        Lizard: Boolean,
        Clown: Boolean,
        GameKeeper: Boolean,
        Ripper: Boolean,
        SoulWeaver: Boolean,
        Geisha: Boolean,
        PhotoGrapher: Boolean,
        MadEyes: Boolean,
        Feaster: Boolean,
        DreamWitch: Boolean,
        BloodyQueen: Boolean,
        Pingu: Boolean,
        Sister: Boolean,
        NewHunta: Boolean,
        AnotherHunta: Boolean

    },
    Opened: Array,
    region: String,
    bio: String,
    frames: {
        frame1: Boolean,
        frame2: Boolean,
        frame3: Boolean,
        frame4: Boolean,
        frame5: Boolean,
        frame6: Boolean,
        equipped: String
    },
    Entomologist: Boolean,
    Portrait: String,
    ThreeMatches: Number


});

module.exports = mongoose.model("logicPath", LPSchema);