const express = require('express');

const router = express.Router();
const {
  index,
} = require('../controllers/healthz.controller');

router.get('/', index);
module.exports = router;
