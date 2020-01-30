const mongoose = require('mongoose');

const ExerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },

});

module.exports = mongoose.model('exercise', ExerciseSchema);
