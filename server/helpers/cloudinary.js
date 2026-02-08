const cloudinary = require('cloudinary').v2;

const multer = require("multer");

cloudinary.config({
    cloud_name: "dnahyuqxs",
    api_key: "921667883752761",
    api_secret: "tdLL9PPqS6bs_VzU5TVt1-0HG6Q"

});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
        resource_type: 'auto'
    })

    return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };