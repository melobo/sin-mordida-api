
const express = require('express')
const item = require('../usecases/item')

const router = express.Router()

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allItems = await item.getAll()
        response.json({
            success: true,
            message: 'all items',
            data: {
                allItems
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
        const newItem = await item.create(request.body)
        response.json({
            success: true,
            message: 'Item created',
            data: {
                article: newItem
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

        const itemFound = await item.getById(id)

        response.json({
            success: true,
            message: 'Item found',
            data: {
                article: itemFound
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

        const itemDelete = await item.deleteById(id)

        response.json({
            success: true,
            message: 'Item deleted',
            data: {
                article: itemDelete
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

        const itemToUpdate = await item.updateById(id, request.body)

        response.json({
            success: true,
            message: 'Item update',
            data: {
                article: itemToUpdate
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
