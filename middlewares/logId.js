const { v4: uuidv4 } = require('uuid');

async function logId(req, res, next) {
  try {
    req.logId = uuidv4();
    return next();
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  logId,
};
