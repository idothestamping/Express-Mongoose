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

router.post('/', (req, res) => {
    // res.send('Post Reached!');
    req.body.hunters = JSON.parse(req.body.hunters);
    db.Bounty.create(req.body)
    .then(bounty => {
        res.status(201).send(bounty);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
    });
});

router.get('/:id', (req, res) => {
    // res.send('GET /:id Reached!');
    db.Bounty.findById(req.param.id)
    .then(bounty => {
        res.send(bounty)
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
    });
});

router.put('/:id', (req, res) => {
    // res.send('PUT PUT PUT!');
    req.body.hunters = JSON.parse(req.body.hunters);
    db.Bounty.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(bounty => {
        res.send(bounty);
    })
});

router.delete('/:id', (req, res) => {
    // res.send('DELETE /:id Reached!');
    db.Bounty.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
        res.status(204).send({ message: 'Successful Deletion' });
    })
    .catch(err => {
        console.log(err);
        res.status(500).send({ message: 'Server Error' });
    });
});

// Export this router to be included by index.js - or yourfilename.js
module.exports = router;