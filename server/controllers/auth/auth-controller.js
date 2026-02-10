const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;
    try{
        const hashedPwd = await bcrypt.hash(password,10);

        const checkUser = await User.findOne({email});
        
        if(checkUser){
            return res.json({success: false, message: "User already exists with the same email. So please try again."})
        }

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

const loginUser = async(req,res) => {

    const {email,password} = req.body;
    try{
        
        const checkUser = await User.findOne({email});
        if(!checkUser){
            return res.json({success: false, message: "User not found. Please register first."})
        }

        const checkPassword = await bcrypt.compare(password,checkUser.password);
        if(!checkPassword){
            return res.json({success: false, message: "Invalid password. Please try again."})
        }

        const token = jwt.sign({id:checkUser._id, role:checkUser.role, email: checkUser.email, userName: checkUser.userName}, 'CLIENT_SECRET_KEY', {expiresIn:"60m"});

        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
        }).json({
            success:true,
            message:"User logged in successfully",
            user: {
                email: checkUser.email,
                role: checkUser.role,
                id: checkUser.id,
                userName: checkUser.userName
            }
        })


        

    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const logoutUser = (req, res) => {
    res.clearCookie("token").json({
        success:true,
        message:"User logged out successfully"
    })
}

const authMiddleware = async(req,res,next) => {

    const token = req.cookies.token;
    if(!token){
            return res.status(401).json({success: false, message: "Unauthorized"})
        }
    try{
        
        const decodedToken = jwt.verify(token, 'CLIENT_SECRET_KEY');
        req.user = decodedToken;
        next();
    }catch(e){
        console.log(e);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    authMiddleware
};