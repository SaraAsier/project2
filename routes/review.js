const router = require('express').Router();
const ReviewController = require('../controllers/reviewController');
const middle = require('../config/middlewares');

router.get('/:id/new', middle.EnsureLoggedIn, ReviewController.newReviewGet);
router.post('/:id/new', middle.EnsureLoggedIn, ReviewController.newReviewPost);

module.exports = router;
