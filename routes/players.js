const express = require('express');
const router = express.Router();

// @route   GET api/player
// @desc    Get all user (trainer) players
// @access  Private
router.get('/', (req, res) => {
    res.send('Get all players');
});

// @route   POST api/player
// @desc    Add new player
// @access  Private
router.post('/', (req, res) => {
    res.send('Add player');
});

// @route   PUT api/player/:id
// @desc    Update player
// @access  Private
router.put('/:id', (req, res) => {
    res.send('Update player');
});

// @route   DELETE api/player/:id
// @desc    Update player
// @access  Private
router.delete('/:id', (req, res) => {
    res.send('Delete player');
});


module.exports = router;
