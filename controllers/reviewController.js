
const User = require('../models/User');
const Review = require('../models/Review');
const Product = require('../models/Product');


module.exports = {

  newReviewGet: (req, res, next) => {
    console.log("8=======D ----- 3  ");
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(result => res.render('review/new', { to:req.params.id, user: result}))
    .catch( err => console.log (err));
    },

  newReviewPost: (req, res, next) => {
      const newReview = new Review({
        to: req.params.id,
        text: req.body.text,
        rating: req.body.rating
      });
      console.log(newReview);
      newReview.save()
        .then(() => res.redirect("/user/showUser"))
        .catch(err => res.redirect("/products/indexcategories"));
    },
};
