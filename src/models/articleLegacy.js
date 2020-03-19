const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  chapter: {
    type: String,
    required: true,
    trim: true,
    toLowerCase: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    toLowerCase: true
  },
  articleId: {
    type: Number,
    required: true,
    trim: true
  },
  abstract: {
    type: String,
    minlength: 3,
    required: true,
    trim: true,
    toLowerCase: true
  },
  fractions: {
    type: Object,
    trim: true,
    toLowerCase: true,
  },
  complement: {
    type: String,
    trim:true,
    toLowerCase:true
  },
  table:{
    type: Object,
    trim: true,
    toLowerCase: true
  },
  tags: {
    type: Object,
    trim: true,
    required: true,
    toLowerCase: true
  }
})

module.exports = mongoose.model('Article', articleSchema)
