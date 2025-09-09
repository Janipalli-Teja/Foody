const mongoose=require('mongoose');
const agentSchema=new mongoose.Schema({
    full_name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    vehicle_number:{
        type:String,
        required:true,
    },
    license_number:{
        type:String,
        required:true,
    },
    license_img_url: {
        type: String,
        required: true,
    },
    availability:{
        type:String,
        enum:["available","unavailable",],
        required: true,
        default: "unavailable"
    },
    approval_status: {
        type: String,
        enum: ["pending", "approved", "rejected", "blocked"],
        default: "pending"
    },
},{timestamps:true});

const Agent= mongoose.model("Agent",agentSchema);

module.exports=Agent;