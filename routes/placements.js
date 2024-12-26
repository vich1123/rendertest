const express = require('express');
const router = express.Router();

// GET route to test the placements endpoint
router.get('/', (req, res) => {
    res.json({ message: 'Placements route is working!' });
});

module.exports = router;
