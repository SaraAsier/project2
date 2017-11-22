const Message = require('../models/Message');

module.exports = {
  messageGet: (req, res, next) => {
    Message.find()
      .then(result => res.render('message/message', {message: result}))
      .catch( err => console.log (err));
  },

  newMessageGet: (req, res, next) => {
      res.render('message/newMessage');
    },

  newMessagePost: (req, res, next) => {
      const newMessage = new Message({
        text: req.body.text,
      });
      newMessage.save()
        .then(() => res.redirect("/message"))
        .catch(err => res.redirect("/product/create"));
    },


};
