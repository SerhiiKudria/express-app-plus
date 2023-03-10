const createError = require('http-errors');
const { TaskDB } = require('../models');

// req.query

module.exports.getTasks = (req, res) => {
  const { page = 1, results = 5 } = req.query;
  const tasks = TaskDB.getTasks(page, results);
  res.status(200).send(tasks);
};

module.exports.createTask = (req, res) => {
  const { body } = req;

  const creatdTask = TaskDB.createTask(body);
  res.status(201).send(creatdTask);
};

module.exports.getTaskById = (req, res, next) => {
  const { id } = req.params;

  const foundTask = TaskDB.getTaskById(id);

  if (foundTask) {
    return res.status(200).send(foundTask);
  }
  // res.status(404).send('Task Not Found');
  next(createError(404, 'Task Not Found'));
};

module.exports.updateTaskById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedTask = TaskDB.updateTask(id, body);

  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  // res.status(404).send('Task Not Found');
  next(createError(404, 'Task Not Found'));
};

module.exports.deleteTaskById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const deletedTask = TaskDB.deleteTask(id);

  if (deletedTask) {
    return res.status(204).send();
  }
  // res.status(404).send('Task Not Found');
  next(createError(404, 'Task Not Found'));
};
