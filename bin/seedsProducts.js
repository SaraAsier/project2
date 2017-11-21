const mongoose = require('mongoose');
// const bcrypt         = require("bcrypt");
// const bcryptSalt     = 10;
// const User = require('../models/User');
const Product = require('../models/Product');

mongoose.connect("mongodb://localhost/project2");
// var salt = bcrypt.genSaltSync(bcryptSalt);
// const password = "ironhack";
// var encryptedPass = bcrypt.hashSync(password, salt);

  const products = [
    {
    name: "Taladro",
    description:"Taladro inalámbrico de 20V",
    category: "Home",
    creator: "5a140a0bbf1ca743488bef90",
    isAvailable: true,
    photo: "http://laanonima.s3-website-us-east-1.amazonaws.com/web/images/productos/b/0000001000/1770.jpg",
    },
    {
    name: "Cuna",
    description:"Cuna con colchón",
    category: "Children",
    creator: "5a140a0bbf1ca743488bef90",
    isAvailable: true,
    photo: "https://madreshoy.com/wp-content/uploads/2009/11/cuna_madera.jpg",
    },
    {
    name: "Tienda de campaña",
    description:"Tienda para dos tipo tipi",
    category: "Sports",
    creator: "5a140a0bbf1ca743488bef91",
    isAvailable: true,
    photo: "https://www.columbus-outdoor.com/media/catalog/product/a/0/a08306_tipi_01_2__opt.jpg",
    },
    {
    name: "Aprendiendo JavaScript",
    description:"Autor: Carlos Azaustre",
    category: "Entertainment",
    creator: "5a140a0bbf1ca743488bef91",
    isAvailable: true,
    photo: "https://s3.amazonaws.com/titlepages.leanpub.com/aprendiendo-javascript/hero?1458731712",
    },

    ];

    Product.create(products, (err, docs) => {
        if (err) {
          throw err;
        };

      docs.forEach((cel) => {
        console.log(cel.name);
      });
      });



Product.collection.drop();
