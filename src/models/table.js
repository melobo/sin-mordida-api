
const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    articleId: {
        type: Number,
        required: true,
    },
    fraction: {
        type: Array
    },
    vehicleType: {
        type: String,
        minlength: 3,
        trim: true,
        toLowerCase: true
    },
    fineUma: {
        type: String,
        minlength: 3,
        trim: true,
        toLowerCase: true
    },
    licensePoints: {
        type: String,
        minlength: 3,
        trim: true,
        toLowerCase: true
    },
    platePoints: {
        type: String,
        minlength: 10,
        required: true,
        trim: true,
        toLowerCase: true
    }
})

module.exports = mongoose.model('Table', tableSchema)
