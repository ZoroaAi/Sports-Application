require('dotenv').config();
const users = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Array to hold refresh tokens, need database later
let refreshTokens = []; 

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if(!user){
        return res.status(400).json({ error : "Invalid Username or Password" });
    }
    try{
        if (await bcrypt.compare(password, user.hashedPassword)){
            // Generate JWT
            const accessToken = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
            refreshTokens.push(refreshToken); // Push to Database
            console.log('Token:  ', accessToken);
            console.log('Token:  ', refreshToken);

            console.log("Logged in")
            return res.status(200).json({
                message: 'Successfully Logged In!',
                accessToken: accessToken,
                refreshToken: refreshToken
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

function generateAccessToken(user){
    return jwt.sign(
        {
            id: user.id, email: user.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1m'
        }
    );
}

exports.refreshAccessToken = (req,res) => {
    const { refreshToken } = req.body;

    // Check if refresh token is valid and exists in storage
    if(!refreshToken){
        return res.status(400).json({
            message:"Refresh token is not required!"
        });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err,user) => {
        if (err){
            return res.status(403).json({
                message: 'Refresh token is not valid!'
            });
        }

        // Create new access token
        const newAccessToken = jwt.sign(
            { id:user.id, email: user.email},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:'15m'}
        );

        return res.status(200).json({ accessToken: newAccessToken});
    });
}

exports.logout = async (req,res) => {
    const { token } = req.body;

    // Validate Token
    if(!isValidToken(token)){
        return res.status(400).json({
            message : "Invalid or expired token"
        });
    }

    refreshTokens = refreshTokens.filter(t => t != token);
    res.status(204).json({
        message : "Logout successful"
    });
}

function isValidToken(token){
    try{
        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
        return true;
    } catch (err){
        return false;
    }
}

exports.resetPassword = async (req,res) => {
    
}