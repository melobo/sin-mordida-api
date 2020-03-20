
const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    tagId: {
        type: Number,
        required: true,
    },
    keyword: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
        toLowerCase: true
    }
})

module.exports = mongoose.model('Tag', tagSchema)
