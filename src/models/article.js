const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    toLowerCase: true
  },
  chapter: {
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
    default: [
      {
        idFraccion: '',
        titleFraccion: '',
        description: '',
        incisos: [],
        umas: [],
        points: [],
        isPound: {}
      }
    ]
  },
  // tags: {
  //   type: Object,
  //   trim: true,
  //   required: false,
  //   toLowerCase: true,
  //   default: {
  //     tags: []
  //   }
  // }
  tags: {
    type: Object,
    trim: true,
    required: false,
    toLowerCase: true,
    default: []
  }
})

module.exports = mongoose.model('Article', articleSchema)
