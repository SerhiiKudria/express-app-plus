const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '4b37abb7-1c77-4101-abac-fca5e3fed37d',
    name: 'test',
    isDone: true,
    deadline: '',
  },
  {
    id: '0a8d9bfe-180f-4e48-9bce-07984c017a43',
    name: 'test2',
    isDone: false,
    deadline: '',
  },
  {
    id: '73a0702c-f1aa-46ca-bd0d-155fe653dc69',
    name: 'test3',
    isDone: true,
    deadline: '2023-02-09',
  },
  {
    id: '8f6da772-0fa5-44c9-ba5f-22e615634510',
    name: 'new test',
    isDone: false,
    deadline: '',
  },
  {
    id: '4b37abb7-1c77-4101-abac-fca5e3fed371',
    name: 'test',
    isDone: true,
    deadline: '',
  },
  {
    id: '0a8d9bfe-180f-4e48-9bce-07984c017a46',
    name: 'test2',
    isDone: false,
    deadline: '',
  },
  {
    id: '73a0702c-f1aa-46ca-bd0d-155fe653dc67',
    name: 'test3',
    isDone: true,
    deadline: '2023-02-09',
  },
  {
    id: '8f6da772-0fa5-44c9-ba5f-22e615634518',
    name: 'new test',
    isDone: false,
    deadline: '',
  },
  {
    id: '73a0702c-f1aa-46ca-bd0d-155fe653dc99',
    name: 'test3',
    isDone: true,
    deadline: '2023-02-09',
  },
  {
    id: '8f6da772-0fa5-44c9-ba5f-22e615634511',
    name: 'new test',
    isDone: false,
    deadline: '',
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: uuidv4(), isDone: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  getTaskById (id) {
    const foundIndex = this.tasks.findIndex(c => c.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask (id, values) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
    }

    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstace = new TasksDB(tasksDB);

module.exports = tasksDbInstace;
