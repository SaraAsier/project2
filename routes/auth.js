const express = require("express");
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require("passport");

router.get("/signup", authController.signupGet);
router.post('/signup', authController.signupPost);

router.get('/login', authController.loginGet);
router.post('/login', authController.loginPost);

router.get('/logout', authController.logout);

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/product",
  failureRedirect: "/"
}));


module.exports = router;
