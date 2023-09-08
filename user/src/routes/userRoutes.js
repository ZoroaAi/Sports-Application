const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User routes
router.post('/register', userController.registerUser);
router.post('/get-user', userController.getUserDetails);
router.post('/edit-profile', userController.editProfile);
router.post('/delete-user', userController.deleteUser);


module.exports = router;