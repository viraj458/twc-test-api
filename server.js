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

port = process.env.PORT || 5461

app.get("/",(req,res)=>{
    res.send("Welcome to api")
})


//connect to MongoDB
mongoose.set('strictQuery',false)
mongoose.connect("mongodb+srv://admin:admin@test.rhin7xn.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        app.listen(port,()=>{
            console.log(`Listening on port:${port}`)})
    })
    .catch((err)=>{
        console.error(err.message);
    })


