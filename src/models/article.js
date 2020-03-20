
const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  chapter: {
    type: Array,
    required: true,
  },
  title: {
    type: Array,
    required: true,
  },
  articleId: {
    type: Number,
    required: true,
  },
  abstract: {
    type: String,
    minlength: 10,
    required: true,
    trim: true,
    toLowerCase: true
  },
  table: {
    type: String,
    minlength: 3,
    trim: true,
    toLowerCase: true
  },
  tags: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Article', articleSchema)
