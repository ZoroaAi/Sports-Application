require('dotenv').config();
const users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const authMiddleware = require('../middleware/authMiddleware');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if(!user){
        return res.status(400).json({ error : "Invalid Username or Password" });
    }
    try{
        if (await bcrypt.compare(password, user.hashedPassword)){
            // Generate JWT
            const token = jwt.sign(
                {
                    id: user.id, email: user.email
                },
                process.env.ACCESS_TOKEN_SECRET,
                {
                    expiresIn: '1h'
                }
            );
            console.log('Token:  ', token);

            console.log("Logged in")
            return res.status(200).json({
                message: 'Successfully Logged In!',
                token: token
            })
        } else {
            return res.status(400).json({
                message: 'Wrong Credentials'
            })
        }
    } catch (error){
        console.log("Error: ", error );
        return res.status(500).json({
            error: 'Internal server error'
        });
    }

};

exports.logout = async (req,res) => {

}

exports.resetPassword = async (req,res) => {
    
}