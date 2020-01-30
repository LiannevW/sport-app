const express = require('express');
const router = express.Router();

// Exercises are not stored in DB and not content editable

// @route   GET api/exercises
// @desc    Get all exercises of one test
// @access  Private
router.get('/', (req, res) => {
    res.json(
        require('../excersises')
    );
});

// @route   GET api/exercises/:id
// @desc    Get one exercises (by id) of one test
// @access  Private
router.get('/:id', async (req, res) => {
    res.json(
        require('../excersises')[req.params.id]
    );
});

module.exports = router;
