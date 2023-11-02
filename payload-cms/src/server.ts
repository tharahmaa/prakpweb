import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); 

// const express = require('express');
// const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.listen(3000, () => {
//   console.log('Server berjalan di port 3000');
// });

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






// import dotenv from 'dotenv'
// import path from 'path'

// // This file is used to replace `server.ts` when ejecting i.e. `yarn eject`
// // See `../eject.ts` for exact details on how this file is used
// // See `./README.md#eject` for more information

// dotenv.config({
//   path: path.resolve(__dirname, '../.env'),
// })

// import express from 'express'
// import payload from 'payload'

// import { seed } from './payload/seed'

// const app = express()
// const PORT = process.env.PORT || 3000

// // Redirect root to the admin panel
// app.get('/', (_, res) => {
//   res.redirect('/admin')
// })

// const start = async (): Promise<void> => {
//   await payload.init({
//     secret: process.env.PAYLOAD_SECRET || '',
//     express: app,
//     onInit: () => {
//       payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
//     },
//   })

//   if (process.env.PAYLOAD_SEED === 'true') {
//     await seed(payload)
//     process.exit()
//   }

//   app.listen(PORT, async () => {
//     payload.logger.info(`App URL: ${process.env.PAYLOAD_PUBLIC_SERVER_URL}`)
//   })
// }

// start()
