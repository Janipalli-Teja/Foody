const express=require('express');

// importing utils
const upload = require("../../utils/uploadFile.js");

//importing restaurant model
const Restaurant=require('../../models/restaurant/restaurant_profile.model');


const router=express.Router();

router.post("/profile",async (req,res)=>{
    const userID= req.user._id;
    console.log("/profile ---------->",userID);
    try{

        const profile=await Restaurant.findOne({"user_id":userID}).populate("user_id");
        if(!profile){
            return res.status(404).json({"msg":"restaurant not found"});
        }
        return res.status(200).json(profile);
    }catch(err){
        console.log(err);
        return res.status(400).json({"msg":"error while getting restaurant profile"});
    }
});

router.post("/register", upload.single('restaurant_license_img'), async (req, res) => {
    if (!req.file) {
        res.status(500).json({ "msg": "unable to upload image in server" });
    }
    const { restaurant_name, address, phone_number, email, restaurant_license_number, opens_at, closes_at } = req.body;

    if (!restaurant_name || !address || !phone_number || !email || !restaurant_license_number || !opens_at || !closes_at) {
        return res.status(400).json({ "msg": "fiels are missing" });
    }
    console.log(req.file);


    const license_img_url = req.file.path;

    try {
        const newApplication = await new Restaurant({ restaurant_name, address, phone_number, email, restaurant_license_number, license_img_url, opens_at, closes_at });
        const savedApplication = await newApplication.save();
        return res.status(201).json({ "msg": "application created", application: savedApplication });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ msg: "Server error" });
    }
})

module.exports=router;