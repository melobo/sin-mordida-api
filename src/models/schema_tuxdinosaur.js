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
        // No sé si igual se deba indicar acá el type para saber el tipo de variable
        //   titleInciso: "",
        //   description: ""
        // }
      ],
      umas: [
        // Incisos debe ir vacio, con la estructura comentada debajo
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable
        //   valueUMAS: "",
        // }
      ],
      points: [
        // Incisos debe ir vacio, con la estructura comentada debajo
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable
        //   valuePoints: "",
        // }
      ],
      isPound: [
        // Incisos debe ir vacio, con la estructura comentada debajo
        // {
        // No sé si igual se deba indicar acá el type para saber el tipo de variable
        //   valueIsPound: "",
        // }
      ]
    }
  }
});

module.exports = mongoose.model("Articles", articlesSchema);
