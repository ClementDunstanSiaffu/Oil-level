
const mongoose = require('mongoose');

const oilLevel  = mongoose.Schema({

    level:{
        type:String
    },

    date:{
        type:String
    },

    time:{
        type:String
    }
})

mongoose.model("OIL",oilLevel)