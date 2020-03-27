
const Article = require('../models/article')

function create({ articleId, abstract, fractions, table, umas, licensePoints, platePoints, isPound, tags }) {
  const newArticle = new Article({ articleId, abstract, fractions, table, umas, licensePoints, platePoints, isPound, tags })
  return newArticle.save()
}

function deleteById(id) {
  return Article.findByIdAndDelete(id)
}

function getAll() {
  return Article.find({})
}

function getById(id) {
  return Article.find({ articleId: id })
}

function getByText(text) {
  // return Article.find({ tags: { $in: [text] } })
  return Article.find({ tags: { $in: text.split(' ') } })
}

function updateById(id, articleInfoToUpdate) {
  return Article.findByIdAndUpdate(id, articleInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById,
  getByText
}
