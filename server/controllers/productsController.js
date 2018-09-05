let products = require("../products");

module.exports.list = function list(req, res) {
    return res.json(products);
}

module.exports.show = function show(req, res) {
    return res.json(products[req.params.id - 1]);
}
module.exports.create = function create(req, res) {
    req.body._id = products.length + 1
    console.log(req.body)
    products.push(req.body)
    return res.send(req.body)
}
module.exports.update = function update(req, res) {
    return res.json(products[req.params.id - 1]);
}
module.exports.remove = function remove(req, res) {
    let removedItem = products[req.params.id - 1].pop()
    return res.json(removedItem);
}