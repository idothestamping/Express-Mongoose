// Required modules
const express = require('express');

// Declare router instance
const router = express.Router();

// Include our models
const db = require('../../models');

// Define routes
router.get('/', (req, res) => {
    // res.send('Oh Yeup!');
    db.Bounty.find()
    .then(bounties => {
        res.send(bounties);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
    });
});

// Export this router to be included by index.js - or yourfilename.js
module.exports = router;