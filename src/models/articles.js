const mongoose = require("mongoose");

const articlesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  chapter: {
    type: String,
    required: true,
    trim: true
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
    trim: true
  },
  fraction: {
    type: Object,
    trim: true,
    default: {
      idFraccion: "",
      titleFraccion: "",
      description: "",
      umas: "",
      isPound: false,
      incisos: [
        // Incisos debe ir vacio, con la estructura comentada debajo
        // {
        //   titleInciso: "",
        //   description: ""
        // }
      ]
    }
  },
  umas: {
    type: Number,
    minlength: 1,
    required: true,
    trim: true
  },
  points: {
    type: Number,
    trim: true
  },
  isPound: {
    type: String,
    trim: true
  }
});

module.exports = mongoose.model("Articles", articlesSchema);
