const express = require('express');
const router = express.Router();

const authController = require('../app/controllers/AuthController');

// router.get('/:slug', tvController.detail);
router.post('/login', authController.login);
router.post('/keeplogin', authController.keepLogin);

module.exports = router;
