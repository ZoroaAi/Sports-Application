const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

// User routes
router.post('/register', userController.registerUser, (req,res) => {console.log(req.body)});
// JWT Protected Routes
router.get('/get-user', authenticateToken, userController.getUserDetails);
router.post('/edit-profile', authenticateToken, userController.editProfile);
router.post('/delete-user', authenticateToken, userController.deleteUser);


module.exports = router;