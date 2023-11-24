const ExamModel = require('../models/example.model');

async function getAll() {
  return ExamModel.getAll();
}

async function getById(id) {
  const exams = await ExamModel.getAll();
  return exams.find((exam) => exam.id === id);
}

module.exports = {
  getAll,
  getById,
};
