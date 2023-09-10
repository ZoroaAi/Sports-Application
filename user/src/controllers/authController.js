
const users = require('../models/user');
const bcrypt = require('bcrypt');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email == email);

    if(!user){
        return res.status(400).json({ error : "Invalid Username or Password" });
    }
    try{
        if (await bcrypt.compare(password, user.hashedPassword)){
            res.status(200).json({
                message: 'Successfully Logged In!'
            })
        } else {
            res.status(400).json({
                message: 'Wrong Credentials'
            })
        }
    } catch (error){
        console.log("Error: ", error );
        res.status(500).json({
            error: 'Internal server error'
        });
    }

};

exports.logout = async (req,res) => {

}

exports.resetPassword = async (req,res) => {
    
}

exports.refreshToken = async (req,res) => {
    
}