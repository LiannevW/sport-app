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


// @route   PUT api/test/:player
// @desc    Update test of one player with new exercise data OR post new test!
// @access  Private
router.put('/:player', auth, async (req, res) => {

  try {
    let testsOfPLayer = await Test.find({ player: req.body.player })

    const postATest = async () => {
      const { player, date, exercise0, exercise1 } = req.body;

      try {
        const newTest = new Test({
          player,
          date,
          exercise0,
          exercise1
        })

        const test = await newTest.save();

        return test

      } catch (err) {
        res.status(500).send('Server Error');
      }
    }

    const updateAtest = async (matchingTest) => {
      let testFields = {}
      if (req.body.exercise0 !== '') testFields = { exercise0: req.body.exercise0 }
      if (req.body.exercise1 !== '') testFields = { exercise1: req.body.exercise1 }

      const test = await Test.findByIdAndUpdate(
        matchingTest._id,
        { $set: testFields },
        { new: true }
      );

      res.json(test)
    }

    if (testsOfPLayer.length >= 1) {
      const matchingTest = testsOfPLayer.find(test => test.date === req.body.date);
      if (matchingTest) {
        updateAtest(matchingTest)
      } else {
        const addNewTestToPlayer = postATest();
        if (!addNewTestToPlayer) return res.status(500).send('Server Error');
        res.json(addNewTestToPlayer)
      }
    } else {
      const addFirstTestToPlayer = postATest();
      if (!addFirstTestToPlayer) return res.status(500).send('Server Error');
      res.json(addFirstTestToPlayer)
    }

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }

});


module.exports = router;
