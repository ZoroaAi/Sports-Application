
// Needs to bhe changed when implementing database
const users = require('../models/user');

// Registration Logic
exports.registerUser = async (req,res) => {
    const { 
        username, 
        email, 
        password1, 
        password2,
        location,
        sports
    } = req.body;

    try{
        const existingUser = users.find(user => user.username === username || user.email === email);

        if (existingUser){
            return res.status(400).json({
                error: 'Username already exists'
            });
        }
        if (password1 != password2){
            return res.status(400).json({
                error: 'Passwords do not match'
            });
        }
    
        // Needs validation for email formats and strong passwords


        // Hashing the passwords before saving them in DB
        // const hashedPassword ...

        const newUser = {
            username,
            email,
            location,
            sports,
            password1
        }
        users.push(newUser);

        res.status(201).json({
            message: 'User Created'
        });

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).join({
            error: 'Internal server error'
        });
    }
};

async function hashPassword(password){
    // Password hashing logic
}


// Get User Details
exports.getUserDetails = (req, res) => {

}

// Edit Profile
exports.editProfile = async (req,res) => {

}

// Delete User
exports.deleteUser = (req,res) => {

}