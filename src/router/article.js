
const express = require('express')
const article = require('../usecases/article')

const router = express.Router()

// router.use(auth)

router.get('/', async (request, response) => {
  try {
    if (request.query.text) {
      const articleFound = await article.getByText(request.query.text)

      response.json({
        success: true,
        message: 'Article found',
        data: {
          article: articleFound
        }
      })
    }
    const allArticles = await article.getAll()
    response.json({
      success: true,
      message: 'all articles',
      data: {
        allArticles
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.post('/', async (request, response) => {
  try {
    const newArticle = await article.create(request.body)
    response.json({
      success: true,
      message: 'Article created',
      data: {
        article: newArticle
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const articleFound = await article.getById(id)

    response.json({
      success: true,
      message: 'Article found',
      data: {
        article: articleFound
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const articleDelete = await article.deleteById(id)

    response.json({
      success: true,
      message: 'Article deleted',
      data: {
        article: articleDelete
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

router.patch('/:id', async (request, response) => {
  try {
    const { id } = request.params

    const articleToUpdate = await article.updateById(id, request.body)

    response.json({
      success: true,
      message: 'Article update',
      data: {
        article: articleToUpdate
      }
    })
  } catch (error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
