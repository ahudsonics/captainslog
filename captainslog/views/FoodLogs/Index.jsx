const React = require('react');

const Index = ({ foodLogs }) => {
    return (
        <div>
            <h1>Food Logs</h1>
            <ul>
                {foodLogs.map(foodLog => (
                    <li key={foodLog._id}>
                        Food Item: {foodLog.foodItem}, Quantity: {foodLog.quantity}, Meal Time: {foodLog.mealTime}
                    </li>
                ))}
            </ul>
            <a href="/foodlogs/new">New Food Log</a>
        </div>
    );
};

module.exports = Index;
