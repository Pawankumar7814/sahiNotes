const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/notes', require('./notes.js'));
router.use('/users', require('./users.js'));

module.exports = router;