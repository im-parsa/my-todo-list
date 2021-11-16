const express = require("express"),
    todosController = require("../controllers/todos.controller"),

    router = express.Router();


router.get("/", todosController.getIndex);


module.exports = router;
