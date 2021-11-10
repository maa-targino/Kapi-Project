const express = require('express') //Import express
const app = express() //Initialize express
const cors = require('cors')
const mongoose = require('mongoose')
const port = 8080
require ('dotenv/config')

//Middleware
app.use(express.json())
app.use(cors())

//Import post route
const router = require('./routes')

app.use('/', router)

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Connected to DB')
)

//Callback
app.listen(port, () => {
    console.log('Running API')
})

//Endpoints:
app.get('/', (req, res) => {
    res.send('This is our home page')
})


// app.use(express.urlencoded({extended: false}))
// app.use('/v1', router)