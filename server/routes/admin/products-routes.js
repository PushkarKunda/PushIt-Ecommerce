const express = require('express');

const { handleImageUpload, addProduct, fetchProduct, editProduct, deleteProduct} = require("../../controllers/admin/products-controller");

const { upload } = require('../../helpers/cloudinary');

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post('/add', addProduct);
router.put('/edit:id', editProduct);
router.delete('/delete', deleteProduct);
router.get('/get', fetchProduct);

module.exports = router;