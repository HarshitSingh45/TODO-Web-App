const express = require('express');
// setup router
const router = express.Router();
// required home controller module to handle the routes
const homeController = require('../controllers/home_controller');

console.log('router loaded'); 
// setting controller function for homepage
router.get('/', homeController.home);
// Route all requests starting with '/create-reminder' to create-reminder.js file
router.post('/create-reminder', require('./create-reminder'));
// Route all requests starting with '/delete-tasks' to delete-tasks.js file
router.post('/delete-tasks', require('./delete-tasks'));
// Route all requests starting with '/users' to users.js file
router.use('/users', require('./users'));

// exporting router
module.exports = router;