const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Player = require('../models/Player');

// @route   GET api/scores
// @desc    Get all scores of user (trainer) sorted by fitscore
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
      const players = await Player.find({ trainer: req.user.id })
        .select('-email')
        .sort({
          fitscore: -1
        });
      res.json(players);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;
