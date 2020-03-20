
const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true,
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
    },
    umas: {
        type: Boolean,
        required: true
    },
    licensePoints: {
        type: Boolean,
        required: true
    },
    platePoints: {
        type: Boolean,
        required: true
    },
    isPound: {
        type: Boolean,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Item', itemSchema)
