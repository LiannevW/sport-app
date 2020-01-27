const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  scores: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('player', PlayerSchema);
