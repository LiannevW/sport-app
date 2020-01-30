const mongoose = require('mongoose');

const TestsSchema = mongoose.Schema({
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'players'
  },
  date: {
    type: String,
    required: false
  },
  fitScore: {
    type: Number,
    required: false
  },
  exercise0: {
    type: Number,
    required: false
  },
});

module.exports = mongoose.model('tests', TestsSchema);

