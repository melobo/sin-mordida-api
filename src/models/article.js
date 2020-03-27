
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  articleId: {
    type: Number,
    required: true
  },
  abstract: {
    type: String,
    minlength: 10,
    required: true,
    trim: true,
    toLowerCase: true
  },
  fractions: {
    type: Array,
    default: []
  },
  table: {
    type: String,
    trim: true,
    toLowerCase: true,
    default: ''
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

module.exports = mongoose.model('Article', articleSchema)
