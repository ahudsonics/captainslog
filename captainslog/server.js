const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const jsx = require('jsx-view-engine');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/captains_log', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set up view engine
app.engine('jsx', jsx);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

// Use middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Use the main controllers for logs and food logs
const logsController = require('./controllers/logs');
const foodLogsController = require('./controllers/foodlogs');

app.use('/logs', logsController);
app.use('/foodlogs', foodLogsController);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

