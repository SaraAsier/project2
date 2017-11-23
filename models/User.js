const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: String,
  username: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },

  latitude: Number,
  longitude: Number,

  pic_path: String,
  pic_name: String,

  trustLevel:{
    type: Number
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

userSchema.index({
  location: '2dsphere'
});

module.exports = mongoose.model('User', userSchema);
