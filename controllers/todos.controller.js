const Todo = require("../model/todo.module"),
    { formatDate } = require('../utils/utils.entity')

exports.getIndex = async (req, res) =>
{
    const completedTodos = await Todo.countDocuments({ completed: true }),
        todos = await Todo.find();

    res.render("index",
        {
            pageTitle: "MyTodoList",
            todos,
            formatDate,
            completedTodos,
            remainingTodos: todos.length - completedTodos,
        });
};
