const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { ensureAdmin } = require('../middlewares/auth');

router.get('/dashboard', ensureAdmin, adminController.getDashboard);
router.post('/block-user', ensureAdmin, adminController.blockUser);

module.exports = router;
