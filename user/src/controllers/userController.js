
// Needs to bhe changed when implementing database
const users = require('../models/user');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

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


        const userId = uuidv4();

        // Hashing the passwords before saving them in DB
        const hashedPassword = await hashPassword(req,res);

        const newUser = {
            id : userId,
            username,
            email,
            location,
            sports,
            hashedPassword
        }
        users.push(newUser);

        res.status(201).json({
            message: 'User Created',
            newUser
        });

    } catch (error) {
        console.error("Error: ",error);
        res.status(500).join({
            error: 'Internal server error'
        });
    }
};

async function hashPassword(req,res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password1, 10);
        return hashedPassword;
    } catch(error) {
        console.log("Error:", error);
        throw error;
    }
}


// Get User Details
exports.getUserDetails = (req, res) => {
    const userId = req.user.id;
    const user = users.find(user => user.id === userId);

    if(!user){
        return res.status(404).json({
            message: 'User not Found'
        });
    }

    const userDetails = {
        username: user.username,
        email: user.email,
        location: user.location,
        sports: user.sports
    }

    const {password1, ...userDeatils} = user;
    return res.status(200).json({
        user: userDetails
    });
}

// Edit Profile
exports.editProfile = async (req,res) => {

}

// Delete User
exports.deleteUser = (req,res) => {

}