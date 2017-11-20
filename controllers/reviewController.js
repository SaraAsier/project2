const Review = require('../models/Review');
const Product = require('../models/Product');

module.exports = {
  createGet: (req, res, next) => {
    res.render('reviews/create', {
      user: res.locals.user,
      idProduct: req.params
    });
  },
  createPost: (req, res, next) => {
    Product.find({_id: req.params.id}, (err, product) => {
      if (err) {
        console.log(err);
      }
      let newReview = new Review({
        senderId: res.locals.user._id,
        //creator iD???? array campaign??
        // receiverId: campaign[0].refCreatorId,
        description: req.body.description,
        rating: req.body.rating,
      });
      newReview.save()
      .then((result, err) => {
        //redirigimos a user mejor?
        res.redirect(`../../product/${req.params.id}/detail`);
      })
      .catch(error => next(error));
    });
  },

  delete: (req, res, next) => {
    Review.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      //cambiar redirect
      res.redirect("/product");
    });
  }
};
