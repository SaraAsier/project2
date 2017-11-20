const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');

router.get("/signup", authController.signupGet);
router.post('/signup', authController.signupPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

// router.get("/auth/facebook", authController.facebookGet);
// router.get("/auth/facebook/callback", authController.facebookCallbackGet);

module.exports = router;
