const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
        
    _id: {
        type:Number,
        required: true
    },
    name: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    reviews: {
        type:Number
    },
    rating:{ 
        type:Number
    },
    imgUrl:{ 
        type:String
    },
    price:{
        type:Number
    },
    category:{ 
        type:String
    },
    reviews:{
        type:Array
    }
})

module.exports = product = mongoose.model("product", productSchema)