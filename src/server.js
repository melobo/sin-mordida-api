// server
const express = require('express')
// const cors = require('cors')

const articlesRouter = require('./router/article')
const fractionsRouter = require('./router/fraction')
const itemsRouter = require('./router/item')
const tablesRouter = require('./router/table')

const app = express()
// app.use(cors())
app.use(express.json())

app.use('/api/v1/articles', articlesRouter)
app.use('/api/v1/fractions', fractionsRouter)
app.use('/api/v1/items', itemsRouter)
app.use('/api/v1/tables', tablesRouter)

module.exports = app
