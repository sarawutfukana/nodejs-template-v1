const express = require('express');
const { logId } = require('../middlewares/logId');

const router = express.Router();
const {
  getAll,
  getById,
} = require('../controllers/exam.controller');
const { authVendor } = require('../middlewares/authVendor');

router.get('/', logId, authVendor, getAll);
router.get('/:id', logId, authVendor, getById);
module.exports = router;
