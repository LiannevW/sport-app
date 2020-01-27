const mongoose = require('mongoose');

// Currently all users are trainers, in the future players are add as well (trainer : false)
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  trainer: {
      type: Boolean,
      default: true
  }
});

module.exports = mongoose.model('user', UserSchema);
