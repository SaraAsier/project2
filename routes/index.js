const router = require('express').Router();
const indexController = require('../controllers/indexController');
const auth = require('./auth');
const user = require('./user');
const product = require('./product');
const message = require('./message');
const review = require('./review');

router.get('/', indexController.index);

router.use('/auth', auth);
router.use('/user', user);
router.use('/product', product);
router.use('/message', message);
router.use('/review', review);

module.exports = router;
