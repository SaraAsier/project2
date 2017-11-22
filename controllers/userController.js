
const User = require('../models/User');
const Review = require('../models/Review');

module.exports = {
  profileGet: (req, res, next) => {
    Review.find({receiverId: res.locals.user._id})
      .then(reviews => res.render('user/profile', { user: res.locals.user, reviews: reviews }))
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
