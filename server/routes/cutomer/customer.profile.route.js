const express = require("express");

const Customer = require("../../models/customer/customer_profile.model.js");
const authenticate = require("../../middlewares/auth.middleware.js");

const CustomerProfile = express.Router();

CustomerProfile.get("/my-account", authenticate, async (req, res) => {
    try {
        const userId = req.user.id;
        const profile = await Customer.findOne({ "user_id": userId }).populate("user_id");
        if (!profile) {
            return res.json({ "msg": "no user address" });
        }
        const address = profile.address;
        return res.json({ address: profile.address });
    }
    catch (err) {
        console.log(err);
        return res.json({ "msg": "server side error" })
    }
})

CustomerProfile.post("/update-account", authenticate, async (req, res) => {
    try {
        const { address } = req.body;
        const userId = req.user.id;

        const newProfile = await Customer.findOneAndUpdate(
            { user_id: userId },
            { address },
            { new: true, upsert: true }
        );
        await newProfile.save();

        res.status(201).json({ msg: "Address updated successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});


module.exports = CustomerProfile;