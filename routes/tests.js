const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Test = require('../models/Test');

// @route   GET api/test
// @desc    Get all tests results of all players of trainer
// @access  Private
// router.get('/', (req, res) => {
//     res.send('Get all tests results of all players of trainer');
// });

// @route   GET api/test/:id
// @desc    Get all tests results of one player
// @access  Private
// router.get('/', (req, res) => {
//   res.send(' Get all tests results of one player');
// });

// @route   Post api/test
// @desc    Add test (with exercises) for one player
// @access  Private
// router.post('/', async (req, res) => {
router.post('/', [ auth, []], async (req, res) => {
  try {
    const { date, exercise0 } = req.body;

    const newTest = new Test ({
      date,
      exercise0,
      trainer: req.user.id
    })

    const test = await newTest.save()
    res.json(
      test
    );
  } catch (err) {
    console.log('error')
  }
});

// @route   PUT api/test/:id
// @desc    Update test of one player
// @access  Private
// router.put('/:id', auth, async (req, res) => {
//     res.send('Update test of one player');
// });

module.exports = router;
