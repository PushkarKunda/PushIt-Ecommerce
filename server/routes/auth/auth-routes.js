const express = require('express');
const { registerUser, loginUser , logoutUser, authMiddleware} = require('../../controllers/auth/auth-controller');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/auth-middleware', authMiddleware, (req, res) => {
    const user = req.user;
    res.status(200).json({
        success:true,
        message:"User authenticated successfully",
        user
    })
});


module.exports = router;
