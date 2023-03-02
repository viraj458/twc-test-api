const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()


const app = express()

port = process.env.PORT || 6000

//connect to MongoDB
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO)
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Listening on port:${port}`)})
    })
    .catch((err)=>{
        console.error(err.message);
    })


