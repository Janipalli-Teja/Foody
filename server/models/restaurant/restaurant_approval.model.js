const mongoose=require('mongoose');
const restaurantApplicationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
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
    restaurant_license_number:{
        type:String,
        required:true,
    },
    license_img_url:{
        type:String,
        required:true,
    },
    opens_at:{
        type:String,
        required:true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    },
    closes_at:{
        type:String,
        required:true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
    },
    approval_status:{
        type:String,
        enum:["pending", "approved", "rejected"],
        default:"pending"   
    },
    handled_admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps:true});


const Restaurant_Application= mongoose.model("Restaurant_Application",restaurantApplicationSchema);

module.exports=Restaurant_Application;