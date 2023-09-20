const React = require('react');

const ShowFoodLog = ({ foodLog }) => {
    return (
        <div>
            <h1>Food Log</h1>
            <p>Food Item: {foodLog.foodItem}</p>
            <p>Quantity: {foodLog.quantity}</p>
            <p>Meal Time: {foodLog.mealTime}</p>
            <a href="/foodlogs">Back to Food Logs</a>
        </div>
    );
};

module.exports = ShowFoodLog;
