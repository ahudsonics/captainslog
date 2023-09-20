const mongoose = require('mongoose');

const foodLogSchema = new mongoose.Schema({
    foodItem: String,
    quantity: Number,
    mealTime: String
}, { timestamps: true });

module.exports = mongoose.model('FoodLog', foodLogSchema);
