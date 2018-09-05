let vehicles = require("../vehicles");

module.exports.list = function list(req, res) {
    return res.json(vehicles);
}

module.exports.show = function show(req, res) {
    return res.json(vehicles[req.params.id - 1]);
}
module.exports.create = function create(req, res) {
    req.body._id = vehicles.length + 1
    console.log(req.body)
    vehicles.push(req.body)
    return res.send(req.body)
}
module.exports.update = function update(req, res) {
    return res.json(vehicles[req.params.id - 1]);
}
module.exports.remove = function remove(req, res) {
    let removedItem = vehicles[req.params.id - 1].pop()
    return res.json(removedItem);
}