const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .min(2)
  .max(64);

const DEADLINE_VALIDATION_SCHEMA = yup.date().max(new Date());

module.exports.CREATE_TASK_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA,
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA,
  deadline: DEADLINE_VALIDATION_SCHEMA,
  isDone: yup.boolean(),
});
