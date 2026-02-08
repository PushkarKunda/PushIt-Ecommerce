const { imageUploadUtil } = require("../../helpers/cloudinary");



const handleImageUpload = async (req, res) => {
    try {
        console.log("File received:", req.file); // Debug log
        if (!req.file) {
            return res.json({
                success: false,
                message: "No file received"
            })
        }
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        const url = "data:" + req.file.mimetype + ";base64," + b64;
        const result = await imageUploadUtil(url);

        res.json({
            success: true,
            result
        })

    } catch (e) {
        console.error("Error in handleImageUpload:", e); // Detailed log    
        res.json({
            success: false,
            message: "Error occured",
            error: e.message // Send error back to client
        })
    }
}


const addProduct = async (req, res) => {
    try {
        const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;
        const newlyCreatedProduct = new Product({
            image, title, description, category, brand, price, salePrice, totalStock
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error Occured"
        })
    }
}
const fetchProduct = async (req, res) => {
    try {


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error Occured"
        })
    }
}
const editProduct = async (req, res) => {
    try {


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error Occured"
        })
    }
}
const deleteProduct = async (req, res) => {
    try {


    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error Occured"
        })
    }
}

module.exports = { handleImageUpload, addProduct, fetchProduct, editProduct, deleteProduct };