const express = require('express');
const cors= require('cors');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const port = 3001;

// CORS for all routes
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to database
// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});