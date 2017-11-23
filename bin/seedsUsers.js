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
    pic_path: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/05/25/103666044-RTX2AQXH.530x298.jpg?v=1464205218",
    trustLevel: 4,
  },
  {
    username: "Asiercis",
    name: "Asier",
    lastName: "Cisneros",
    password: encryptedPass,
    email: "asier@hola.com",
    pic_path: "http://www.comedycentral.es/wp-content/uploads/sites/4/2016/03/bocasecaman.png",
    trustLevel: 4,
  },
  {
    username: "Boyander",
    name: "Marc",
    lastName: "Pomar",
    password: encryptedPass,
    email: "marc@hola.com",
    pic_path: "https://avatars2.githubusercontent.com/u/568638?s=400&v=4",
    trustLevel: 2,
  },
  {
    username: "Chicuelo",
    name: "Andrei",
    lastName: "Andrei",
    password: encryptedPass,
    email: "andrei@hola.com",
    pic_path: "http://vignette3.wikia.nocookie.net/looneytunes/images/7/7f/Demonio_de_tazmania.jpg/revision/latest?cb=20111120054313&path-prefix=es",
    trustLevel: 2,
  },

  {
    username: "y4izus",
    name: "Yaiza",
    lastName: "Yaiza",
    password: encryptedPass,
    email: "Yaiza@hola.com",
    pic_path: "http://www.vectorfree.com/media/vectors/rocker-girl.jpg",
    trustLevel: 5,
  },

  {
    username: "Avello",
    name: "Manu",
    lastName: "Avello",
    password: encryptedPass,
    email: "avello@hola.com",
    pic_path: "https://images.fatherly.com/wp-content/uploads/2017/09/636421180726214607-BM101-Andrew-with-sperm.jpg",
    trustLevel: 1,
  },
  {
    username: "Delpino",
    name: "Manu",
    lastName: "Delpino",
    password: encryptedPass,
    email: "delpino@hola.com",
    pic_path: "https://www.reasonwhy.es/sites/default/files/don-limpio-ReasonWhy.es_.jpg",
    trustLevel: 3,
  },
  {
    username: "Victor",
    name: "Victor",
    lastName: "Rodriguez",
    password: encryptedPass,
    email: "victor@hola.com",
    pic_path: "http://cdn.makeuseof.com/wp-content/uploads/2016/07/cleaner-better-code-670x335.jpg",
    trustLevel: 3,
  },
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
