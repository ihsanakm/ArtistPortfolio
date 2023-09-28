const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventStartDate:{
        type:Date,
        required:true,
    },
    eventEndDate:{
        type:Date,
        required:true,
        
    },
    eventLocaion:{
        type:String,
        required:true
    }
},{timestamps:true})