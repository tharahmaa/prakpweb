import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Inisialisasi Payload
const payload = require('payload'); 
payload.init({
  secret: process.env.PAYLOAD_SECRET, 
  express: app,
  onInit: async () => {
    console.log(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Rute API untuk daftar tugas (todos)
const todos = [];

// Create a new Todo item (POST)
app.post('/api/todo', (req, res) => {
  const { title, category, completed } = req.body;
  const newTodo = {
    id: Date.now(),
    title,
    category,
    completed: completed || false,
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Retrieve all Todos (GET)
app.get('/api/todo', (req, res) => {
  res.status(200).json(todos);
});

// Update a specific Todo by ID (PUT)
app.put('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  const { title, category, completed } = req.body;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.title = title || todo.title;
  todo.category = category || todo.category;
  todo.completed = completed || todo.completed;
  res.status(200).json(todo);
});

// Delete a specific Todo by ID (DELETE)
app.delete('/api/todo/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
