const express = require('express');
// setup router
const router = express.Router();
// to decipher the request sent by the browser
router.use(express.urlencoded());
// required delete controller module to handle the routes
const deleteController = require('../controllers/deleteController');
// setting delete controller function to delete reminder from database
router.post('/delete-tasks', deleteController.delete);
// exporting router
module.exports = router;