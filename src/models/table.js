
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
        type: Array,
        default: []
    },
    vehicleType: {
        type: Array,
        default: []
    },
    umas: {
        type: Array,
        default: []
    },
    licensePoints: {
        type: Array,
        default: []
    },
    platePoints: {
        type: Array,
        default: []
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
