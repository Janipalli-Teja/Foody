const express = require('express');

const router = express.Router();

// importing utils
const upload = require("../../utils/uploadFile.js");
//importing model
const Restaurant_Application = require("../../models/restaurant/restaurant_profile.model.js");

router.post("/", upload.single('restaurant_license_img'), async (req, res) => {
    if (!req.file) {
        return res.status(500).json({ "msg": "unable to upload image in server" });
    }
    const { name, address, phone_number, email, restaurant_license_number, opens_at, closes_at ,approval_status} = req.body;

    if (!name || !address || !phone_number || !email || !restaurant_license_number || !approval_status|| !opens_at || !closes_at) {
        return res.status(400).json({ "msg": "fiels are missing" });
    }
    console.log(req.file);


    const license_img_url = req.file.path;

    try {
        const newApplication = await new Restaurant_Application({ name, address, phone_number, email, restaurant_license_number, license_img_url, opens_at, closes_at ,approval_status });
        const savedApplication = await newApplication.save();
        return res.status(201).json({ "msg": "application created", application: savedApplication });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Server error" });
    }
})

module.exports = router;
