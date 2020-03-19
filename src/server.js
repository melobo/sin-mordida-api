// server
const express = require('express')
// const cors = require('cors')

const articlesRouter = require('./router/article')

const app = express()
// app.use(cors())
app.use(express.json())

app.use('/api/v1/articles', articlesRouter)

module.exports = app
