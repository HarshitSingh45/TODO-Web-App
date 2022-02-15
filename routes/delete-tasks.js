const express = require('express');
const router = express.Router();
router.use(express.urlencoded());
const deleteController = require('../controllers/deleteController');
router.post('/delete-tasks', deleteController.delete);
module.exports = router;