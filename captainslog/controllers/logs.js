const express = require('express');
const router = express.Router();
const Log = require('../models/logs');
const FoodLog = require('../models/foodlogs');

// Index route for logs
router.get('/', (req, res) => {
    Log.find({}, (err, logs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Logs/Index', { logs });
        }
    });
});

// Index route for food logs
router.get('/foodlogs', (req, res) => {
    FoodLog.find({}, (err, foodLogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FoodLogs/Index', { foodLogs });
        }
    });
});


// New route
router.get('/new', (req, res) => {
    res.render('New');
});

// Create route
router.post('/', (req, res) => {
    Log.create(req.body, (err, log) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/logs/${log._id}`);
        }
    });
});

// Index route
router.get('/', (req, res) => {
    Log.find({}, (err, logs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Index', { logs });
        }
    });
});

// Show route
router.get('/:id', (req, res) => {
    Log.findById(req.params.id, (err, log) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Show', { log });
        }
    });
});

// Edit route
router.get('/:id/edit', (req, res) => {
    Log.findById(req.params.id, (err, log) => {
        if (err) {
            console.log(err);
        } else {
            res.render('Edit', { log });
        }
    });
});

// Update route
router.put('/:id', (req, res) => {
    Log.findByIdAndUpdate(req.params.id, req.body, (err, log) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/logs/${log._id}`);
        }
    });
});

// Delete route
router.delete('/:id', (req, res) => {
    Log.findByIdAndRemove(req.params.id, err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/logs');
        }
    });
});

module.exports = router;
