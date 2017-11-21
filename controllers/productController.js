const Product = require('../models/Product');
const TYPES    = require('../models/Product-types');

module.exports = {
  index: (req, res, next) => {
    Product.find({}, (err, product) => {
      res.render('products/indexcategories', {
        products: product,
        user: res.locals.user
      });
    });
  },

categories: (req, res, next) => {
  console.log(req.params.category);
    Product.find({category: req.params.category}, (err, product) => {
      if (err) {
        console.log(err);
      }
      console.log(product);
      res.render('products/productbycategory');
    });
  },

createGet: (req, res, next) => {
    res.render('product/create');
  },

createPost: (req, res, next) => {
    const newProduct = new Product({
      name: req.body.title,
      description: req.body.description,
      category: req.body.price,
      creator: req.body.city,
      isAvaliable: false,
      photo: `../uploads/${req.file.filename}`
    });
    newProduct.save((err) => {
      if (err) {
        return err;
      } else {
        return res.redirect("/product");
      }
    });
  },


  delete: (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err, obj) => {
      if (err) {
        return next(err);
      }
      res.redirect("/product");
    });
  },

  editGet: (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        console.log(err);
      }
      res.render('product/update', {
        name: 'El taladro de Juanito',
        product: product
      });
    });
  },

  editPost: (req, res, next) => {
    const { name, description, category, isAvaliable, photo } = req.body;
    const updates = { name, description, category, isAvaliable, photo };
    Product.findByIdAndUpdate(req.params.id, updates, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.redirect(`/product/${result._id}/`);
    });
  }
}
