
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
        type: Array
    },
    vehicleType: {
        type: Array
    },
    umas: {
        type: Array
    },
    licensePoints: {
        type: Array
    },
    platePoints: {
        type: Array
    },
    previousText: {
        type: String,
        minlength: 3,
        required: true,
        trim: true,
        toLowerCase: true
    }
})

module.exports = mongoose.model('Table', tableSchema)
