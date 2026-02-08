const { imageUploadUtil } = require("../../helpers/cloudinary");
const Product = require("../../models/Product");
const { find } = require("../../models/Product");



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
        
        console.log(image, "image");

        const newlyCreatedProduct = new Product({
            image: image?.url || image?.secure_url || image,
            title, description, category, brand, price, salePrice, totalStock
        })

        await newlyCreatedProduct.save();
        res.status(201).json({
            success: true,
            data: newlyCreatedProduct
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
        const listOfProducts = await Product.find({});
        res.status(200).json({
            success: true,
            data: listOfProducts
        })

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
        const {id} = req.params;
        const { image, title, description, category, brand, price, salePrice, totalStock } = req.body;
        const findProduct = await Product.findById(id);

        if(!findProduct) return res.status(404).json({
            success: false,
            message: "Product Not Found"
        });
        findProduct.title = title || findProduct.title;
        findProduct.description = description || findProduct.description;
        findProduct.category = category || findProduct.category;
        findProduct.brand = brand || findProduct.brand;
        findProduct.price = price === "" ? 0 : price || findProduct.price;
        findProduct.salePrice = salePrice === "" ? 0 : salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;
        findProduct.image = image?.url || image?.secure_url || image || findProduct.image;

        await findProduct.save();
        res.status(200).json({
            success: true,
            data: findProduct
        })

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
        const{id} = req.params;
        const product = await Product.findByIdAndUpdate(id);

        if(!product) return res.status(404).json({
            success: false,
            message: "Product Not Found"
        });

        res.status(200).json({
            success: true,
            message: "Product deleted Successfully"
        })

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error Occured"
        })
    }
}

module.exports = { handleImageUpload, addProduct, fetchProduct, editProduct, deleteProduct };