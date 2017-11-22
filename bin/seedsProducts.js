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
    name: "Drill",
    description:"Wireless drill,  20V",
    category: "Home",
    creator: "5a140a0bbf1ca743488bef90",
    isAvailable: true,
    photo: "http://laanonima.s3-website-us-east-1.amazonaws.com/web/images/productos/b/0000001000/1770.jpg",
    },
    {
    name: "Cradle",
    description:"Cradle with mattress",
    category: "Children",
    creator: "5a140a0bbf1ca743488bef90",
    isAvailable: true,
    photo: "https://madreshoy.com/wp-content/uploads/2009/11/cuna_madera.jpg",
    },
    {
    name: "Camp tent",
    description:"Tipi tent for two people",
    category: "Sports",
    creator: "5a140a0bbf1ca743488bef91",
    isAvailable: true,
    photo: "https://www.columbus-outdoor.com/media/catalog/product/a/0/a08306_tipi_01_2__opt.jpg",
    },
    {
    name: "Aprendiendo JavaScript",
    description:"Author: Carlos Azaustre",
    category: "Entertainment",
    creator: "5a140a0bbf1ca743488bef91",
    isAvailable: true,
    photo: "https://s3.amazonaws.com/titlepages.leanpub.com/aprendiendo-javascript/hero?1458731712",
    },
    {
    name: "Money",
    description:"Lots of spare money",
    category: "Entertainment",
    creator: "5a155b90d9e3d06a62c725d2",
    isAvailable: true,
    photo: "http://www.meridianpeakhypnosis.com/wp-content/uploads/2014/02/money-addiction.jpg",
    },

    ];

    const reviews = [
      {
      senderId: "5a140a0bbf1ca743488bef90",
      senderName: "Sara",
      receiverId: "5a155b90d9e3d06a62c725d2",
      description: "Too flama",
      rating: 5
      },
      {
      senderId: "5a140a0bbf1ca743488bef91",
      senderName: "Asier",
      receiverId: "5a155b90d9e3d06a62c725d2",
      description: "Great but not top",
      rating: 4
      },
    ];

    Review.create(reviews, (err, docs) => {
        if (err) {
          throw err;
        };

      docs.forEach((cel) => {
        console.log(cel.name);
      });
      });


    Product.create(products, (err, docs) => {
        if (err) {
          throw err;
        };

      docs.forEach((cel) => {
        console.log(cel.name);
      });
      });



Product.collection.drop();
