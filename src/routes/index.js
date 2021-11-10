const express = require('express')
const Order = require ('../models/Order')
const Controller = require('../controller/Controller')
const router = express.Router()

// ENDPOINTS: //

router.get('/status', )
//router.get('/', Controller...)
//router.post('/', Controller...)

//Save the orders on MongoDB
router.post('/order', async(req, res) => {

    const order = new Order({
        price: req.body.price,
        quantity: req.body.quantity,
        amount: req.body.amount
    })
    try{
        const saved = await order.save()
            res.json(saved)
    }
    catch(err){
        res.json({message: err})
    }
})

module.exports = router