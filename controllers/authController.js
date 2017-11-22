const User = require("../models/User");
const passport = require("passport");
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });

module.exports = {
  signupGet: (req, res, next) => { res.render('auth/signup'); },
  signupPost:  passport.authenticate('local-signup', {
      successRedirect: '/product',
      failureRedirect: '/auth/signup'
  }),

  loginGet: (req, res, next) => { res.render('auth/login'); },
  loginPost: passport.authenticate('local-login', {
    successRedirect : '/product',
    failureRedirect : '/auth/login'
  }),

  logout: (req, res, next) => { req.logout(); res.redirect('/../'); },

  // facebookGet: passport.authenticate("facebook"),
  // facebookCallbackGet: passport.authenticate("facebook", {
  //   successRedirect: "/product",
  //   failureRedirect: "/"
  // })
};
