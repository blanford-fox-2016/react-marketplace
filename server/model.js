const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Data = new Schema({
    dataId: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Data', Data)