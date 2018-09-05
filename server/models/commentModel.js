let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentsSchema = new Schema({

    _id:{ 
        type: Number,
        required: true
    },
    body:{ 
        type: String,
        required: true
    },
    postId:{ 
        type: Number,
        required: true
    }
})

module.exports = comments = mongoose.model("comments", CommentsSchema);