const express = require('express');
const router = express.Router();
const FoodLog = require('../models/foodlogs');

// Index route for food logs
router.get('/', (req, res) => {
    FoodLog.find({}, (err, foodLogs) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FoodLogs/Index', { foodLogs });
        }
    });
});

// New route for food logs
router.get('/new', (req, res) => {
    res.render('FoodLogs/New');
});

// Create route for food logs
router.post('/', (req, res) => {
    FoodLog.create(req.body, (err, foodLog) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/foodlogs/${foodLog._id}`);
        }
    });
});

// Show route for food logs
router.get('/:id', (req, res) => {
    FoodLog.findById(req.params.id, (err, foodLog) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FoodLogs/Show', { foodLog });
        }
    });
});

// Edit route for food logs
router.get('/:id/edit', (req, res) => {
    FoodLog.findById(req.params.id, (err, foodLog) => {
        if (err) {
            console.log(err);
        } else {
            res.render('FoodLogs/Edit', { foodLog });
        }
    });
});

// Update route for food logs
router.put('/:id', (req, res) => {
    FoodLog.findByIdAndUpdate(req.params.id, req.body, (err, foodLog) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(`/foodlogs/${foodLog._id}`);
        }
    });
});

// Delete route for food logs
router.delete('/:id', (req, res) => {
    FoodLog.findByIdAndRemove(req.params.id, err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/foodlogs');
        }
    });
});

module.exports = router;

