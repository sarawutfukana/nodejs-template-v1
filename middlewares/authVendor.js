const { logger } = require('../config/log.config');
const { getByToken } = require('../schemas/vendor.schema');

async function authVendor(req, res, next) {
  const fncName = 'authVendor';
  try {
    const apiKey = req.header('x-api-key');
    const lang = req.header('lang') || 'th';
    req.lang = lang;

    if (apiKey) {
      const result = await getByToken(apiKey);
      if (result && result.status === 1) {
        req.vendorId = result.id;
        logger(req.vendorId, req.logId).info(`${fncName} : success`);
        logger(req.vendorId, req.logId).info(`${fncName} : AUTHVENDOR-200-100`);
        return next();
      }
      logger('center', req.logId).error(`${fncName} : code AUTHVENDOR-401-100`);
      logger('center', req.logId).error(`${fncName} : Unauthorized Vendor`);
      return res.status(401).json({
        code: 'AUTHAPP-401-100',
        status: false,
        msg: 'Unauthorized App.',
        dataSize: 0,
        data: [],
      });
    }
    logger('center', req.logId).error(`${fncName} : AUTHVENDOR-400-1001`);
    logger('center', req.logId).error(`${fncName} : Bad request for vendor authen`);
    return res.status(400).json({
      code: 'AUTHVENDOR-400-100',
      status: false,
      msg: 'Bad request for vendor authen.',
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  authVendor,
};
