const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let contactSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    }
})

module.exports = contact = mongoose.model("contact", contactSchema);