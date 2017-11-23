
const User = require('../models/User');
const Review = require('../models/Review');
const Product = require('../models/Product');

module.exports = {

  profileIdGet: (req, res, next) => {
    var contador = 0;
      User.findById(req.params.id)
      .then(result1 => {
        Review.find({to: result1._id})
          .then(result2 => {
            console.log("RESULT", result2);
            result2.forEach( e => {
              console.log("LONGITUD", result2.length);
              console.log("RATING INDIVIDUAL", e.rating);
              let sumrating = 0;
              sumrating += e.rating;
              console.log("SUMA", sumrating);
              contador = sumrating / result2.length;
              console.log("CONTADOR", contador);
              result1.trustLevel = contador;
            });
            //foreach para recorrer result2 para guardar en una variable contador todos los valores de cada review dividirlo entre result2.length
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
      name: req.body.name,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      pic_path: `../uploads/${req.file.filename}`,
      pic_name: req.file.originalname
    };
    User.findByIdAndUpdate(req.params.id, updates)
      .then(result => res.redirect('/user/profile'))
      .catch(err => console.log(err));
}
};
