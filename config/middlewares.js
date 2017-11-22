const {ensureLoggedIn} = require("connect-ensure-login");
const multer  = require('multer');
const upload = multer({ dest: './public/uploads/' });
//
// const Picture = require('../models/Pictures');
//
// router
// .post('/upload', upload.single('photo'), function(req, res){
//
//   const pic = new Picture({
//     name: req.body.name,
//     pic_path: `/uploads/${req.file.filename}`,
//     pic_name: req.file.originalname
//   });
//
//   pic.save((err) => {
//       res.redirect('/');
//   });
// });
//
//
module.exports = {
  EnsureLoggedIn: ensureLoggedIn('../../auth/login'),
  UploadFile: upload.single('photo')
};
