const express=require('express');


//importing restaurant model
const Restaurant=require('../../models/restaurant/restaurant_profile.model');


const router=express.Router();

router.post("/profile",async (req,res)=>{
    const {userID}= req.body;
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

module.exports=router;