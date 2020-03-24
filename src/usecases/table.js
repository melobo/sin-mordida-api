
const Table = require('../models/table')

function create({ tableId, fraction, vehicleType, umas, licensePoints, platePoints, previousText }) {
  const newTable = new Table({ tableId, fraction, vehicleType, umas, licensePoints, platePoints, previousText })
  return newTable.save()
}

function deleteById(id) {
  return Table.findByIdAndDelete(id)
}

function getAll() {
  return Table.find({})
}

function getById(id) {
  return Table.find({ tableId: id })
}

function updateById(id, tableInfoToUpdate) {
  return Table.findByIdAndUpdate(id, tableInfoToUpdate)
}

module.exports = {
  create,
  deleteById,
  getAll,
  getById,
  updateById
}
