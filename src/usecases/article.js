
const Article = require('../models/articleLegacy')

function create ({ chapter, title, articleId, abstract, fractions, complement, table, tags }) {
  const newArticle = new Article({ chapter, title, articleId, abstract, fractions, complement, table, tags })
  return newArticle.save()
}

function deleteById (id) {
  return Article.findByIdAndDelete(id)
}

function getAll () {
  return Article.find({})
}

function getById (id) {
  return Article.findById(id)
}

function updateById (id, articleInfoToUpdate) {
  return Article.findByIdAndUpdate(id, articleInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
