const multer = require('multer');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        let folderName = "general";

        // Decide folder based on field name
        if (file.fieldname === "license_number_img") {
            folderName = "license_number_img";
        } else if (file.fieldname === "restaurant_license_img") {
            folderName = "restaurant_license_img";
        }

        return {
            folder: folderName,
            allowed_formats: ["jpg", "png", "jpeg", "webp"],
            public_id: Date.now() + "-" + file.originalname,
        };
    },
});


const upload = multer({ storage: storage });

module.exports = upload;