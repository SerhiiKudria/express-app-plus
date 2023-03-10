const express = require('express');
const { validate, errorHandlers } = require('./middleware');
const { tasksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get(
  '/',
  (req, res, next) => {
    console.log('handler 1 :>> ');
    next();
  },
  (req, res) => {
    console.log('handler 2 :>> ');
    res.send('app )))');
  }
);

// GET /tasks?page=1&results=5
app.get('/tasks/', tasksController.getTasks);

// POST /tasks (body)
app.post('/tasks', validate.validateTaskOnCreate, tasksController.createTask);

// GET /tasks/5
app.get('/tasks/:id', tasksController.getTaskById);

// PATCH /tasks/5 (body)
app.patch(
  '/tasks/:id',
  validate.validateTaskOnUpdate,
  tasksController.updateTaskById
);

// реалізувати endpoint для видалення конкретнї задачі
// DELETE /tasks/5
app.delete('/tasks/:id', tasksController.deleteTaskById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

module.exports = app;
