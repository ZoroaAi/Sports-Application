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
        password2,
        location,
        sports
    } = req.body;

    if (users.find(user => user.username === username)){
        return res.status(400).json({error: 'Username already exists'});
    }
    if (password1 != password2){
        return res.status(400).json({error: 'Passwords do not match'});
    }

    users.push({
        username,
        email,
        location,
        sports,
        password1
    });
    res.send(201).json({message: 'User Created'});
});


// Login endpoint
app.post('/login', (req,res) => {
    const { email, password } = req.body;

    const user = user.find(user => user.email == email && user.password1 == password);

    if(!user){
        return res.status(400).json({ error : "Invalid Username or Password" });
    }

    res.status(200).json({message: 'Logged in'});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});