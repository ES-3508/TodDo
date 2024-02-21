// In-memory array to store ToDo items
let todos = [];

// Function to generate a unique ID for a ToDo item
const generateId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// Service functions for CRUD operations
const todoService = {
  getAllTodos: () => {
    return todos;
  },
  getTodoById: (id) => {
    return todos.find(todo => todo.id === id);
  },
  createTodo: (todoData) => {
    const id = generateId();
    const newTodo = { id, ...todoData };
    todos.push(newTodo);
    return newTodo;
  },
  updateTodo: (id, todoData) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index] = { ...todos[index], ...todoData };
      return todos[index];
    } else {
      return null;
    }
  },
  deleteTodo: (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
};

module.exports = todoService;
