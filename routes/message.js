const router = require('express').Router();
const messageController = require('../controllers/messageController');
const middle = require('../config/middlewares');

router.get('/', middle.EnsureLoggedIn, messageController.messageGet);

router.get('/new', middle.EnsureLoggedIn, messageController.newMessageGet);
router.post('/new', middle.EnsureLoggedIn, messageController.newMessagePost);

module.exports = router;
