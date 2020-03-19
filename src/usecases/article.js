
const Article = require('../models/article')

function create({ title, chapter, articleId, abstract, fraction, tags }) {
    const newArticle = new Article({ title, chapter, articleId, abstract, fraction, tags })
    return newArticle.save()
}

function deleteById(id) {
    return Article.findByIdAndDelete(id)
}

function getAll() {
    return Article.find({})
}

function getById(id) {
    return Article.findById(id)
}

function updateById(id, articleInfoToUpdate) {
    return Article.findByIdAndUpdate(id, articleInfoToUpdate)
}

module.exports = {
    create,
    deleteById,
    getAll,
    getById,
    updateById
}
