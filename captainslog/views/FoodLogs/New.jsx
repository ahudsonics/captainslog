const React = require('react');

const NewFoodLog = () => {
    return (
        <div>
            <h1>New Food Log</h1>
            <form action="/foodlogs" method="POST">
                <label htmlFor="foodItem">Food Item:</label>
                <input type="text" id="foodItem" name="foodItem" placeholder="Food Item" /><br />
                
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" placeholder="Quantity" /><br />
                
                <label htmlFor="mealTime">Meal Time:</label>
                <input type="text" id="mealTime" name="mealTime" placeholder="Meal Time" /><br />
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

module.exports = NewFoodLog;
