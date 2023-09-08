
const users = require('../models/user');

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = users.find(user => user.email == email && user.password1 == password);

        if(!user){
            return res.status(400).json({ error : "Invalid Username or Password" });
        }
        res.status(200).json({
            message: 'Logged in'
        });
    } catch (error){
        console.log("Error: ", err );
        res.status(500).join({
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