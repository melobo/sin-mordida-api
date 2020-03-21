
const mongoose = require('mongoose')

// const {
//   DB_NAME,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_USER
// } = process.env

const url = 'mongodb+srv://melobo:IMB597q9ZiEyybdq@sin-mordida-vqx48.mongodb.net/sin-mordida?retryWrites=true&w=majority'

module.exports = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
