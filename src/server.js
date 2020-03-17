//server
const express = require('express')
const cors = require('cors')

const articlesRouter = require('./router/articles')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/articles', articlesRouter)

module.exports = app