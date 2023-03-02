const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

//creating express app
const app = express()


//middleware
app.use(cors())
app.use(express.json())


port = process.env.PORT || 6000

app.get("/",(req,res)=>{
    res.send("Welcome to api")
})


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


