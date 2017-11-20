const router = require('express').Router();
const CampaignController = require('../controllers/CampaignController');
const middle = require('../config/middlewares');

router.get('/', CampaignController.index);

router.get('/create', middle.EnsureLoggedIn, productController.createGet);
router.post('/create', middle.EnsureLoggedIn, productController.createPost);

router.get('/:id/detail', middle.EnsureLoggedIn, productController.detail);

router.get('/:id/delete', middle.EnsureLoggedIn, productController.delete);

router.get('/:id/update', middle.EnsureLoggedIn, productController.editGet);
router.post('/:id/update', middle.EnsureLoggedIn, productController.editPost);

module.exports = router;
