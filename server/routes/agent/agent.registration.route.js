const express=require('express');
const upload=require('../../utils/uploadFile.js');

//importing model
const Agent_Application=require('../../models/delivery_agent/agent_recruitment_approval.model.js');

const router=express.Router();

router.post("/",upload.single('img'),async (req,res)=>{
    const handled_admin_id='662e5c03bbf5bc7e4c123abc';
    const{fullname,phone_number,email,vehicle_number,license_number,approval_status}=req.body;
    
    if(!fullname || !phone_number || !email||!vehicle_number|| !license_number|| !approval_status){
        res.status(400).json({"msg":"fields are missing"});
    }
    if(!req.file){
        res.status(400).json({"msg":"image not uploaded"});
    }
    const license_img_url=req.file.filename;

    try{
        const newApplication= new Agent_Application({fullname,phone_number,email,vehicle_number,license_img_url,license_number,handled_admin_id,approval_status});
        await newApplication.save();
        res.status(201).json({"msg":"application submitted",data:newApplication});
    }catch(err){
        console.log(err);
        res.status(500).json({"msg":"Server error","error":err.message})
    }
});

module.exports=router;
