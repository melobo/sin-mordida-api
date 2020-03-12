
const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
  articleId: {
    type: Number,
    required: true,
    trim: true
  },
  section: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  subSection: {
    type: Number,
    minlength: 3,
    maxlength: 100,
    required: true,
    trim: true
  },
  umas: {
    type: Number,
    minlength: 1,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    minlength: 3,
    required: true,
    trim: true
  },
  points: {
    type: Number,
    trim: true
  },
  pound: {
    type: String,
    trim: true
  }
})

module.exports = mongoose.model('Articles', articlesSchema)