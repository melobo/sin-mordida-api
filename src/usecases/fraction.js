
const Fraction = require('../models/fraction')

function create({ fractionId, fractionNumber, fractionText, finalText, items }) {
  const newFraction = new Fraction({ fractionId, fractionNumber, fractionText, finalText, items })
  return newFraction.save()
}

function deleteById(id) {
  return Fraction.findByIdAndDelete(id)
}

function getAll() {
  return Fraction.find({})
}

function getById(id) {
  return Fraction.find({ fractionId: id })
}

function updateById(id, fractionInfoToUpdate) {
  return Fraction.findByIdAndUpdate(id, fractionInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
