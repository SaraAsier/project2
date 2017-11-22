const Message = require('../models/Message');

module.exports = {
  messageGet: (req, res, next) => {
    Message.find({to:req.user._id})
      .then(result => res.render('message/message', {message: result}))
      .catch( err => console.log (err));
  },

  newMessageGet: (req, res, next) => {
      res.render('message/newMessage');
    },

  newMessagePost: (req, res, next) => {
    console.log("entrando a leer message 8====D")
      const newMessage = new Message({
        from: req.user._id,
        to: req.body.to,
        text: req.body.text,
      });
      console.log(newMessage)
      newMessage.save()
        .then(() => res.redirect("/message"))
        .catch(err => res.redirect("/message/newMessage"));
    },
};
