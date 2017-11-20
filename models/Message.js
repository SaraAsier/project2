const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const MessageSchema = new Schema({
  from : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  to : { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message : String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

module.exports = mongoose.model('Message', MessageSchema);
