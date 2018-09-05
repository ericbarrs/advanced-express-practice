let comments = require("../models/commentModel")

module.exports.list = function list (req,res) {
    comments.find({}, (err, data) => {
        if(err) {
           return res.send(err)
        }else{
           return res.send(data)
        }
    })
}

module.exports.show = function show(req, res) {
    comments.find({}, (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json(data[req.params.id - 1])
        }
    })
}
module.exports.create = function create(req, res) {
    let newComments = new comments({
    _id: req.body._id,   
    body: req.body.body,
    postId: req.body.postId
    })
    newComments.save().then(comments => res.json(comments))
}
// module.exports.update = function update(req, res) {
//     return res.json(comments[req.params.id-1]);
// }
// module.exports.remove = function remove(req, res) {
//     let removedItem = comments[req.params.id - 1].pop()
//     return res.json(removedItem);
// }