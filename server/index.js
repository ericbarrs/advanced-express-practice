let express = require("express");
let mongoose = require('mongoose');
let bodyParser = require('body-parser')

let commentRoutes = require('./routes/commentRoutes')
let vehiclesRoutes = require('./routes/vehiclesRoutes')
let contactsRoutes = require('./routes/contactsRoutes')
let productsRoutes = require('./routes/productsRoutes')
const app = express();

// middleware accepts json packages from front end.
app.use(bodyParser.json())

mongoose
    .connect("")
    .then(console.log("db connected"))
    .catch(err=>console.log(err))


app.listen(3001, (err) =>{
    if(err){
        console.log(err)
    }
    return console.log('listening')
})

app.use("/", commentRoutes);
app.use("/",vehiclesRoutes);
app.use("/",contactsRoutes);
app.use("/",productsRoutes);
