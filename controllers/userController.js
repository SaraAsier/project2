
const User = require('../models/User');
const Review = require('../models/Review');
const Product = require('../models/Product');

//
module.exports = {
  profileGet: (req, res, next) => {
    Product.find({creator: res.locals.user._id}, (err, product) => {
      console.log(product);
      res.render('user/profile', {
        user: res.locals.user,
        products: product,
        reviews: review
      });    });
  },

  editGet: (req, res, next) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        console.log(err);
      }
      res.render('user/editUser', {
        user: user
      });
    });
  },

  editPost: (req, res, next) => {
    let updates = {
      username: req.body.username,
      email: req.body.email,
      pic_path: `../uploads/${req.file.filename}`,
      pic_name: req.file.originalname
    };
    User.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect('/user/profile');
    });
  }
};
