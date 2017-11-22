const session = require('express-session');
const mongoose = require('mongoose');

module.exports = function(app){
  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });
};
