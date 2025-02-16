const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    course:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    types:{
        type:String,
        required:true,
    },
});

const Service = new mongoose.model("Service", serviceSchema);
module.exports = Service;