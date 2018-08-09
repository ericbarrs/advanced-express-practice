let express = require("express");
let bodyParser = require('body-parser')
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts = require("./contacts");

const app = express();

app.use(bodyParser.json())

app.listen(3001, (req, res) => {
    return console.log('listening')
})

app.post('/comments', (req,res)=>{
    req.body._id = comments.length + 1
    console.log(req.body)
    comments.push(req.body)
    return res.send(req.body)
 })
app.post('/products', (req, res) => {
    req.body._id = products.length + 1
    console.log(req.body)
    products.push(req.body)
    return res.send(req.body)
})
app.post('/vehicles', (req, res) => {
    req.body._id = vehicles.length + 1
    console.log(req.body)
    vehicles.push(req.body)
    return res.send(req.body)
})
app.post('/contacts', (req, res) => {
    req.body._id = contacts.length + 1
    console.log(req.body)
    contacts.push(req.body)
    return res.send(req.body)
})


app.get('/comments',(req,res)=>{
    return res.send(comments)
})

app.get('/products', (req, res) => {
    return res.send(products)
})
app.get('/vehicles', (req,res)=>{
    return res.send(vehicles)
})
app.get('/contacts', (req,res)=>{
    return res.send(contacts)
})

app.get('/comment/:id', (req, res) => {
    return res.send(comments[req.params.id -1])
})
app.get('/product/:id', (req, res) => {
    return res.send(products[req.params.id -1])
})
app.get('/vehicle/:id', (req, res) => {
    return res.send(vehicles[req.params.id -1])
})
app.get('/contact/:id', (req, res) => {
    return res.send(contacts[req.params.id -1])
})
