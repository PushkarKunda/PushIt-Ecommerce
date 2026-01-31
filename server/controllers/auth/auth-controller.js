const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try{
        const hashedPwd = await bcrypt.hash(password,10);
        const newUser = await User.create({
            userName,
            email,
            password:hashedPwd
        })

        await newUser.save();

        res.status(200).json({
            success:true,
            message:"User registered successfully"
        })

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
};

const login = async(req,res) => {

    try{

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports = {
    registerUser
};