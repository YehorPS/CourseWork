const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuthenticated } = require('../middlewares/auth');

router.get('/dashboard', ensureAuthenticated, userController.getDashboard);
router.post('/add-soldier', ensureAuthenticated, userController.addSoldier);
router.post('/edit-soldier/:id', ensureAuthenticated, userController.editSoldier);
router.post('/delete-soldier/:id', ensureAuthenticated, userController.deleteSoldier);

module.exports = router;
