const express = require('express');
const router = express.Router();
const todoController = require('./toDoController');
const dummyAuthMiddleware = require('../../middleware/dummyMiddleware');

router.get('/',dummyAuthMiddleware, todoController.getAllTodos);
router.get('/:id', todoController.getTodoById);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
