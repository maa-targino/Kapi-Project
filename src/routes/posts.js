const express = require('express')
const router = express.Router()
const Post = require ('../models/Post')

router.get('/', (req, res) => {
    res.send('This is our posts page')
})

router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try{
        const saved = await post.save()
            res.json(saved)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router