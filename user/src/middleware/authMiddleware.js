require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]

    if (token){
        return res.status(401).json({
            message:"You are not authorized to access this route."
        });
    };
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({
                message:"You have token but are not authorized to access this route."
            });
        };
        req.user = user
        next();
    })
}

exports.refreshToken = async (req,res) => {
    
}