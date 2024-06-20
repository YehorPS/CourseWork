const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

console.log('Auth routes loaded');

router.get('/login', (req, res) => {
    console.log('GET /login route hit');
    authController.getLogin(req, res);
});

router.post('/login', (req, res) => {
    console.log('POST /login route hit');
    authController.postLogin(req, res);
});

router.get('/register', (req, res) => {
    console.log('GET /register route hit');
    authController.getRegister(req, res);
});

router.post('/register', (req, res) => {
    console.log('POST /register route hit');
    authController.postRegister(req, res);
});

router.get('/logout', (req, res) => {
    console.log('GET /logout route hit');
    authController.logout(req, res);
});

module.exports = router;
