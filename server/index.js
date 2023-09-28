const express = require("express")
const {connectToDatabase} = require("./Database/DBConfig")
require("dotenv").config()
const app = express()

connectToDatabase(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on ${process.env.PORT}`)
    })
})