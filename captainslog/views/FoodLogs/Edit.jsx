const React = require('react');

const EditFoodLog = ({ foodLog }) => {
    return (
        <div>
            <h1>Edit Food Log</h1>
            <form action={`/foodlogs/${foodLog._id}?_method=PUT`} method="POST">
                <label htmlFor="foodItem">Food Item:</label>
                <input type="text" id="foodItem" name="foodItem" defaultValue={foodLog.foodItem} placeholder="Food Item" /><br />
                
                <label htmlFor="quantity">Quantity:</label>
                <input type="number" id="quantity" name="quantity" defaultValue={foodLog.quantity} placeholder="Quantity" /><br />
                
                <label htmlFor="mealTime">Meal Time:</label>
                <input type="text" id="mealTime" name="mealTime" defaultValue={foodLog.mealTime} placeholder="Meal Time" /><br />
                
                <input type="submit" value="Update" />
            </form>
            <a href={`/foodlogs/${foodLog._id}`}>Cancel</a>
        </div>
    );
};

module.exports = EditFoodLog;
