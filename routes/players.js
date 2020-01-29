const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Player = require('../models/Player');

// @route   GET api/player
// @desc    Get all players of user (trainer)
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
      const players = await Player.find({ trainer: req.user.id }).sort({
        date: -1
      });
      res.json(players);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route   POST api/player
// @desc    Add new player
// @access  Private
router.post('/', [ auth, [
    check('name', 'Name is required')
      .not()
      .isEmpty()
  ]
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, fitscore, dateOfBirth, length, weight, gender, league, position } = req.body;

  try {
    const newPlayer = new Player({
      name,
      email,
      fitscore,
      dateOfBirth,
      length,
      weight,
      gender,
      league,
      position,
      trainer: req.user.id
    });

    const player = await newPlayer.save();
    res.json(player);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}
);

// @route   PUT api/player/:id
// @desc    Update player
// @access  Private
router.put('/:id', auth, async (req, res) => {
  const { name, email, scores } = req.body;

  // Build player object
  const playerFields = {};
  if (name) playerFields.name = name;
  if (email) playerFields.email = email;
  if (scores) playerFields.scores = scores;

  try {
    let player = await Player.findById(req.params.id);

    if (!player) return res.status(404).json({ msg: 'Player not found' });

    // Make sure user owns player
    if (player.trainer.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    player = await Player.findByIdAndUpdate(
      req.params.id,
      { $set: playerFields },
      { new: true }
    );

    res.json(player);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/player/:id
// @desc    Update player
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let player = await Player.findById(req.params.id);

    if (!player) return res.status(404).json({ msg: 'Player not found' });

    // Make sure user owns player
    if (player.trainer.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Player.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Player removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
