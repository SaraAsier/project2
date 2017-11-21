const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./Product-types');

const productSchema = new Schema({
  name : { type: String },
  description : { type: String},
  category : { type: String, enum: TYPES},
  creator : { type: Schema.Types.ObjectId, ref: 'User' },
  isAvailable : Boolean,
  photo: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Product', productSchema);
