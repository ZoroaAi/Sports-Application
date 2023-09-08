const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const port = 3001;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to database
// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)

// Login endpoint
app.post('/login', (req,res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email == email && user.password1 == password);

    if(!user){
        return res.status(400).json({ error : "Invalid Username or Password" });
    }

    res.status(200).json({message: 'Logged in'});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});