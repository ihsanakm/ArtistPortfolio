const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    userName:"",
    password:""
},{timestamps:true})

const User = mongoose.model("users",userSchema)

module.exports = User