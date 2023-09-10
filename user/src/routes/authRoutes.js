const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Auth Routes
router.post('/login', authController.loginUser);
router.post('/logout', authController.logout);
router.post('/refreshToken',authController.refreshAccessToken)
router.post('/reset-password', authController.resetPassword);

module.exports = router;