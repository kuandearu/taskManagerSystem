const express = require('express');
const cors = require('cors'); // Import cors
const app = express();

app.use(cors()); // Allow all origins
// Middleware để xử lý JSON
app.use(express.json());

// Import các router
const taskRouter = require('./routes/tasks');

app.use('/api/tasks', taskRouter); //http://localhost:3000/api/tasks

// Export ứng dụng để sử dụng trong main.js
module.exports = app;