const mongoose = require('mongoose');
const FoodLog = require('./models/foodlogs');

mongoose.connect('mongodb://localhost:27017/captains_log', { useNewUrlParser: true, useUnifiedTopology: true });

const foodLogs = [
    { foodItem: 'Apple', quantity: 1, mealTime: 'Breakfast' },
    { foodItem: 'Salad', quantity: 1, mealTime: 'Lunch' },
    { foodItem: 'Chicken', quantity: 1, mealTime: 'Dinner' }
];

FoodLog.insertMany(foodLogs, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Food logs seeded successfully');
    }
    mongoose.connection.close();
});
