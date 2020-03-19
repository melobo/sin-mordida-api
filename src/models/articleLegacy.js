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
  fraction: {
    type: Object,
    trim: true,
    toLowerCase: true,
    default: {
      idFraccion: '',
      titleFraccion: '',
      description: '',
      incisos: [
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable
        //   titleInciso: "",
        //   description: "",
        //   toLowerCase: true
        // }
      ],
      umas: [
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable, aqui sería Number
        //   valueUMAS: ""
        // }
      ],
      points: [
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable, sería Number
        //   valuePoints: "",
        // }
      ],
      isPound: [
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable, aquí sería Booleano
        //   valueIsPound: "",
        // }
      ]
    }
  },
  tags: {
    type: String,
    trim: true,
    required: true,
    toLowerCase: true
  }
})

module.exports = mongoose.model('Article', articleSchema)