
const express = require('express')
const fraction = require('../usecases/fraction')

const router = express.Router()

// router.use(auth)

router.get('/', async (request, response) => {
    try {
        const allFractions = await fraction.getAll()
        response.json({
            success: true,
            message: 'all fractions',
            data: {
                allFractions
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
        const newFraction = await fraction.create(request.body)
        response.json({
            success: true,
            message: 'Fraction created',
            data: {
                article: newFraction
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

        const fractionFound = await fraction.getById(id)

        response.json({
            success: true,
            message: 'Fraction found',
            data: {
                article: fractionFound
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

        const fractionDelete = await fraction.deleteById(id)

        response.json({
            success: true,
            message: 'Fraction deleted',
            data: {
                article: fractionDelete
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

        const fractionToUpdate = await fraction.updateById(id, request.body)

        response.json({
            success: true,
            message: 'Fraction update',
            data: {
                article: fractionToUpdate
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
