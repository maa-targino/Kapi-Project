const express = require('express') //Import express
const app = express() //Initialize express
const mongoose = require('mongoose')
require ('dotenv/config')

//Middleware
app.use(express.json())

//Import post route
const posts = require('../routes/posts')

app.use('/posts', posts)

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log('Connected to DB')
)

//Callback
app.listen(3000, () => {
    console.log('Running API')
})

//Endpoints:
app.get('/', (req, res) => {
    res.send('This is our home page')
})