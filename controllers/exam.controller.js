const ExamService = require('../services/exam.service');

async function getAll(req, res) {
  const data = await ExamService.getAll();
  return res.status(200).json({
    status: true,
    message: 'success',
    data,
    time: new Date().getTime(),
    service: 'exam',
  });
}

async function getById(req, res) {
  const { id } = req.params;
  const data = await ExamService.getById(Number(id));
  return res.status(200).json({
    status: true,
    message: 'success',
    data,
    time: new Date().getTime(),
    service: 'exam',
  });
}

module.exports = {
  getAll,
  getById,
};
