const express = require('express');
const router = express.Router();

// Sample endpoint
router.get('/', (req, res) => {
    res.json({ message: 'Companies route working!' });
});

module.exports = router;
