const mongoose = require('mongoose');

const TestsSchema = mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'players'
  },
  date: {
    type: String,
    required: false
  },
  exercise0: {
    type: Number,
    required: false
  },
  exercise1: {
    type: Number,
    required: false
  },
  exercise2: {
    type: Number,
    required: false
  },
  fitScore: {
    type: Number,
    required: false
  },
});

module.exports = mongoose.model('tests', TestsSchema);

