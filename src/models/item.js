
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemId: {
        type: String,
        minlength: 3,
        required: true,
        trim: true,
        toLowerCase: true
    },
    itemLetter: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        toLowerCase: true
    },
    itemText: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        toLowerCase: true
    }
})

module.exports = mongoose.model('Item', itemSchema)
