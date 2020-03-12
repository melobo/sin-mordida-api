
const mongoose = require('mongoose')

const {
  DB_NAME,
  DB_PASSWORD,
  DB_HOST,
  DB_USER
} = process.env

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
