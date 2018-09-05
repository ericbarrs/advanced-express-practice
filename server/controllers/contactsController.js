let contacts = require("../contacts");

module.exports.list = function list(req, res) {
    return res.json(contacts);
}

module.exports.show = function show(req, res) {
    return res.json(contacts[req.params.id - 1]);
}
module.exports.create = function create(req, res) {
    req.body._id = contacts.length + 1
    console.log(req.body)
    contacts.push(req.body)
    return res.send(req.body)
}
module.exports.update = function update(req, res) {
    return res.json(contacts[req.params.id - 1]);
}
module.exports.remove = function remove(req, res) {
    let removedItem = contacts[req.params.id - 1].pop()
    return res.json(removedItem);
}