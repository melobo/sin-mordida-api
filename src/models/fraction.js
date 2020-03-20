
const mongoose = require('mongoose')

const fractionSchema = new mongoose.Schema({
    fractionId: {
        type: Number,
        required: true,
    },
    fractionNumber: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        toLowerCase: true
    },
    fractionText: {
        type: String,
        minlength: 5,
        required: true,
        trim: true,
        toLowerCase: true
    },
    finalText: {
        type: String,
        minlength: 5,
        trim: true,
        toLowerCase: true
    },
    items: {
        type: Array
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

module.exports = mongoose.model('Fraction', fractionSchema)
