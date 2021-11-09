const express = require('express') //import express
const app = express() //initialize express
const pipedrive = require('pipedrive') //import pipedrive api
const mongoose = require('mongoose')

mongoose.connect('mongodb://kapi:A53nh4ML48@@kapidb.lrhg4.mongodb.net/KapiDB?retryWrites=true&w=majority', {
    useNewUrlParser: true
} , () => {
    console.log('Database connected')
})

app.listen(8080, () => {
    console.log('Running API') //callback
})