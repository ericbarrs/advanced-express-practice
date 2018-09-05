const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let vehicleSchema = new Schema({
    _id:{
        type:Number,
        required: true
    },
    imgUrl:{ 
        type:String,
        required: true
    },
    year:{ 
        type: String,
        required: true
    },
    make:{
        type: String,
        required: true 
    },
    model:{ 
        type: String,
        required: true
    },
    price: {
        type: String
    },
    km:{ 
        type: Number 
    },
    miles:{
        type:Number
    },
    fuel: {
        type:String
    },
    city: {
        type:String
    },
    isNew: {
        type:Boolean
    }
})

module.exports = vehicle = mongoose.model("vehicle", vehicleSchema);