const express = require('express') //import express
const app = express() //initialize express
const pipedrive = require('pipedrive') //import pipedrive api
const mongoose = require('mongoose')
require ('dotenv/config')

//Import routes
const posts = require('../routes/posts')

app.use('/posts', posts)

//enables app to receive json
app.use(express.json())

//Connect to DB
mongoose.connect(
    process.env.MONGODB_URI, { useNewUrlParser: true }, () => console.log('Connected to DB')
)

//endpoints
app.get('/', (req, res) => {
    res.send('This is our home page')
})

app.listen(8080, () => {
    console.log('Running API') //callback
})