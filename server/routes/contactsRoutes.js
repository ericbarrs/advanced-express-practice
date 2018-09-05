const express = require("express");
const router = express.Router();

let {list,show,create,update,remove} = require("../controllers/contactsController");

router.get("/contacts", list);
router.get("/contact/:id", show);
router.post("/contacts", create);
router.put("/contacts/:id", update);
router.delete("/contacts", remove);

module.exports = router;