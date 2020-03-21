
const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    tableId: {
        type: String,
        minlength: 3,
        required: true,
        trim: true,
        toLowerCase: true
    },
    fraction: {
        type: String,
        minlength: 3,
        trim: true,
        toLowerCase: true
    },
    vehicleType: {
        type: String,
        minlength: 3,
        trim: true,
        toLowerCase: true
    },
    umas: {
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
        minlength: 3,
        trim: true,
        toLowerCase: true
    }
})

module.exports = mongoose.model('Table', tableSchema)
