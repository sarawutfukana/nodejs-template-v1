const dayjs = require('dayjs');
const { logger } = require('../../config/log.config');

const dayjsFormat = 'YYYY-MM-DD HH:mm:ss.SSS';

function methodStart(vendorId, logId, fncName) {
  const startedAt = dayjs();
  logger(vendorId, logId).info(`${fncName} : started at ${startedAt.format(dayjsFormat)}`);
  return startedAt;
}

function methodFinish(vendorId, logId, fncName, startedAt) {
  const finishedAt = dayjs();
  const totalTime = finishedAt.diff(startedAt) / 600000;
  logger(vendorId, logId).info(`${fncName} : finished at ${finishedAt.format(dayjsFormat)}`);
  logger(vendorId, logId).info(`${fncName} : total time ${totalTime} secs`);
}

module.exports = {
  methodStart,
  methodFinish,
};
