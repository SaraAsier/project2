const Message = require('../models/Message');
const User = require('../models/User');

module.exports = {
  messageGet: (req, res, next) => {
    Message.find({to:req.user._id})
      .populate('from')
      .then(result => res.render('message/message', { message: result }))
      .catch( err => console.log (err));
  },

  newMessageGet: (req, res, next) => {
    console.log("8=======D ----- 3  ");
    console.log(req.params.id);
    User.findById(req.params.id)
    .then(result => res.render('message/newMessage', { to:req.params.id, user: result}))
    .catch( err => console.log (err));
    },

  newMessagePost: (req, res, next) => {
      const newMessage = new Message({
        from: req.user._id,
        to: req.params.id,
        text: req.body.text,
      });
      console.log(newMessage);
      newMessage.save()
        .then(() => res.redirect("/message"))
        .catch(err => res.redirect("/message/newMessage"));
    },
};
