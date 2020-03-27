
const mongoose = require('mongoose')

const fractionSchema = new mongoose.Schema({
  fractionId: {
    type: String,
    minlength: 3,
    required: true,
    trim: true,
    toLowerCase: true
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
    trim: true,
    toLowerCase: true,
    default: ''
  },
  items: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('Fraction', fractionSchema)
