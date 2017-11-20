const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const TYPES    = require('./product-types');

const ProductSchema = new Schema({
  name : { type: String, required: true },
  description : { type: String, required: true },
  category : { type: String, enum: TYPES, required: true },
  creator : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isAvaliable : Boolean,
  photo: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Product', ProductSchema);
