const express = require('express');
const router = express.Router();
const createController = require('../controllers/createController');
router.use(express.urlencoded());
router.post('/create-reminder',createController.insert);
module.exports = router;