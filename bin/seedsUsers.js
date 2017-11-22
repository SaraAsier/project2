require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require('../models/User');
// const Product = require('../models/Product');
// const Review = require('../models/Review');
// const Message = require('../models/Message');

mongoose.connect(process.env.DB_URL).then(() =>{
  console.log("Connected to DB: " + process.env.DB_URL);
});

var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

const users = [{
    username: "Saramoza",
    name: "Sara",
    lastName: "Mozaffary",
    password: encryptedPass,
    email: "sara@hola.com",
    image: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
    trustLevel: 2,
  },
  {
    username: "Asiercis",
    name: "Asier",
    lastName: "Cisneros",
    password: encryptedPass,
    email: "asier@hola.com",
    image: "http://www.comedycentral.es/wp-content/uploads/sites/4/2016/03/bocasecaman.png",
    trustLevel: 2,
  }
];

User.create(users, (err, docs) => {
  if (err) {
    throw err;
  };
  docs.forEach((cel) => {
    console.log(cel.name);
    console.log(cel.id);


  });
});



mongoose.connection.close();
