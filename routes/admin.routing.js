const express = require("express"),
    adminController = require("../controllers/admin.controller"),

    router = express.Router();


router.post("/add-todo", adminController.addTodo);

router.get("/delete-todo/:id", adminController.deleteTodo);
router.get("/completed-todo/:id", adminController.completeTodo);


module.exports = router;
