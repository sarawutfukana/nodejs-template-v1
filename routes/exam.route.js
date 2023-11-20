const express = require('express');

const router = express.Router();
const {
  getAll,
  getById,
} = require('../controllers/exam.controller');

router.get('/', getAll);
router.get('/:id', getById);
module.exports = router;
