const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  receiverId: { type: Schema.Types.ObjectId, ref: 'User' },
  description: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: true
    },
  }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Review', reviewSchema);
