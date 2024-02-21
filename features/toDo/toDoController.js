const todoService = require('./todoService');

const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getTodoById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(todo);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoService.updateTodo(req.params.id, req.body);
    if (!updatedTodo) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json(updatedTodo);
    }
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const success = await todoService.deleteTodo(req.params.id);
    if (!success) {
      res.status(404).json({ error: 'Todo not found' });
    } else {
      res.json({ message: 'Todo deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};
