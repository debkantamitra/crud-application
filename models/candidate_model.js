const mongoose= require('mongoose')
let candidate = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }})

const candidate_model = mongoose.model('candidate_model', candidate)

module.exports = candidate_model
