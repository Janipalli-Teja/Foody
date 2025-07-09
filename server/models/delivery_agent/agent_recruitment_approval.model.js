const mongoose=require('mongoose');
const agentApplicationSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
    },
    phone_number:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    vehicle_number:{
        type:String,
        required:true
    },
    license_number:{
        type:String,
        required:true
    },
    license_img_url:{
        type:String,
        required:true,
    },
    approval_status:{
        type:String,
        enum:["pending","approved","rejected"]
    },
    handled_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    remarks:{
        type:String,
        default:""
    }
},{timestamps:true});

const Agent_Application = mongoose.model("Agent_Application",agentApplicationSchema);

module.exports=Agent_Application;