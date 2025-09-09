const express = require('express');
const upload = require('../../utils/uploadFile.js');

//importing model
const Agent_Application = require('../../models/delivery_agent/agent_profile.model.js');

const router = express.Router();

router.post("/", upload.single('license_number_img'), async (req, res) => {
    const { full_name, phone_number, email, vehicle_number, license_number, approval_status } = req.body;

    if (!full_name || !phone_number || !email || !vehicle_number || !license_number || !approval_status) {
        return res.status(400).json({ "msg": "fields are missing" });
    }
    if (!restaurant_license_number) {
        return res.status(400).json({ msg: "License number is required" });
    }

    if (!req.file) {
        return res.status(400).json({ "msg": "image not uploaded" });
    }
    const license_img_url = req.file.path;

    try {
        const newApplication = new Agent_Application({ full_name, phone_number, email, vehicle_number, license_img_url, license_number, approval_status });
        await newApplication.save();
        return res.status(201).json({ "msg": "application submitted", data: newApplication });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ "msg": "Server error", "error": err.message })
    }
});

module.exports = router;
