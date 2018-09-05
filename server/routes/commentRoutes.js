let express = require("express");
let router = express.Router();

let {list,show,create,update,remove} = require("../controllers/commentsController");

router.get("/comments", list);
router.get("/comment/:id", show);
router.post("/comments", create);
// router.put("/comments/:id", update);
// router.delete("/comments", remove);

module.exports = router;