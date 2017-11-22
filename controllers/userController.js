
const User = require('../models/User');
const Review = require('../models/Review');
const Product = require('../models/Product');

module.exports = {

  profileIdGet: (req, res, next) => {
      User.findById(req.params.id)
      .then(result1 => {
        Review.find({receiverId: result1._id})
          .then(result2 => {
              Product.find({creator:result1._id})
                .then( result3 => res.render('user/showUser', { user: result1, reviews: result2, products: result3 }));
      });
    })
      .catch(err => console.log(err));

  },


  profileGet: (req, res, next) => {
    Review.find({receiverId: res.locals.user._id})
      .then(reviews => {
        Product.find({creator:res.locals.user._id})
          .then( products => res.render('user/profile', { user: res.locals.user, reviews: reviews, products: products }));
      })
      .catch(err => console.log(err));
  },

  editGet: (req, res, next) => {
    User.findById(req.params.id)
      .then(user => res.render('user/editUser', { user: user }))
      .catch(err => console.log(err));
  },

  editPost: (req, res, next) => {
    let updates = {
      username: req.body.username,
      email: req.body.email,
      pic_path: `../uploads/${req.file.filename}`,
      pic_name: req.file.originalname
    };
    User.findByIdAndUpdate(req.params.id, updates)
      .then(result => res.redirect('/user/profile'))
      .catch(err => console.log(err));
}
};
