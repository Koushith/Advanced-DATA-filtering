require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const express = require('express');
connectDB();
const app = express();

// // Middleware
app.use(express.json());

// routes

app.use('/api/v1/bootcamps', require('./routes/bootcampRoutes'));

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
