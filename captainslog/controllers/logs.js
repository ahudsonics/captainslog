const express = require('express');
const router = express.Router();
const Log = require('../models/logsModels');

// Index route for logs
router.get('/', (req, res) => {
    Log.find({}, (err, logs) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('Logs/Index', { logs });
        }
    });
});

// New route for logs
router.get('/new', (req, res) => {
    res.render('Logs/New');
});

// Create route for logs
router.post('/', (req, res) => {
    Log.create(req.body, (err, log) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect(`/logs/${log._id}`);
        }
    });
});

// Show route for logs
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, log) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('Logs/Show', { log });
        }
    });
});

// Edit route for logs
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, log) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.render('Logs/Edit', { log });
        }
    });
});

// Update route for logs
router.put('/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (err, log) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect(`/logs/${log._id}`);
        }
    });
});

// Delete route for logs
router.delete('/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, err => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/logs');
        }
    });
});

module.exports = router;


