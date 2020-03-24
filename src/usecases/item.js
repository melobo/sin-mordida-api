
const Item = require('../models/item')

function create({ itemId, itemLetter, itemText }) {
  const newItem = new Item({ itemId, itemLetter, itemText })
  return newItem.save()
}

function deleteById(id) {
  return Item.findByIdAndDelete(id)
}

function getAll() {
  return Item.find({})
}

function getById(id) {
  return Item.find({ itemId: id })
}

function updateById(id, itemInfoToUpdate) {
  return Item.findByIdAndUpdate(id, itemInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
