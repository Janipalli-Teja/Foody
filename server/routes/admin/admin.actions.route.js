const express=require('express');

const router=express.Router();

// importing models
const Category =require("../../models/food/category.model.js");
const Restaurant=require("../../models/restaurant/restaurant_profile.model.js");

router.post("/admin/add-category",async (req,res)=>{
    try{
        const { name , description , img_url ,availability } = req.body;
        if(!name || !description || !img_url || !availability){
            res.status(400).json({msg:"all fields are required"});
        }
        const existingCategory=await Category.findOne({name})
        if(!existingCategory){
            const category=new Category({name , description , img_url ,availability});
            await category.save();
            return res.status(201).json({msg:"Category created"});
        }
        return res.status(400).json({msg:"category already exists"});
    }catch(err){
        console.log(err);
        return res.status(500).json({msg:"unable to created category"});
    }
});

router.post("/add-restaurant",async (req,res)=>{
    try{
        const {name,address,license_number,logo_url,opens_at,closes_at,user_id} = req.body;

        if(!name  ||!address  ||!license_number  ||!logo_url  ||!opens_at  ||!closes_at  ||!user_id){
            return res.status(400).json({msg:"field values are missing"});
    }
    const existingRestaurant=await Restaurant.findOne({license_number})
    if(!existingRestaurant){
        const restaurant=new Restaurant({name,address,license_number,logo_url,opens_at,closes_at,user_id});
        await restaurant.save();
        return res.status(201).json({msg:"restaurant created"});
    }
    return res.status(400).json({msg:"restaurant already exists"});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"unable to create restaurant"});
    }
});


module.exports=router;