const mongoose = require('mongoose')

const DealSchema = new mongoose.Schema({
    amount: Number,
    date: Date,
    fullPrice: Number
},{
    timestamps: true,
    collection: 'deals'
})

module.exports = mongoose.model('Deals', DealSchema)