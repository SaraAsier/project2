const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  facebookId: String,
  username: {
    type: String,
    required: true
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
    required: true
  },
  email: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String
    },
    coordinates: [Number]
  },
  image: {
    type: String,
    required: false
  },
  trustLevel: {
    type: Number,
    min: 0,
    max: 5
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
