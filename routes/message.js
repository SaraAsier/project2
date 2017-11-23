const router = require('express').Router();
const messageController = require('../controllers/messageController');
const middle = require('../config/middlewares');

router.get('/', middle.EnsureLoggedIn, messageController.messageGet);

router.get('/:id/new', middle.EnsureLoggedIn, messageController.newMessageGet);
router.post('/:id/new', middle.EnsureLoggedIn, messageController.newMessagePost);

module.exports = router;
