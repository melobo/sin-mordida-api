
const express = require('express')
const table = require('../usecases/table')

const router = express.Router()

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allTables = await table.getAll()
        response.json({
            success: true,
            message: 'all tables',
            data: {
                allTables
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
        const newTable = await table.create(request.body)
        response.json({
            success: true,
            message: 'Table created',
            data: {
                article: newTable
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

        const tableFound = await table.getById(id)

        response.json({
            success: true,
            message: 'Table found',
            data: {
                article: tableFound
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

        const tableDelete = await table.deleteById(id)

        response.json({
            success: true,
            message: 'Table deleted',
            data: {
                article: tableDelete
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

        const tableToUpdate = await article.updateById(id, request.body)

        response.json({
            success: true,
            message: 'Table update',
            data: {
                article: tableToUpdate
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
