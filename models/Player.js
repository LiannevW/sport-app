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
    required: false
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  length: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  league: {
    type: String,
    required: false
  },
  position: {
    type: String,
    required: false
  },
  // Total score of player calculated with tests resutls
  fitscore: {
    type: Number,
    required: false
  },
  // This becomes array of tests!
  tests: {
    type: Number,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('player', PlayerSchema);
