const express = require('express')
const router = express.Router()
const Deal = require('../models/Deal')

router.get('/posts', (req, res) => {
    res.send('This is our posts page')
})

router.post('/', (req, res) => {
    console.log(req.body)
})

module.exports = router