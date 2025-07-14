const express = require("express");
const client = require('../utils/twilioClient.js')
const generateToken=require("../utils/genToken.js")

const router = express.Router();

// model import
const User = require("../models/user.model.js")
const authPhn = process.env.TWILIO_PHN;

// storing otps here for test 

const otpStore = new Map();

router.post("/send-otp", async (req, res) => {
    let { phone_number } = req.body;
    if (!phone_number) return res.status(400).json({ msg: "Phone number required" });

    phone_number = phone_number.replace(/\s+/g, "").trim();
    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore.set(phone_number, otp);
    try {
        await client.messages.create({
            body: `Your Foody verification code is ${otp}`,
            from: authPhn,
            to: phone_number
        })
        res.clearCookie('token');
        res.status(200).json({ msg: "otp sent successfully","otp":otp })
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Failed to send OTP" });
    }
})

router.post("/verify-otp", async (req, res) => {
    const { phone_number, otp, name } = req.body;
    if (!phone_number || !otp) return res.status(400).json({ msg: "Phone number and OTP required" });
    const storedOtp = otpStore.get(phone_number);
    if (storedOtp != otp) return res.status(400).json({ msg: "Invalid or expired OTP" });
    otpStore.delete(phone_number);

    let user = await User.findOne({ phone_number });
    // if not existed the sign up
    if (!user) {
        if (!name) return res.status(400).json({ msg: "sign up with name" });

        user = new User({
            name,
            phone_number,
        });

        await user.save();
    }
    const token = generateToken(user);

    res
        .cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
        })
        .status(200)
        .json({
            msg: "Authenticated",
            user: {
                id: user._id,
                name: user.name,
                phone_number: user.phone_number,
                role: user.role,
            },
        });
})

module.exports = router;