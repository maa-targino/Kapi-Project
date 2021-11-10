const express = require('express')
const router = express.Router()
const Post = require ('../models/Post')

router.get('/', (req, res) => {
    res.send('This is our posts page')
})

router.post('/', (req, res) => {
    // console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save().then((data) => {
        res.json(data)
        // res.statusCode = 201
        // res.send()
    }).catch((err) => {
        // if(err) {
        //     throw err
        // }
        res.json({message: err})
    })
})

module.exports = router