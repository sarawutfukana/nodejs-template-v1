const ExamSchema = require('../schemas/exam.schema');

async function getAll() {
  return ExamSchema.getAll();
}

async function getById(id) {
  return ExamSchema.getById(id);
}

module.exports = {
  getAll,
  getById,
};
