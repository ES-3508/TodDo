const { describe, it, expect, afterAll } = require('@jest/globals');
const request = require('supertest');
const app = require('../index');

describe('CRUD operations for Todo', () => {
  let createdTodoId;

  // Test creating a new Todo
  it('should create a new Todo', async () => {
    const todoData = {
      title: 'Test Todo',
      description: 'This is a test todo'
    };

    const res = await request(app)
      .post('/api/todos')
      .send(todoData);
    
    expect(res.statusCode).toEqual(201);
    expect(res.body.title).toEqual(todoData.title);
    expect(res.body.description).toEqual(todoData.description);

    createdTodoId = res.body.id;
  });

  // Test retrieving all Todos
  it('should retrieve all Todos', async () => {
    const res = await request(app)
      .get('/api/todos');
    
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  // Test retrieving a specific Todo by ID
  it('should retrieve a specific Todo by ID', async () => {
    if (!createdTodoId) {
      throw new Error('No Todo ID available to retrieve');
    }

    const res = await request(app)
      .get(`/api/todos/${createdTodoId}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual(createdTodoId);
  });

  // Test updating an existing Todo
  it('should update an existing Todo', async () => {
    if (!createdTodoId) {
      throw new Error('No Todo ID available to update');
    }

    const updatedTodoData = {
      title: 'Updated Test Todo',
      description: 'This is an updated test todo'
    };

    const res = await request(app)
      .put(`/api/todos/${createdTodoId}`)
      .send(updatedTodoData);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.title).toEqual(updatedTodoData.title);
    expect(res.body.description).toEqual(updatedTodoData.description);
  });

  // Test deleting a Todo
  it('should delete a Todo', async () => {
    if (!createdTodoId) {
      throw new Error('No Todo ID available to delete');
    }

    const res = await request(app)
      .delete(`/api/todos/${createdTodoId}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Todo deleted successfully');
  });

});

afterAll(() => {
  app.close();
});
