const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

// Middleware to parse JSON data
app.use(bodyPasrser.json());

// For testing gonna use 
const users = [];

// Register endpoint
app.post('/register', (req, res) => {
    const { 
        username, 
        email, 
        password1, 
        passwor2,
        location,
        sports
    } = req.body;

    if (users.find(user => user.username === username)){
        return res.status(400).json({error: 'Username already exists'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});