require('dotenv').config()

const db = require('./src/lib/db')

const server = require('./src/server')

db
  .then(() => {
    console.log('Connection OK')
    server.listen(8080, () => {
      console.log('Server runnig')
    })
  })
  .catch(error => {
    console.error('Failed connection', error)
  })
