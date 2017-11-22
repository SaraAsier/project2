const Product = require('../models/Product');
const TYPES = require('../models/Product-types');

module.exports = {
  index: (req, res, next) => {
    Product.find()
      .then(product => res.render('products/indexcategories', {products: product, user: res.locals.user}))
      .catch( err => console.log (err));
  },

  categories: (req, res, next) => {
    var str = req.params.category;
    var str2 = str.split('');
    var str3 = str2[0].toUpperCase() + str.substr(1);
    console.log(str3);
    Product.find({category: str3})
      .populate('creator')
      .then(product => {
        console.log(product);
      res.render('products/productbycategory', {category: str3, product: product});
    })
      .catch(err => console.log(err));
  },

  createGet: (req, res, next) => {
    res.render('products/create');
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
    newProduct.save()
      .then(() => res.redirect("/product"))
      .catch(err => res.redirect("/product/create"));
  },

  delete: (req, res, next) => {
    Product.findByIdAndRemove(req.params.id)
      .then(obj => res.redirect("/product"))
      .catch(err => console.log(err));
  },

  editGet: (req, res, next) => {
    Product.findById(req.params.id)
    .then(product => res.render('product/update', { name: 'El taladro de Juanito', product: product }))
    .catch(err => console.log(err));
  },

  editPost: (req, res, next) => {
    const {
      name,
      description,
      category,
      isAvailable,
      photo
    } = req.body;
    const updates = {
      name,
      description,
      category,
      isAvailable,
      photo
    };
    Product.findByIdAndUpdate(req.params.id, updates)
      .then(result => res.redirect(`/product/${result._id}/`))
      .catch(err => console.log(err));
}
};
