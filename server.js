const express = require('express')
const mongoose = require("mongoose")
require('dotenv').config()

const contactRoute = require('./routes/contactRoute')
const userRoute = require('./routes/userRoute')

//creating express app
const app = express()


//middleware
app.use(express.json())


// routes
app.use('/user', userRoute)
app.use('/contacts', contactRoute)

port = process.env.PORT || 6001

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


