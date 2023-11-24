const VendorModel = require('../models/vendor.model');

async function getByToken(token) {
  const vendor = await VendorModel.getByToken(token);
  return vendor;
}

module.exports = {
  getByToken,
};
