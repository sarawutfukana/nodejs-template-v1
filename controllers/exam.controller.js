const ExamService = require('../services/exam.service');
const LogUtil = require('../common/utils/log.util');

async function getAll(req, res) {
  const fncName = 'exam.controller.getAll';
  const startedAt = LogUtil.methodStart(req.vendorId, req.logId, fncName);

  const data = await ExamService.getAll();

  LogUtil.methodFinish(req.vendorId, req.logId, fncName, startedAt);

  return res.status(200).json({
    status: true,
    message: 'success',
    data,
    time: new Date().getTime(),
    service: 'exam',
  });
}

async function getById(req, res) {
  const fncName = 'exam.controller.getById';

  const startedAt = LogUtil.methodStart(req.vendorId, req.logId, fncName);

  const { id } = req.params;
  const data = await ExamService.getById(Number(id));

  LogUtil.methodFinish(req.vendorId, req.logId, fncName, startedAt);

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
