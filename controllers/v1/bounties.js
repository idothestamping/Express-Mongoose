// Required modules
const express = require('express');

// Declare router instance
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Oh Yeup!');
})

// Export this router to be included by index.js - or yourfilename.js
module.exports = router;