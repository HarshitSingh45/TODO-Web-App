const express = require('express');
// setup router
const router = express.Router();
// required create controller module to handle the routes
const createController = require('../controllers/createController');
// to decipher the request sent by the browser
router.use(express.urlencoded());
// setting insert controller function to insert data into database
router.post('/create-reminder',createController.insert);
// exporting router
module.exports = router;