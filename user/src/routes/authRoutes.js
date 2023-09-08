const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Auth Routes
router.post('/login', authController.loginUser);
router.post('/logout', authController.logout);
router.post('/reset-password', authController.resetPassword);
router.post('/refresh-token', authController.refreshToken);

module.exports = router;